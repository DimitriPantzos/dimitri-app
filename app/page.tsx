"use client";

import { Mail, Phone, Sparkles, TrendingUp, Brain, Users, Award, Zap } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "$6M → $20M", label: "Sales Growth", sublabel: "Dr. Praeger's Foodservice" },
    { value: "3 Locations", label: "Restaurants Built", sublabel: "Organika Kitchen in 3 Years" },
    { value: "100%+", label: "Distributor Growth", sublabel: "Daring Foods National Expansion" },
    { value: "$3M+", label: "Annual Revenue", sublabel: "Multi-Unit Operations" }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI-Powered Operations",
      description: "Transform daily workflows with intelligent automation, custom GPT tools, and data-driven insights that actually move the needle."
    },
    {
      icon: TrendingUp,
      title: "Revenue Engineering",
      description: "National account strategy, distribution networks, and go-to-market execution that scales brands from regional to nationwide."
    },
    {
      icon: Sparkles,
      title: "Concept to Cash",
      description: "End-to-end hospitality development—from concept design to P&L optimization, staffing models to tech stack implementation."
    }
  ];

  const awards = [
    "Best of Fairfield County 2019-2020",
    "Best of Westport 2017-2020",
    "Best Juice Bar 2016-2020",
    "Best Lunch Spot 2020"
  ];

  const brands = [
    { name: "Lyfe Hospitality", role: "President & Founder" },
    { name: "Lyfe Café", role: "Owner & Operator" },
    { name: "Pizza Lyfe", role: "Owner & Operator" },
    { name: "Dr. Praeger's", role: "Director of Business Development" }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-blue-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <p className="text-emerald-400 text-sm font-medium">President, Lyfe Hospitality</p>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight">
            Dimitrios<br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Pantzos
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-300 mb-8 font-light max-w-3xl">
            Building the future of hospitality through AI, systems thinking, and relentless execution.
          </p>

          <p className="text-xl text-zinc-400 mb-12 max-w-3xl leading-relaxed">
            From engineering cloud infrastructure to engineering revenue growth. From launching award-winning restaurants
            to scaling national foodservice brands. I architect businesses that perform.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:me@dimitri.app"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-semibold shadow-lg shadow-emerald-500/20"
            >
              <Mail size={20} />
              <span>Work With Me</span>
            </a>
            <a
              href="tel:203-551-1003"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
            >
              <Phone size={20} />
              <span>203-551-1003</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:border-emerald-500/30 transition-all">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-zinc-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-zinc-500">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built to Scale</h2>
            <p className="text-xl text-zinc-400">Leading brands across hospitality and foodservice</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/30 transition-all group">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-zinc-400">{brand.role}</p>
                  </div>
                  <Zap className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Bring</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A rare combination of technical depth, operational experience, and revenue execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl hover:border-emerald-500/30 transition-all h-full">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <capability.icon className="text-emerald-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <p className="text-emerald-400 text-sm font-medium flex items-center gap-2">
                  <Award size={16} />
                  Award-Winning Operator
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Proven Track Record</h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Built Organika Kitchen from zero to three locations and $3M+ in annual revenue.
                Named best in class across Connecticut's competitive food scene for 4 consecutive years.
              </p>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">First Mover Advantage</h4>
                <p className="text-zinc-400">First Uber Eats partner in Connecticut. First Postmates partner in Connecticut.
                20% revenue increase through delivery innovation.</p>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">National Distribution</h4>
                <p className="text-zinc-400">Built and managed nationwide distributor networks, broker relationships,
                and secured major QSR partnerships (White Castle, Café Nero, &Pizza).</p>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">Technical Foundation</h4>
                <p className="text-zinc-400">Cloud operations engineer managing 1,000+ storage nodes. Subject matter expert
                in virtualization and disaster recovery systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Something?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're scaling a food brand, launching a concept, or implementing AI into operations—
            let's talk execution.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:me@dimitri.app"
              className="flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-semibold text-lg shadow-2xl shadow-emerald-500/30"
            >
              <Mail size={24} />
              <span>me@dimitri.app</span>
            </a>
            <a
              href="tel:203-551-1003"
              className="flex items-center gap-2 px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg"
            >
              <Phone size={24} />
              <span>203-551-1003</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Dimitrios Pantzos</div>
              <div className="text-zinc-500">President, Lyfe Hospitality</div>
            </div>
            <div className="text-zinc-500 text-sm">
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
