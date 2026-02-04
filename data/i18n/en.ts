import type { Dictionary } from "@/types/translation/dictionary";

const en: Dictionary = {
  nav: {
    upcomingEvents: "Upcoming Events",
    mediaResources: "Media Resources",
    photoGallery: "Photo Gallery",
    videoGallery: "Video Gallery",
    speech: "Speech",
    developmentInitiatives: "Development Initiatives",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    joinUs: "Join Us",
    donate: "Donate Now",
  },

  hero: {
    badge: "People • Progress • Prosperity",
    titleLine1: "Building a",
    titleHighlight: "Stronger India",
    titleLine2: "Together",
    description:
      "A people-first political movement committed to honest leadership, inclusive growth, and real solutions that reach every citizen.",
    ctaJoin: "Join Our Party",
    ctaVision: "Read Our Vision",
  },

  coreMembers: {
    badge: "Party Leadership",
    title: "National Core Leadership",
    description:
      "Experienced leadership guiding the party with vision and responsibility.",
    leaders: [
      {
        name: "HariBhai Patel",
        role: "National President",
        bio: "Decades of grassroots leadership and people-first governance.",
      },
      {
        name: "Rahil Hussain",
        role: "National Vice President",
        bio: "Youth-focused leadership and organisational strength.",
      },
    ],
  },

  vision: {
    badgeLabel: "Our Vision",
    title: "A Democratic India for Everyone",
    description:
      "Committed to science, technology, education, healthcare and security.",
    imageSrc: "https://images.unsplash.com/photo-1745962979027-c5e51183cf40",

    points: [
      {
        number: "01",
        title: "Empowered & Educated Society",
        description: "Strengthening education, science and technology for all.",
        color: "orange",
      },
      {
        number: "02",
        title: "Equality & Social Justice",
        description: "Eliminating discrimination and ensuring dignity for all.",
        color: "yellow",
      },
      {
        number: "03",
        title: "Democratic & Peaceful Nation",
        description:
          "Upholding constitutional values and peaceful civic engagement.",
        color: "green",
      },
    ],
  },

  about: {
    hero: {
      titleLine1: "A Movement Led by the People,",
      titleLine2: "For the People",
      description:
        "Aam Janta Party India is not just a political party — it is a nationwide movement built on truth, transparency, and public participation.",
    },

    whoWeAre: {
      title: "Who We Are",
      paragraph1:
        "Aam Janta Party India (AJP) emerged from the belief that politics should serve citizens — not political dynasties or special interests.",
      paragraph2:
        "We represent farmers, workers, women, youth, and entrepreneurs — citizens who want governance that listens, acts, and delivers.",
    },

    visionMission: {
      vision: {
        label: "Our Vision",
        title: "A Just, Equal & Strong India",
        description:
          "An India where opportunity, dignity, and justice are accessible to every citizen — regardless of background.",
      },
      mission: {
        label: "Our Mission",
        title: "Governance That Works for People",
        description:
          "To build transparent institutions, empower local communities, and ensure long-term national development.",
      },
    },

    coreValues: {
      title: "Our Core Values",
      subtitle: "The principles that guide every decision we make.",
      items: [
        {
          title: "People First",
          description:
            "We believe governance must always reflect the will and welfare of the people.",
          color: "orange",
        },
        {
          title: "Transparent Politics",
          description:
            "Honest leadership and accountability form the foundation of trust.",
          color: "yellow",
        },
        {
          title: "Equal Opportunity",
          description:
            "Every citizen deserves the same chance to grow and succeed.",
          color: "green",
        },
        {
          title: "Nation Building",
          description:
            "Policies must strengthen the nation socially, economically, and morally.",
          color: "orange",
        },
      ],
    },
  },
  cta: {
  title: "Together, We Build the Future",
  description:
    "Development is not a promise — it is a responsibility. Your participation strengthens democracy and governance.",
  primaryAction: "Join the Movement",
  secondaryAction: "Support the Initiatives",
},
donatePage: {
  pageTitle: "Contribute to the Movement",
  chooseAmount: "Choose Amount",
  customAmountPlaceholder: "Custom amount",
  panNote: "Donations above ₹2,000 require PAN details as per law.",

  donorDetails: "Donor Details",
  fullName: "Full Name (as per PAN)",
  mobile: "Mobile Number",
  email: "Email (optional)",
  state: "State",
  pan: "PAN Number",

  declaration:
    "I confirm that I am an Indian citizen and this donation is made from my own funds, in compliance with Election Commission of India regulations.",

  submit: "Contribute Securely",

  sidebarTitle: "Why Your Donation Matters",
  sidebarPoints: [
    "Supports grassroots campaigns",
    "Helps organise community outreach",
    "Strengthens transparent governance efforts",
    "Enables policy research and awareness",
  ],

  footerNote:
    "All contributions are subject to disclosure under applicable laws. For queries, contact the party office.",
},
contact: {
  heroTitle: "Get in Touch",
  heroDescription:
    "Whether you’re a citizen, volunteer, media representative, or supporter — we’d love to hear from you.",

  emailLabel: "Email",
  addressLabel: "Office Address",

  formTitle: "Send Us a Message",
  formHint: "Please fill all the fields before sending the message.",

  nameLabel: "Full Name*",
  namePlaceholder: "First & Last Name",

  emailFieldLabel: "Email Address*",
  emailPlaceholder: "you@example.com",

  messageLabel: "Message*",
  messagePlaceholder: "Please type your queries/message here....",

  submitIdle: "Send Message",
  submitLoading: "Sending...",

  successTitle: "Message sent successfully",
  successDescription: "We’ll get back to you soon.",

  errorTitle: "Failed to send message",
  genericError: "Something went wrong. Please try again later.",
},
events: {
  heroTitle: "Upcoming Events",
  heroDescription:
    "Join us at our upcoming rallies, meetings, and community programs as we work together to shape a stronger and fairer India.",

  viewDetails: "View Details",

  emptyState:
    "No upcoming events at the moment. Please check back soon.",

  meta: {
    date: "Date",
    time: "Time",
    location: "Location",
  },

  events: [
    {
      id: 1,
      title: "Jan Samvad Rally – Gurugram",
      date: "25 March 2026",
      time: "10:00 AM – 1:00 PM",
      location: "Sector 44, Gurugram, Haryana",
      description:
        "An open dialogue with citizens to discuss local issues, governance, and development priorities.",
      image:
        "https://images.pexels.com/photos/2774568/pexels-photo-2774568.jpeg",
      tag: "Public Rally",
    },
    {
      id: 2,
      title: "Women Empowerment Conference",
      date: "2 April 2026",
      time: "11:00 AM – 3:00 PM",
      location: "Community Hall, New Delhi",
      description:
        "Focused discussions on women’s safety, education, employment, and leadership opportunities.",
      image:
        "https://images.pexels.com/photos/13231504/pexels-photo-13231504.jpeg",
      tag: "Conference",
    },
    {
      id: 3,
      title: "Youth Interaction Program",
      date: "10 April 2026",
      time: "4:00 PM – 6:00 PM",
      location: "City Auditorium, Jaipur",
      description:
        "Interactive session with students and young professionals on jobs, skills, and nation-building.",
      image:
        "https://images.pexels.com/photos/29555738/pexels-photo-29555738.jpeg",
      tag: "Youth",
    },
  ],
},
footer: {
  description:
    "A people-first political movement committed to justice, equality, and inclusive development across India.",

  address: `123 Liberty Avenue,
Capitol City, India – 123456`,

  sections: [
    {
      title: "About",
      links: [
        { label: "Our Mission", href: "/about" },
        { label: "Leadership", href: "#core-members" },
        { label: "History", href: "/history" },
        { label: "News & Updates", href: "/news" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Education", href: "/education" },
        { label: "Healthcare", href: "/healthcare" },
        { label: "Economy", href: "/economy" },
        { label: "Environment", href: "/environment" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { label: "Volunteer", href: "/join-us" },
        { label: "Donate", href: "/donate" },
        { label: "Events", href: "/events" },
        { label: "Membership", href: "/join-us" },
      ],
    },
  ],

  copyright:
    "© 2026 AAM JANTA PARTY (INDIA). All rights reserved.",

  developedBy: "Designed & Developed by",
},


};

export default en;
