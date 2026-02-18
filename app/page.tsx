"use client";

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Home() {
  const experiences = [
    {
      title: "Director of Business Development – Food Service",
      company: "Dr. Praeger's Sensible Foods",
      location: "Elmwood Park, NJ",
      period: "03/24 - Present",
      highlights: [
        "Spearheaded sales growth from $6M to $20M in foodservice, transforming a 30-year legacy brand into a modern growth engine",
        "Built national presence across Quick Service Restaurants (QSRs), securing partnerships with White Castle, Café Nero",
        "Expanded K-12 and military channels, navigating USDA bid cycles, CN labeling, and compliance",
        "Designed and executed SKU rationalization strategy, streamlining portfolio to focus on high-margin, scalable items",
        "Launched Framework 2.0, integrating demand planning, broker management, and customer segmentation"
      ]
    },
    {
      title: "National Sales Manager",
      company: "Daring",
      location: "Culver City, CA",
      period: "04/22 - 03/24",
      highlights: [
        "Focused on enhancing existing accounts and optimizing previously non-profitable deals",
        "Initiated Daring's successful entry into the K-12 educational sector via strategic partnership",
        "QSR launches with Juice Press, &Pizza, Amy's Drive Thru, St. Hubert",
        "Distributor Growth by over 100%",
        "Implemented innovative outreach tools, enabling connections with thousands of potential customers"
      ]
    },
    {
      title: "Experiential Marketing Manager → National Chain Manager",
      company: "Upfield (Violife)",
      location: "Hackensack, NJ",
      period: "12/20 - 04/22",
      highlights: [
        "Developed and executed strategic marketing plans for the entire Violife Brand",
        "Led North East Sales with total volume of 1.3 million in less than 1 year, surpassing quota",
        "Designed & launched Violife food truck with implemented marketing strategy for US hotspots",
        "Led brand discovery initiatives across US channel"
      ]
    },
    {
      title: "CO-Founder",
      company: "Organika Kitchen",
      location: "Southport, CT",
      period: "08/16 - 07/20",
      highlights: [
        "Directed all daily operations for multi-unit Vegan quick service restaurants staffing 60+ employees",
        "Expanded brand to three active locations in three years, exceeding $3M in annual revenue",
        "Awards: Best of Fairfield County 2019-2020, Best of Westport 2017-2020, Best Juice Bar 2016-2020",
        "First Uber Eats partner in CT, First Postmates partner in CT, increased revenue by 20%"
      ]
    },
    {
      title: "Cloud Operations Engineer",
      company: "Datto Inc.",
      location: "Norwalk, CT",
      period: "04/14 - 08/16",
      highlights: [
        "Maintained and administered over a thousand storage nodes running ubuntu linux with ZFS",
        "Subject matter expert regarding virtualization of systems in pure linux environment",
        "24/7 disaster recovery response responsibilities"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Dimitrios Pantzos
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Foodservice Executive & Entrepreneur
          </p>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Proven record of driving rapid sales growth and modernizing legacy brands. Expert in building distribution,
            managing national frameworks, and scaling business across QSR, K-12, military, and institutional channels.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:me@dimitri.app"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="tel:203-551-1003"
              className="flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <Phone size={20} />
              <span>Call</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">About</h2>
          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
            <p>
              I'm a foodservice executive with entrepreneurial and corporate experience combined with data-driven leadership,
              P&L ownership, and a passion for building healthier, financially strong businesses.
            </p>
            <p>
              My expertise spans launching innovative go-to-market strategies, streamlining product portfolios, and leveraging
              broker and distributor networks to unlock new growth across QSR, K-12, military, and institutional channels.
            </p>
            <p>
              From co-founding award-winning restaurants to driving $6M to $20M sales growth at legacy brands, I bring a unique
              blend of operational excellence, strategic thinking, and hands-on execution.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-zinc-800">
            <div className="flex flex-wrap gap-8 text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div>Norwalk, CT 06850</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <a href="mailto:me@dimitri.app" className="hover:text-white transition-colors">
                    me@dimitri.app
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <a href="tel:203-551-1003" className="hover:text-white transition-colors">
                    203-551-1003
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">Experience</h2>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white"></div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="text-lg text-zinc-400 mb-1">{exp.company}</div>
                  <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-zinc-300">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-zinc-600 mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Interested in discussing foodservice strategy, business development, or new opportunities?
            I'd love to hear from you.
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
