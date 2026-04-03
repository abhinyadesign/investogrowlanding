// data/content.js
// Central content store – swap this with an API call later without touching any component

export const siteConfig = {
  name: 'Investo Grow',
  projectName: 'GYGY Mentis',
  tagline: 'BUILT FOR GENERATIONS',
  reraNo: 'UPRERAPRJ251909',
  phone: '+91 (0) 999 000 1234',
  whatsapp: 'https://wa.me/919990001234?text=I%20am%20interested%20in%20GYGY%20Mentis%20investment%20plans.',
  email: 'info@investogrow.com',
  address: 'Sector-140, Noida-Greater Noida Expressway, Uttar Pradesh 201305',
  disclaimer:
    '© Copyright 2026 Investo Grow Consultancy Pvt. Ltd. All Rights Reserved.',
  cin: 'CIN No Issue Date - 3rd Feb 2026 | GST No Issue Date - 12th March 2026'
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#projects' },
  { label: 'About us', href: '#about' },
];

export const cmsLinks = [
  { label: 'Agents', href: '#agents' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact us', href: '#contact', isModal: true },
];

export const utilityLinks = [
  { label: '404 Error', href: '#' },
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Style Guide', href: '#' },
];

export const grandeur = {
  sectionTitle: 'Experience the Grandeur',
  heading: 'Where Luxury Meets Innovation',
  subheading: 'GYGY Mentis is not just a workspace; it is a masterclass in modern architecture and premium lifestyle. Every corner is meticulously crafted to inspire, engage, and elevate your professional journey.',
  features: [
    {
      title: 'Architectural Brilliance',
      description: 'A striking glass facade designed with low-E coating to ensure maximum natural daylight while maintaining optimal thermal efficiency.',
    },
    {
      title: 'The Great Atrium',
      description: 'A double-height central atrium that welcomes visitors with premium marble, ambient lighting, and high-end luxury retail stores.',
    },
    {
      title: 'Opulent Exteriors',
      description: 'Beautifully landscaped plazas and water features that create an oasis of calm amidst the bustling Expressway.',
    }
  ],
  images: [
    { src: '/grandeur-ext.png', alt: 'Exterior of GYGY Mentis at dusk showing premium facade' },
    { src: '/grandeur-int.png', alt: 'Interior atrium and retail luxury space at GYGY Mentis' }
  ],
  cta: 'Download Detailed Layouts'
};

export const masterPlan = {
  sectionTitle: 'Master Plan',
  heading: 'Thoughtfully Designed Blueprint',
  subheading: 'A 6-acre mixed-use development seamlessly integrating premium office suites with high street retail and fine dining options across multiple strategic zones.',
  image: '/master-plan.png',
  legends: [
    { color: 'bg-amber-500', label: 'Premium Office Towers' },
    { color: 'bg-emerald-500', label: 'High Street Retail Zone' },
    { color: 'bg-blue-500', label: 'Culinary & Dining (Oculus)' },
    { color: 'bg-violet-500', label: 'Central Plaza & Landscaping' },
  ],
  cta: 'Request Floor Plans'
};

export const hero = {
  eyebrow: 'Investment Starts At ₹50 Lakh*',
  heading: 'Built for Generations',
  subheading: 'The Future of Commercial Real Estate in Sector 140, Noida.',
  highlights: [
    'Get Monthly ₹50,000-/',
    'Upto 25% Capital Appreciation in 1 year',
    'Super Structure is Ready',
    'Near Possession Date',
  ],
  cta: 'Contact Us Now',
  ctaSecondary: 'Download Brochure',
  reraLabel: `Rera No. : ${siteConfig.reraNo}`,
  location: 'Sector 140, Noida',
  image: '/hero-building.png',
};

export const overview = {
  sectionTitle: 'Overview',
  heading: 'GYGY Mentis – Premium Commercial Hub',
  body: `GYGY Mentis is one of the finest commercial properties in Noida Sector 140, sprawling across 6 acres of prime real estate. The project offers office spaces, retail shops, fine-dining restaurants, a sky lounge, café, gym, swimming pool, and much more.

GYGY Group is a well-reputed and trustworthy real estate developer renowned for delivering projects on time. GYGY Mentis is seamlessly connected to the Noida-Greater Noida Expressway, Delhi, and Greater Noida — making it an ideal destination for businesses and investors alike.`,
  stats: [
    { value: '6 Acres', label: 'Total Land Area' },
    { value: '12%', label: 'Assured Rental Return' },
    { value: '25%', label: 'Capital Appreciation' },
    { value: '₹50L+', label: 'Investment Starting From' },
  ],
  bullets: [
    'Direct Connectivity to Metro Station – Sector 142, Noida',
    'Direct Access to DMIC & FNG Expressway',
    '30 Min to Noida International Airport',
    '40 Min to IGI International Airport',
    '10 Lakh+ families living in close proximity',
    'Investment starting from ₹50 Lakh onwards',
  ],
  cta: 'Get Full Details',
};

export const usp = {
  sectionTitle: 'USP',
  heading: 'Why GYGY Mentis Stands Apart',
  features: [
    {
      icon: 'Wind',
      title: 'Advanced HVAC',
      description:
        '3-Tier Air Treatment technology with CO₂ sensors in all office spaces. 6 Air Handling Units (AHU) per floor for pristine air quality.',
    },
    {
      icon: 'Maximize2',
      title: 'Facade & Glass',
      description:
        'Low-E High Performance Glass with low reflectance. Double Glazed Units (DGU) for thermal comfort and noise reduction.',
    },
    {
      icon: 'Wifi',
      title: 'Smart Infrastructure',
      description:
        'Fiber-to-the-Floor (FTTF) ready. 13 High-speed elevators per floor. EV Charging stations in basement.',
    },
    {
      icon: 'Car',
      title: 'Valet Parking',
      description:
        'Dedicated valet services for visitors and retail shoppers ensuring a hassle-free arrival experience.',
    },
    {
      icon: 'Clock',
      title: '24/7 Access',
      description:
        'Designed for round-the-clock operations — perfect for IT companies, MNCs, and global businesses.',
    },
    {
      icon: 'ShieldCheck',
      title: 'High Security',
      description:
        'Advanced 3-tier security system with CCTV surveillance, boom barriers, and manned security posts.',
    },
    {
      icon: 'Utensils',
      title: 'Oculus Restaurant',
      description:
        'First-of-its-kind Oculus Concept Restaurant & Meeting Spot on the Noida Expressway.',
    },
    {
      icon: 'Layers',
      title: '1st Podium on Expressway',
      description:
        'Iconic podium-level development — the first of its kind on the Noida Expressway.',
    },
  ],
  cta: 'Schedule a Site Visit',
};

export const projects = {
  sectionTitle: 'Price List',
  heading: 'Explore Spaces & Inventory',
  subheading: 'Office, Retail & Restaurant Spaces starting at ₹50 Lakhs*',
  listings: [
    {
      type: 'Office Space',
      size: '500 – 2000 sq ft',
      price: '₹50 Lakh* Onwards',
      highlights: ['Column-free spaces', 'High-speed lifts', 'Premium finishes'],
    },
    {
      type: 'Retail Shop',
      size: '250 – 800 sq ft',
      price: '₹60 Lakh* Onwards',
      highlights: ['High footfall zone', 'Dedicated parking', 'Ground floor visibility'],
    },
    {
      type: 'Restaurant Space',
      size: '1000 – 5000 sq ft',
      price: '₹1.2 Cr* Onwards',
      highlights: ['Oculus concept design', 'Dedicated exhaust', 'Multipurpose zones'],
    },
    {
      type: 'Sky Lounge',
      size: '2000 – 4000 sq ft',
      price: 'On Request',
      highlights: ['Panoramic Expressway views', 'Premium interiors', 'Exclusive access'],
    },
  ],
  cta: 'Get Price List',
};

export const amenities = {
  sectionTitle: 'Amenities',
  heading: 'World-Class Amenities',
  subheading: 'Every amenity crafted to elevate your work and leisure experience.',
  items: [
    { icon: 'Dumbbell', label: 'Workout & Fitness Gym' },
    { icon: 'ShoppingBag', label: 'Premium Retail Space' },
    { icon: 'Gamepad2', label: 'Entertainment Zone' },
    { icon: 'Baby', label: 'Kids Zone' },
    { icon: 'Coffee', label: 'Café & Coffee Lounge' },
    { icon: 'Utensils', label: 'Restaurant & Dining' },
    { icon: 'Users', label: 'Client Meeting Spaces' },
    { icon: 'Waves', label: 'Swimming Pool' },
    { icon: 'ParkingSquare', label: 'Multi-Level Parking' },
    { icon: 'Landmark', label: 'Banking & ATM Zone' },
    { icon: 'Armchair', label: 'Resting & Sitting Alcove' },
    { icon: 'Sun', label: 'Rooftop Terrace' },
  ],
  cta: 'View All Amenities',
};

export const location = {
  sectionTitle: 'Location',
  heading: 'The Golden Triangle – Sector 140',
  subheading:
    'Situated at the nexus of the Noida–Greater Noida Expressway and the FNG Expressway, providing seamless access to Delhi and the upcoming Jewar Airport.',
  advantages: [
    { icon: 'Train', label: '1 km to Metro Station', sub: 'Sector 142, Noida' },
    { icon: 'Plane', label: '30 Min to Noida Airport', sub: 'Upcoming Jewar Airport' },
    { icon: 'Plane', label: '40 Min to IGI Airport', sub: 'Delhi International Airport' },
    { icon: 'Building2', label: 'IT Hub Connectivity', sub: 'DMIC & FNG Expressway' },
    { icon: 'MapPin', label: 'Noida Expressway', sub: 'Sector 140 – Prime Address' },
    { icon: 'Users', label: '10 Lakh+ Families Nearby', sub: 'High catchment area' },
  ],
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.399!3d28.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzA0LjciTiA3N8KwMjMnNTcuNCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
  cta: 'Get Directions',
};

export const whyChooseUs = {
  sectionTitle: 'Why Us',
  heading: 'Why Choose Investo Grow?',
  subheading:
    'As the authorised sales partner for GYGY Mentis, we provide exclusive access to the best inventory with complete transparency.',
  reasons: [
    {
      icon: 'BadgeCheck',
      title: 'Best Prices Guaranteed',
      description: 'Exclusive partner rates and flexible payment plans tailored to your needs.',
    },
    {
      icon: 'Star',
      title: 'Priority Allocation',
      description: 'First access to premium atrium units and limited high-value inventory.',
    },
    {
      icon: 'Handshake',
      title: 'Zero Brokerage',
      description: 'Direct dealing with complete transparency — no hidden costs, ever.',
    },
    {
      icon: 'HeadphonesIcon',
      title: 'End-to-End Support',
      description: 'From documentation and legal due diligence to possession handover.',
    },
  ],
  cta: 'Talk to an Expert',
};

export const testimonials = {
  sectionTitle: 'Testimonials',
  heading: 'What Our Investors Say',
  items: [
    {
      name: 'Rajesh Sharma',
      role: 'Business Owner, Delhi',
      quote:
        'InvestoGrow helped me identify the perfect office space at GYGY Mentis. The process was smooth, transparent, and the returns have been excellent.',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      role: 'NRI Investor, Dubai',
      quote:
        'Being an NRI, I was skeptical about investing remotely. The team at InvestoGrow guided me through every step and I am thrilled with my retail investment.',
      rating: 5,
    },
    {
      name: 'Amit Agarwal',
      role: 'Portfolio Investor, Noida',
      quote:
        'The assured rental returns are exactly as promised. GYGY Mentis and InvestoGrow together make an unbeatable combination for commercial investment.',
      rating: 5,
    },
  ],
  cta: 'Start Your Investment Journey',
};
