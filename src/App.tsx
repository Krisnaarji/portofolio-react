import { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Menu, X, Code, Briefcase, BookOpen, 
  MapPin, GraduationCap, Award, ChevronLeft, ChevronRight, 
  ArrowLeft, ArrowRight, ExternalLink,
  Users, Activity, Database, Gift, Heart, Share2, Target, Wallet, DollarSign,
  CheckCircle2, LayoutTemplate, BarChart3, ListChecks
} from 'lucide-react';

// INTERFACES 
interface ImageItem {
  src: string;
  title: string;
  description: string;
}

interface BMCItem {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

// SUB-COMPONENT: IMAGE GALLERY
const ProjectImageGallery = ({ images }: { images: ImageItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative group bg-slate-800 rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden aspect-video">
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-contain bg-slate-900" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 to-transparent p-6 text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-1">{img.title}</h4>
              <p className="text-gray-300 text-sm">{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-purple-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-purple-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10">
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-xs text-white backdrop-blur-sm z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

// SUB-COMPONENT: BMC CAROUSEL
const BMCCarousel = ({ data }: { data: BMCItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(data.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative group h-full flex flex-col">
      <div className="flex justify-between items-end mb-4 px-2">
        <h5 className="text-xl font-bold text-white border-l-4 border-pink-500 pl-3">
          Business Strategy (BMC)
        </h5>
        <div className="flex gap-2">
          <button onClick={prevSlide} className="bg-slate-700 hover:bg-pink-600 text-white p-2 rounded-full transition-all"><ChevronLeft size={20} /></button>
          <button onClick={nextSlide} className="bg-slate-700 hover:bg-pink-600 text-white p-2 rounded-full transition-all"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl flex-grow">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {data.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-full md:min-w-[50%] p-2 box-border h-full" 
            >
              <div className="bg-slate-800/80 h-full p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:bg-slate-800 flex flex-col shadow-lg">
                <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-3">
                  <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
                    {item.icon}
                  </div>
                  <h6 className="font-bold text-white text-sm uppercase tracking-wider">{item.title}</h6>
                </div>
                <ul className="space-y-2 flex-grow overflow-y-auto custom-scrollbar">
                  {item.items.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2 leading-relaxed">
                      <span className="text-pink-500/50 mt-1.5 text-[8px]">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// MAIN COMPONENT
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('default'); 
  
  const caseStudyRef = useRef<HTMLDivElement>(null);

  // DATA
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
      description: "Team-based project developing a PHP and MySQL web application for managing products, transactions, suppliers, and users. Contributed to administrative backend development.",
      tags: ["PHP", "MySQL", "Authentication", "Backend"],
      github: "github.com/Ramasataka/inve-barang",
      type: "Academic"
    },
    {
      title: "Network Programming - Email Automation",
      description: "Collaborative project focused on creating a Python application for automated email delivery via SMTP with SSL security.",
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
      description: "IoT project developing an automated pet care system with remote monitoring and control capabilities using sensors and actuators.",
      tags: ["IoT", "C++", "Hardware Integration", "Sensors"],
      github: "https://github.com/Krisnaarji",
      type: "Academic"
    },
    {
      title: "Red Studio Design",
      description: "Internship project creating a modern, responsive website design for Red Studio with a focus on UI/UX and visual appeal.",
      tags: ["React", "Tailwind CSS", "UI/UX", "Responsive Design"],
      github: "https://github.com/Krisnaarji/redstudio",
      type: "Internship"
    },
    {
      title: "Battleship Game - Java",
      description: "Classic Battleship game implementation using pure Java, demonstrating object-oriented programming principles (OOP).",
      tags: ["Java", "OOP", "Game Development"],
      github: "https://github.com/Krisnaarji/Battleship-JAVA",
      type: "Academic"
    }
  ];

  const spotlightProjects = [
    {
      id: "p1",
      title: "Company Email System",
      subtitle: "Python Automation & UI Integration",
      description: "A comprehensive visual tour of the Python-based Email Automation system interface. This desktop application features secure login, real-time recipient search, and automated email dispatching with attachment support.",
      link: "https://github.com/Ramasataka/python-email", 
      images: [
        { src: "/images/login.png", title: "Secure Login Interface", description: "Secure user authentication page serving as the main system gateway." },
        { src: "/images/home.png", title: "Admin Dashboard", description: "Central navigation hub for accessing email sending features and message history." },
        { src: "/images/select.png", title: "Recipient Search", description: "Real-time recipient search feature for efficient email dispatch." },
        { src: "/images/isiEmail.png", title: "Email Composition", description: "Complete email composition form with subject, body, and attachment support." },
        { src: "/images/emailTerkirim.png", title: "Success Feedback", description: "Visual notification (Popup) confirming successful email delivery." },
        { src: "/images/riwayat.png", title: "Sent History Log", description: "History table to track email delivery status and timestamps." }
      ]
    },
    {
      id: "p2",
      title: "Red Studio Website",
      subtitle: "Modern Agency Portfolio",
      description: "Modern & Responsive Company Profile tailored for a creative branding agency. Built with React & Tailwind CSS, featuring a dark-themed immersive UI, interactive sliders, and a focus on strong typography.",
      link: "https://krisnaarji.github.io/redstudio",
      images: [
        { src: "/images/red-hero.png", title: "Immersive Hero Section", description: "Main landing section with modern dark design and bold typography to strengthen brand identity." },
        { src: "/images/red-services.png", title: "Service Catalog Grid", description: "Responsive grid layout displaying key agency services with minimalist iconography." },
        { src: "/images/red-works.png", title: "Interactive Portfolio Slider", description: "Client work showcase using an interactive slider component for seamless navigation." },
        { src: "/images/red-detail.png", title: "Service Detail Layout", description: "Detailed service page combining informative content with relevant case study visuals." },
        { src: "/images/red-why.png", title: "Value Proposition Section", description: "Informative section explaining service benefits with hierarchical typography." },
        { src: "/images/red-faq.png", title: "Interactive FAQ Accordion", description: "Accordion feature (Expand/Collapse) to present common questions without cluttering the UI." },
        { src: "/images/red-other.png", title: "Other Services Navigation", description: "Quick navigation grid allowing users to explore other services easily." },
        { src: "/images/red-contact.png", title: "Contact Modal Form", description: "Clean, user-friendly overlay contact form designed to increase client conversion." }
      ]
    }
  ];

  const rentaBMC = [
    {
      title: "Key Partners",
      icon: <Users size={24} />,
      items: ["Hobby communities & associations", "Rental providers", "Official drop points", "Insurance Partners"]
    },
    {
      title: "Key Activities",
      icon: <Activity size={24} />,
      items: ["Platform Development", "Security Verification", "Search Algorithm", "Logistics Management"]
    },
    {
      title: "Value Propositions",
      icon: <Gift size={24} />,
      items: ["Unique Item Access", "Delivery & Drop points", "Insurance Protection", "Trusted Rating System"]
    },
    {
      title: "Customer Relations",
      icon: <Heart size={24} />,
      items: ["Trust via 3rd party verification", "Responsive Support", "Personalized Recommendations"]
    },
    {
      title: "Customer Segments",
      icon: <Target size={24} />,
      items: ["Outdoor/Creative Communities", "Item Owners", "Students & Travelers", "Urban Millennials"]
    },
    {
      title: "Key Resources",
      icon: <Database size={24} />,
      items: ["IT Infrastructure", "Verified Database", "Partner Network", "Rating System"]
    },
    {
      title: "Channels",
      icon: <Share2 size={24} />,
      items: ["Website & Apps", "Social Media", "Community Events", "Digital Ads"]
    },
    {
      title: "Cost Structure",
      icon: <Wallet size={24} />,
      items: ["App Maintenance", "Marketing", "Logistics Ops", "Salaries & Insurance Premiums"]
    },
    {
      title: "Revenue Streams",
      icon: <DollarSign size={24} />,
      items: ["Transaction Fees", "Insurance Fees", "Premium Membership", "Advertising"]
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
    description: "Lead a collaborative case-based startup project identifying real-world problems in the rental market and transforming them into a technology-driven business opportunity.",
    highlights: [
      "Conducted market research with rental business owners",
      "Identified inefficiencies in fragmented manual rental services",
      "Applied Empathy Mapping and Why Analysis",
      "Designed digital platform concept",
      "Gained experience in problem validation"
    ],
    tags: ["Market Research", "UX Research", "Business Development", "Startup"]
  };

  const handleNextProject = () => {
    setActiveSpotlightIndex((prev) => (prev === spotlightProjects.length - 1 ? 0 : prev + 1));
  };

  const handlePrevProject = () => {
    setActiveSpotlightIndex((prev) => (prev === 0 ? spotlightProjects.length - 1 : prev - 1));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    
    if (caseStudyRef.current) {
      const yOffset = -100; 
      const element = caseStudyRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({top: y, behavior: 'smooth'});
    }
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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10">
            Made Krisna Arji Suputra
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Computer Science Student | Software Engineer / Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 mb-8">
            <div className="flex items-center gap-2"><MapPin size={18} /><span>Denpasar, Bali</span></div>
            <div className="flex items-center gap-2"><Mail size={18} /><span>krisnaarji@gmail.com</span></div>
          </div>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">Get in Touch</a>
            <a href="#projects" className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition">View Projects</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-40 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">About Me</h3>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-20 leading-relaxed">
            Passionate and enthusiastic Informatics student actively seeking opportunities to apply and grow technical skills in professional settings. I have hands-on experience in back-end development, network programming, secure web systems, and IoT integration through multiple team-based academic projects.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{edu.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-300 mb-2">{edu.major}</p>
                    <p className="text-gray-400 text-sm">{edu.institution} | {edu.period}</p>
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
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                    <p className="text-purple-300 text-lg">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">{skill}</span>
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
          
          {/* Grid Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition hover:transform hover:scale-105 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">{project.type}</span>
                  <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition"><Github size={20} /></a>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* MASTER CAROUSEL  */}
          <div className="mb-24 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900/50 p-2 rounded-3xl">
              
              {/* LEFT COLUMN: TEXT & CONTROLS */}
              <div className="lg:col-span-5 p-6 md:p-8">
                <span className="text-xs font-bold text-purple-500 tracking-widest uppercase mb-4 block">Project Spotlight</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {spotlightProjects[activeSpotlightIndex].title}
                </h3>
                <p className="text-purple-300 text-lg mb-6">
                  {spotlightProjects[activeSpotlightIndex].subtitle}
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {spotlightProjects[activeSpotlightIndex].description}
                </p>

                {spotlightProjects[activeSpotlightIndex].link && (
                  <a 
                    href={spotlightProjects[activeSpotlightIndex].link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-all transform hover:-translate-y-1 mb-8"
                  >
                    Visit Live Site <ExternalLink size={18} />
                  </a>
                )}

                {/* PROJECT NAVIGATION */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                  <button 
                    onClick={handlePrevProject}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition group px-4 py-2 rounded-lg hover:bg-slate-800"
                  >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
                    Prev Project
                  </button>
                  <div className="h-4 w-px bg-slate-700"></div>
                  <button 
                    onClick={handleNextProject}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition group px-4 py-2 rounded-lg hover:bg-slate-800"
                  >
                    Next Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: IMAGE CAROUSEL */}
              <div className="lg:col-span-7 w-full ">
                <ProjectImageGallery 
                  key={spotlightProjects[activeSpotlightIndex].id}
                  images={spotlightProjects[activeSpotlightIndex].images} 
                />
              </div>
            </div>
          </div>
          
          <hr className='border-purple-900/30 mb-20' />

          {/* Case Study RENTA*/}
          <div 
            ref={caseStudyRef}
            className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-2xl p-8 border border-pink-500/20 max-w-6xl mx-auto flex flex-col min-h-[650px]"
          >
            <div className="mb-8">
              <span className="text-xs font-semibold text-pink-400 bg-pink-500/20 px-3 py-1 rounded-full">Technopreneurship</span>
              <h4 className="text-3xl font-bold text-white mt-4 mb-2">{caseStudy.title}</h4>
              <p className="text-gray-300 mb-6 text-lg">{caseStudy.description}</p>
            </div>

            {/* Dynamic Content */}
            <div className="flex-grow relative">
              {activeTab === 'default' && (
                <div className="bg-slate-800/50 rounded-xl p-8 border border-white/5 animate-fadeIn h-full flex flex-col justify-center">
                  <h5 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ListChecks className="text-pink-500" /> Key Achievements</h5>
                  <ul className="space-y-4">
                    {caseStudy.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <span className="text-pink-400 mt-1 group-hover:text-pink-300 transition"><CheckCircle2 size={20} /></span>
                        <span className="text-gray-300 group-hover:text-white transition">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'bmc' && (
                <div className="animate-fadeIn h-full">
                  <BMCCarousel data={rentaBMC} />
                </div>
              )}

              {activeTab === 'design' && (
                <div className="bg-slate-800 rounded-xl border border-pink-500/20 overflow-hidden animate-fadeIn h-full flex flex-col">
                  <div className="p-4 border-b border-slate-700 bg-slate-900/50 flex justify-between items-center">
                    <h5 className="text-white font-bold flex items-center gap-2"><LayoutTemplate size={20} className="text-pink-500" /> Landing Page Design</h5>
                    <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/50"></div><div className="w-3 h-3 rounded-full bg-yellow-500/50"></div><div className="w-3 h-3 rounded-full bg-green-500/50"></div></div>
                  </div>
                  <div className="relative flex-grow bg-slate-900 overflow-y-auto group">
                    <img src="/images/renta-desain.jpg" alt="Renta Landing Page Mockup" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                      <p className="text-sm text-gray-300">Proposed landing page design for Renta, emphasizing a clean interface with a prominent search bar and clear value propositions (Insurance, Drop Points).</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <button onClick={() => handleTabChange('default')} className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all ${activeTab === 'default' ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/20' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}>
                <ListChecks size={20} /><span className="font-medium">Achievements</span>
              </button>
              <button onClick={() => handleTabChange('bmc')} className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all ${activeTab === 'bmc' ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/20' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}>
                <BarChart3 size={20} /><span className="font-medium">Business Strategy</span>
              </button>
              <button onClick={() => handleTabChange('design')} className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all ${activeTab === 'design' ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/20' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}>
                <LayoutTemplate size={20} /><span className="font-medium">Website Design</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Contact (Standard) */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Skills & Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><Code size={24} className="text-purple-400" /> Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, i) => (<span key={i} className="text-sm text-purple-300 bg-purple-500/20 px-3 py-2 rounded-lg">{lang}</span>))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-slate-800/50 p-6 rounded-xl border border-pink-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><Briefcase size={24} className="text-pink-400" /> Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((fw, i) => (<span key={i} className="text-sm text-pink-300 bg-pink-500/20 px-3 py-2 rounded-lg">{fw}</span>))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><BookOpen size={24} className="text-purple-400" /> Databases</h4>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((db, i) => (<span key={i} className="text-sm text-purple-300 bg-purple-500/20 px-3 py-2 rounded-lg">{db}</span>))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/50 to-slate-800/50 p-6 rounded-xl border border-pink-500/20">
              <h4 className="text-xl font-semibold text-white mb-4">Development Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, i) => (<span key={i} className="text-sm text-pink-300 bg-pink-500/20 px-3 py-2 rounded-lg">{tool}</span>))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 p-6 rounded-xl border border-purple-500/20 md:col-span-2 lg:col-span-1">
              <h4 className="text-xl font-semibold text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((lang, i) => (<span key={i} className="text-sm text-purple-300 bg-purple-500/20 px-3 py-2 rounded-lg">{lang}</span>))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/50 to-slate-800/50 p-6 rounded-xl border border-pink-500/20">
              <h4 className="text-xl font-semibold text-white mb-4">Design & Creative Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((tool, i) => (<span key={i} className="text-sm text-purple-300 bg-purple-500/20 px-3 py-2 rounded-lg">{tool}</span>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-xl text-gray-300 mb-12">I'm always open to discussing new projects, internship opportunities, and collaborations.</p>
          <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/30 p-8 rounded-2xl border border-purple-500/20 mb-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center pt-10"><Mail className="text-purple-400 mx-auto mb-2" size={32} /><p className="text-gray-400 text-sm mb-1">Email</p><a href="mailto:krisnaarji@gmail.com" className="text-white hover:text-purple-400 transition">krisnaarji@gmail.com</a></div>
              <div className="text-center pt-10"><MapPin className="text-purple-400 mx-auto mb-2" size={32} /><p className="text-gray-400 text-sm mb-1">Location</p><p className="text-white">Denpasar, Bali</p></div>
              <div className="text-center pt-10"><Github className="text-purple-400 mx-auto mb-2" size={32} /><p className="text-gray-400 text-sm mb-1">Github</p><p className="text-white">Krisnaarji</p></div>
              <div className="text-center pt-10"><Linkedin className="text-purple-400 mx-auto mb-2" size={32} /><p className="text-gray-400 text-sm mb-1">Linkedin</p><p className="text-white">Krisnaarji</p></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-slate-900/80 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400"><p>© 2024 Made Krisna Arji Suputra. Built with React & Tailwind CSS.</p></div>
      </footer>
    </div>
  );
}