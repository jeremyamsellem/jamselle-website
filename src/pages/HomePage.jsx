import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CountUp from '../components/CountUp';
import GlareHover from '../components/GlareHover';
import ProjectModal from '../components/ProjectModal';
import { getRecentArticles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import { useScrollToHash } from '../hooks/useScrollToHash';

export default function HomePage() {
  useScrollToHash();

  const [scrolled, setScrolled] = useState(false);
  const [focusedStat, setFocusedStat] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recentArticles = getRecentArticles(3);

  const projects = [
    {
      id: 1,
      initials: "HY",
      companyName: "Hyro.ai - Healthcare GenAI Platform",
      type: "Healthcare AI",
      description: "Replaced traditional IVR system with cutting-edge GenAI platform for large healthcare institution across multiple hospitals and clinics.",
      achievements: [
        "Launched MVP in record 78 days from contract signing",
        "Successfully integrated across multiple hospitals and clinics",
        "Standardized rapid deployment process adopted company-wide"
      ],
      technologies: ["Agentic AI", "Healthcare APIs", "Telephony Integration", "LLMs", "IVR Systems", "RAG Architecture"],
      timeframe: "2024-2025"
    },
    {
      id: 2,
      initials: "OR",
      companyName: "OneReach.ai - National Retail Deployment",
      type: "Enterprise AI",
      description: "Deployed AI customer service solution across 1,500 retail stores nationwide while maintaining 99.97% uptime and zero negative customer impact.",
      achievements: [
        "Completed 1,500-store deployment in 11 months (1 month ahead of schedule)",
        "18% increase in customer satisfaction scores",
        "99.97% uptime exceeding 99.9% target",
        "12% improvement in customer retention rates"
      ],
      technologies: ["Conversational AI", "Scale Deployment", "Customer Experience", "Real-time Monitoring", "Enterprise Integration"],
      timeframe: "2022-2023"
    },
    {
      id: 3,
      initials: "AM",
      companyName: "Amelia - Banking AI System",
      type: "Financial AI",
      description: "Developed and deployed generative AI system for banking customer service handling 60 distinct use cases with 96.8% accuracy.",
      achievements: [
        "78% reduction in calls requiring human transfer",
        "Average wait time reduced from 8.5 minutes to 12 seconds",
        "312% ROI within 8 months ($2.3M annual savings)",
        "96.8% accurate response rate across all interactions"
      ],
      technologies: ["Agentic AI", "LLMs", "Voice Integration", "Banking Systems", "RLHF", "Dialogue Management"],
      timeframe: "2021-2022"
    },
    {
      id: 4,
      initials: "FS",
      companyName: "Fintech Startup - Tax Optimization Platform",
      type: "Conversational AI",
      description: "Led technical development of conversational AI platform for tax optimization, culminating in $2.3M Series A funding round.",
      achievements: [
        "Delivered POC in 8 weeks and MVP in 16 weeks",
        "85% accuracy in complex multi-turn tax scenarios",
        "Successfully raised $2.3M Series A funding",
        "78% conversation completion rate with strong user engagement"
      ],
      technologies: ["RAG Architecture", "Vector Databases", "Conversational AI", "OpenAI", "Hybrid Data Architecture"],
      timeframe: "2023-2024"
    }
  ];

  const customers = [
    { logo: "/img/hyro.png", displayName: "Hyro.ai" },
    { logo: "/img/onereach.png", displayName: "OneReach.ai" },
    { logo: "/img/amelia.png", displayName: "Amelia" },
    { logo: "/img/usaa.png", displayName: "USAA" },
    { logo: "/img/athenahealth.png", displayName: "Athena Health" },
    { logo: "/img/discounttire.png", displayName: "Discount Tire" },
    { logo: "/img/pepsico.png", displayName: "PepsiCo" },
    { logo: "/img/grady.png", displayName: "Grady Health Systems" },
    { logo: "/img/piedmont.png", displayName: "Piedmont" },
    { logo: "/img/SG.png", displayName: "Societe Generale" },
    { logo: "/img/snb.png", displayName: "SNB" },
    { logo: "/img/dayton.png", displayName: "Dayton" },
    { logo: "/img/UR.png", displayName: "Universal Robotics" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'AI Strategy': 'bg-blue-100 text-blue-700',
      'Implementation': 'bg-blue-100 text-blue-700',
      'Healthcare': 'bg-blue-100 text-blue-700',
    };
    return colors[category] || 'bg-blue-100 text-blue-700';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'glass shadow-blue-md' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-gradient">
            Jamselle Consulting
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-smooth">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-smooth">Portfolio</a>
            <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-smooth">Resources</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-smooth">About</a>
          </div>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="text-sm px-4 py-2 bg-gradient-blue-vibrant text-white rounded font-medium hover:shadow-blue-md transition-smooth hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-blue-vibrant rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full"></div>
        </div>
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-gradient">
            AI Strategy Without the Risk
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Help your organization navigate GenAI adoption and build defensible AI capabilities.
            Strategy, implementation readiness, and ongoing advisory from someone who's deployed
            AI solutions serving 10,000+ daily interactions.
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-blue-vibrant text-white rounded font-medium hover:shadow-blue-lg transition-smooth hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Start a Conversation <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById('resources').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border-2 border-blue-300 text-blue-600 rounded font-medium hover:bg-blue-50 transition-smooth hover:border-blue-500"
            >
              View Resources
            </button>
          </div>
        </div>
      </section>

      {/* Problem/Context */}
      <section className="bg-gradient-blue-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <GlareHover intensity={0.5}>
              <div className="bg-white rounded-lg p-8 shadow-elevation hover-lift">
                <div className="inline-block px-3 py-1 bg-gradient-blue-soft rounded-full mb-4">
                  <span className="text-sm font-semibold text-blue-700">THE REALITY</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  70% of enterprise GenAI projects fail to reach production. Most aren't technical problems—they're architectural and organizational ones.
                </p>
              </div>
            </GlareHover>
            <GlareHover intensity={0.5}>
              <div className="bg-white rounded-lg p-8 shadow-elevation hover-lift">
                <div className="inline-block px-3 py-1 bg-gradient-blue-soft rounded-full mb-4">
                  <span className="text-sm font-semibold text-blue-700">THE COST</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Your team is guessing at roadmaps, budgets balloon by 2-3x, and implementation timelines slip while you wait for clarity.
                </p>
              </div>
            </GlareHover>
            <GlareHover intensity={0.5}>
              <div className="bg-white rounded-lg p-8 shadow-elevation hover-lift">
                <div className="inline-block px-3 py-1 bg-gradient-blue-soft rounded-full mb-4">
                  <span className="text-sm font-semibold text-blue-700">THE OPPORTUNITY</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Strategic clarity upfront reduces risk, accelerates timelines by 30-40%, and gets your AI initiatives to production faster.
                </p>
              </div>
            </GlareHover>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">How I Help</h2>
          <p className="text-xl text-gray-600">Three ways to accelerate your AI journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group relative bg-white rounded-xl p-8 shadow-elevation hover-lift border-l-4 border-blue-500 overflow-hidden transition-all duration-300">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI Strategy & Roadmap</h3>
              <p className="text-gray-600 mb-6">
                Work with your C-suite and product leaders to build a multi-year GenAI strategy tailored to your business. Assess where you are, identify high-impact use cases, and create an implementation-ready roadmap.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Multi-year AI roadmap</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Use case prioritization</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Resource & budget planning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative bg-white rounded-xl p-8 shadow-elevation hover-lift border-l-4 border-blue-500 overflow-hidden transition-all duration-300">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Implementation Readiness</h3>
              <p className="text-gray-600 mb-6">
                Before you build, know what you're missing. Audit your data infrastructure, team capabilities, integration points, and compliance requirements. Get a clear playbook to execute.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Systems & data audit</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Readiness assessment</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Implementation playbook</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group relative bg-white rounded-xl p-8 shadow-elevation hover-lift border-l-4 border-blue-500 overflow-hidden transition-all duration-300">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fractional AI Advisor</h3>
              <p className="text-gray-600 mb-6">
                Ongoing strategic guidance for scaling companies building AI capabilities. Strategic decisions, vendor evaluation, architecture guidance, and roadmap refinement on a retainer basis.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>10-20 hours/month</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Strategic guidance</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Available as needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gradient-blue-light py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Portfolio</h2>
            <p className="text-xl text-gray-600">Representative projects showcasing AI strategy, implementation, and architectural expertise across industries.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                className="bg-white rounded-xl p-8 shadow-elevation hover-lift border-l-4 border-blue-500 flex flex-col animate-fade-in cursor-pointer transition-all duration-300 hover:shadow-elevation-hover"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-blue-vibrant rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md">
                    {project.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{project.companyName}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-1">{project.type}</p>
                    <p className="text-xs text-gray-500">{project.timeframe}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-medium mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">View Full Case Study</span>
                  <ArrowRight size={18} className="text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Carousel */}
      <section className="bg-white py-1 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 text-center">Trusted by Industry Leaders</h2>
            <p className="text-center text-gray-600 text-sm mt-1">Experience across healthcare, financial services, technology, and enterprise</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[...customers, ...customers].map((customer, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-lg flex items-center justify-center shadow-elevation hover-lift transition-all p-3"
                >
                  <img
                    src={customer.logo}
                    alt={customer.displayName}
                    className="h-14 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-gradient-blue-soft py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Why I Can Help</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className={`bg-white rounded-xl p-8 shadow-elevation hover-lift text-center transition-all duration-500`}>
              <div className="bg-blue-300 inline-block px-6 py-4 rounded-sm shadow-lg -rotate-2 mb-4">
                <div className="text-5xl font-bold text-blue-900"><CountUp end={10} duration={500} decimals={0} isActive={focusedStat === 0} />K+</div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">Daily AI interactions deployed and managed across healthcare systems</p>
            </div>
            <div className={`bg-white rounded-xl p-8 shadow-elevation hover-lift text-center transition-all duration-500`}>
              <div className="bg-blue-200 inline-block px-6 py-4 rounded-sm shadow-lg rotate-1 mb-4">
                <div className="text-5xl font-bold text-blue-900"><CountUp end={87} duration={2000} decimals={0} isActive={focusedStat === 1} />%</div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">Accuracy achieved in specialized NLP pipelines for clinical use</p>
            </div>
            <div className={`bg-white rounded-xl p-8 shadow-elevation hover-lift text-center transition-all duration-500`}>
              <div className="bg-blue-300 inline-block px-6 py-4 rounded-sm shadow-lg -rotate-1 mb-4">
                <div className="text-5xl font-bold text-blue-900"><CountUp end={35} duration={1000} decimals={0} isActive={focusedStat === 2} />%</div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">Average timeline reduction while improving implementation quality</p>
            </div>
            <div className={`bg-white rounded-xl p-8 shadow-elevation hover-lift text-center transition-all duration-500`}>
              <div className="bg-blue-200 inline-block px-6 py-4 rounded-sm shadow-lg rotate-2 mb-4">
                <div className="text-5xl font-bold text-blue-900"><CountUp end={12} duration={500} decimals={0} isActive={focusedStat === 3} />+</div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">Years architecting enterprise AI across healthcare, finance, and tech</p>
            </div>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-elevation border-l-4 border-blue-500">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Recent roles:</strong> Senior Solution Architect at Hyro.ai (healthcare GenAI), VP of Solution Architecture at OneReach.ai (enterprise AI automation), Head of Cognitive Architects at Amelia (conversational AI), with earlier experience at Morgan Stanley and Societe Generale.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I've built the technical foundations for AI adoption at some of the most regulated and complex organizations in the world. I know what works, what doesn't, and what your organization actually needs.
            </p>
          </div>
        </div>
      </section>

      {/* Thinking & Resources Section */}
      <section id="resources" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Thinking & Resources</h2>
          <p className="text-xl text-gray-600">Strategic insights on GenAI adoption, implementation, and what actually works.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recentArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} getCategoryColor={getCategoryColor} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Want to discuss any of these topics or need something custom?</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/articles/archive"
              className="px-6 py-3 border-2 border-blue-300 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-smooth hover:border-blue-500 inline-flex items-center gap-2"
            >
              View All Articles <ArrowRight size={18} />
            </Link>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-blue-vibrant text-white rounded-lg font-medium hover:shadow-blue-lg transition-smooth hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About Jeremy</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I've spent the last 12 years architecting and deploying AI solutions at scale—from conversational AI platforms serving millions of interactions to specialized healthcare systems handling clinical workflows. I've worked with enterprises across healthcare, financial services, and technology, and I've seen the same patterns repeat: companies build great POCs but struggle to get to production.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Most of those failures aren't technical. They're architectural decisions made too late, organizational misalignment, unrealistic budgets, or missing foundational work. The companies that succeed think strategically first, then build.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Now I help enterprises avoid those traps. Whether you're evaluating GenAI, building your strategy, or navigating implementation challenges, I can cut through the noise and help you make smart decisions.
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Key Experience</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Led enterprise AI deployments across healthcare, financial services, and tech</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Built and mentored teams of technical experts; scaled organizations through rapid AI adoption</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Architected integrations with complex enterprise systems (EHR, CRM, data warehouses, legacy systems)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Consistently reduced implementation timelines by 30-40% while improving quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Navigated regulatory and compliance challenges in healthcare and finance</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Education</h3>
              <p className="text-gray-700 mb-2">
                <strong>M.S. in System Strategy and Management</strong> - Stevens Institute of Technology
              </p>
              <p className="text-gray-700">
                <strong>M.S. in Computer Science and Information Systems</strong> - EPITA (École Pour l'Informatique et les Techniques Avancées), Paris
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gradient-blue-light rounded-xl p-8 sticky top-24 shadow-elevation">
              <h3 className="text-lg font-bold mb-6 text-gray-900">Let's Talk</h3>
              <p className="text-gray-700 mb-6">
                Whether you're exploring GenAI or already in the thick of it, I'd like to understand your challenge and see if I can help.
              </p>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 py-3 bg-gradient-blue-vibrant text-white rounded-lg font-medium hover:shadow-blue-lg transition-smooth hover:scale-105 mb-6"
              >
                Schedule a Call
              </button>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Hoboken, NJ / New York, NY</strong>
                </p>
                <p>
                  <strong>Email:</strong> jamselle@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> (201) 290-1267
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative bg-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 blur-3xl">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Get Strategic?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's talk about your GenAI strategy, implementation challenges, or whatever's on your mind.
            No commitment, just a conversation about how I can help.
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:jamselle@gmail.com?subject=Let's talk about AI strategy`;
            }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded-lg text-gray-900 mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-blue-vibrant text-white rounded-lg font-medium hover:shadow-blue-lg transition-smooth hover:scale-105 text-lg"
              >
                Get in Touch
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4">
              Or call (201) 290-1267 to schedule directly
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4 text-gradient">Jamselle</div>
              <p className="text-sm text-gray-600">AI Strategy Advisory</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Work</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#services" className="hover:text-gray-900 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-gray-900 transition-colors">Portfolio</a></li>
                <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#resources" className="hover:text-gray-900 transition-colors">Articles</a></li>
                <li><a href="#resources" className="hover:text-gray-900 transition-colors">Tools & Templates</a></li>
                <li><a href="#resources" className="hover:text-gray-900 transition-colors">Subscribe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="https://linkedin.com/in/jeremy-amsellem" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a></li>
                <li><a href="mailto:jamselle@gmail.com" className="hover:text-gray-900 transition-colors">Email</a></li>
                <li><a href="tel:+12012901267" className="hover:text-gray-900 transition-colors">Phone</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 Jamselle Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Portfolio Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
}
