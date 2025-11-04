import React from "react";
import { motion } from "framer-motion";
// Import your profile photo
import profileImg from "./profile.jpg"; // Put profile.jpg in src folder

export default function App() {
  const projects = [
    {
      title: "Expensify",
      desc: "Smart expense tracking tool to manage and categorize expenses efficiently.",
      tech: "Java · React · MongoDB",
      url: "https://github.com/Praneethreddy264/Expensify.git",
    },
    {
      title: "Eye Controlled Mouse",
      desc: "Hands-free computer interaction using eye & blink detection for accessibility.",
      tech: "OpenCV · MediaPipe · PyAutoGUI",
      url: "https://github.com/Jersey73/Eye-Controlled-Mouse.git",
    },
    {
      title: "PORTFOLIO WEBSITE",
      desc: "Personal portfolio website showcasing projects and skills with modern design",
      tech: "React · TailwindCSS · Framer Motion",
      url: "#",
    },
  ];

  const certifications = [
    "Jira",
    "Automation Anywhere Certified",
    "AWS Certified Cloud Practitioner",
    "Google Data Studio",
    "Cisco Networking Essentials",
  ];

  const resumeUrl = "/MANUDEEP-REDDY-1.pdf";

  const pageFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageFade}
      className="min-h-screen text-slate-100 bg-gradient-to-tr from-[#09090b] via-[#101014] to-[#232435] antialiased relative overflow-x-hidden"
    >
      <AnimatedBlobs />

      {/* HEADER NAV */}
      <motion.header initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="backdrop-blur-lg bg-white/5 sticky top-0 z-40 shadow-xl border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Profile photo beside the name with zoom effect */}
            <motion.img
              src={profileImg}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#645cff] shadow-md"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
            />
            <div>
              <div className="text-base font-bold tracking-wide">Manudeep Reddy</div>
              <div className="text-xs text-slate-400">Software Engineer • Data Science</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <motion.a href="#about" whileHover={{scale:1.11}} className="hover:text-white transition">About</motion.a>
            <motion.a href="#skills" whileHover={{scale:1.11}} className="hover:text-white transition">Skills</motion.a>
            <motion.a href="#projects" whileHover={{scale:1.11}} className="hover:text-white transition">Projects</motion.a>
            <motion.a href="#contact" whileHover={{scale:1.11}} className="hover:text-white transition">Contact</motion.a>
            <motion.a href="https://github.com/Jersey73" target="_blank" rel="noreferrer" whileHover={{scale:1.08}} className="px-3 py-1 rounded-md border border-white/10 hover:bg-white/5">GitHub</motion.a>
          </div>
          <div className="md:hidden">
            <button aria-label="menu" className="px-3 py-1 rounded-md border border-white/10">☰</button>
          </div>
        </nav>
      </motion.header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }}>
            <h1 className="text-6xl font-extrabold leading-tight drop-shadow-lg">Hi, I'm <span className="text-[#645cff]">Manudeep</span>.</h1>
            <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{delay:0.3}} className="mt-4 text-lg text-slate-300 max-w-xl">
              Results-driven Software Engineer & Data Science enthusiast.<br/>
              I build elegant web experiences, scalable backend systems, and accessible AI projects — <span className="text-[#645cff] font-medium">with clean design and thoughtful engineering</span>.
            </motion.p>
            <div className="mt-8 flex gap-4 flex-wrap">
              {/* Animated resume button */}
              <motion.a href={resumeUrl} download whileHover={{scale:1.10,translateY:-2,background:"linear-gradient(to right,#645cff,#232435)"}} whileTap={{scale:0.98}} className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#645cff] hover:bg-[#232435] text-white font-bold shadow-2xl transition-all">
                <svg width='22' height='22' fill='currentColor' viewBox='0 0 20 20'><path d='M10 3v8.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42L9 11.59V3a1 1 0 1 1 2 0zM19 17a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1z'/></svg>
                Download Resume
              </motion.a>
              <motion.a href="#projects" whileHover={{scale:1.08,background:"#232435"}} className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/6 text-white hover:bg-[#18181b]">View projects</motion.a>
              <motion.a href="#contact" whileHover={{scale:1.08}} className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#645cff] bg-[#232435] text-[#645cff] hover:bg-[#18181b]">Contact me</motion.a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Stat label="CGPA" value="9.25" />
              <Stat label="LeetCode+" value="500+ solved" />
              <Stat label="Certifications" value={
                <div className="flex flex-col space-y-1">
                  {certifications.map((cert, i) =>
                    <span key={i} className="bg-[#645cff]/15 text-[#b3b3ff] px-2 py-1 rounded text-xs">{cert}</span>
                  )}
                </div>
              } />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98, y: 23 }} animate={{ opacity: 1, scale: 1, y:0 }} transition={{ duration: 0.8 }}>
            <motion.div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/6 bg-gradient-to-br from-[#101014] via-[#232435] to-[#18181b] p-6" whileHover={{scale:1.04,rotateY:8}}>
              <div className="aspect-[4/3] bg-gradient-to-tr from-[#09090b] via-[#232435] to-[#101014] rounded-2xl flex items-center justify-center">
                <div className="text-center px-7">
                  <div className="text-3xl font-semibold">FULL STACK DEVELOPER · DATA SCIENCE · ML</div>
                  <p className="mt-2 text-sm text-slate-300">Crafting polished interfaces and reliable systems. Sample projects & code on GitHub.</p>
                  <div className="mt-6 flex gap-3 items-center justify-center">
                    <motion.a href="https://github.com/Jersey73" target="_blank" rel="noreferrer" whileHover={{scale:1.08}} className="text-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">GitHub</motion.a>
                    <motion.a href={resumeUrl} download whileHover={{scale:1.08}} className="text-sm px-4 py-2 rounded-full border border-[#645cff] hover:bg-[#232435] transition-colors">Download CV</motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        <WaveDivider/>
        {/* ABOUT */}
        <section id="about" className="mt-20">
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white">About</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-slate-300 max-w-3xl">
            I'm a B.Tech student at KL University (CGPA 9.25). I build full-stack web apps, machine learning prototypes, and automation tools. I enjoy solving algorithmic problems (500+ solved) and turning complex ideas into maintainable code.
          </motion.p>
        </section>
        {/* SKILLS */}
        <section id="skills" className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: 56 }} whileInView={{ opacity: 1, x:0 }} transition={{duration:0.7}} className="p-6 rounded-2xl bg-white/7 ring-1 ring-white/18 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold">Technical Skills</h3>
            <p className="mt-3 text-slate-300">Languages, frameworks and tools I use daily.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Badge label="Java" />
              <Badge label="Python" />
              <Badge label="React" />
              <Badge label="SQL / MySQL" />
              <Badge label="OpenCV" />
              <Badge label="Git" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -56 }} whileInView={{ opacity: 1, x:0 }} transition={{duration:0.7}} className="p-6 rounded-2xl bg-white/7 ring-1 ring-white/18 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold">Core Competencies</h3>
            <ul className="mt-3 text-slate-300 list-disc ml-5 space-y-2">
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Design</li>
              <li>Machine Learning & Data Science</li>
              <li>Building accessible interfaces</li>
            </ul>
          </motion.div>
        </section>
        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <h3 className="text-3xl font-bold text-white">Selected Projects</h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {projects.map((p, index) => (
              <motion.a
                whileHover={{
                  y: -14,
                  rotateX: 8,
                  rotateY: 8,
                  scale: 1.08,
                  boxShadow: "0 18px 40px -10px #645cff77"
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.58,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 98,
                }}
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl p-6 bg-white/6 ring-1 ring-[#645cff]/12 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1200px",
                }}
              >
                <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{duration:0.7}}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold group-hover:text-[#645cff] transition-colors">{p.title}</div>
                      <div className="mt-2 text-sm text-slate-300 max-w-xl">{p.desc}</div>
                    </div>
                    <div className="text-xs text-slate-400 whitespace-nowrap">{p.tech}</div>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-sm text-slate-300">
                    <span className="inline-block px-3 py-1 rounded-full border border-white/8 group-hover:border-[#645cff] transition-colors">View code</span>
                    <span className="opacity-70">•</span>
                    <span className="opacity-70">Open-source</span>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-8 bg-gradient-to-r from-[#101014]/8 to-[#645cff]/10 ring-1 ring-[#645cff]/15 shadow-2xl max-w-xl mx-auto"
          >
            {/* Animated heading with icon mimic Apple Cards */}
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial={{ rotate: -20, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="p-2 bg-[#645cff]/20 rounded-full shadow-lg"
              >
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#645cff" />
                  <path d="M16 8v8H8V8h8zm-3.5 2V10h-1v1.5h1zm1.5 3.25V16h2.5v-.75h-2.5z" fill="#FFF"/>
                </svg>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="text-3xl font-bold text-white"
              >
                Get in touch
              </motion.h3>
            </div>
            {/* Contact Info */}
            <div className="mt-4 mb-8 flex flex-col gap-3 items-start text-slate-100 text-lg font-medium">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d="M2 2h16v16H2V2z" fill="#645cff"/>
                  <text x="10" y="14" textAnchor="middle" fill="white" fontSize="8">☎️</text>
                </svg>
                <span className="font-bold">Phone:</span>
                <a href="tel:+919963003453" className="hover:text-[#645cff] transition-colors">+91 9963003453</a>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d="M2 2h16v16H2V2z" fill="#645cff"/>
                  <text x="10" y="14" textAnchor="middle" fill="white" fontSize="8">@</text>
                </svg>
                <span className="font-bold">Email:</span>
                <a href="mailto:manudeepreddy535@gmail.com" className="underline hover:text-[#645cff] transition-colors">
                  manudeepreddy535@gmail.com
                </a>
              </div>
            </div>
            {/* Stylish Contact Form */}
            <form className="mt-4 grid gap-4">
              <input placeholder="Your name" className="p-3 rounded-md bg-white/10 border border-[#645cff]/20 focus:border-[#645cff] focus:outline-none transition-colors text-white" />
              <input placeholder="Your email" type="email" className="p-3 rounded-md bg-white/10 border border-[#645cff]/20 focus:border-[#645cff] focus:outline-none transition-colors text-white" />
              <textarea placeholder="Message" className="p-3 rounded-md bg-white/10 border border-[#645cff]/20 focus:border-[#645cff] focus:outline-none transition-colors text-white" rows={4} />
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.08 }}
                  className="px-6 py-3 rounded-2xl bg-[#645cff] hover:bg-[#232435] text-white font-bold shadow-xl transition-all"
                >
                  Send message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Manudeep Reddy — Built with care and code.</footer>
      </main>
      {/* END MAIN */}
    </motion.div>
  );
}

/** STAT COMPONENT: Stats with animated scale */
function Stat({ label, value }) {
  return (
    <motion.div whileHover={{scale:1.09,boxShadow:'0 8px 32px -6px #645cff99'}} className="p-4 bg-white/7 rounded-2xl ring-1 ring-[#645cff]/25 shadow-md hover:shadow-xl hover:bg-[#645cff]/8 transition-all transform">
      <div className="text-sm text-slate-300">{label}</div>
      <div className="text-xl font-semibold text-white">{value}</div>
    </motion.div>
  );
}

/** BADGE COMPONENT: Skills badge with animation */
function Badge({ label }) {
  return <motion.div whileHover={{scale:1.12, borderColor:'#645cff'}} className="px-3 py-2 rounded-full border border-white/10 text-sm text-slate-100 hover:border-[#645cff] hover:bg-[#645cff]/20 transition-all cursor-default">{label}</motion.div>;
}

/** ANIMATED BACKGROUND BLOBS */
function AnimatedBlobs() {
  return (
    <>
      <motion.div initial={{ scale: 0.95, opacity: 0.17 }} animate={{scale:1.09, opacity:0.18}} transition={{ duration: 7, repeat: Infinity, repeatType:"mirror" }} className="absolute -top-32 -left-32 w-[400px] h-[400px]  rounded-full bg-[#645cff] blur-[120px] opacity-18" />
      <motion.div initial={{ scale: 0.92, opacity: 0.15 }} animate={{scale:1.05, opacity:0.17}} transition={{ duration: 7, repeat: Infinity, repeatType:"mirror" }} className="absolute -bottom-44 right-0 w-[500px] h-[300px] rounded-full bg-[#232435] blur-[120px] opacity-14" />
    </>
  );
}

/** APPLE-STYLE WAVE DIVIDER SVG */
function WaveDivider() {
  return (
    <motion.div initial={{y:32}} animate={{y:0}} transition={{duration:1.2, type:'spring'}} className="mt-12 select-none pointer-events-none">
      <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
        <path fill="#232435" fillOpacity="0.22" d="M0 54c120-44 334-33 720-3 265 21 500-15 720-51v90H0V54Z" />
      </svg>
    </motion.div>
  );
}
