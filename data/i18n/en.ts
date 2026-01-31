// const en = {
//   nav: {
//     upcomingEvents: "Upcoming Events",
//     mediaResources: "Media Resources",
//     photoGallery: "Photo Gallery",
//     videoGallery: "Video Gallery",
//     speech: "Speech",
//     developmentInitiatives: "Development Initiatives",
//     aboutUs: "About Us",
//     contactUs: "Contact Us",
//     joinUs: "Join Us",
//     donate: "Donate Now",
//   },

//   hero: {
//     badge: "People • Progress • Prosperity",
//     titleLine1: "Building a",
//     titleHighlight: "Stronger India",
//     titleLine2: "Together",
//     description:
//       "A people-first political movement committed to honest leadership, inclusive growth, and real solutions that reach every citizen.",
//     ctaJoin: "Join Our Party",
//     ctaVision: "Read Our Vision",
//   },

//   coreMembers: {
//     badge: "Party Leadership",
//     title: "National Core Leadership",
//     description:
//       "Experienced leadership guiding the party with vision and responsibility.",
//     leaders: [
//       {
//         name: "HariBhai Patel",
//         role: "Rashtriya Adhyaksh",
//         bio: "National President with decades of grassroots experience.",
//       },
//       {
//         name: "Rahil Hussain",
//         role: "Rashtriya Upadhyaksh",
//         bio: "National Vice President focused on youth and inclusiveness.",
//       },
//     ],
//   },

//   vision: {
//     badgeLabel: "Our Vision",
//     title: "A Democratic India for Everyone",
//     description:
//       "Committed to building a modern India through science, technology, and culture.",
//     imageSrc:
//       "https://images.unsplash.com/photo-1745962979027-c5e51183cf40?q=80&w=2131",

//     points: [
//       {
//         number: "01",
//         title: "Empowered Society",
//         description: "Education and scientific growth for all.",
//         color: "orange",
//       },
//       {
//         number: "02",
//         title: "Equality & Justice",
//         description: "Ending discrimination across society.",
//         color: "yellow",
//       },
//       {
//         number: "03",
//         title: "Peaceful Democracy",
//         description: "Constitutional values and non-violence.",
//         color: "green",
//       },
//     ],
//   },
// } as const;

// export default en;
// data/i18n/en.ts
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
    imageSrc:
      "https://images.unsplash.com/photo-1745962979027-c5e51183cf40",

    points: [
      {
        number: "01",
        title: "Empowered & Educated Society",
        description:
          "Strengthening education, science and technology for all.",
        color: "orange",
      },
      {
        number: "02",
        title: "Equality & Social Justice",
        description:
          "Eliminating discrimination and ensuring dignity for all.",
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
};

export default en;
