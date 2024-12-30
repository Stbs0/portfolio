import { Database, Globe, Layers, Pill, ShieldPlus, Wrench } from "lucide-react";

export const Social_Icons = [
  {
    link: "https://github.com/stbs0",
    image: "/others/Github.svg",
    alt: "Mohammed Mahmoud - Social Media",
  },
  {
    link: "https://www.instagram.com/stbs0/?hl=en",
    image: "/others/Instagram.svg",
    alt: "Mohammed Mahmoud - Social Media",
  },
  {
    link: "https://www.linkedin.com/in/mohammed-ibrahim-mahmoud/",
    image: "/others/LinkedIn.svg",
    alt: "Mohammed Mahmoud - Social Media",
  },
  {
    link: "https://twitter.com/Ibrahimmemonnn",
    image: "/others/Twitter.svg",
    alt: "Mohammed Mahmoud - Social Media",
  },
];
export const BANNER = {
  developer:
    " Self-taught full-stack developer skilled in ReactJS, TypeScript, and Express, creating dynamic web solutions.",
  pharmacist:
    "A passionate pharmacist dedicated to helping patients find the right medication for their needs, ensuring optimal health outcomes.",
};

export const ABOUT_ME = {
  developer: [
    "Hi, I'm a passionate self-taught full-stack web developer with a year of dedicated learning and hands-on experience in web development. I specialize in building dynamic and responsive websites using technologies like ReactJS, TypeScript, and Express. My journey into coding started with curiosity and grew into a full-fledged passion, pushing me to create functional and visually appealing projects.",

    "I'm actively seeking opportunities to bring my skills and creativity to a professional environment where I can contribute to impactful web solutions. Let's build something amazing together!",
  ],
  pharmacist: [
    "Highly disciplined and enthusiastic individual with a wealth of diverse experiences. Meticulous and precise in every assigned task. Thrives under pressure and remains committed and responsible in crisis situations or high-stress environments. Strong interpersonal skills enable effective relationship building and communication. Fast learner with knowledge in dispensing protocols, inventory management, and regulatory restrictions. Fluent in Arabic and excellent in English, possessing strong language skills for effective communication with diverse individuals.",
  ],
};

export const PROJECTS = [
  {
    title: "Sudan Codex",
    url: "",
    image: "/projects/purpleLogo.png",
    description:
      "developed a website that provide FDA drug labeling information for heath care providers in Sudan, using ReactJS, TypeScript and Tailwind CSS",
  },
  {
    title: "YC Directory",
    url: "https://yc-directory-stbs0s-projects.vercel.app/",
    image: "/projects/yc_logo.png",
    description:
      "A website build with Next.js, TypeScript that allows users to view, add startups and companies to the YC Directory",
  },
  {
    title: "Space Tourism",
    url: "https://space-tourism-stbs0s-projects.vercel.app/",
    image: "/projects/space_toursm_logo.svg",
    description: "A website about space tourism",
  },
  {
    title: "PokeCards",
    url: "https://memory-card-stbs0s-projects.vercel.app/",
    image: "/projects/pokeball.png",
    description: "a memory card game where you have to match the cards",
  },
];

export const SKILLS = {
  developer: [
    {
      name: "Web Technologies",
      description: "Frontend & frameworks",
      skills: [
        "HTML/CSS",
        "React",
        "React Native",
        "TypeScript",
        "Next.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
      ],
      Icon: Globe,
    },
    {
      name: "Backend & Databases",
      description: "Server & data management",
      skills: [
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "SQL",
        "Firebase",
        "Graphql",
        "Sanity",
      ],
      Icon: Database,
    },
    {
      name: "Tools & Technologies",
      description: "Development tools",
      skills: [
        "Git/GitHub",
        "Github Actions",

        "Playwright",
        "Vitest",
        "Google Tag Manager",
        "Google Analytics",
      ],
      Icon: Wrench,
    },
  ],
  pharmacist: [
    {
      name: "Pharmaceutical Expertise",
      description: "Medicine Management and Patient Care",
      skills: [
        "Drug Therapy Management",
        "Knowledge in medication administration and dispensing",
        "Patient Counseling",
        "Inventory Management",
        "Patient Education and Counseling",
        "Thorough and paying attention to detail",
      ],
      Icon: Pill,
    },
    {
      name: "Professional Conduct",
      description: "Professionalism and Ethical Standards",
      skills: [
        "Ability to accept criticism and work well under pressure",
        "Confidentiality",
        "Knowledgeable of regulatory restrictions and regulations",
        "Experience with Raqeeb and Sehati platforms",
      ],
      Icon: ShieldPlus,
    },
    {
      name: "Communication & Collaboration",
      description: "Teamwork and Customer Interaction",
      skills: [
        "Ability to work in a team",
        "Outstanding customer service",

        "Excellent verbal communication skills",
        "Patience and the ability to remain calm in stressful situations",
      ],
      Icon: Layers,
    },
  ],
};

export const EXPERIENCES = [
  {
    job: "Pharmacy Intern",
    company: "Dr. Soliman Fakeeh Hospital",
    location: "Jeddah, Saudi Arabia",
    startDate: "Oct. 2024",
    endDate: "Nov. 2024",
    responsibility: [
      "Prepared packaging and labels for prescriptions, verifying accuracy of dosage, side effects, interactions, and refill instructions.",
      "Used pharmacy software to enter prescription and insurance information.",
      "Counseled patients on new medications and OTC products.",
      "Perform numerous Extemporaneous compounding.",
      "Performed technical processes required to dispense medications to patients.",
      "Reconstituted numerous I.V medicine in the I.V room.",
    ],
    img: "/experiences/DR_Soliman.svg",
  },

  {
    job: "Pharmacy Intern",
    company: "Dr. Samir Abbas Hospital",
    location: "Jeddah, Saudi Arabia",
    startDate: "Sep. 2024",
    endDate: "Oct. 2024",
    responsibility: [
      "Read and understood hospital's pharmacy department policies and procedures.",
      "Experienced in documenting and managing narcotic and controlled medications through the Sehhaty and Raqeeb platforms.",
      "Educated patients on possible drug interactions, potential side effects, and optimal methods of administration.",
    ],
    img: "/experiences/DR_Samir.jpg",
  },

  {
    job: "Pharmacist",
    company: "AlFouaad Specialized Hospital",
    location: "Khartoum, Sudan",
    startDate: "Jul. 2022",
    endDate: "April 2023",
    responsibility: [
      "Assisted in the processing of insurance claims and coordinated with healthcare providers to resolve any coverage issues, ensuring timely medication delivery to patients",
      "Managed inventory levels and ordered medications and supplies as needed, optimizing stock levels and reducing waste",
      "Collaborated with healthcare providers to review and optimize medication therapy plans for patients with complex medical conditions",
      "Counseled patients on medication usage, potential side effects, and drug interactions to promote safe and effective treatment outcomes",
      "Verified safety and accuracy of physician orders.",
    ],
    img: "/experiences/ALfoaad.png",
  },
];

export const SEO_KEYWORDS = {
  developer: [
    "full-stack developer",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "web applications",
    "user interfaces",
    "scalable solutions",
  ],
  pharmacist: [
    "pharmacist",
    "medication management",
    "patient counseling",
    "healthcare",
    "KSA",
    "drug therapy management",
    "patient outcomes",
  ],
};
