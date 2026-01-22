import { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Menu, X, Code, Briefcase, 
  MapPin, GraduationCap, ChevronLeft, ChevronRight, 
  ArrowRight, ExternalLink, Users, Activity, Database, Gift, 
  Heart, Share2, Target, Wallet, DollarSign, 
  LayoutTemplate, BarChart3, Terminal, Cpu, Globe,
  
} from 'lucide-react';

// UTILS
const resolvePath = (path: string) => {
  if (path.startsWith('http')) return path;
  const baseUrl = import.meta.env.BASE_URL || '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};

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

// --- SUB-COMPONENTS ---

// 1. FUTURISTIC IMAGE GALLERY
const ProjectImageGallery = ({ images }: { images: ImageItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative group rounded-3xl overflow-hidden aspect-video border border-white/10 bg-neutral-900/50 shadow-2xl shadow-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
      
      <div 
        className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <img 
              src={resolvePath(img.src)} 
              alt={img.title} 
              className="w-full h-full object-contain bg-neutral-950" 
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent p-8 pt-20 backdrop-blur-[2px]">
              <h4 className="text-2xl font-bold text-white mb-2 font-sans tracking-tight">{img.title}</h4>
              <p className="text-gray-400 font-mono text-sm border-l-2 border-cyan-500 pl-3">{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        <button onClick={prevImage} className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 text-white transition-all backdrop-blur-md">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextImage} className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 text-white transition-all backdrop-blur-md">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-cyan-400 z-20">
        IMG_0{currentIndex + 1} / 0{images.length}
      </div>
    </div>
  );
};

// 2. BMC CAROUSEL COMPONENT
const BMCCarousel = ({ data }: { data: BMCItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setItemsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, data.length - itemsPerView);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative w-full h-full flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="flex justify-between items-end mb-6">
        <h5 className="text-white font-bold flex items-center gap-2">
          <BarChart3 className="text-cyan-500" size={20}/> Strategic Model
        </h5>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-cyan-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={nextSlide} 
            disabled={currentIndex === maxIndex}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-cyan-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden -mx-2 px-2 pb-4 flex-grow">
        <div 
          className="flex gap-4 transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + (itemsPerView > 1 ? 1 : 0))}%)` }} // Rough adjustment for gap
        >
          {data.map((item, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.66rem)] h-full"
            >
              <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-white border-b border-white/5 pb-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h5 className="font-bold text-sm uppercase tracking-wider">{item.title}</h5>
                </div>
                <ul className="space-y-3 flex-grow overflow-y-auto">
                  {item.items.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-cyan-500/50 mt-1">◆</span>
                      <span>{t}</span>
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

// 3. TECH BADGE
const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-medium bg-cyan-500/5 text-cyan-300 border border-cyan-500/20 shadow-[0_0_10px_-5px_rgba(6,182,212,0.5)]">
    {children}
  </span>
);

// MAIN COMPONENT
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('default');
  const [scrolled, setScrolled] = useState(false);
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Scroll Listener for Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading Screen Effect
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Fade out after reaching 100%
          return 100;
        }
        return prev + Math.random() * 15; // Random increment for realistic feel
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // --- DATA SECTIONS ---
  const experience = [
    {
      company: "Red System",
      role: "Web Developer Intern",
      period: "Aug '25 - Nov '25",
      description: "Architected modern frontend interfaces utilizing React ecosystem.",
      skills: ["React", "Tailwind", "UX"]
    },
    {
      company: "BPKAD Badung",
      role: "Jr. IT Consultant",
      period: "2024",
      description: "Optimized regional asset management workflows through IT consultation.",
      skills: ["Analysis", "Consulting"]
    },
    {
      company: "Inet Global",
      role: "Network Engineer",
      period: "2021",
      description: "Managed physical infrastructure and network topology integrity.",
      skills: ["Network", "Hardware"]
    }
  ];

  const projects = [
    {
      title: "Inve-Barang System",
      desc: "Comprehensive inventory management with supplier tracking.",
      tech: ["PHP", "MySQL"],
      link: "github.com/Ramasataka/inve-barang",
      type: "Full Stack"
    },
    {
      title: "Secure Python Mailer",
      desc: "Automated SMTP client with SSL encryption layers.",
      tech: ["Python", "SMTP", "Security"],
      link: "github.com/Ramasataka/python-email",
      type: "Automation"
    },
    {
      title: "Red Studio Portfolio",
      desc: "High-performance agency website with immersive animations.",
      tech: ["React", "Tailwind"],
      link: "krisnaarji.github.io/redstudio",
      type: "Frontend"
    },
    {
      title: "Battleship Engine",
      desc: "Pure Java implementation of classic strategy game logic.",
      tech: ["Java", "OOP"],
      link: "github.com/Krisnaarji/Battleship-JAVA",
      type: "Game Dev"
    }
  ];

  const spotlightProjects = [
    {
      id: "p1",
      title: "Company Email System",
      desc: "A robust desktop application tailored for corporate environments. Features secure authentication, real-time database lookup, and automated SMTP dispatching.",
      tech: ["Python Tkinter", "SMTP Protocol", "Security/SSL"],
      link: "github.com/Ramasataka/python-email",
      images: [
        { src: "images/login.png", title: "Security Gate", description: "Encrypted login authentication interface." },
        { src: "images/home.png", title: "Dashboard", description: "Central command hub for email operations." },
        { src: "images/isiEmail.png", title: "Composer", description: "Rich text editor with attachment capabilities." },
        { src: "images/emailTerkirim.png", title: "Dispatch", description: "Real-time delivery confirmation modal." }
      ]
    },
    {
      id: "p2",
      title: "Red Studio Agency",
      desc: "A high-fidelity corporate profile website designed for a creative agency. Implements modern glassmorphism, responsive grids, and interactive service showcases.",
      tech: ["React.js", "Tailwind CSS", "Vite"],
      link: "krisnaarji.github.io/redstudio",
      images: [
        { src: "images/red-hero.png", title: "Hero Section", description: "Immersive landing area with bold typography." },
        { src: "images/red-services.png", title: "Service Grid", description: "Clean layout showcasing agency capabilities." },
        { src: "images/red-works.png", title: "Portfolio Slider", description: "Interactive gallery of past client work." },
        { src: "images/red-contact.png", title: "Contact Modal", description: "User-friendly overlay for client inquiries." }
      ]
    }
  ];

  const caseStudy = {
    title: "RENTA Platform",
    role: "Technopreneurship",
    desc: "A peer-to-peer sharing economy solution designed to bridge the gap in the fragmented rental market through digital transformation.",
    stats: [
        { label: "Market Research", value: "Verified" },
        { label: "Business Model", value: "B2C / C2C" },
        { label: "Prototype", value: "High Fidelity" }
    ]
  };

  // FULL 9-BLOCK BMC DATA
  const rentaBMC = [
    { title: "Key Partners", icon: <Users size={18}/>, items: ["Community Leaders", "Equipment Vendors", "Insurance Provider", "Payment Gateway"] },
    { title: "Key Activities", icon: <Activity size={18}/>, items: ["Platform Development", "User Verification", "Marketing", "Logistics Mgmt"] },
    { title: "Key Resources", icon: <Database size={18}/>, items: ["Tech Infrastructure", "User Data", "Brand IP", "Funding"] },
    { title: "Value Propositions", icon: <Gift size={18}/>, items: ["Access over Ownership", "Verified Trust System", "Instant Insurance", "Convenience"] },
    { title: "Customer Relations", icon: <Heart size={18}/>, items: ["Community Building", "24/7 Support", "Rating System", "Self-Service"] },
    { title: "Channels", icon: <Share2 size={18}/>, items: ["Mobile App", "Website", "Social Media", "Community Events"] },
    { title: "Customer Segments", icon: <Target size={18}/>, items: ["Gen Z / Millennials", "Travelers", "Hobbyists", "Gig Workers"] },
    { title: "Cost Structure", icon: <Wallet size={18}/>, items: ["Server/Dev Costs", "Marketing CAC", "Staff Salaries", "Legal/Insurance"] },
    { title: "Revenue Streams", icon: <DollarSign size={18}/>, items: ["Transaction Fees (10%)", "Insurance Premium", "Promoted Listings", "Subscription"] },
  ];

  const handleSpotlightNav = (direction: 'next' | 'prev') => {
    setActiveSpotlightIndex(prev => {
      if (direction === 'next') return prev === spotlightProjects.length - 1 ? 0 : prev + 1;
      return prev === 0 ? spotlightProjects.length - 1 : prev - 1;
    });
  };

  return (
    <div className="min-h-screen bg-black text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans overflow-x-hidden">
      
      {/* --- LOADING SCREEN --- */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500" style={{ opacity: loading ? 1 : 0 }}>
          <div className="text-center">
            {/* Animated Logo */}
            <div className="relative mb-8">
              <div className="w-20 h-20 mx-auto relative">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
                <div 
                  className="absolute inset-0 rounded-full border-4 border-t-cyan-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"
                  style={{ animationDuration: '1s' }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">KA</span>
                </div>
              </div>
            </div>

            {/* Loading Text */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Loading Portfolio</h2>
              <p className="text-gray-500 font-mono text-sm">Initializing experience...</p>
            </div>

            {/* Progress Bar */}
            <div className="w-64 mx-auto">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                ></div>
              </div>
              <p className="text-cyan-400 font-mono text-xs mt-2">{Math.floor(Math.min(loadingProgress, 100))}%</p>
            </div>
          </div>

          {/* Background Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      )}
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* --- FLOATING NAVBAR --- */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto ${scrolled ? 'scale-95' : 'scale-100'}`}>
        <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/50 flex items-center justify-between gap-8">
          <button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-white tracking-tighter flex items-center gap-2">
            <span className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
            KA<span className="hidden md:inline text-neutral-500 font-mono text-sm">.DEV</span>
          </button>

          <div className="hidden md:flex gap-1 bg-white/5 p-1 rounded-full">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {item}
              </button>
            ))}
          </div>

          <button onClick={() => scrollToSection('contact')} className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Hire Me
          </button>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full mt-4 left-0 w-full bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl origin-top animate-in slide-in-from-top-5 fade-in">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="p-3 text-left text-gray-300 hover:bg-white/5 rounded-xl transition-all">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id='hero' className="relative pt-40 pb-20 md:pt-40 md:pb-32 px-6 flex flex-col items-center justify-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-mono mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          AVAILABLE FOR INTERNSHIP / WORK
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 font-outfit leading-[0.9]">
          Engineering <br className="hidden md:block"/>
          <span className="text-zinc-500">Digital Precision.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
          I am <span className='font-bold text-white'>Krisna</span> <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Arji. </span> 
           An computer science Student bridging the gap between <span className="text-white font-medium">complex backend logic</span> and <span className="text-white font-medium">intuitive frontend design</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => scrollToSection('projects')} className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2">Explore Work <ArrowRight size={18}/></span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-medium rounded-full transition-all backdrop-blur-sm">
            Contact Me
          </button>
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-20 flex gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <Code size={32} /> <Terminal size={32} /> <Database size={32} /> <Cpu size={32} /> <Globe size={32} />
        </div>
      </section>

      {/* --- BENTO GRID LAYOUT (Experience & About) --- */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* About Card */}
          <div className="md:col-span-8 bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code size={200} className="text-cyan-500 transform rotate-12"/>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Engineering the Future</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              I am a Computer Science student at ITB STIKOM Bali with a relentless drive for solving complex problems. 
              My expertise bridges the gap between <span className="text-cyan-400">Back-end Logic</span>, <span className="text-purple-400">Network Security</span>, 
              and <span className="text-pink-400">Creative Frontend</span> execution.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-3 bg-black/40 px-4 py-3 rounded-xl border border-white/5">
                <GraduationCap className="text-cyan-400"/>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-mono">Education</p>
                  <p className="text-white font-medium">ITB STIKOM Bali</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 px-4 py-3 rounded-xl border border-white/5">
                <MapPin className="text-purple-400"/>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-mono">Location</p>
                  <p className="text-white font-medium">Bali, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Stack */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex-grow">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-cyan-400"/> Experience
              </h4>
              <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-2 before:w-0.5 before:bg-white/10">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <div className="absolute left-[3px] top-2 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-cyan-500 transition-colors outline outline-4 outline-black"></div>
                    <h5 className="text-white font-medium text-lg">{exp.company}</h5>
                    <p className="text-xs text-cyan-400 font-mono mb-1">{exp.role}</p>
                    <p className="text-xs text-gray-500">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Selected Works</h2>
            <p className="text-gray-400">Highlighting academic and internship milestones.</p>
          </div>
          <a href="https://github.com/Krisnaarji" target="_blank" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-white transition-colors">
            View Github <ArrowRight size={16}/>
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-20">
          {projects.map((project, idx) => (
            <a 
              href={`https://${project.link}`} 
              target="_blank" 
              key={idx} 
              className="group bg-neutral-900/40 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  <LayoutTemplate size={24}/>
                </div>
                <span className="text-xs font-mono text-gray-500 group-hover:text-cyan-400 transition-colors">{project.type}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => <TechBadge key={i}>{t}</TechBadge>)}
              </div>
            </a>
          ))}
        </div>

        {/* DYNAMIC SPOTLIGHT SECTION  */}
        <div className="bg-gradient-to-b from-neutral-900/60 to-black border border-white/10 rounded-3xl p-2 md:p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-5 px-6 pt-6 flex flex-col h-full justify-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-6">
                  Featured Spotlight {activeSpotlightIndex + 1}/{spotlightProjects.length}
                </span>
                <h2 className="text-4xl font-bold text-white mb-4 animate-in fade-in slide-in-from-left-4 duration-300 key={activeSpotlightIndex}">
                  {spotlightProjects[activeSpotlightIndex].title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-in fade-in slide-in-from-left-4 duration-500 key={activeSpotlightIndex}">
                  {spotlightProjects[activeSpotlightIndex].desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {spotlightProjects[activeSpotlightIndex].tech.map((t, i) => (
                    <TechBadge key={i}>{t}</TechBadge>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  <a href={`https://${spotlightProjects[activeSpotlightIndex].link}`} target="_blank" className="inline-flex items-center gap-3 text-white border-b border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                    View Project <ExternalLink size={16}/>
                  </a>
                  
                  {/* Spotlight Navigation Controls */}
                  <div className="flex gap-2 ml-auto lg:ml-0">
                    <button onClick={() => handleSpotlightNav('prev')} className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all"><ChevronLeft size={20}/></button>
                    <button onClick={() => handleSpotlightNav('next')} className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all"><ChevronRight size={20}/></button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              {/* Using key to force re-render/animation when project changes */}
                <ProjectImageGallery 
                  key={spotlightProjects[activeSpotlightIndex].id}
                  images={spotlightProjects[activeSpotlightIndex].images} 
                />
            </div>
          </div>
        </div>
      </section>

      {/* --- CASE STUDY --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden">
          <div className="grid lg:grid-cols-12 min-h-[600px]">
            {/* Sidebar Controls */}
            <div className="lg:col-span-4 bg-neutral-950 p-8 border-r border-white/10 flex flex-col">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-2">RENTA <span className="text-cyan-500">.ID</span></h3>
                  <p className="text-sm text-gray-500">Case Study: Technopreneurship</p>
                </div>
                
                <div className="space-y-2 flex-grow">
                  <button onClick={() => setActiveTab('default')} className={`w-full text-left p-4 rounded-xl transition-all border ${activeTab === 'default' ? 'bg-white/10 border-cyan-500/50 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}>
                      <span className="font-bold block">01. Overview</span>
                      <span className="text-xs opacity-70">Problem, Solution & Stats</span>
                  </button>
                  <button onClick={() => setActiveTab('bmc')} className={`w-full text-left p-4 rounded-xl transition-all border ${activeTab === 'bmc' ? 'bg-white/10 border-cyan-500/50 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}>
                      <span className="font-bold block">02. Strategy</span>
                      <span className="text-xs opacity-70">Business Model Canvas (9 Blocks)</span>
                  </button>
                  <button onClick={() => setActiveTab('design')} className={`w-full text-left p-4 rounded-xl transition-all border ${activeTab === 'design' ? 'bg-white/10 border-cyan-500/50 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}>
                      <span className="font-bold block">03. Interface</span>
                      <span className="text-xs opacity-70">UI/UX Design Mockup</span>
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-xs text-gray-600 uppercase font-mono mb-3">Project Role</p>
                    <p className="text-white">Lead Researcher & UI Designer</p>
                </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8 p-8 md:p-12 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-30 relative overflow-hidden">
              {activeTab === 'default' && (
                <div className="animate-in fade-in slide-in-from-right-10 duration-500 h-full flex flex-col justify-center">
                  <h4 className="text-3xl font-bold text-white mb-6 leading-tight">{caseStudy.desc}</h4>
                  <div className="grid grid-cols-3 gap-6 mt-12">
                    {caseStudy.stats.map((stat, i) => (
                      <div key={i} className="bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <p className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
                        <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'bmc' && (
                <BMCCarousel data={rentaBMC} />
              )}

              {activeTab === 'design' && (
                <div className="h-full flex flex-col animate-in zoom-in-95 duration-500">
                  <div className="flex-grow bg-neutral-900 rounded-xl border border-white/10 overflow-hidden relative group">
                    <img src={resolvePath('images/renta-desain.png')} alt="Design" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div>
                          <h5 className="text-white font-bold text-xl">High Fidelity Prototype</h5>
                          <p className="text-gray-400 text-sm">Figma • Interaction Design</p>
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS TICKER --- */}
      <section id="skills" className="py-10 border-y border-white/5 bg-neutral-900/50 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-12 animate-infinite-scroll min-w-full justify-center flex-wrap px-6">
            {['JavaScript', 'React', 'Tailwind', 'PHP', 'Laravel', 'Python', 'C++', 'MySQL', 'Git', 'Figma', 'Linux', 'Networking'].map((skill, i) => (
              <span key={i} className="text-2xl font-bold text-gray-600 hover:text-cyan-500 transition-colors cursor-default select-none">
                {skill}
              </span>
            ))}
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Currently looking for internship opportunities. Let's build something extraordinary together.
          </p>
          <div className="flex justify-center gap-6">
              <a href="mailto:krisnaarji@gmail.com" className="p-4 bg-white text-black rounded-full hover:bg-cyan-400 hover:scale-110 transition-all duration-300">
                <Mail size={24}/>
              </a>
              <a href="https://linkedin.com" className="p-4 bg-neutral-800 text-white border border-white/10 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300">
                <Linkedin size={24}/>
              </a>
              <a href="https://github.com/Krisnaarji" className="p-4 bg-neutral-800 text-white border border-white/10 rounded-full hover:bg-black hover:border-white hover:scale-110 transition-all duration-300">
                <Github size={24}/>
              </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-black">
        <p>&copy; 2025 Krisna Arji. Engineered with React & Tailwind.</p>
      </footer>
    </div>
  );
}