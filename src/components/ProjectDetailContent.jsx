import React from 'react';
import { CheckCircle } from 'lucide-react';
import { projectDetails } from '../data/projectDetails';

export default function ProjectDetailContent({ project }) {
  const details = projectDetails[project.id];

  if (!details) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Detailed content coming soon.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Situation */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Situation</h3>
        <p className="text-gray-700 leading-relaxed text-lg">{details.situation}</p>
      </section>

      {/* Challenge */}
      {details.challenge && (
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {details.challenge.title}
          </h3>
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
            <ul className="space-y-3">
              {details.challenge.items.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <CheckCircle
                    size={20}
                    className="text-blue-600 flex-shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Approach */}
      {details.approach && (
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Approach</h3>
          <div className="space-y-6">
            {details.approach.phases.map((phase, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {phase.title}
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {phase.description}
                </p>
                {phase.outcomes && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Key Outcomes:
                    </p>
                    <ul className="space-y-2">
                      {phase.outcomes.map((outcome, oIdx) => (
                        <li
                          key={oIdx}
                          className="text-gray-700 text-sm flex gap-2"
                        >
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Results */}
      {details.results && (
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Results & Impact
          </h3>

          {/* Metrics Grid */}
          {details.results.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {details.results.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg p-5 text-center ${
                    metric.highlight
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                      : 'bg-blue-50 text-blue-900'
                  }`}
                >
                  <div
                    className={`text-2xl md:text-3xl font-bold mb-1 ${
                      metric.highlight ? 'text-white' : 'text-blue-900'
                    }`}
                  >
                    {metric.value}
                  </div>
                  <div
                    className={`text-sm ${
                      metric.highlight ? 'text-blue-100' : 'text-gray-700'
                    }`}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Business Impact */}
          {details.results.business && (
            <div className="bg-white rounded-lg border-2 border-green-100 p-6 mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Business Impact
              </h4>
              <ul className="space-y-3">
                {details.results.business.map((impact, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <CheckCircle
                      size={20}
                      className="text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Achievements */}
          {details.results.technical && (
            <div className="bg-white rounded-lg border-2 border-blue-100 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Technical Achievements
              </h4>
              <ul className="space-y-3">
                {details.results.technical.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <CheckCircle
                      size={20}
                      className="text-blue-600 flex-shrink-0 mt-0.5"
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Key Takeaways */}
      {details.keyTakeaways && (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Key Takeaways
          </h3>
          <ul className="space-y-3">
            {details.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex gap-3 text-gray-700">
                <span className="text-blue-600 font-bold text-lg">→</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
