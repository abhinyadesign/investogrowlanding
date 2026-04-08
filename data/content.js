import { 
  Building2, ShoppingBag, Utensils, Cloud, 
  Building, CalendarCheck, Plane, Rocket, 
  Train, PlaneTakeoff, Factory, Home, Navigation,
  CheckCircle, PhoneCall
} from 'lucide-react';

export const siteConfig = {
  name: 'Investo Grow',
  legalName: 'Investo Grow Consultancy Pvt. Ltd.',
  projectName: 'GYGY Mentis',
  reraNo: 'UPRERAPRJ251909',
  phone: '+91 8595922033',
  whatsapp: 'https://wa.me/918595922033?text=Hi%20Nitin,%20I%20want%20to%20know%20more%20about%20GYGY%20Mentis%20investment.',
  email: 'director@investogrow.in', 
  website: 'https://investogrow.in',
  address: 'Sector 140, Noida Expressway',
  disclaimer: '© Copyright 2026 Investo Grow. All Rights Reserved. Authorised Channel Partner.',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Project', href: '#project' },
  { label: 'Location', href: '#location' },
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
];

export const hero = {
  eyebrow: '⚡ Limited Investor Window — Jewar Airport Effect',
  headingPart1: 'This Deal Won\'t Wait',
  headingPart2: 'And Neither Should You.',
  subheading: '**GYGY Mentis, Sector 140, Noida Expressway** — earn **₹50,000 every month guaranteed** with just **₹50 Lakhs invested**. Serious investors only. Prices revising soon.',
  stats: [
    { value: '12%', label: 'Assured Return' },
    { value: '₹50K', label: 'Monthly Income' },
    { value: '25%', label: 'Capital Growth' },
    { value: '50:50', label: 'Payment Plan' }
  ],
  ctaPrimary: 'Reserve Unit',
  ctaSecondary: 'ROI Calculator →',
  urgencyWarning: '**Price revision expected soon.** Current rates locked only for registered inquiries.',
};

export const pain = {
  tag: 'The Problem With Your Money Right Now',
  heading: 'Your savings are losing value while you wait for the "right time."',
  items: [
    { num: '01', text: '**FD gives you 6–7%.** After tax and inflation, you\'re barely breaking even. Your money is parked, not working.' },
    { num: '02', text: '**Residential real estate** demands crores upfront with zero guaranteed income. Risk is high, returns are uncertain.' },
    { num: '03', text: '**Stock market volatility** means you check your portfolio every morning hoping it hasn\'t crashed overnight.' },
    { num: '04', text: '**Good commercial deals** near infrastructure projects get sold privately — by the time they\'re public, the best price is gone.' }
  ]
};

export const opportunity = {
  label: 'The Smarter Alternative',
  heading: 'Commercial Real Estate at Sector 140 gives you guaranteed income + capital growth — simultaneously.',
  desc: 'GYGY Mentis is not a speculative bet. It\'s a **RERA-registered, super structure ready** commercial project with assured rental returns written into your agreement. Your income starts. Your asset appreciates. Both. At once.'
};

export const calculatorConfig = {
  tag: 'Live Returns Calculator',
  heading: 'See exactly what your money earns.',
  assumptions: 'Based on 12% assured annual rental return + 25% capital appreciation in Year 1. Returns are as per GYGY Group\'s offering. RERA No: UPRERAPRJ251909.'
};

export const projectDetails = {
  tag: 'The Project',
  heading: 'GYGY Mentis — Everything you need in one commercial address.',
  highlights: [
    '**₹50 Lakh minimum entry** — accessible commercial real estate',
    '**12% Assured Annual Return** — guaranteed in agreement',
    '**₹50,000/month passive income** — on minimum investment',
    '**25% Capital Appreciation** — in first year alone',
    '**50:50 Payment Plan** — 50% now, 50% on possession',
    '**Super Structure Ready** — near possession date',
    '**RERA Registered** — UPRERAPRJ251909',
  ],
  overview: [
    '**5 Acres** of prime Noida Expressway land',
    '**Premium Office Towers** — column-free, high-speed lifts',
    '**High Street Retail** — ground floor, maximum footfall',
    '**Oculus Concept Restaurant** — unique dining destination',
    '**Sky Lounge & Bar** — panoramic Expressway views',
    '**Café, Gym, Swimming Pool** — full lifestyle amenities',
    '**1st Podium Project** on Noida Expressway',
  ],
  unitsHeading: 'Available Unit Types',
  unitsSub: 'All units are RERA-registered. Starting prices as per current inventory.',
  units: [
    { icon: Building2, type: 'Office Space', price: '₹50L+', size: '500 – 2,000 sq ft', badge: 'Highest Demand' },
    { icon: ShoppingBag, type: 'Retail Shop', price: '₹60L+', size: '250 – 800 sq ft', badge: 'High Footfall' },
    { icon: Utensils, type: 'Restaurant Space', price: '₹1.2Cr+', size: '1,000 – 5,000 sq ft', badge: 'Oculus Concept' },
    { icon: Cloud, type: 'Sky Lounge', price: 'On Request', size: '2,000 – 4,000 sq ft', badge: 'Exclusive' },
  ]
};

export const airportUrgency = {
  tag: 'The Jewar Airport Effect',
  heading: 'Every major airport in India multiplied nearby property values.',
  desc: 'IGI Airport pushed Dwarka Expressway values **3x in 5 years.** Jewar International Airport — Asia\'s largest upcoming airport — is **just 30 minutes from Sector 140.**',
  timeline: [
    { icon: Building, time: 'Now', phase: 'Super Structure Ready', tag: 'Best Price Window', active: true },
    { icon: CalendarCheck, time: 'Soon', phase: 'Possession Nears', tag: 'Price Revision', active: true },
    { icon: Plane, time: 'Inauguration', phase: 'Jewar Airport Opens', tag: 'Value Surge', active: false },
    { icon: Rocket, time: 'Post-Airport', phase: 'Out of Reach', tag: 'Missed Window', active: false },
  ],
  warning: '**The window to invest at current prices is closing.** Once airport inauguration is announced, developers across Sector 140 will revise pricing. Investors who act before that announcement lock in the **pre-airport price** — and ride the full wave of appreciation.'
};

export const location = {
  tag: 'Connectivity Advantage',
  heading: 'One address. Every destination.',
  points: [
    { icon: Train, time: '1 KM', name: 'Metro Station Sector 142, Noida' },
    { icon: Plane, time: '30 Min', name: 'Jewar International Airport Upcoming' },
    { icon: PlaneTakeoff, time: '40 Min', name: 'IGI International Airport New Delhi' },
    { icon: Factory, time: 'Direct', name: 'DMIC & FNG Expressway Industrial Corridor' },
    { icon: Home, time: '10L+', name: 'Families in Close Proximity' },
    { icon: Navigation, time: 'Direct', name: 'Noida–Greater Noida Expressway' },
  ]
};

export const director = {
  name: 'Nitin Jain',
  title: 'Director — Investo Grow',
  quote: '"I\'ve personally evaluated hundreds of commercial projects across the NCR. **GYGY Mentis is one of the very few where the timing, location, returns, and developer credibility all align perfectly at once.** The Jewar Airport effect alone will change this corridor forever — and the investors who act before inauguration will look back at this as the best decision they ever made."',
  creds: [
    { icon: CheckCircle, text: 'RERA Registered Project' },
    { icon: Building2, text: 'Authorised Sales Partner' },
    { icon: PhoneCall, text: 'Personal Guidance on Every Deal' }
  ]
};

export const testimonials = {
  items: [
    {
      name: 'Rajesh Sharma',
      role: 'Business Owner, Delhi NCR · Office Space Investor',
      quote: '"I was comparing multiple commercial projects across Noida. Nitin personally showed me the numbers — 12% assured with 50:50 plan made this a no-brainer. The transparency is what sold me."',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      role: 'NRI Investor, Dubai · Retail Unit Owner',
      quote: '"Being an NRI, I was cautious. Investo Grow handled everything — documentation, site visits virtually, and now I earn ₹50,000/month sitting in Dubai. Best decision of 2024."',
      rating: 5,
    },
    {
      name: 'Amit Agarwal',
      role: 'Portfolio Investor, Noida · Multiple Units',
      quote: '"I\'ve invested in 3 commercial properties before. The combination of assured returns + Jewar Airport proximity makes GYGY Mentis the strongest portfolio addition I\'ve made."',
      rating: 5,
    },
  ]
};

export const footer = {
  about: 'Investo Grow Consultancy Pvt. Ltd. is a specialist commercial real estate advisory. Authorised Sales Partner for GYGY Mentis, Sector 140, Noida Expressway.',
  disclaimer: 'Authorised Channel Partner for GYGY Mentis. RERA No: UPRERAPRJ251909. CIN Issued: 3rd Feb 2026 | GST Issued: 12th March 2026. This site is for informational purposes only. Please verify all details with the RERA authority.'
};
