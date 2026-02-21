import { useState } from 'react';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Briefcase, CheckSquare, Headphones } from 'lucide-react';
import Navigation from '../components/Navigation';
import ProjectImpactCard from '../components/ProjectImpactCard';
import KnowledgeHub from '../components/KnowledgeHub';
import CredentialsSection from '../components/CredentialsSection';
import ContactSection from '../components/ContactSection';
import CustomersCarousel from '../components/CustomersCarousel';
import ProjectModal from '../components/ProjectModal';
import FeaturedArticle from '../components/FeaturedArticle';
import { getRecentArticles } from '../data/articles';
import { useScrollToHash } from '../hooks/useScrollToHash';
import { useDarkMode } from '../hooks/useDarkMode';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function HomePage() {
  useScrollToHash();
  const { isDarkMode } = useDarkMode();

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recentArticles = getRecentArticles(3);
  const featuredArticle = getRecentArticles(1)[0];

  const projects = [
    {
      id: 5,
      initials: "TX",
      companyName: "Transfix - AI-Assisted Development",
      type: "Organizational Transformation",
      description: "Led enterprise-scale AI adoption across engineering organization, transforming developer practices and establishing standards for consistent, high-quality AI-assisted code generation.",
      achievements: [
        "Scaled adoption from 40% to 95% across 40+ developers",
        "Achieved 96% code style consistency across all teams",
        "Delivered 25-30% velocity improvement while maintaining quality",
        "Established sustainable model for ongoing AI tool optimization"
      ],
      technologies: ["Change Management", "Developer Tools", "AI Agents", "Enterprise Architecture", "Quality Assurance", "Organizational Design"],
      timeframe: "2024"
    },
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

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-950 text-white'
        : 'bg-white text-gray-900'
    }`}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection isDarkMode={isDarkMode} />

      {/* Trust Metrics Section */}
      <TrustMetricsSection isDarkMode={isDarkMode} />

      {/* Problem/Context Section */}
      <ProblemSection isDarkMode={isDarkMode} />

      {/* Services Section */}
      <ServicesSection isDarkMode={isDarkMode} />

      {/* Featured Article */}
      <FeaturedArticle article={featuredArticle} />

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-24 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-slate-950 border-t border-slate-800'
          : 'bg-white border-t border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <PortfolioHeader isDarkMode={isDarkMode} />

          <div className="grid gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectImpactCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={openProjectModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customers Carousel */}
      <CustomersCarousel />

      {/* Knowledge Hub (Articles) */}
      <KnowledgeHub articles={recentArticles} />

      {/* Credentials Section */}
      <CredentialsSection />

      {/* About Section */}
      <AboutSection isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Portfolio Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
}

function TrustMetricsSection({ isDarkMode }) {
  const metrics = [
    { label: "Years of Experience", value: "12+" },
    { label: "AI Projects Deployed", value: "50+" },
    { label: "Daily Interactions Served", value: "10,000+" },
    { label: "Enterprise Clients", value: "Healthcare, Finance, Tech" }
  ];

  return (
    <section className={`py-12 transition-colors duration-300 border-b ${
      isDarkMode
        ? 'bg-slate-900 border-slate-800'
        : 'bg-gradient-to-r from-amber-50 to-blue-50 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold font-display mb-2 ${
                isDarkMode ? 'text-amber-400' : 'text-amber-600'
              }`}>
                {metric.value}
              </div>
              <p className={`text-sm md:text-base ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection({ isDarkMode }) {
  const ref = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} className={`scroll-animate relative py-24 overflow-hidden transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-950'
        : 'bg-white'
    }`}>
      <div className="absolute inset-0 opacity-20 blur-3xl pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
          isDarkMode
            ? 'bg-blue-900'
            : 'bg-blue-300'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${
          isDarkMode
            ? 'bg-blue-900/50'
            : 'bg-blue-300'
        }`}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-8">
        <div className="max-w-3xl">
          <h1 className={`text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 leading-tight animate-slide-in-down ${
            isDarkMode
              ? 'text-white'
              : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
          }`}>
            AI Strategy Without the Risk
          </h1>

          <p className={`text-xl mb-8 leading-relaxed animate-slide-in-up ${
            isDarkMode
              ? 'text-gray-300'
              : 'text-gray-600'
          }`} style={{animationDelay: '0.1s'}}>
            Help your organization navigate GenAI adoption and build defensible AI capabilities.
            Strategy, implementation readiness, and ongoing advisory from someone who's deployed
            AI solutions serving 10,000+ daily interactions.
          </p>

          <div className="flex gap-4 flex-wrap animate-scale-in" style={{animationDelay: '0.2s'}}>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-medium hover:shadow-deep transition-premium hover:scale-105 flex items-center gap-2"
            >
              Start a Conversation <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById('resources').scrollIntoView({ behavior: 'smooth' })}
              className={`px-6 py-3 rounded-lg font-medium transition-premium border-2 ${
                isDarkMode
                  ? 'border-amber-500 text-amber-400 hover:bg-amber-500/10'
                  : 'border-amber-600 text-amber-600 hover:bg-amber-50'
              }`}
            >
              View Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection({ isDarkMode }) {
  const ref = useIntersectionObserver({ threshold: 0.1 });

  const points = [
    {
      title: "THE REALITY",
      content: "70% of enterprise GenAI projects fail to reach production. Most aren't technical problems—they're architectural and organizational ones.",
    },
    {
      title: "THE COST",
      content: "Your team is guessing at roadmaps, budgets balloon by 2-3x, and implementation timelines slip while you wait for clarity.",
    },
    {
      title: "THE OPPORTUNITY",
      content: "Strategic clarity upfront reduces risk, accelerates timelines by 30-40%, and gets your AI initiatives to production faster.",
    },
  ];

  return (
    <section ref={ref} className={`scroll-animate py-16 transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-900 border-y border-slate-800'
        : 'bg-gradient-blue-light border-y border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 backdrop-blur-sm stagger-item transition-premium ${
                isDarkMode
                  ? 'bg-slate-800/50 border border-slate-700 hover:shadow-deep'
                  : 'bg-white border border-gray-200 hover:shadow-refined'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`inline-block px-3 py-1 rounded-full mb-4 text-xs font-semibold ${
                isDarkMode
                  ? 'bg-blue-900/30 text-blue-300'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {point.title}
              </div>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {point.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ isDarkMode }) {
  const ref = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      icon: Briefcase,
      title: "AI Strategy & Roadmap",
      description: "Work with your C-suite and product leaders to build a multi-year GenAI strategy tailored to your business. Assess where you are, identify high-impact use cases, and create an implementation-ready roadmap.",
      features: ["Multi-year AI roadmap", "Use case prioritization", "Resource & budget planning"],
    },
    {
      icon: CheckSquare,
      title: "Implementation Readiness",
      description: "Before you build, know what you're missing. Audit your data infrastructure, team capabilities, integration points, and compliance requirements. Get a clear playbook to execute.",
      features: ["Systems & data audit", "Readiness assessment", "Implementation playbook"],
    },
    {
      icon: Headphones,
      title: "Fractional AI Advisor",
      description: "Ongoing strategic guidance for scaling companies building AI capabilities. Strategic decisions, vendor evaluation, architecture guidance, and roadmap refinement on a retainer basis.",
      features: ["10-20 hours/month", "Strategic guidance", "Available as needed"],
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className={`scroll-animate py-24 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-slate-950'
          : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className={`text-4xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            How I Help
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Three ways to accelerate your AI journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-xl p-8 transition-premium stagger-item ${
                isDarkMode
                  ? 'bg-slate-800 border border-slate-700 hover:shadow-deep'
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDarkMode
                  ? 'bg-blue-900/30'
                  : 'bg-blue-100'
              }`}></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <service.icon size={32} className={`${isDarkMode ? 'text-blue-400' : 'text-amber-600'}`} />
                </div>
                <h3 className={`text-xl font-bold font-display mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioHeader({ isDarkMode }) {
  const ref = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className="scroll-animate mb-16">
      <h2 className={`text-4xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Portfolio
      </h2>
      <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Representative projects showcasing AI strategy, implementation, and architectural expertise across industries.
      </p>
    </div>
  );
}

function AboutSection({ isDarkMode }) {
  const ref = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="about"
      className={`scroll-animate py-24 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-slate-900 border-t border-slate-800'
          : 'bg-white border-t border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl font-display font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          About Jeremy
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I've spent the last 12 years architecting and deploying AI solutions at scale—from conversational AI platforms serving millions of interactions to specialized healthcare systems handling clinical workflows. I've worked with enterprises across healthcare, financial services, and technology, and I've seen the same patterns repeat: companies build great POCs but struggle to get to production.
            </p>

            <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Most of those failures aren't technical. They're architectural decisions made too late, organizational misalignment, unrealistic budgets, or missing foundational work. The companies that succeed think strategically first, then build.
            </p>

            <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Now I help enterprises avoid those traps. Whether you're evaluating GenAI, building your strategy, or navigating implementation challenges, I can cut through the noise and help you make smart decisions.
            </p>

            <div className="mb-8">
              <h3 className={`text-lg font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Key Experience
              </h3>
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Led enterprise AI deployments across healthcare, financial services, and tech</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Built and mentored teams of technical experts; scaled organizations through rapid AI adoption</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Architected integrations with complex enterprise systems (EHR, CRM, data warehouses, legacy systems)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Consistently reduced implementation timelines by 30-40% while improving quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Navigated regulatory and compliance challenges in healthcare and finance</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`text-lg font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Education
              </h3>
              <p className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>M.S. in System Strategy and Management</strong> - Stevens Institute of Technology
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>M.S. in Computer Science and Information Systems</strong> - EPITA (École Pour l'Informatique et les Techniques Avancées), Paris
              </p>
            </div>
          </div>

          <div>
            <div className={`rounded-xl p-8 sticky top-24 transition-colors duration-300 ${
              isDarkMode
                ? 'bg-slate-800 border border-slate-700'
                : 'bg-gradient-blue-light border border-gray-200'
            }`}>
              <h3 className={`text-lg font-display font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Talk
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Whether you're exploring GenAI or already in the thick of it, I'd like to understand your challenge and see if I can help.
              </p>

              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-medium hover:shadow-deep transition-premium mb-6"
              >
                Schedule a Call
              </button>

              <div className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span><strong>Hoboken, NJ / New York, NY</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:jamselle@gmail.com" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
                    jamselle@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+12012901267" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
                    (201) 290-1267
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ isDarkMode }) {
  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDarkMode
        ? 'border-slate-800 bg-slate-950'
        : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className={`font-bold text-lg font-display mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Jamselle Consulting
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              AI Strategy Advisory
            </p>
          </div>

          <div>
            <h4 className={`font-semibold text-sm mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              Work
            </h4>
            <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              <li><a href="#services" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>Services</a></li>
              <li><a href="#portfolio" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>Portfolio</a></li>
              <li><a href="#about" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>About</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold text-sm mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              Resources
            </h4>
            <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              <li><a href="#resources" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>Articles</a></li>
              <li><a href="#resources" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>Tools & Templates</a></li>
              <li><a href="#resources" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>Subscribe</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold text-sm mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              Connect
            </h4>
            <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              <li><a href="https://www.linkedin.com/in/jeremyamsellem" target="_blank" rel="noopener noreferrer" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>LinkedIn</a></li>
              <li><a href="mailto:jamselle@gmail.com" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>Email</a></li>
              <li><a href="tel:+12012901267" className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-900'} transition-colors`}>Phone</a></li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 text-center text-sm ${isDarkMode ? 'border-slate-800 text-gray-600' : 'border-gray-200 text-gray-600'}`}>
          <p>&copy; 2025 Jamselle Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
