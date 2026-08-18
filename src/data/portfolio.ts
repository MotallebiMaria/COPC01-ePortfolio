export const categories = ["Experience", "Project", "Teaching", "Research", "Recognition"] as const;
export type Category = (typeof categories)[number];
export type ReferenceItem = {
  title: string;
  type: string;
  description: string;
  href: string;
};

export type DetailSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type PortfolioImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  layout?: "landscape" | "portrait";
};

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  organization: string;
  role: string;
  date: string;
  year: number;
  status: string;
  featured: boolean;
  summary: string;
  tags: string[];
  image?: PortfolioImage;
  sections: DetailSection[];
  references?: ReferenceItem[];
  externalHref?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "001",
    slug: "knowledge-retrieval-prototype",
    title: "Knowledge Retrieval Prototype",
    subtitle: "A Hack Week knowledge retrieval experiment",
    category: "Experience",
    organization: "Rocket Innovation Studio",
    role: "Co-developer and presenter",
    date: "June 2026 · Updated August 2026",
    year: 2026,
    status: "Prototype complete",
    featured: false,
    summary: "A one-week experiment exploring how structured team knowledge could be made easier to retrieve through an AI coding assistant.",
    tags: ["Technical communication", "Research", "MCP", "Collaboration"],
    sections: [
      {
        heading: "Entry annotation",
        paragraphs: [
          "During Rocket Innovation Studio’s June 2026 Hack Week, another intern and I explored a recurring onboarding problem: useful team knowledge was spread across conversations, personal notes, and static reference files, making it difficult for someone new to locate the right explanation or owner. Our goal was to test whether a maintained knowledge source could make that information easier to retrieve through an AI coding assistant. Within the one-week timeline, we moved from problem framing and tool research to a working demonstration and a short presentation for colleagues.",
          "I helped shape the concept, investigate retrieval approaches, develop the prototype, organize the demonstration, and communicate the design to a mixed technical audience. The compressed schedule required us to distinguish the core experiment from a production-ready system. We focused on a narrow path: represent team knowledge in a structured source, expose relevant entries through a Model Context Protocol interface, and demonstrate that an assistant could retrieve useful context when answering a question. We worked as a team and sought guidance from an experienced developer when we needed to validate the feasibility of the approach.",
          "The result was a functioning prototype and presentation rather than a deployed product. Feedback identified further questions about contribution workflows, information ownership, maintenance, and adoption. The experiment developed my ability to research unfamiliar technology, reduce an idea to a demonstrable scope, divide work collaboratively, and explain technical trade-offs."
        ]
      },
      {
        heading: "Reflection",
        paragraphs: [
          "A technically convincing prototype does not establish that an internal tool will be useful. The project raised practical questions about maintenance, quality review, and whether the proposed workflow would improve on existing habits.",
          "If I repeated the project, I would define evaluation criteria, speak with prospective contributors before implementation, and test the demonstration with realistic questions. This would evaluate both the retrieval mechanism and its fit within the team's workflow."
        ]
      },
      {
        heading: "Skills demonstrated",
        paragraphs: [],
        list: ["Rapid technical research", "Backend prototyping", "Model Context Protocol", "Collaborative scoping", "Technical presentation", "Privacy-aware documentation"]
      }
    ]
  },
  {
    id: "002",
    slug: "rocket-software-engineering",
    title: "Software Engineering at Rocket",
    subtitle: "Backend development in an enterprise fintech environment",
    category: "Experience",
    organization: "Rocket Innovation Studio",
    role: "Software Developer Intern (Backend)",
    date: "May-August 2026",
    year: 2026,
    status: "Completed",
    featured: true,
    summary: "C# and ASP.NET backend work spanning investigation, implementation, testing, review, controlled delivery, and technical documentation.",
    tags: ["C#", "ASP.NET", "SQL", "REST APIs", "Testing"],
    sections: [
      { heading: "Context", paragraphs: ["I joined a cross-functional team supporting mortgage-title workflows. My work involved unfamiliar services, business rules, integrations, and release controls, so understanding the surrounding workflow was as important as writing the code change itself."] },
      { heading: "Selected contributions", paragraphs: ["I investigated and implemented backend stories, wrote and executed test plans, reviewed pull requests, validated teammates’ work, prepared controlled data changes, and documented technical findings. Over the term, I progressed from smaller platform changes to independently owning more complex stories through review and testing."], list: ["Backend services and REST API maintenance in C# and ASP.NET", "SQL investigation and safe test-environment validation", "Unit tests, peer review, and end-to-end test planning", "Platform, authentication, and operational-risk investigations"] },
      { heading: "What I learned", paragraphs: ["I learned to treat implementation, review, testing, and release validation as parts of the same task. I also became more deliberate about asking focused questions early when investigation depended on team or domain context."] }
    ]
  },
  {
    id: "003",
    slug: "codeclash-platform",
    title: "CodeClash Platform",
    subtitle: "Infrastructure for game-bot programming competitions",
    category: "Project",
    organization: "UofT CREATE Club",
    role: "Technical lead · Backend and infrastructure developer",
    date: "2025-Present",
    year: 2026,
    status: "Active",
    featured: true,
    summary: "A full-stack competition platform designed to support recurring game-bot events, secure submissions, match execution, and live experiences.",
    tags: ["Django", "React", "PostgreSQL", "Docker", "C++"],
    image: {
      src: "images/codeclash-platform.webp",
      alt: "CodeClash dashboard showing a live competition, standings, notifications, and bot submissions",
      caption: "CodeClash platform interface",
      width: 2730,
      height: 1594
    },
    sections: [
      { heading: "Overview", paragraphs: ["CodeClash is CREATE’s programming competition platform. Teams write bots for a game and submit them to compete in simulated matches. The project grew from event-specific functionality into a reusable platform intended to support different games and future competitions."] },
      { heading: "My contributions", paragraphs: ["As VP of Technology, I lead technical planning and contribute directly to backend and infrastructure work. I established development workflows, service boundaries, environment configuration, code-quality tooling, CI checks, deployment foundations, onboarding documentation, and health-check conventions while coordinating work across a small development team."], list: ["Django REST backend and PostgreSQL data model", "React and TypeScript frontend collaboration", "Docker-based multi-service development environment", "C++ runner direction for isolated bot execution", "GitHub Actions, staging deployment, and contributor documentation"] },
      { heading: "Technical decisions", paragraphs: ["The platform separates the web application, asynchronous work, game rules, and untrusted bot execution. That boundary keeps yearly game logic adaptable while allowing the execution layer to receive focused security and resource-control attention. Decisions are recorded as documentation and reviewed before unresolved infrastructure choices become difficult to reverse."] },
      { heading: "Reflection", paragraphs: ["Leading CodeClash has improved how I define interfaces, record decisions, identify uncertainty, and divide work into independently testable contributions. My current focus is validating the execution architecture against explicit security and performance requirements."] }
    ]
  },
  {
    id: "004",
    slug: "teaching-university-of-toronto",
    title: "Teaching at the University of Toronto",
    subtitle: "Systems programming, data structures, and discrete mathematics",
    category: "Teaching",
    organization: "University of Toronto Scarborough",
    role: "Undergraduate Teaching Assistant",
    date: "September 2025-August 2026",
    year: 2026,
    status: "Three appointments",
    featured: true,
    summary: "Tutorials, labs, office hours, and assessment across discrete mathematics, data structures, and software tools and systems programming.",
    tags: ["C", "Unix", "Data structures", "Proofs", "Mentorship"],
    image: {
      src: "images/teaching-materials.webp",
      alt: "Maria explaining a discrete mathematics proof on a classroom chalkboard",
      caption: "Discrete mathematics tutorial at the University of Toronto Scarborough",
      width: 2604,
      height: 1498
    },
    sections: [
      { heading: "Appointments", paragraphs: [], list: ["CSCB09, Software Tools and Systems Programming, January to August 2026", "CSCA48, Introduction to Computer Science II, January to August 2026", "CSCA67/MATA67, Discrete Mathematics, September to December 2025"] },
      { heading: "Role and approach", paragraphs: ["I lead tutorials or labs, support students during office hours, and assess programming work and exams. My approach is to make the hidden reasoning visible: trace a process on the board, name the decision being made, and then connect the concrete example back to the general idea."] },
      { heading: "Reflection", paragraphs: ["Teaching has made me more precise as a developer. Students reveal where an explanation relies on an unstated assumption. Diagnosing that gap while leaving the problem-solving work with the student has improved how I review code, write documentation, and communicate technical ideas."] }
    ]
  },
  {
    id: "005",
    slug: "oral-examinations-research",
    title: "Oral Examinations in CS",
    subtitle: "A systematic literature map in computing education",
    category: "Research",
    organization: "University of Toronto",
    role: "Undergraduate researcher and co-author",
    date: "May 2025-July 2026",
    year: 2026,
    status: "Published",
    featured: true,
    summary: "Collaborative literature mapping that categorized how oral examinations are designed, used, and evaluated in computer science education.",
    tags: ["Systematic mapping", "CS education", "Research synthesis", "Academic writing"],
    image: {
      src: "images/research-poster.webp",
      alt: "Research poster titled Oral Examinations in CS: A Systematic Literature Map",
      caption: "Poster presented at the 2025 UTSC CMS Undergraduate Research Symposium",
      width: 1960,
      height: 1470
    },
    externalHref: "https://dblp.org/rec/conf/iticse/MotallebiAAACKO26",
    sections: [
      { heading: "Research context", paragraphs: ["The project examined published research on oral examinations in computer science education. Our team used a systematic mapping process to identify relevant studies and categorize their populations, interventions, evaluation methods, and reported outcomes."] },
      { heading: "My role", paragraphs: ["I reviewed and coded academic papers against a shared protocol, discussed ambiguous classifications with the research team, contributed to synthesis, and presented the work at the 2025 UTSC CMS Undergraduate Research Symposium. The resulting paper was published in the ITiCSE 2026 proceedings."] },
      { heading: "Reflection", paragraphs: ["This work developed a different kind of technical discipline: applying a definition consistently, documenting uncertainty, and separating what the evidence supports from what I expect to find. Those habits transfer directly to requirements analysis, testing, and responsible engineering decisions."] }
    ],
    references: [
      { title: "Oral Examinations in CS: A Systematic Literature Map", type: "Publication record", description: "Bibliographic record for the paper published in the ITiCSE 2026 proceedings.", href: "https://dblp.org/rec/conf/iticse/MotallebiAAACKO26" }
    ]
  },
  {
    id: "006",
    slug: "finch-flight-software",
    title: "FINCH Flight Software",
    subtitle: "CAN bus communication for a student CubeSat",
    category: "Experience",
    organization: "University of Toronto Aerospace Team",
    role: "Firmware developer",
    date: "May-August 2025",
    year: 2025,
    status: "Completed term",
    featured: false,
    summary: "Embedded C development and validation of CAN bus communication between simulated CubeSat subsystems using STM32 development boards.",
    tags: ["Embedded C", "STM32", "CAN bus", "Hardware testing"],
    image: {
      src: "images/firmware-bench.webp",
      alt: "STM32 development board connected to a laptop running flight software code and serial output",
      caption: "STM32 firmware development and bench testing",
      width: 930,
      height: 1602,
      layout: "portrait"
    },
    sections: [
      { heading: "Context and role", paragraphs: ["I contributed to flight-software work for FINCH, a student CubeSat project. My focus was establishing and validating CAN bus communication between the onboard computer and payload interfaces using STM32 Nucleo development boards."] },
      { heading: "Process", paragraphs: ["The work combined firmware changes with physical testing. I configured messages, simulated subsystem interactions, inspected communication behaviour, and documented findings so that failures could be distinguished between software, configuration, and hardware setup."] },
      { heading: "Reflection", paragraphs: ["The experience made software behaviour tangible: a type, timing assumption, or wiring choice could decide whether another board received a valid message. It reinforced my interest in systems where software must be reasoned about alongside hardware constraints."] }
    ]
  },
  {
    id: "007",
    slug: "robotics-instruction",
    title: "Robotics Instruction and Leadership",
    subtitle: "Building a school robotics program from its first curriculum",
    category: "Teaching",
    organization: "As-Sadiq Islamic School",
    role: "Co-founder and instructor",
    date: "October 2022-June 2024",
    year: 2024,
    status: "Completed",
    featured: false,
    summary: "Co-founded a robotics club, developed introductory lessons, and mentored a six-student competition team.",
    tags: ["Robotics", "Curriculum", "LEGO Mindstorms", "Mentorship"],
    image: {
      src: "images/robotics-work.png",
      alt: "LEGO Mindstorms competition robot beside the Best Engineering Design award",
      caption: "Competition robot and Best Engineering Design award",
      width: 462,
      height: 330
    },
    sections: [
      { heading: "Program", paragraphs: ["I co-founded the school’s first robotics club and developed lessons introducing programming, mechanical design, sensors, and iterative testing through LEGO Mindstorms EV3."] },
      { heading: "Outcome", paragraphs: ["I coordinated practice and competition logistics while mentoring a team of six students. The team received the Best Engineering Design Award at the Ontario Tech University Engineering Robotics Competition."] },
      { heading: "Reflection", paragraphs: ["This was my first sustained experience connecting technical work with teaching and team leadership. It taught me to create enough structure for beginners to make progress while leaving room for them to own the design decisions."] }
    ]
  },
  {
    id: "008",
    slug: "international-scholar-award",
    title: "International Scholar Award",
    subtitle: "Undergraduate entrance scholarship for academic excellence",
    category: "Recognition",
    organization: "University of Toronto Scarborough",
    role: "Recipient",
    date: "February 2024",
    year: 2024,
    status: "Awarded",
    featured: false,
    summary: "A University of Toronto Scarborough entrance scholarship recognizing academic excellence as an international student.",
    tags: ["Scholarship", "Academic excellence"],
    sections: [
      { heading: "Recognition", paragraphs: ["I received the International Scholar Award upon admission to the University of Toronto Scarborough. The scholarship recognized academic excellence and supported my undergraduate studies as an international student."] },
      { heading: "Significance", paragraphs: ["The award made it possible for me to pursue computer science in an environment where I could combine software engineering with teaching, research, student leadership, and systems work."] }
    ]
  }
];

export const featuredItems = portfolioItems.filter((item) => item.featured);

export function getItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
