'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis'; 
import { cvData } from '../data/cvData';
import { 
  Mail, 
  Terminal, 
  Database, 
  Layers, 
  ChevronRight,
  ArrowUpRight, 
  Globe, 
  Sparkles,
  Cpu,
  Code2
} from 'lucide-react';

// Custom SVGs to solve potential library export mismatches
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 pb-20 overflow-x-hidden">
      {/* Interactive Background Element */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/30 pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-end items-center">
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-100">
            <a href="#toolkit" className="hover:text-blue-400 transition-colors">Toolkit</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-48 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[13px] font-black uppercase tracking-[0.2em] mb-10">
            <Sparkles size={14} className="animate-pulse" />
            Full-Stack Web Developer
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 italic pr-6">
              Muhammad <br /> Hassan
            </h1>

            {/* Profile Image Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="/Hassan.JPG" 
                  alt="Muhammad Hassan" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_350px] gap-16 items-start border-t border-white/5 pt-12">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-light">
              Results-driven Full-Stack Developer specializing in the MERN stack and modern architecture. Expert in bridging the gap between clean UI/UX and robust backend logic.
            </p>
            
            <div className="flex flex-col gap-6 border-l border-white/5 pl-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-600 mb-1 font-bold">Inquiries</span>
                <a href={`mailto:${cvData.contact.email}`} className="text-sm text-gray-300 hover:text-blue-400 transition-colors">{cvData.contact.email}</a>
              </div>
              <div className="flex gap-4 pt-2">
                <a 
                  href={cvData.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-white/5 rounded-lg text-gray-400 hover:text-blue-400 transition-colors border border-white/5 inline-flex items-center justify-center group"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a 
                  href="https://github.com/muhammadhassan-web" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-white/5 rounded-lg hover:text-blue-400 transition-colors border border-white/5"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-600 mb-16">Selected Projects</h2>
        
        {/* Full-width cards for flagships, grid for smaller projects */}
        <div className="space-y-12">
          
          {/* Featured Project 1: FakeScope */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="group bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 p-8 md:p-12 relative overflow-hidden transition-all hover:border-purple-500/30"
          >
            <Cpu size={140} className="absolute -top-10 -right-10 text-white/[0.02] group-hover:text-purple-500/10 transition-all duration-700 pointer-events-none" />

            <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full font-bold">
                    AI & NLP Platform
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">Flask · scikit-learn · Docker</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold italic tracking-tight mb-4">
                  FakeScope <span className="text-gray-600 font-normal text-xl">— AI Fake News Detection Platform</span>
                </h3>

                <p className="text-gray-400 font-light leading-relaxed mb-6 text-base">
                  Full-stack AI-powered verification platform designed to analyze textual patterns and detect linguistic disinformation in real time.
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-400 font-light">
                    <ChevronRight size={14} className="text-purple-500 shrink-0" />
                    <span>Engineered machine learning pipeline using <strong>scikit-learn</strong> and <strong>TF-IDF vectorization</strong> for NLP classification.</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-400 font-light">
                    <ChevronRight size={14} className="text-purple-500 shrink-0" />
                    <span>Developed production-ready <strong>Flask REST APIs</strong> equipped with rate-limiting and robust payload handling.</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-400 font-light">
                    <ChevronRight size={14} className="text-purple-500 shrink-0" />
                    <span>Containerized whole platform using <strong>Docker</strong> for reproducible, low-overhead cloud deployment.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'scikit-learn', 'TF-IDF', 'Docker', 'REST API'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-mono text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col justify-between items-end h-full gap-6 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                <div className="text-left md:text-right">
                  <span className="text-[10px] font-mono uppercase text-gray-600 block">Category</span>
                  <span className="text-sm font-medium text-gray-300">AI / Machine Learning</span>
                </div>

                <div className="flex gap-3">
                  <a 
                    href="https://github.com/muhammadhassan-web/FakeScope-Full-Stack-AI-Fake-News-Detection-Platform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all flex items-center justify-center"
                    title="View Source Code"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a 
                    href="https://github.com/muhammadhassan-web/FakeScope-Full-Stack-AI-Fake-News-Detection-Platform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white text-black hover:bg-purple-500 hover:text-white transition-all shadow-xl flex items-center justify-center"
                    title="Open Repository"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Project 2: Relay */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="group bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 p-8 md:p-12 relative overflow-hidden transition-all hover:border-teal-500/30"
          >
            <Code2 size={140} className="absolute -top-10 -right-10 text-white/[0.02] group-hover:text-teal-500/10 transition-all duration-700 pointer-events-none" />

            <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase bg-teal-500/10 text-teal-400 border border-teal-500/20 px-3 py-1 rounded-full font-bold">
                    Distributed Systems & WebSockets
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">React · Yjs · Monaco · Node.js</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold italic tracking-tight mb-4">
                  Relay <span className="text-gray-600 font-normal text-xl">— Real-Time Collaborative Code Editor</span>
                </h3>

                <p className="text-gray-400 font-light leading-relaxed mb-6 text-base">
                  Production-grade collaborative IDE enabling instant state synchronization, conflict-free text editing, and presence tracking across distributed clients.
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-400 font-light">
                    <ChevronRight size={14} className="text-teal-400 shrink-0" />
                    <span>Integrated <strong>Monaco Editor</strong> with <strong>Yjs CRDTs</strong> and WebSockets for real-time state sync and live cursor presence.</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-400 font-light">
                    <ChevronRight size={14} className="text-teal-400 shrink-0" />
                    <span>Architected Node.js/Express backend supporting <strong>password-protected rooms</strong> and <strong>debounced MongoDB persistence</strong>.</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-400 font-light">
                    <ChevronRight size={14} className="text-teal-400 shrink-0" />
                    <span>Containerized full-stack architecture with <strong>Docker</strong> for unified server and client environment orchestration.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'Yjs CRDTs', 'Monaco Editor', 'WebSockets', 'MongoDB', 'Docker'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-mono text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col justify-between items-end h-full gap-6 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                <div className="text-left md:text-right">
                  <span className="text-[10px] font-mono uppercase text-gray-600 block">Category</span>
                  <span className="text-sm font-medium text-gray-300">Distributed & Real-Time Web</span>
                </div>

                <div className="flex gap-3">
                  <a 
                    href="https://github.com/muhammadhassan-web/Relay-Real-Time-Collaborative-Code-Editor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all flex items-center justify-center"
                    title="View Source Code"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a 
                    href="https://github.com/muhammadhassan-web/Relay-Real-Time-Collaborative-Code-Editor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white text-black hover:bg-teal-400 hover:text-black transition-all shadow-xl flex items-center justify-center"
                    title="Open Repository"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid for Additional Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* WeatherNow Project Card */}
            <motion.div whileHover={{ y: -10 }} className="group p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col justify-between">
              <Globe size={100} className="absolute top-[-10%] right-[-5%] text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none" />
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold italic tracking-tight underline decoration-blue-500/30 underline-offset-8">WeatherNow</h3>
                  <span className="text-[9px] font-mono bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-0.5 rounded-full">JavaScript</span>
                </div>
                <p className="text-gray-500 mb-8 font-light leading-relaxed">
                  Full-Stack Weather Application featuring real-time forecasts and secure user authentication.
                </p>
              </div>
              <div>
                <a 
                  href="https://github.com/mhasan-7/WeatherNow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="p-4 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition-all shadow-xl">
                    <ArrowUpRight size={24} />
                  </button>
                </a>
              </div>
            </motion.div>

            {/* SFML Engine / Flappy-Bird Project Card */}
            <motion.div whileHover={{ y: -10 }} className="group p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold italic tracking-tight underline decoration-emerald-500/30 underline-offset-8">flappy-bird</h3>
                  <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded-full">C++</span>
                </div>
                <p className="text-gray-500 mb-8 font-light leading-relaxed">
                  A simple implementation of the popular mobile game Flappy Bird, built using C++. The objective of the game is simple: keep the bird flying by pressing a key (space bar, Up and Down Arrow).
                </p>
              </div>
              <div>
                <a 
                  href="https://github.com/mhasan-7/flappy-bird" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="p-4 rounded-full bg-white text-black hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                    <ArrowUpRight size={24} />
                  </button>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Experimental AI Section */}
      <section id="labs" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-200 mb-8">Experimental</h2>
            <h3 className="text-5xl font-bold italic tracking-tighter mb-6">AI Alignment & Data Verification.</h3>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              Beyond the frontend, I build verification-driven datasets and explore model training alignment to ensure digital products are as intelligent as they are beautiful.
            </p>
          </div>
          <div className="bg-[#0a0a0a] rounded-[2rem] p-12 border border-white/5 aspect-video flex flex-col items-center justify-center group overflow-hidden relative">
            <motion.div 
              className="absolute left-0 w-full h-[2px] bg-blue-500/40 z-10"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles className="text-blue-500 mb-4 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" size={40} />
            <div className="text-[10px] font-mono text-gray-600 group-hover:text-blue-400 transition-colors z-20">
              [ Running verification_protocol.sh ]
            </div>
            <div className="absolute bottom-6 right-6 text-[8px] font-mono text-gray-800 hidden group-hover:block transition-all">
              SYS_CHECK: OK <br/>
              DATA_ALIGNED: TRUE
            </div>
          </div>
        </div>
      </section>

      {/* Technical Toolkit */}
      <section id="toolkit" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-200 mb-16">Technical Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 p-12 bg-blue-600 rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-blue-900/20">
            <Layers size={80} className="absolute bottom-[-5%] right-[-5%] text-white/10 group-hover:scale-110 transition-transform" />
            <h3 className="text-4xl font-bold mb-10 text-white tracking-tighter italic">Frontend <br/> Specialist</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map(s => (
                <span key={s} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-xs font-black italic border border-white/10">{s}</span>
              ))}
            </div>
          </div>

          <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] hover:bg-white/[0.05] transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database size={60} />
            </div>
            <h4 className="font-bold mb-6 italic text-2xl text-blue-400">Backend <br/> & DB</h4>
            <div className="space-y-4">
              {['Node.js', 'Express.js', 'MongoDB', 'Oracle SQL'].map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                  <span className="text-sm text-gray-400 font-light group-hover:text-gray-200 transition-colors">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] hover:bg-white/[0.05] transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal size={60} />
            </div>
            <h4 className="font-bold mb-6 italic text-2xl text-gray-300">Core <br/> Languages</h4>
            <div className="space-y-4">
              {['C++', 'Python', 'Assembly', 'JavaScript'].map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  <span className="text-sm text-gray-400 font-light group-hover:text-gray-200 transition-colors">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career History */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-200 mb-20">Career Journey</h2>
        <div className="space-y-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-b border-white/5 pb-16">
            <div className="flex flex-col">
              <span className="text-blue-500 font-bold text-xs mb-4 tracking-tighter uppercase">2024— 2028</span>
              <h3 className="text-4xl font-bold tracking-tighter italic">Air University</h3>
              <p className="text-gray-300 mt-2 font-medium tracking-widest uppercase text-[10px]">Technical Software Development</p>
            </div>
            <div className="space-y-6">
              {[
                "Architected SkyLine Transit System using Blazor and .NET.",
                "Developed a custom Game Engine in C++ utilizing SFML.",
                "Engineered low-level tools in Assembly for real-time performance tracking."
              ].map((h, i) => (
                <div key={i} className="flex gap-6 group">
                  <ChevronRight size={18} className="mt-1 text-blue-500/30 group-hover:text-blue-500 transition-colors shrink-0" />
                  <p className="text-lg text-gray-400 font-light leading-relaxed group-hover:text-white transition-colors">{h}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-b border-white/5 pb-16">
            <div className="flex flex-col">
              <span className="text-blue-500 font-bold text-xs mb-4 tracking-tighter uppercase">2025 — Present</span>
              <h3 className="text-4xl font-bold tracking-tighter italic">Freelance</h3>
              <p className="text-gray-300 mt-2 font-medium tracking-widest uppercase text-[10px]">Full-Stack Developer</p>
            </div>
            <div className="space-y-6">
              {[
                "Built custom data extraction tools using Node.js and MongoDB.",
                "Developed secure authentication systems with Mongoose persistence.",
                "Engineered travel booking databases with advanced Oracle SQL joins."
              ].map((h, i) => (
                <div key={i} className="flex gap-6 group">
                  <ChevronRight size={18} className="mt-1 text-blue-500/30 group-hover:text-blue-500 transition-colors shrink-0" />
                  <p className="text-lg text-gray-400 font-light leading-relaxed group-hover:text-white transition-colors">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5 text-center">
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12 text-left">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-300 mb-8">Get In Touch</h2>
              <h3 className="text-5xl font-bold italic tracking-tighter mb-6">Let's build something <br/> exceptional.</h3>
              <p className="text-gray-400 font-light text-lg leading-relaxed max-w-md">
                Whether you have a specific project in mind or just want to talk about AI alignment and frontend architecture, my inbox is always open.
              </p>
              
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  <Mail size={20} />
                  <span className="font-light">{cvData.contact.email}</span>
                </div>
              </div>
            </div>

            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/5"
              action="https://formspree.io/f/xzdolkln" 
              method="POST"
              autoComplete="off"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" 
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" 
                    placeholder="hello@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold ml-1">Message</label>
                <textarea 
                  name="message"
                  rows={5} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none" 
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-white text-black rounded-2xl font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </section>
          
        <p className="text-[10px] font-black uppercase tracking-[1em] text-gray-300 mt-16">
          © 2026 Crafted by Muhammad Hassan
        </p>
      </footer>
    </main>
  );
}