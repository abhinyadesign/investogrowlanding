import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, gender, interest, budget } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !gender || !interest || !budget) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const phoneRegex = /^[+]?[\d\s\-()]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number.' },
        { status: 400 }
      );
    }

    await dbConnect();

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      gender,
      interest,
      budget,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Our team will contact you shortly.',
        id: contact._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);

    // Mongoose validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return NextResponse.json(
        { success: false, message: messages.join(', ') },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
