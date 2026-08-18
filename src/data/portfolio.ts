export const categories = ["Experience", "Project", "Teaching", "Research", "Recognition"] as const;
export type Category = (typeof categories)[number];
export type EvidenceAccess = "PUBLIC" | "REDACTED" | "SUMMARY ONLY" | "PRIVATE";

export type EvidenceItem = {
  title: string;
  type: string;
  access: EvidenceAccess;
  description: string;
  href?: string;
};

export type DetailSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
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
  mediaLabel: string;
  sections: DetailSection[];
  evidence: EvidenceItem[];
  externalHref?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "001",
    slug: "knowledge-retrieval-prototype",
    title: "Knowledge Retrieval Prototype",
    subtitle: "A public-safe account of a workplace Hack Week experiment",
    category: "Experience",
    organization: "Rocket Innovation Studio",
    role: "Co-developer and presenter",
    date: "June 2026 · Updated August 2026",
    year: 2026,
    status: "Prototype complete",
    featured: false,
    summary: "A one-week experiment exploring how structured team knowledge could be made easier to retrieve through an AI coding assistant.",
    tags: ["Technical communication", "Research", "MCP", "Collaboration"],
    mediaLabel: "Original public-safe process diagram",
    sections: [
      {
        heading: "Entry annotation",
        paragraphs: [
          "During Rocket Innovation Studio’s June 2026 Hack Week, another intern and I explored a recurring onboarding problem: useful team knowledge was spread across conversations, personal notes, and static reference files, making it difficult for someone new to locate the right explanation or owner. Our goal was to test whether a maintained knowledge source could make that information easier to retrieve through an AI coding assistant. Within the one-week timeline, we moved from problem framing and tool research to a working demonstration and a short presentation for colleagues.",
          "I helped shape the concept, investigate retrieval approaches, develop the prototype, organize the demonstration, and communicate the design to a mixed technical audience. The compressed schedule required us to distinguish the core experiment from a production-ready system. We focused on a narrow path: represent team knowledge in a structured source, expose relevant entries through a Model Context Protocol interface, and demonstrate that an assistant could retrieve useful context when answering a question. We worked as a team and sought guidance from an experienced developer when we needed to validate the feasibility of the approach.",
          "The result was a functioning prototype and presentation rather than a deployed product. Feedback surfaced useful next questions about contribution workflows, information ownership, maintenance, and adoption. The experiment strengthened my ability to research unfamiliar technology, reduce an idea to a demonstrable scope, divide work collaboratively, and explain technical trade-offs. Because the original materials contain workplace information, this entry uses a newly created process diagram and a descriptive summary instead of internal screenshots, source code, presentation slides, or data."
        ]
      },
      {
        heading: "Reflection",
        paragraphs: [
          "The most valuable lesson was that a technically convincing prototype is only one part of a useful internal tool. I began the week focused on whether retrieval could work; I finished it thinking more carefully about who would maintain the knowledge, how quality would be reviewed, and whether the workflow would be easier than the habits it replaced.",
          "If I repeated the project, I would define evaluation criteria and speak with prospective contributors before implementation. I would also reserve more time to test the demonstration with realistic questions. That shift—from proving a mechanism to validating its place in a real workflow—connects directly to the kind of software engineer I want to become: someone who can move between implementation, systems thinking, research, and clear communication."
        ]
      },
      {
        heading: "Skills demonstrated",
        paragraphs: [],
        list: ["Rapid technical research", "Backend prototyping", "Model Context Protocol", "Collaborative scoping", "Technical presentation", "Privacy-aware documentation"]
      }
    ],
    evidence: [
      { title: "Prototype demonstration", type: "Work sample", access: "SUMMARY ONLY", description: "The original demonstration used internal workplace knowledge and is not published." },
      { title: "Hack Week presentation", type: "Presentation", access: "PRIVATE", description: "Internal slides and recordings are intentionally excluded from this public portfolio." },
      { title: "Public-safe process diagram", type: "Visual evidence", access: "PUBLIC", description: "A new diagram communicates the experiment without reproducing internal architecture or data." }
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
    date: "May–August 2026",
    year: 2026,
    status: "Completed",
    featured: true,
    summary: "C# and ASP.NET backend work spanning investigation, implementation, testing, review, controlled delivery, and technical documentation.",
    tags: ["C#", "ASP.NET", "SQL", "REST APIs", "Testing"],
    mediaLabel: "Workplace imagery intentionally omitted",
    sections: [
      { heading: "Context", paragraphs: ["I joined a cross-functional team supporting mortgage-title workflows. My work involved unfamiliar services, business rules, integrations, and release controls, so understanding the surrounding workflow was as important as writing the code change itself."] },
      { heading: "Selected contributions", paragraphs: ["I investigated and implemented backend stories, wrote and executed test plans, reviewed pull requests, validated teammates’ work, prepared controlled data changes, and documented technical findings. Over the term, I progressed from smaller platform changes to independently owning more complex stories through review and testing."], list: ["Backend services and REST API maintenance in C# and ASP.NET", "SQL investigation and safe test-environment validation", "Unit tests, peer review, and end-to-end test planning", "Platform, authentication, and operational-risk investigations"] },
      { heading: "What I learned", paragraphs: ["The term changed how I define completion. A change is not finished when it compiles; it is finished when its assumptions have been checked, its risks are understood, another person can review the evidence, and the result has been verified in the intended environment. I also became more deliberate about asking focused questions earlier instead of investigating indefinitely on my own."] }
    ],
    evidence: [
      { title: "Work-term project report", type: "Written analysis", access: "SUMMARY ONLY", description: "The report informed this public narrative but contains operational examples that are not reproduced here." },
      { title: "Performance feedback", type: "Professional feedback", access: "PRIVATE", description: "Evaluation documents are retained privately; only non-sensitive themes are reflected in the narrative." }
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
    date: "2025–Present",
    year: 2026,
    status: "Active",
    featured: true,
    summary: "A full-stack competition platform designed to support recurring game-bot events, secure submissions, match execution, and live experiences.",
    tags: ["Django", "React", "PostgreSQL", "Docker", "C++"],
    mediaLabel: "Replace with a polished CodeClash product screenshot",
    sections: [
      { heading: "Overview", paragraphs: ["CodeClash is CREATE’s programming competition platform. Teams write bots for a game and submit them to compete in simulated matches. The project grew from event-specific functionality into a reusable platform intended to support different games and future competitions."] },
      { heading: "My contributions", paragraphs: ["As VP of Technology, I lead technical planning and contribute directly to backend and infrastructure work. I established development workflows, service boundaries, environment configuration, code-quality tooling, CI checks, deployment foundations, onboarding documentation, and health-check conventions while coordinating work across a small development team."], list: ["Django REST backend and PostgreSQL data model", "React and TypeScript frontend collaboration", "Docker-based multi-service development environment", "C++ runner direction for isolated bot execution", "GitHub Actions, staging deployment, and contributor documentation"] },
      { heading: "Technical decisions", paragraphs: ["The platform separates the web application, asynchronous work, game rules, and untrusted bot execution. That boundary keeps yearly game logic adaptable while allowing the execution layer to receive focused security and resource-control attention. Decisions are recorded as documentation and reviewed before unresolved infrastructure choices become difficult to reverse."] },
      { heading: "Reflection", paragraphs: ["CodeClash has taught me that technical leadership is mostly the work of making decisions legible: defining interfaces, identifying uncertainty, reducing onboarding friction, and giving contributors work that can be tested independently. My next focus is validating the execution architecture with measured security and performance requirements before optimizing it."] }
    ],
    evidence: [
      { title: "Architecture and onboarding documentation", type: "Technical writing", access: "PUBLIC", description: "Selected documentation can be shared when the project repository is made public." },
      { title: "Platform interface", type: "Product screenshot", access: "REDACTED", description: "A clean screenshot will replace the current placeholder after private event and account data are removed." }
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
    date: "September 2025–August 2026",
    year: 2026,
    status: "Three appointments",
    featured: true,
    summary: "Tutorials, labs, office hours, and assessment across discrete mathematics, data structures, and software tools and systems programming.",
    tags: ["C", "Unix", "Data structures", "Proofs", "Mentorship"],
    mediaLabel: "Replace with a privacy-safe teaching-materials photograph",
    sections: [
      { heading: "Appointments", paragraphs: [], list: ["CSCB09 — Software Tools and Systems Programming, January–August 2026", "CSCA48 — Introduction to Computer Science II, January–August 2026", "CSCA67/MATA67 — Discrete Mathematics, September–December 2025"] },
      { heading: "Role and approach", paragraphs: ["I lead tutorials or labs, support students during office hours, and assess programming work and exams. My approach is to make the hidden reasoning visible: trace a process on the board, name the decision being made, and then connect the concrete example back to the general idea."] },
      { heading: "Reflection", paragraphs: ["Teaching has made me more precise as a developer. Students quickly reveal where an explanation relies on an unstated assumption. Learning to diagnose that gap—without taking over the problem—has improved how I review code, write documentation, and communicate across different levels of technical experience."] }
    ],
    evidence: [
      { title: "Tutorial materials", type: "Teaching artifact", access: "REDACTED", description: "Selected original explanations can be shown after course-owned and assessment material is removed." },
      { title: "Student information and feedback", type: "Protected record", access: "PRIVATE", description: "No student names, grades, messages, or identifiable feedback are published." }
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
    date: "May 2025–July 2026",
    year: 2026,
    status: "Published",
    featured: true,
    summary: "Collaborative literature mapping that categorized how oral examinations are designed, used, and evaluated in computer science education.",
    tags: ["Systematic mapping", "CS education", "Research synthesis", "Academic writing"],
    mediaLabel: "Replace with the original research poster export",
    externalHref: "https://dblp.org/rec/conf/iticse/MotallebiAAACKO26",
    sections: [
      { heading: "Research context", paragraphs: ["The project examined published research on oral examinations in computer science education. Our team used a systematic mapping process to identify relevant studies and categorize their populations, interventions, evaluation methods, and reported outcomes."] },
      { heading: "My role", paragraphs: ["I reviewed and coded academic papers against a shared protocol, discussed ambiguous classifications with the research team, contributed to synthesis, and presented the work at the 2025 UTSC CMS Undergraduate Research Symposium. The resulting paper was published in the ITiCSE 2026 proceedings."] },
      { heading: "Reflection", paragraphs: ["This work developed a different kind of technical discipline: applying a definition consistently, documenting uncertainty, and separating what the evidence supports from what I expect to find. Those habits transfer directly to requirements analysis, testing, and responsible engineering decisions."] }
    ],
    evidence: [
      { title: "ITiCSE 2026 publication record", type: "Research publication", access: "PUBLIC", description: "Public bibliographic record for the co-authored paper.", href: "https://dblp.org/rec/conf/iticse/MotallebiAAACKO26" },
      { title: "Research symposium poster", type: "Poster", access: "PUBLIC", description: "A high-resolution author copy will replace the placeholder." }
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
    date: "May–August 2025",
    year: 2025,
    status: "Completed term",
    featured: false,
    summary: "Embedded C development and validation of CAN bus communication between simulated CubeSat subsystems using STM32 development boards.",
    tags: ["Embedded C", "STM32", "CAN bus", "Hardware testing"],
    mediaLabel: "Replace with an STM32/CAN development-bench photograph",
    sections: [
      { heading: "Context and role", paragraphs: ["I contributed to flight-software work for FINCH, a student CubeSat project. My focus was establishing and validating CAN bus communication between the onboard computer and payload interfaces using STM32 Nucleo development boards."] },
      { heading: "Process", paragraphs: ["The work combined firmware changes with physical testing. I configured messages, simulated subsystem interactions, inspected communication behaviour, and documented findings so that failures could be distinguished between software, configuration, and hardware setup."] },
      { heading: "Reflection", paragraphs: ["The experience made software behaviour tangible: a type, timing assumption, or wiring choice could decide whether another board received a valid message. It reinforced my interest in systems where software must be reasoned about alongside hardware constraints."] }
    ],
    evidence: [{ title: "Firmware and bench testing", type: "Technical artifact", access: "SUMMARY ONLY", description: "Team source code is not republished; a non-sensitive hardware photograph can illustrate the development context." }]
  },
  {
    id: "007",
    slug: "robotics-instruction",
    title: "Robotics Instruction and Leadership",
    subtitle: "Building a school robotics program from its first curriculum",
    category: "Teaching",
    organization: "As-Sadiq Islamic School",
    role: "Co-founder and instructor",
    date: "October 2022–June 2024",
    year: 2024,
    status: "Completed",
    featured: false,
    summary: "Co-founded a robotics club, developed introductory lessons, and mentored a six-student competition team.",
    tags: ["Robotics", "Curriculum", "LEGO Mindstorms", "Mentorship"],
    mediaLabel: "Optional artifact photograph; no identifiable minors",
    sections: [
      { heading: "Program", paragraphs: ["I co-founded the school’s first robotics club and developed lessons introducing programming, mechanical design, sensors, and iterative testing through LEGO Mindstorms EV3."] },
      { heading: "Outcome", paragraphs: ["I coordinated practice and competition logistics while mentoring a team of six students. The team received the Best Engineering Design Award at the Ontario Tech University Engineering Robotics Competition."] },
      { heading: "Reflection", paragraphs: ["This was my first sustained experience connecting technical work with teaching and team leadership. It taught me to create enough structure for beginners to make progress while leaving room for them to own the design decisions."] }
    ],
    evidence: [{ title: "Competition recognition", type: "Award", access: "SUMMARY ONLY", description: "The team result is described without publishing images of participating minors." }]
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
    mediaLabel: "Typographic record — no certificate required",
    sections: [
      { heading: "Recognition", paragraphs: ["I received the International Scholar Award upon admission to the University of Toronto Scarborough. The scholarship recognized academic excellence and supported my undergraduate studies as an international student."] },
      { heading: "Significance", paragraphs: ["The award made it possible for me to pursue computer science in an environment where I could combine software engineering with teaching, research, student leadership, and systems work."] }
    ],
    evidence: [{ title: "Award record", type: "Scholarship", access: "SUMMARY ONLY", description: "The recognition is described publicly; personal award documents are not published." }]
  }
];

export const featuredItems = portfolioItems.filter((item) => item.featured);

export function getItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
