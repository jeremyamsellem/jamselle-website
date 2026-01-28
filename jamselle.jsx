import React, { useState } from 'react';
import { ArrowRight, CheckCircle, BookOpen, Calendar, Clipboard, Target } from 'lucide-react';

export default function JamelleWebsite() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-gray-900">
            Jamselle Consulting
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#resources" className="hover:text-blue-600 transition">Resources</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
          </div>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Get in Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            AI Strategy Without the Risk
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Help your organization navigate GenAI adoption and build defensible AI capabilities. 
            Strategy, implementation readiness, and ongoing advisory from someone who's deployed 
            AI solutions serving 10,000+ daily interactions.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition flex items-center gap-2"
            >
              Start a Conversation <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => document.getElementById('resources').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-gray-300 rounded font-medium hover:bg-gray-50 transition"
            >
              View Resources
            </button>
          </div>
        </div>
      </section>

      {/* Problem/Context */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-2">THE REALITY</div>
              <p className="text-gray-700">
                70% of enterprise GenAI projects fail to reach production. Most aren't technical problems—they're architectural and organizational ones.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-2">THE COST</div>
              <p className="text-gray-700">
                Your team is guessing at roadmaps, budgets balloon by 2-3x, and implementation timelines slip while you wait for clarity.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-2">THE OPPORTUNITY</div>
              <p className="text-gray-700">
                Strategic clarity upfront reduces risk, accelerates timelines by 30-40%, and gets your AI initiatives to production faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">How I Help</h2>
          <p className="text-xl text-gray-600">Three ways to accelerate your AI journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
            <Clipboard size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">AI Strategy & Roadmap</h3>
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
            <div className="mt-6 text-sm text-gray-600">
              <strong>Typical engagement:</strong> $30-80K, 4-8 weeks
            </div>
          </div>

          {/* Service 2 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
            <CheckCircle size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Implementation Readiness</h3>
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
            <div className="mt-6 text-sm text-gray-600">
              <strong>Typical engagement:</strong> $15-30K, 4-6 weeks
            </div>
          </div>

          {/* Service 3 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
            <Target size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Fractional AI Advisor</h3>
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
            <div className="mt-6 text-sm text-gray-600">
              <strong>Typical engagement:</strong> $5-10K/month
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Why I Can Help</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-gray-700 text-sm">Daily AI interactions deployed and managed across healthcare systems</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
              <p className="text-gray-700 text-sm">Accuracy achieved in specialized NLP pipelines for clinical use</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">30-40%</div>
              <p className="text-gray-700 text-sm">Average timeline reduction while improving implementation quality</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
              <p className="text-gray-700 text-sm">Years architecting enterprise AI across healthcare, finance, and tech</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-4">
              <strong>Recent roles:</strong> Senior Solution Architect at Hyro.ai (healthcare GenAI), VP of Solution Architecture at OneReach.ai (enterprise AI automation), Head of Cognitive Architects at Amelia (conversational AI), with earlier experience at Morgan Stanley and Societe Generale.
            </p>
            <p className="text-gray-700">
              I've built the technical foundations for AI adoption at some of the most regulated and complex organizations in the world. I know what works, what doesn't, and what your organization actually needs.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Thinking & Resources</h2>
          <p className="text-xl text-gray-600">Strategic insights on GenAI adoption, implementation, and what actually works.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Resource 1 */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">Why 70% of Enterprise GenAI Projects Fail</h3>
                <p className="text-sm text-gray-600 mt-2">Article + Checklist</p>
              </div>
              <BookOpen size={24} className="text-blue-600 flex-shrink-0" />
            </div>
            <p className="text-gray-700 mb-6 text-sm">
              Deep look at what separates successful AI deployments from failures. Includes a 12-point checklist before you deploy.
            </p>
            <a href="#contact" className="text-blue-600 font-medium text-sm hover:underline">
              Get the checklist →
            </a>
          </div>

          {/* Resource 2 */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">The POC-to-Production Gap</h3>
                <p className="text-sm text-gray-600 mt-2">Article + Assessment</p>
              </div>
              <BookOpen size={24} className="text-blue-600 flex-shrink-0" />
            </div>
            <p className="text-gray-700 mb-6 text-sm">
              Why 80% of proofs-of-concept never reach production. What changes between POC and scale.
            </p>
            <a href="#contact" className="text-blue-600 font-medium text-sm hover:underline">
              Get the assessment →
            </a>
          </div>

          {/* Resource 3 */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">Healthcare GenAI: Regulatory & Clinical Reality</h3>
                <p className="text-sm text-gray-600 mt-2">Article + Framework</p>
              </div>
              <BookOpen size={24} className="text-blue-600 flex-shrink-0" />
            </div>
            <p className="text-gray-700 mb-6 text-sm">
              Healthcare-specific guide to GenAI adoption, clinical integration, and building clinician trust.
            </p>
            <a href="#contact" className="text-blue-600 font-medium text-sm hover:underline">
              Get the framework →
            </a>
          </div>

          {/* Resource 4 */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">Building Your AI Strategy Roadmap</h3>
                <p className="text-sm text-gray-600 mt-2">Template + Guide</p>
              </div>
              <BookOpen size={24} className="text-blue-600 flex-shrink-0" />
            </div>
            <p className="text-gray-700 mb-6 text-sm">
              Step-by-step guide to building a realistic, executable multi-year GenAI roadmap for your organization.
            </p>
            <a href="#contact" className="text-blue-600 font-medium text-sm hover:underline">
              Get the template →
            </a>
          </div>
        </div>

        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-700 mb-4">Get new insights as they're published.</p>
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-gray-300 rounded text-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition text-sm"
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} />
                  Signed up
                </span>
              ) : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">About Jeremy</h2>
        
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
              <h3 className="text-lg font-bold mb-4">Key Experience</h3>
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
              <h3 className="text-lg font-bold mb-4">Education</h3>
              <p className="text-gray-700 mb-2">
                <strong>M.S. in System Strategy and Management</strong> - Stevens Institute of Technology
              </p>
              <p className="text-gray-700">
                <strong>M.S. in Computer Science and Information Systems</strong> - EPITA (École Pour l'Informatique et les Techniques Avancées), Paris
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-blue-50 rounded-lg p-8 sticky top-24">
              <h3 className="text-lg font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-700 mb-6">
                Whether you're exploring GenAI or already in the thick of it, I'd like to understand your challenge and see if I can help.
              </p>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition mb-4"
              >
                Schedule a Call
              </button>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Hoboken, NJ / New York, NY</strong>
                </p>
                <p>
                  <strong>Email:</strong> jeremy.amsellem@gmail.com
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
      <section id="contact" className="bg-gray-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Strategic?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's talk about your GenAI strategy, implementation challenges, or whatever's on your mind. 
            No commitment, just a conversation about how I can help.
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:jeremy.amsellem@gmail.com?subject=Let's talk about AI strategy`;
            }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded text-gray-900 mb-4 text-lg"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition text-lg"
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
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">Jamselle</div>
              <p className="text-sm text-gray-600">AI Strategy Advisory</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#services" className="hover:text-gray-900">Strategy & Roadmap</a></li>
                <li><a href="#services" className="hover:text-gray-900">Implementation Readiness</a></li>
                <li><a href="#services" className="hover:text-gray-900">Fractional Advisor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#resources" className="hover:text-gray-900">Articles</a></li>
                <li><a href="#resources" className="hover:text-gray-900">Tools & Templates</a></li>
                <li><a href="#resources" className="hover:text-gray-900">Subscribe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="https://linkedin.com/in/jeremyamsellem" target="_blank" className="hover:text-gray-900">LinkedIn</a></li>
                <li><a href="mailto:jeremy.amsellem@gmail.com" className="hover:text-gray-900">Email</a></li>
                <li><a href="tel:+12012901267" className="hover:text-gray-900">Phone</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 Jamselle Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
