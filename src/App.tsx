import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Code, Briefcase, BookOpen, MapPin, GraduationCap, Award } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = {
    languages: ["PHP", "JavaScript", "Python", "C++"],
    frameworks: ["Laravel", "Express.js", "React", "Bootstrap", "Tailwind CSS"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "PHPStorm"],
    other: ["Indonesian (Native)", "English"],
    design: ["Figma", "Wireframes", "Canva", "UI/UX Design", "Prototyping"]
  };

  const experience = [
    {
      company: "Red System",
      role: "Web Developer Intern",
      period: "August 2025 - November 2025",
      description: "Developed modern website design for Red Studio using React and Tailwind CSS, focusing on responsive design and user experience.",
      skills: ["React", "Tailwind CSS", "Web Design"]
    },
    {
      company: "BPKAD Badung",
      role: "Junior IT Consultant",
      period: "2024",
      description: "Provided IT consulting services for the Regional Financial and Asset Management Agency of Badung.",
      skills: ["IT Consulting", "System Analysis"]
    },
    {
      company: "Inet Global",
      role: "Network Engineer Intern",
      period: "2021",
      description: "Gained hands-on experience in network engineering and infrastructure management.",
      skills: ["Network Engineering", "Infrastructure"]
    }
  ];

  const projects = [
    {
      title: "Back-End Web Developer - Final Project",
      description: "Team-based project developing a PHP and MySQL web application for managing products, transactions, suppliers, and users. Contributed to administrative backend development, including authentication, access control, and admin interface logic.",
      tags: ["PHP", "MySQL", "Authentication", "Backend"],
      github: "github.com/Ramasataka/inve-barang",
      type: "Academic"
    },
    {
      title: "Network Programming - Email Automation",
      description: "Collaborative project focused on creating a Python application for automated email delivery via SMTP. Implemented email sending logic and input handling for recipients, subject lines, and message content with secure SSL transmission.",
      tags: ["Python", "SMTP", "SSL", "Automation"],
      github: "https://github.com/Ramasataka/python-email",
      type: "Academic"
    },
    {
      title: "Secure Web Programming",
      description: "Final project focused on implementing secure web development practices and protocols to ensure data protection and system integrity.",
      tags: ["Web Security", "Secure Coding", "PHP"],
      github: "github.com/Ramasataka/express-js-uas",
      type: "Academic"
    },
    {
      title: "IoT-Based Pet Care System",
      description: "Internet of Things project developing an automated pet care system with remote monitoring and control capabilities using IoT sensors and actuators.",
      tags: ["IoT", "C++", "Hardware Integration", "Sensors"],
      github: "https://github.com/Krisnaarji",
      type: "Academic"
    },
    {
      title: "Red Studio Design",
      description: "Internship project at PT GUNA TEKNOLOGI NUSANTARA creating a modern, responsive website design for Red Studio with focus on user experience and visual appeal.",
      tags: ["React", "Tailwind CSS", "UI/UX", "Responsive Design"],
      github: "https://github.com/Krisnaarji/redstudio",
      type: "Internship"
    },
    {
      title: "Battleship Game - Java",
      description: "Classic Battleship game implementation using pure Java, demonstrating object-oriented programming principles and game logic development.",
      tags: ["Java", "OOP", "Game Development"],
      github: "https://github.com/Krisnaarji/Battleship-JAVA",
      type: "Academic"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      major: "Computer System",
      institution: "ITB STIKOM BALI",
      period: "2022 - Expected 2026",
      icon: <GraduationCap className="text-purple-400" size={32} />
    },
    {
      degree: "Vocational High School",
      major: "Computer and Network Engineering",
      institution: "SMK NEGERI 1 DENPASAR",
      period: "2019 - 2022",
      icon: <Award className="text-pink-400" size={32} />
    }
  ];

  const caseStudy = {
    title: "RENTA — Sharing Economy Platform",
    course: "Technopreneurship",
    description: "Lead a colaborative case-based startup project identifying real-world problems in the rental market and transforming them into a technology-driven business opportunity. Conducted extensive field research through surveys and interviews with rental business owners and consumers.",
    highlights: [
      "Conducted market research with rental business owners and consumers",
      "Identified inefficiencies in fragmented manual rental services",
      "Applied Empathy Mapping and Why Analysis for user insights",
      "designed digital platform concept connecting renters and owners",
      "Gained experience in problem validation and startup development"
    ],
    tags: ["Market Research", "UX Research", "Business Development", "Startup"]
  };

  const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
              <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 transition">
                Krisna Arji
              </button>
            
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-purple-400 transition">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-purple-400 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-purple-400 transition">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition">Contact</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-300">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition text-left">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-purple-400 transition text-left">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-purple-400 transition text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-purple-400 transition text-left">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition text-left">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id='hero' className="p-60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-10">
              Made Krisna Arji Suputra
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Computer Science Student | Software Engineer / Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Denpasar, Bali</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>krisnaarji@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
                Get in Touch
              </a>
              <a href="#projects" className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-40 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">About Me</h3>
          <div className="max-w-4xl mx-auto mb-6">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              Passionate and enthusiastic Informatics student actively seeking opportunities to apply and grow technical skills in professional settings. I have hands-on experience in back-end development, network programming, secure web systems, and IoT integration through multiple team-based academic projects. Highly motivated to contribute, learn, and adapt to real-world development environments.
            </p>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-8 pt-20">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{edu.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-300 mb-2">{edu.major}</p>
                    <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Professional Experience</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-purple-300 text-lg">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition hover:transform hover:scale-105 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                    <Github size={20} />
                  </a>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

            <hr className='mt-20 text-purple-900 text-lg' />

          {/* Case Study */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Case Study</h3>
            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl p-8 border border-pink-500/20 max-w-5xl mx-auto">
              <div className="mb-6">
                <span className="text-xs font-semibold text-pink-400 bg-pink-500/20 px-3 py-1 rounded-full">
                  Technopreneurship
                </span>
                <h4 className="text-3xl font-bold text-white mt-4 mb-2">{caseStudy.title}</h4>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{caseStudy.description}</p>
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h5 className="text-xl font-semibold text-white mb-4">Key Achievements</h5>
                <ul className="space-y-3">
                  {caseStudy.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">•</span>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {caseStudy.tags.map((tag, i) => (
                  <span key={i} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Skills & Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code size={24} className="text-purple-400" />
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, i) => (
                  <span key={i} className="text-sm text-purple-300 bg-purple-500/20 px-3 py-2 rounded-lg">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-slate-800/50 p-6 rounded-xl border border-pink-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Briefcase size={24} className="text-pink-400" />
                Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((fw, i) => (
                  <span key={i} className="text-sm text-pink-300 bg-pink-500/20 px-3 py-2 rounded-lg">
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen size={24} className="text-purple-400" />
                Databases
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((db, i) => (
                  <span key={i} className="text-sm text-purple-300 bg-purple-500/20 px-3 py-2 rounded-lg">
                    {db}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-slate-800/50 p-6 rounded-xl border border-pink-500/20">
              <h4 className="text-xl font-semibold text-white mb-4">Development Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, i) => (
                  <span key={i} className="text-sm text-pink-300 bg-pink-500/20 px-3 py-2 rounded-lg">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20 md:col-span-2 lg:col-span-1">
              <h4 className="text-xl font-semibold text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((lang, i) => (
                  <span key={i} className="text-sm text-purple-300 bg-purple-500/20 px-3 py-2 rounded-lg">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-4">Design & Creative Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((tool, i) => (
                  <span key={i} className="text-sm text-purple-300 bg-purple-500/20 px-3 py-2 rounded-lg">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, internship opportunities, and collaborations.
          </p>
          <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/30 p-8 rounded-2xl border border-purple-500/20 mb-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center pt-10">
                <Mail className="text-purple-400 mx-auto mb-2" size={32} />
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a href="mailto:krisnaarji@gmail.com" className="text-white hover:text-purple-400 transition">
                  krisnaarji@gmail.com
                </a>
              </div>
              <div className="text-center pt-10">
                <MapPin className="text-purple-400 mx-auto mb-2" size={32} />
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white">Denpasar, Bali</p>
              </div>
              <div className="text-center pt-10">
                <Github className="text-purple-400 mx-auto mb-2" size={32}  />
                <p className="text-gray-400 text-sm mb-1">Github</p>
                <p className="text-white">Krisnaarji</p>
              </div>
              <div className="text-center pt-10">
                <Linkedin className="text-purple-400 mx-auto mb-2" size={32}  />
                <p className="text-gray-400 text-sm mb-1">Linkedin</p>
                <p className="text-white">Krisnaarji</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900/80 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 Made Krisna Arji Suputra. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}