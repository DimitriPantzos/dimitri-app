"use client";

import { Mail, Phone, Cpu, TrendingUp, Store } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Cpu,
      title: "AI Implementation for Real Businesses",
      description: "I help organizations move from \"talking about AI\" to actually using it.",
      points: [
        "Integrate AI into daily workflows",
        "Build internal GPT tools and automation systems",
        "Streamline reporting, forecasting, and marketing",
        "Train teams to adopt AI responsibly and effectively"
      ]
    },
    {
      icon: TrendingUp,
      title: "Revenue & Sales Growth",
      description: "I design and execute strategies that drive measurable growth.",
      points: [
        "Foodservice and retail expansion",
        "National account strategy",
        "Distribution and commercialization",
        "Go-to-market planning"
      ]
    },
    {
      icon: Store,
      title: "Hospitality & Brand Operations",
      description: "I build concepts that are profitable, scalable, and operationally sound.",
      points: [
        "Concept development and openings",
        "Menu engineering and cost control",
        "Financial modeling and systems",
        "Multi-unit operational strategy"
      ]
    }
  ];

  const experience = [
    "Director of Business Development — Dr. Praeger's",
    "Founder — Lyfe Café",
    "Founder — Pizza Lyfe",
    "Led national foodservice growth and distribution strategy",
    "Developed new product pipelines and commercialization plans",
    "Opened and scaled profitable hospitality concepts",
    "Implemented AI into daily operations across teams and brands"
  ];

  const howIWork = [
    "Advisory and consulting",
    "Fractional leadership roles",
    "Project-based builds",
    "Launch and growth strategy"
  ];

  const whoIWorkWith = [
    "Food and beverage brands",
    "Restaurant and hospitality groups",
    "Founders and operators",
    "Investors and private equity teams",
    "Companies looking to implement AI into real operations"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Dimitrios Pantzos
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-300 mb-8 font-light">
            Operator. Revenue builder. AI implementer.
          </p>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build and scale modern food, retail, and hospitality organizations using AI, systems, and real-world operations.
          </p>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            After leading national foodservice growth at Dr. Praeger's and launching multiple hospitality concepts in Connecticut,
            I now partner with founders, brands, and operators who want execution — not theory.
          </p>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            My work sits at the intersection of AI implementation, revenue strategy, and operational discipline.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:me@dimitri.app"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors font-medium"
            >
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white text-center">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-4">
                  <service.icon size={32} className="text-white" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-zinc-400">
                      <span className="text-zinc-600">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Experience Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Selected Experience</h2>
          <ul className="space-y-4">
            {experience.map((item, index) => (
              <li key={index} className="flex gap-3 text-lg text-zinc-300">
                <span className="text-zinc-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">How I Work</h2>
          <p className="text-xl text-zinc-300 mb-8 font-medium">I'm not an agency.</p>
          <p className="text-xl text-zinc-300 mb-12">I'm an operator you bring in when you want results.</p>
          <p className="text-lg text-zinc-400 mb-8">I partner with organizations through:</p>
          <ul className="space-y-4 mb-12">
            {howIWork.map((item, index) => (
              <li key={index} className="flex gap-3 text-lg text-zinc-300">
                <span className="text-zinc-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Every engagement is focused on execution, clarity, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Who I Work With</h2>
          <ul className="space-y-4">
            {whoIWorkWith.map((item, index) => (
              <li key={index} className="flex gap-3 text-lg text-zinc-300">
                <span className="text-zinc-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Let's Work Together</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Ready to scale, implement AI, or build something new? Let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:me@dimitri.app"
              className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors text-lg font-medium"
            >
              <Mail size={24} />
              <span>me@dimitri.app</span>
            </a>
            <a
              href="tel:203-551-1003"
              className="flex items-center gap-2 px-8 py-4 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors text-lg font-medium"
            >
              <Phone size={24} />
              <span>203-551-1003</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dimitrios Pantzos. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
