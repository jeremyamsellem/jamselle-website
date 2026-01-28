import { Star, TrendingUp, Users } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import CountUp from './CountUp';

export default function TrustAuthoritySection() {
  const { isDarkMode } = useDarkMode();
  const ref = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    {
      icon: TrendingUp,
      value: 500,
      suffix: 'M+',
      label: 'Combined Client Value',
      description: 'Delivered through deployed AI solutions'
    },
    {
      icon: Users,
      value: 10000,
      suffix: '+',
      label: 'Daily AI Interactions',
      description: 'Active across deployed systems'
    },
    {
      icon: Star,
      value: 12,
      suffix: '+',
      label: 'Years of AI Expertise',
      description: 'Building scalable intelligence at enterprise'
    }
  ];

  const testimonials = [
    {
      name: 'Healthcare Operations Director',
      company: 'Hyro.ai',
      quote: 'Went from exploring GenAI to full-scale deployment in 78 days. His architecture decisions saved us 6 months of false starts.',
      initials: 'HY'
    },
    {
      name: 'VP of Product',
      company: 'OneReach.ai',
      quote: '1,500-store deployment completed ahead of schedule with zero negative customer impact. Exceptional strategic thinking.',
      initials: 'OR'
    },
    {
      name: 'Banking Solutions Lead',
      company: 'Amelia (IPsoft)',
      quote: 'The AI system handles 60 distinct use cases with 96.8% accuracy. His guidance on RLHF and dialogue management was critical to success.',
      initials: 'AM'
    }
  ];

  return (
    <section ref={ref} className={`scroll-animate py-24 transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-900 border-y border-slate-800'
        : 'bg-gradient-subtle border-y border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className={`text-4xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Proven Track Record
          </h2>
          <p className={`text-xl max-w-2xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Impact across enterprises. Scale across industries. Results that matter.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`group rounded-xl p-8 transition-premium stagger-item ${
                  isDarkMode
                    ? 'bg-slate-800/50 border border-slate-700 hover:shadow-deep hover:bg-slate-800'
                    : 'bg-white/50 border border-white/40 hover:shadow-refined hover:bg-white'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`mb-4 inline-flex p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-blue-900/20 text-blue-400'
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  <IconComponent size={24} />
                </div>

                <div className="mb-4">
                  <div className="text-4xl font-display font-bold mb-1">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                    {stat.label}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div>
          <h3 className={`text-2xl font-display font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            What Clients Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 transition-premium stagger-item ${
                  isDarkMode
                    ? 'bg-slate-800 border border-slate-700 hover:shadow-deep'
                    : 'bg-white border border-gray-200 shadow-refined hover:shadow-deep'
                }`}
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={isDarkMode ? 'fill-blue-400 text-blue-400' : 'fill-blue-600 text-blue-600'}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className={`mb-6 leading-relaxed text-lg italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                    isDarkMode
                      ? 'bg-blue-900/40 text-blue-300'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
