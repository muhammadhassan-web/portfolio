export type Project = {
  id: string;
  name: string;
  kind: string;
  year: string;
  summary: string;
  detail: string[];
  stack: string[];
  live?: string;
  repo?: string;
  status: "live" | "source" | "private";
};

export const site = {
  name: "Muhammad Hassan",
  role: "Full-stack developer",
  location: "Islamabad, Pakistan",
  timezone: "UTC+5",
  overlap: "09:00–15:00 CET",
  available: "Available for remote contract work",

  // The page's argument, in one sentence.
  thesis:
    "I build systems that stay correct while several things change them at once — concurrent edits, batch expiry, payment state, extracted records.",

  intro:
    "Full-stack developer working in TypeScript, React and Node. Most of what I build has a correctness problem at the centre of it rather than a rendering problem, and that's the part I like. Currently studying computer science at Air University, Islamabad, and taking remote freelance work alongside it.",

  contact: {
    email: "muhammadhassan2326@gmail.com",
    github: "https://github.com/muhammadhassan-web",
    linkedin: "https://www.linkedin.com/in/muhammadhassan-web",
    whatsapp: "923111527433",
    cv: "/Muhammad-Hassan-CV.pdf",
  },

  stats: [
    { value: 5, suffix: "", label: "Curated projects" },
    { value: 2, suffix: "", label: "Freelance platforms" },
    { value: 100, suffix: "%", label: "Client-focused delivery" },
  ],

  services: [
    {
      index: "01",
      title: "Real-time & collaborative systems",
      description:
        "CRDT-based concurrent editing, live cursors and presence, and the debounced write patterns that keep a shared document consistent under load.",
    },
    {
      index: "02",
      title: "Business & inventory systems",
      description:
        "Schema design for stock, batching and expiry logic — the kind of domain rules that break if you model them as a single quantity field.",
    },
    {
      index: "03",
      title: "Document & AI-assisted tooling",
      description:
        "Turning unstructured PDFs into something a support team can query in plain language, with sources attached to every answer.",
    },
    {
      index: "04",
      title: "Full-stack web applications",
      description:
        "React and Next.js frontends over Node/Express APIs and MongoDB, deployed and tested end to end rather than handed off half-built.",
    },
  ],

  projects: [
    {
      id: "relay",
      name: "Relay",
      kind: "Real-time collaboration",
      year: "2026",
      summary:
        "A collaborative code editor. Several people edit the same file at once, and nobody loses a keystroke.",
      detail: [
        "The hard part of collaborative editing isn't the socket — it's deciding what happens when two people type in the same position at the same moment. Relay uses Yjs CRDTs, so concurrent edits converge to the same document on every client without a central lock or an operational-transform server.",
        "Live cursors and presence run over Socket.IO. Writes are debounced before they reach MongoDB rather than firing per keystroke, rooms can be password-protected, and every request is validated with Zod behind rate limiting.",
        "Covered by Jest and Supertest against mongodb-memory-server, so the API suite runs without a live database. Frontend deploys to Vercel; the backend runs as a Docker image on Render.",
      ],
      stack: [
        "React",
        "Vite",
        "Monaco",
        "Yjs",
        "Socket.IO",
        "Express",
        "MongoDB",
        "Zod",
        "Jest",
        "Docker",
      ],
      live: "https://relaysync.vercel.app/",
      repo: "https://github.com/muhammadhassan-web/Relay-Real-Time-Collaborative-Code-Editor",
      status: "live",
    },
    {
      id: "pharmacy",
      name: "Pharmacy Stock Management",
      kind: "Inventory · client work",
      year: "2026",
      summary:
        "Medicine stock tracked by batch and expiry date, not by a single quantity field.",
      detail: [
        "Pharmacies can't treat stock as one number. Two boxes of the same medicine with different expiry dates are not interchangeable, and dispensing the longer-dated box first quietly creates write-offs.",
        "Batches are modelled as sub-documents against each medicine, each carrying its own quantity and expiry. Dispensing follows FEFO — first expired, first out — so the shortest-dated stock always moves first, and the system can report what is about to expire before it does.",
        "Built for a client through Fiverr.",
      ],
      stack: ["Node.js", "Express", "MongoDB", "React"],
      status: "private",
    },
    {
      id: "docyra",
      name: "Docyra",
      kind: "AI knowledge assistant",
      year: "2026",
      summary:
        "An internal knowledge assistant that answers HR and IT questions from a company's own documents.",
      detail: [
        "HR and IT teams upload policy documents, handbooks and technical guides as PDFs. New employees or staff then ask questions in plain language, over email or chat, instead of filing a ticket.",
        "The system searches the uploaded documents and returns accurate, source-backed answers instantly, which cuts down the repetitive queries that would otherwise land on HR and IT support.",
      ],
      stack: ["Next.js", "Node.js", "MongoDB"],
      live: "https://docyra.vercel.app/",
      status: "live",
    },
    {
      id: "fakescope",
      name: "FakeScope",
      kind: "Machine learning",
      year: "2025",
      summary:
        "Flags likely disinformation by the way an article is written, not by what it claims.",
      detail: [
        "A TF-IDF vectoriser feeds a scikit-learn classifier trained on labelled news text. It scores linguistic and stylistic patterns — it does not verify facts, and it isn't meant to.",
        "Served behind a Flask REST API with rate limiting and payload validation, packaged with Docker so the model and its dependencies deploy as one unit.",
      ],
      stack: ["Python", "Flask", "scikit-learn", "Docker"],
      repo: "https://github.com/muhammadhassan-web/FakeScope-Full-Stack-AI-Fake-News-Detection-Platform",
      status: "source",
    },
    {
      id: "weathernow",
      name: "WeatherNow",
      kind: "Side project",
      year: "2025",
      summary:
        "Forecast app with JWT auth and an animated globe built in Three.js.",
      detail: [
        "Earlier project, kept here because the Three.js and GSAP work is the closest thing on this page to pure frontend craft.",
      ],
      stack: ["Node.js", "Express", "JWT", "Three.js", "GSAP"],
      repo: "https://github.com/mhasan-7/WeatherNow",
      status: "source",
    },
  ] satisfies Project[],

  stack: [
    {
      label: "Building with",
      items: ["TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
    },
    {
      label: "Also comfortable in",
      items: ["Socket.IO", "Yjs", "Zod", "Stripe", "Docker", "Jest", "Supertest", "Oracle SQL"],
    },
    {
      label: "From coursework",
      items: ["C++", "Python", "x86 Assembly", "Blazor / .NET"],
    },
  ],

  timeline: [
    {
      period: "2025 — now",
      title: "Freelance full-stack developer",
      place: "Upwork · Fiverr",
      notes: [
        "Business systems for small operators: stock control with batch and expiry tracking, booking platforms with Stripe payments, and document extraction pipelines.",
        "Usually working alone from requirements to deployment, which means the schema decisions and the deploy pipeline are both mine to get right.",
      ],
    },
    {
      period: "2024 — 2028",
      title: "BS Computer Science",
      place: "Air University, Islamabad",
      notes: [
        "Coursework projects: a transit management system in Blazor and .NET, a 2D game engine in C++ with SFML, and performance-tracking utilities written in x86 Assembly.",
        "Currently in the fourth semester.",
      ],
    },
  ],
};
