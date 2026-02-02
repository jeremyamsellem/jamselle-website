export const projectDetails = {
  1: {
    // Hyro.ai - Healthcare
    situation:
      "Led deployment of Hyro's GenAI platform to replace traditional IVR system for large healthcare institution. Aggressive 100-day timeline from contract to launch with complex multi-hospital infrastructure.",

    challenge: {
      title: "Key Challenges",
      items: [
        "Unprecedented 100-day deadline for comprehensive system replacement",
        "Complex healthcare environment with multiple hospitals and clinics",
        "Client infrastructure more complex than Hyro's platform",
        "Rapid stakeholder alignment and information gathering required"
      ]
    },

    approach: {
      phases: [
        {
          title: "Rapid Stakeholder Alignment",
          description:
            "Identified key decision-makers and established weekly meetings throughout 100 days to plan use cases and allocate resources.",
          outcomes: [
            "Weekly stakeholder meetings",
            "Proactive delay mitigation",
            "Technical-business alignment"
          ]
        },
        {
          title: "Onsite Workshop",
          description:
            "Planned and executed productive onsite workshop for initial setup including telephony integration, CRM integration, and warm handoff protocols.",
          outcomes: [
            "Initial assistant configuration",
            "Empowered core testing team",
            "Integration setup complete"
          ]
        },
        {
          title: "MVP Definition & Implementation",
          description:
            "Held discovery meetings with SMEs before each use case implementation to define MVP and defer edge cases with formal client acceptance.",
          outcomes: [
            "Clear MVP scope",
            "Documented deferred features",
            "Stakeholder buy-in"
          ]
        }
      ]
    },

    results: {
      metrics: [
        { label: "Launch Time", value: "78 days", highlight: true },
        { label: "vs Target", value: "22 days early" },
        { label: "Company Record", value: "Fastest ever" }
      ],
      business: [
        "Set new company record for fastest deployment (78 vs 100 day target)",
        "Client extremely satisfied despite no contractual obligation to 100-day timeline",
        "Process standardized internally as blueprint for future rapid deployments",
        "Hyro formally adopted fast-track onsite workshop strategy based on ROI"
      ],
      technical: [
        "Successfully integrated telephony, CRM, and system of record",
        "Established warm handoff protocols for seamless escalation",
        "Empowered client testing team for continuous validation",
        "Post-launch monitoring revealed and resolved PCC hotline volume increase quickly"
      ]
    },

    keyTakeaways: [
      "Rapid stakeholder identification and weekly coordination crucial for aggressive timelines",
      "Onsite workshops accelerate initial setup and build client relationships",
      "MVP scoping with SMEs prevents scope creep while documenting future enhancements",
      "Post-launch monitoring and rapid response builds long-term client trust"
    ]
  },

  2: {
    // OneReach.ai - Retail
    situation:
      "Led most ambitious deployment in Onereach.ai history - rolling out AI solution to 1,500 retail stores nationwide. Client built reputation on exceptional customer service; any disruption could damage decades of relationships.",

    challenge: {
      title: "Customer Obsession Challenges",
      items: [
        "1,500 stores serving diverse demographics with varying needs",
        "Industry-leading customer satisfaction scores that couldn't be compromised",
        "AI system must enhance, not replace, human-centered service approach",
        "Deployment without disrupting daily customer interactions"
      ]
    },

    approach: {
      phases: [
        {
          title: "Customer-Centric Planning (Months 1-3)",
          description:
            "Conducted comprehensive customer journey mapping across store types, demographics, and service scenarios. Partnered with client's CX team to understand pain points and preferences.",
          outcomes: [
            "Customer journey maps for different store segments",
            "Store segmentation by demographics and behavior patterns",
            "Customer impact assessment for every deployment aspect",
            "Pre-flight checklist focused on service quality"
          ]
        },
        {
          title: "Customer-Obsessed Execution (Months 4-8)",
          description:
            "Created training materials focused on AI as service enhancement. Established direct communication line between dev team and customer service center for immediate issue response.",
          outcomes: [
            "Customer scenario testing using real interactions",
            "Peak load simulation (Black Friday traffic levels)",
            "Staff readiness verification for explaining enhancements",
            "Customer journey validation at every touchpoint"
          ]
        },
        {
          title: "Launch with Customer Protection (Months 9-12)",
          description:
            "Implemented canary release with real-time customer experience monitoring. Maintained instant rollback capability and tracked satisfaction scores as deployment blockers.",
          outcomes: [
            "Real-time customer feedback integration (minutes, not days)",
            "Customer satisfaction correlation with deployment progress",
            "Proactive issue resolution before customer impact",
            "Continuous customer voice analysis"
          ]
        }
      ]
    },

    results: {
      metrics: [
        { label: "Satisfaction Increase", value: "+18%", highlight: true },
        { label: "Resolution Speed", value: "+34%" },
        { label: "Retention Improvement", value: "+12%" },
        { label: "System Uptime", value: "99.97%" },
        { label: "Completion Time", value: "11 months" }
      ],
      business: [
        "Customer satisfaction scores increased 18% across deployed stores",
        "Customer retention rates improved 12% vs non-deployed locations",
        "Unsolicited positive feedback increased 340% in deployed stores",
        "Same-store customer return rates improved 19% year-over-year",
        "Completed 1,500 stores in 11 months (1 month ahead of schedule)"
      ],
      technical: [
        "Exceeded 99.9% uptime target, achieving 99.97% across all stores",
        "Average service resolution time improved 34% while maintaining personal touch",
        "Zero negative customer impact during entire deployment",
        "System handled peak holiday traffic with zero performance degradation",
        "Customer service complaints decreased 45% while engagement increased"
      ]
    },

    keyTakeaways: [
      "Customer journey mapping essential before any technical decisions",
      "Store segmentation by customer needs more effective than one-size-fits-all approach",
      "Employee satisfaction directly correlates with customer experience quality",
      "Real-time customer feedback loops enable rapid course correction",
      "Treating any customer satisfaction decline as deployment blocker ensures quality"
    ]
  },

  3: {
    // Amelia - Banking
    situation:
      "Major banking client's call center overwhelmed with high volumes, causing extended wait times, increased costs, and declining satisfaction. Needed AI automation while maintaining personal touch and accuracy banking customers require.",

    challenge: {
      title: "Key Challenges",
      items: [
        "Handling sensitive financial data while ensuring privacy and regulatory compliance",
        "Building system for 60 distinct use cases with consistent performance",
        "Wide spectrum of inquiries from simple balance checks to complex disputes",
        "Sub-second response times with 99.5% accuracy requirements",
        "Meeting strict banking industry reliability standards"
      ]
    },

    approach: {
      phases: [
        {
          title: "Research & Trust-Building (Months 1-2)",
          description:
            "Analyzed 500,000+ call transcripts. Critical trust moment: discovered bank's assumption about needing all 60 use cases was inefficient. Challenged client with data showing top 5 requests = 80% of volume.",
          outcomes: [
            "Data-driven recommendation for phased approach vs client's original scope",
            "Client initially skeptical but appreciated honesty and transparency",
            "Comprehensive data anonymization protocols for PII protection",
            "Trust foundation established through uncomfortable but accurate findings"
          ]
        },
        {
          title: "Technical Development (Months 3-6)",
          description:
            "Built hybrid architecture with voice solution integration (TTS/STT), fine-tuned LLMs for banking terminology, and sophisticated dialogue management with warm handoff capability.",
          outcomes: [
            "Seamless third-party voice services integration",
            "Context maintenance across multi-turn conversations",
            "Complex banking scenario handling with high accuracy",
            "Automatic escalation to human agents when needed"
          ]
        },
        {
          title: "Launch & Crisis Leadership (Months 7-8)",
          description:
            "Critical trust moment: discovered security vulnerability during deployment. Immediately halted launch despite pressure. Called CTO at 11 PM to explain risks and 48-hour delay needed.",
          outcomes: [
            "Transparent emergency communication with all parties",
            "CTO praised commitment to client success over convenience",
            "Security patches implemented before go-live",
            "Elevated from vendor to trusted strategic advisor"
          ]
        },
        {
          title: "Continuous Improvement (Month 9+)",
          description:
            "When accuracy dropped to 89% post-launch, took personal responsibility. Sent weekly reports showing improvements AND problems. Implemented RLHF protocols and reviewed 1,000+ interactions personally.",
          outcomes: [
            "Real-time dashboard with transparent metrics (good and bad)",
            "Sustainable model retraining processes vs quick fixes",
            "Long-term relationship: client requested me for acquisition integration",
            "Company-wide recognition for 'client-first leadership under pressure'"
          ]
        }
      ]
    },

    results: {
      metrics: [
        { label: "Call Transfer Reduction", value: "78%", highlight: true },
        { label: "Wait Time", value: "8.5min → 12sec" },
        { label: "Resolution Rate", value: "94%" },
        { label: "Accuracy", value: "96.8%" },
        { label: "System Uptime", value: "99.7%" },
        { label: "ROI", value: "312% (8 months)" }
      ],
      business: [
        "65% reduction in call center operational costs ($2.3M annual savings)",
        "Human agents focused on complex, high-value interactions (+41% revenue per interaction)",
        "Net Promoter Score increased from 6.2 to 8.9",
        "23% improvement in customer retention rates within 6 months",
        "312% ROI within first 8 months of operation"
      ],
      technical: [
        "78% decrease in calls requiring human agent transfer",
        "Average wait time reduced from 8.5 minutes to 12 seconds",
        "94% first-call resolution rate for top 5 customer request categories",
        "96.8% accurate response rate across all automated interactions",
        "99.7% system availability with sub-500ms response times",
        "24/7 instant service availability eliminating banking hours constraints"
      ]
    },

    keyTakeaways: [
      "Earning trust through data-driven honesty more valuable than agreeing to please clients",
      "Transparent communication during crises builds long-term strategic partnerships",
      "Taking ownership of problems (vs blaming) demonstrates true commitment",
      "Showing both successes AND challenges in reporting builds credibility",
      "Advocating for sustainable solutions over quick fixes creates lasting value"
    ]
  },

  4: {
    // Fintech Startup
    situation:
      "Fintech startup wanted to revolutionize tax returns through intelligent conversational interface. Had tax law expertise but lacked technical infrastructure. Needed working demo for Series A funding round to prove concept viability.",

    challenge: {
      title: "Primary Objectives",
      items: [
        "Evaluate tools and technologies for multi-turn conversation systems",
        "Translate non-technical stakeholder requirements into technical specs",
        "Design hybrid data architecture combining structured and unstructured data",
        "Deliver POC in 2 months and MVP in 4 months",
        "Create compelling technical demo for investors",
        "Handle complex tax scenarios while maintaining intuitive UX"
      ]
    },

    approach: {
      phases: [
        {
          title: "Technology Assessment (Weeks 1-3)",
          description:
            "Comprehensive evaluation of conversational AI platforms (Dialogflow, Microsoft Bot Framework, Rasa, OpenAI GPT). Organized workshops with tax experts and stakeholders to understand complex use cases.",
          outcomes: [
            "Selected hybrid: OpenAI for NLP + Amelia for conversation management",
            "Mapped user journeys for different tax scenarios (individual, small business, complex deductions)",
            "Defined requirements with non-technical founding team",
            "Technology stack decisions documented"
          ]
        },
        {
          title: "Architecture Design (Weeks 4-6)",
          description:
            "Designed multi-turn conversation engine maintaining context across complex tax questioning. Created hybrid RAG architecture with vector database for unstructured data and Elasticsearch for structured.",
          outcomes: [
            "Pinecone vector DB for financial structures, user assessments, contextual advice",
            "Elasticsearch for tax laws, policies, deduction rules, regulatory updates",
            "Notification system for account status and tax deadline reminders",
            "Data flow diagrams and API specifications for stakeholder review"
          ]
        },
        {
          title: "POC Development (Weeks 7-8)",
          description:
            "Built core conversation flow for 5 primary tax scenarios with basic RAG functionality. Created interactive demo with intelligent question branching and simple analytics dashboard.",
          outcomes: [
            "5 tax scenarios with dynamic follow-up questions",
            "Sample tax law database with RAG retrieval",
            "Interactive demo showcasing intelligent branching",
            "Dashboard tracking conversation analytics and user progress"
          ]
        },
        {
          title: "MVP Development (Months 3-4)",
          description:
            "Expanded to 15+ tax scenarios, fully implemented hybrid RAG system with comprehensive tax law database, built notification system, and created admin dashboard for validation.",
          outcomes: [
            "15+ tax scenarios with context-aware conversations",
            "Comprehensive tax law database + user assessment storage",
            "Email and in-app alerts for tax dates and status changes",
            "Admin dashboard for tax experts to review AI recommendations",
            "User authentication, data security, and GDPR compliance"
          ]
        },
        {
          title: "Stakeholder Communication",
          description:
            "Weekly demos with founders for feedback iteration. Created technical documentation explaining competitive advantages. Prepared investor materials and trained founding team on technical aspects.",
          outcomes: [
            "Continuous feedback loop with non-technical stakeholders",
            "Technical documentation highlighting unique methodology",
            "Investor-ready presentation materials",
            "Founding team trained for investor technical discussions"
          ]
        }
      ]
    },

    results: {
      metrics: [
        { label: "POC Delivery", value: "8 weeks", highlight: true },
        { label: "MVP Delivery", value: "16 weeks" },
        { label: "Accuracy", value: "85%" },
        { label: "Completion Rate", value: "78%" },
        { label: "Session Time", value: "12 min avg" },
        { label: "Series A Raised", value: "$2.3M" }
      ],
      business: [
        "Successfully raised $2.3M in Series A funding",
        "Investors specifically cited technical demo and unique UX as key differentiators",
        "Beta users reported 40% higher satisfaction vs existing tax software",
        "Hybrid RAG approach provided more accurate contextual advice than rule-based systems",
        "Architecture supported 500+ beta users without performance degradation"
      ],
      technical: [
        "Delivered POC in 8 weeks and MVP in 16 weeks (met all deadlines)",
        "85% accuracy in recommendation quality for complex multi-turn tax scenarios",
        "Hybrid RAG architecture processing 50,000+ tax law documents + personalized assessments",
        "78% average conversation completion rate with 12 minutes per session",
        "Created reusable framework for domain-specific conversational systems with hybrid data"
      ]
    },

    keyTakeaways: [
      "Hybrid RAG architecture (vector + structured search) handles complex domain knowledge effectively",
      "Close collaboration with non-technical stakeholders essential for translating business to technical requirements",
      "Weekly demos and feedback loops keep fast-moving startup projects on track",
      "Creating compelling investor demos requires both technical sophistication and intuitive UX",
      "Rapid prototyping under tight timelines demands clear phase definitions and milestone tracking"
    ]
  },

  5: {
    // Transfix - AI-Assisted Development
    situation:
      "Transfix was scaling rapidly with 40+ developers across teams. Some were using AI coding agents inconsistently, others weren't using them at all. No standards for code quality, no consistency in approach, security concerns about public tools. The real challenge: How do you get every developer using AI agents effectively while maintaining code quality and ensuring consistency across the entire organization?",

    challenge: {
      title: "The Challenge",
      items: [
        "Inconsistent adoption of AI coding agents across teams (40% adoption, 35% skeptical, 25% concerned)",
        "Varying code quality and no organizational standards for AI-assisted development",
        "Security concerns about developers using public tools for sensitive code",
        "Need to achieve 95%+ adoption while maintaining or improving code quality",
        "Establish sustainable model that works across multiple tech stacks (Python, Node.js, Go)"
      ]
    },

    approach: {
      phases: [
        {
          title: "Phase 1: Assessment & Strategy (Weeks 1-2)",
          description:
            "Conducted developer interviews and audits to understand current state, barriers to adoption, and opportunities. Evaluated AI agent options and created phased rollout strategy.",
          outcomes: [
            "Surveyed 20+ developers across all teams",
            "Analyzed codebase to identify quality issues and inconsistencies",
            "Found: 30% of code review time spent on style fixes (not logic)",
            "Evaluated enterprise AI solutions with privacy controls"
          ]
        },
        {
          title: "Phase 2: Standards & Guardrails (Weeks 3-4)",
          description:
            "Built infrastructure before any developer got access. Created standards, selected enterprise tool, and configured automated quality enforcement.",
          outcomes: [
            "Created AI Agent Usage Guidelines (when to use, what to review)",
            "Documented code standards and patterns for each tech stack",
            "Selected enterprise AI solution with privacy controls",
            "Configured automated quality enforcement at commit time"
          ]
        },
        {
          title: "Phase 3: Training & Adoption (Weeks 5-7)",
          description:
            "Designed role-specific training for different developer archetypes (skeptics, power users, non-users). Made adoption the default, not opt-in.",
          outcomes: [
            "Targeted training for skeptics showing data and live demos",
            "Advanced techniques for power users",
            "Hands-on workshops and pair programming for non-users",
            "Weekly AI tips and monthly showcases in team meetings"
          ]
        },
        {
          title: "Phase 4: Quality & Continuous Improvement (Weeks 8-12)",
          description:
            "Enhanced code review process, built measurement framework, and created feedback loops for ongoing optimization.",
          outcomes: [
            "Modified code review process to work with AI-assisted development",
            "Built automated quality checks (linting, formatting, consistency)",
            "Created metrics dashboard: adoption, code consistency, velocity",
            "Monthly feedback sessions and continuous iteration"
          ]
        }
      ]
    },

    results: {
      metrics: [
        { label: "Adoption Rate", value: "95%", highlight: true },
        { label: "Code Consistency", value: "96%" },
        { label: "Velocity Improvement", value: "+25-30%" },
        { label: "Developer Satisfaction", value: "4.3/5" },
        { label: "Review Cycle Time", value: "2-3 days → 1-2 days" }
      ],
      business: [
        "Achieved 95% adoption (up from 40%), far exceeding initial targets",
        "30% of code review time previously spent on style fixes now focused on logic and quality",
        "Development teams reporting increased confidence in code quality",
        "New developers onboarded faster with clear standards and tooling",
        "Established model adopted company-wide as blueprint for scaling AI tools"
      ],
      technical: [
        "Achieved 96% code style consistency across all teams and tech stacks",
        "Reduced code review cycles from 2-3 days to 1-2 days",
        "Delivered 25-30% velocity improvement while maintaining quality standards",
        "Automated quality checks preventing regressions",
        "Sustainable adoption model supporting continuous growth"
      ]
    },

    keyTakeaways: [
      "AI adoption is 20% technology, 80% people—success depends on training and change management",
      "Build guardrails BEFORE deployment—standards and enforcement must exist first",
      "Address adoption barriers by role—skeptics, power users, and non-users need different approaches",
      "Measurement drives improvement—without metrics, you can't track what's working or identify gaps",
      "Make adoption default, not opt-in—organizational change requires structural decisions"
    ]
  }
};
