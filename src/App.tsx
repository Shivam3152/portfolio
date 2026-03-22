import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Globe, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  GraduationCap, 
  Briefcase, 
  Award, 
  User,
  Cpu,
  Code
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS, EDUCATION, VOLUNTEERING, LEADERSHIP, SKILLS } from "./constants";

const SectionTitle = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-zinc-100 rounded-lg">
      <Icon size={20} className="text-zinc-600" />
    </div>
    <h2 className="text-2xl font-semibold tracking-tight text-zinc-800">{title}</h2>
  </div>
);

const Card = ({ children, className = "" }: { children: ReactNode; className?: string; key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-colors shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-lg">SKJ.</span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#education" className="hover:text-zinc-900 transition-colors">Education</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
          </nav>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Research & Internships
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed">
              {PERSONAL_INFO.role} at <span className="text-zinc-900 font-medium">NIT Andhra Pradesh</span>. 
              Passionate about Additive Manufacturing, Materials Science, and Machine Learning.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a 
                href={PERSONAL_INFO.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <Globe size={20} />
                <span className="text-sm font-medium">Website</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-500">
                <MapPin size={20} />
                <span className="text-sm font-medium">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about">
          <SectionTitle title="About Me" icon={User} />
          <Card className="max-w-3xl">
            <p className="text-lg text-zinc-600 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </Card>
        </section>

        {/* Experience / Projects Section */}
        <section id="experience">
          <SectionTitle title="Research & Projects" icon={Briefcase} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <Card key={idx} className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">{project.subtitle}</h3>
                    <p className="text-sm text-zinc-500 font-medium">{project.title}</p>
                  </div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider bg-zinc-50 px-2 py-1 rounded border border-zinc-100">
                    {project.period}
                  </span>
                </div>
                <ul className="space-y-3 flex-1">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                      <ChevronRight size={16} className="text-zinc-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                {project.technologies && (
                  <div className="mt-6 pt-6 border-t border-zinc-100 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <SectionTitle title="Education" icon={GraduationCap} />
          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <Card key={idx} className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-48 shrink-0">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                    {edu.period}
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-zinc-500 font-medium">
                    <span>{edu.institution}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
                    {edu.details.map((detail, i) => (
                      <span key={i} className="text-xs text-zinc-500 italic">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionTitle title="Skills & Expertise" icon={Code} />
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-3 bg-white border border-zinc-200 rounded-2xl text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-all cursor-default shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership & Volunteering */}
        <section id="leadership">
          <SectionTitle title="Leadership & Volunteering" icon={Award} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...LEADERSHIP, ...VOLUNTEERING].map((item, idx) => (
              <Card key={idx}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-zinc-900">{item.role}</h3>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-zinc-500 mb-4">{item.organization}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex gap-2 text-sm text-zinc-600 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 shrink-0 mt-1.5"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="pt-20 border-t border-zinc-200 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Let's connect.</h2>
            <p className="text-zinc-500">Currently seeking research opportunities and internships.</p>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 bg-zinc-900 text-white rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Mail size={24} />
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border border-zinc-200 text-zinc-900 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border border-zinc-200 text-zinc-900 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Globe size={24} />
            </a>
          </div>
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] pt-12">
            © {new Date().getFullYear()} {PERSONAL_INFO.name} • Built with Precision
          </div>
        </footer>
      </main>
    </div>
  );
}
