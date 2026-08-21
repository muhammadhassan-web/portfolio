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
    { value: 7, suffix: "", label: "Curated projects" },
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
      title: "AI-assisted tooling",
      description:
        "RAG over a company's own documents with cited sources, and AI SaaS products — captions, resumes, subscriptions — built on Groq, Gemini and Stripe.",
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
      id: "contentforge",
      name: "ContentForge AI",
      kind: "AI SaaS",
      year: "2026",
      summary:
        "Describe a post, pick a platform and tone, get three ready-to-publish captions with hashtags.",
      detail: [
        "A complete SaaS shell built around a small AI feature: Supabase handles auth (email/password and Google OAuth) and Postgres storage, Stripe handles subscriptions, and Groq's hosted Llama 3.3 generates the captions themselves.",
        "The free tier is usage-tracked server-side rather than trusted to the client, so upgrade prompts are backed by an actual count, and the pricing selector on the landing page is interactive rather than a static table.",
      ],
      stack: ["Next.js", "Supabase", "Postgres", "Stripe", "Groq", "Tailwind CSS"],
      live: "https://contentforge-ai-eta.vercel.app/",
      repo: "https://github.com/muhammadhassan-web/contentforge-ai",
      status: "live",
    },
    {
      id: "resumeforge",
      name: "ResumeForge AI",
      kind: "AI writing tool",
      year: "2026",
      summary:
        "Paste a job description and your background, get a tailored resume or cover letter exported straight to PDF.",
      detail: [
        "Single-purpose by design: no accounts, no payments, no database. Paste or upload a background (old resume/cover letter via pdf-parse and mammoth), paste the job posting, generate, edit inline, export.",
        "Groq's Llama 3.3 70B restructures the background into a complete tailored resume rather than just rewriting bullet points, and the PDF export runs through @react-pdf/renderer so formatting stays consistent regardless of what was pasted in.",
      ],
      stack: ["Next.js", "Groq", "Tailwind CSS", "Framer Motion", "react-pdf"],
      live: "https://resumeforge-tailor.vercel.app/",
      repo: "https://github.com/muhammadhassan-web/resumeforge-ai",
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
        "A multi-tenant HR/IT knowledge assistant — every answer is retrieved and cited from a company's own documents, never guessed.",
      detail: [
        "Each company gets a fully isolated workspace: admins upload policy PDFs, employees sign in with one shared, rotatable credential and ask questions in plain language. Retrieval-augmented generation over MongoDB Atlas Vector Search means only the relevant document chunks reach the model, and every citation is verified against what was actually retrieved before it's shown as grounded — an unverifiable answer is marked as such instead of presented as fact.",
        "Tenant isolation is enforced at the query level and covered by integration tests, alongside account lockout, per-IP and per-org rate limiting, JWT session revocation on password change, and a hardened HTTP layer (Helmet, strict CSP, CORS allow-listing). Collision-proof company codes come from an atomic counter, so two organizations can never land the same access code.",
      ],
      stack: ["React", "Vite", "Express", "MongoDB Atlas", "Gemini", "Cloudinary", "JWT"],
      live: "https://docyra.vercel.app/",
      repo: "https://github.com/muhammadhassan-web/Docyra-AI-Powered-PDF-Search-Platform",
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
      live: "https://fakescope-nx97.onrender.com/",
      repo: "https://github.com/muhammadhassan-web/FakeScope-Full-Stack-AI-Fake-News-Detection-Platform",
      status: "live",
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
      items: ["Socket.IO", "Yjs", "Zod", "Stripe", "Supabase", "Groq", "Gemini", "Docker", "Jest", "Supertest"],
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
