/* ------------------------------------------------------------------ */
/*  Improvisr Landing Page                                            */
/*  Next.js 14 App Router — fully static, zero client JS              */
/* ------------------------------------------------------------------ */

const PRICING_FEATURES = [
  { name: "Scale recommendations", free: true, pro: true },
  { name: "Keys available", free: "3 keys", pro: "All 12 keys" },
  { name: "Genre styles", free: "2 styles", pro: "All 6 genres" },
  { name: "Backing tracks", free: "Limited", pro: "Full library" },
  { name: "Pitch shifting", free: false, pro: true },
  { name: "Built-in metronome", free: true, pro: true },
  { name: "Practice tracking", free: "Basic", pro: "Full analytics" },
  { name: "Guided routines", free: false, pro: true },
  { name: "Streak tracking", free: true, pro: true },
  { name: "Favorites & bookmarks", free: false, pro: true },
];

const FAQS = [
  {
    question: "What instruments does Improvisr support?",
    answer:
      "Improvisr works with any instrument. Scale recommendations are universal music theory that applies to guitar, bass, piano, saxophone, trumpet, and any other melodic instrument. The backing tracks are genre-specific accompaniments you play along with on whatever you play.",
  },
  {
    question: "How are the 864 combinations calculated?",
    answer:
      "12 musical keys multiplied by 6 genre styles (Jazz, Blues, Rock, Funk, Latin, R&B) multiplied by 12 recommended scales per genre-key pairing. That gives you 864 unique scale-key-genre combinations to explore.",
  },
  {
    question: "Can I use Improvisr offline?",
    answer:
      "Yes. All scale recommendations, the metronome, and your practice log work fully offline. Backing tracks are cached for offline use after you play them once. Your data syncs when you reconnect.",
  },
  {
    question: "What is the difference between Free and Pro?",
    answer:
      "Free gives you scale recommendations in 3 keys and 2 genre styles, plus the metronome and basic practice tracking. Pro unlocks all 12 keys, all 6 genres, the full backing track library with pitch shifting, guided routines, full analytics, and favorites.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer:
      "Yes. New users get a 7-day free trial of Pro with full access to every feature. Cancel anytime during the trial and you will not be charged.",
  },
  {
    question: "How does pitch shifting work?",
    answer:
      "Improvisr uses real-time audio processing to transpose any backing track to any key without affecting tempo or quality. You get every backing track in all 12 keys instantly.",
  },
];

/* ------------------------------------------------------------------ */
/*  SECTIONS                                                           */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-navy-900 border-b border-white/[0.04]"
      role="banner"
    >
      <nav
        className="max-w-5xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a href="#" className="text-base font-semibold tracking-tight">
          Improvisr
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-muted">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-28 md:pt-52 md:pb-40 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.05] mb-8">
          Practice improvisation like you mean it.
        </h1>
        <p className="text-xl sm:text-2xl text-muted-light leading-relaxed max-w-2xl mb-12">
          Scale recommendations, backing tracks, and practice tracking for
          every key and genre — in one app built by a working musician.
        </p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="flex flex-col sm:flex-row gap-3 max-w-lg"
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            autoComplete="email"
            className="flex-1 px-5 py-4 bg-navy-700 border border-white/10 rounded-full text-white placeholder:text-muted text-base focus:outline-none focus:border-accent min-w-0"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Join the Waitlist
          </button>
        </form>
        <p className="text-sm text-muted mt-4">
          iOS app launching soon. No spam.
        </p>
      </div>
    </section>
  );
}

function WhatItDoes() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-20">
          What it does.
        </h2>
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Scale Recommendations
            </h3>
            <p className="text-muted-light leading-relaxed">
              Pick a genre and key. Improvisr instantly tells you which scales
              work and why — 864 combinations across Jazz, Blues, Rock, Funk,
              Latin, and R&B.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Backing Tracks</h3>
            <p className="text-muted-light leading-relaxed">
              Genre-specific tracks with real-time pitch shifting. Practice
              in any of the 12 keys without hunting for recordings. Hit play
              and improvise.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Practice Tracking</h3>
            <p className="text-muted-light leading-relaxed">
              Every session is logged automatically. Track streaks, weekly
              totals, and which scales you spend the most time on. See where
              to focus next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-20">
          How it works.
        </h2>
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          <div>
            <div className="text-6xl font-bold text-white/10 mb-4">01</div>
            <h3 className="text-xl font-semibold mb-3">
              Choose your style and key
            </h3>
            <p className="text-muted-light leading-relaxed">
              Jazz, Blues, Rock, Funk, Latin, or R&B. Any of the 12 keys.
              Set your instrument. Takes five seconds.
            </p>
          </div>
          <div>
            <div className="text-6xl font-bold text-white/10 mb-4">02</div>
            <h3 className="text-xl font-semibold mb-3">
              See what scales fit
            </h3>
            <p className="text-muted-light leading-relaxed">
              Improvisr surfaces the best scales for your combination with
              short explanations of why each one works over that style.
            </p>
          </div>
          <div>
            <div className="text-6xl font-bold text-white/10 mb-4">03</div>
            <h3 className="text-xl font-semibold mb-3">
              Play along and track it
            </h3>
            <p className="text-muted-light leading-relaxed">
              Fire up a backing track, set the metronome, and start
              improvising. Your session logs automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Details() {
  return (
    <section className="section-padding border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-20">
          The details.
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {[
            {
              title: "Built-in metronome",
              desc: "Adjustable BPM directly in your practice flow. No app switching.",
            },
            {
              title: "Real-time pitch shifting",
              desc: "Transpose any backing track to any key without affecting tempo or quality.",
            },
            {
              title: "Guided routines",
              desc: "Structured warm-ups, scale exercises, and improv sessions with built-in timers.",
            },
            {
              title: "Offline support",
              desc: "Scales, metronome, and practice logs work without an internet connection.",
            },
            {
              title: "864 combinations",
              desc: "12 keys, 12 scales, 6 genres. Every combination curated by a working musician.",
            },
            {
              title: "Works with any instrument",
              desc: "Guitar, bass, piano, saxophone, trumpet — the theory is universal.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section-padding border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Pricing.
        </h2>
        <p className="text-lg text-muted mb-16 max-w-xl">
          Start free. Upgrade when you want the full experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {/* Free */}
          <div className="border border-white/[0.08] rounded-2xl p-8">
            <p className="text-sm text-muted uppercase tracking-wider font-medium mb-4">
              Free
            </p>
            <p className="text-4xl font-bold mb-1">$0</p>
            <p className="text-muted text-sm mb-10">Forever</p>
            <ul className="space-y-3 text-sm" role="list">
              {PRICING_FEATURES.map((f) => (
                <li
                  key={f.name}
                  className="flex items-baseline justify-between gap-4 py-1"
                >
                  <span className="text-muted-light">{f.name}</span>
                  <span className="text-muted text-right shrink-0">
                    {f.free === true
                      ? "Yes"
                      : f.free === false
                        ? "\u2014"
                        : f.free}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="border border-white/[0.08] rounded-2xl p-8">
            <p className="text-sm text-accent uppercase tracking-wider font-medium mb-4">
              Pro
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold">$5.99</span>
              <span className="text-muted">/month</span>
            </div>
            <p className="text-muted text-sm mb-10">
              or $39.99/year
            </p>
            <ul className="space-y-3 text-sm" role="list">
              {PRICING_FEATURES.map((f) => (
                <li
                  key={f.name}
                  className="flex items-baseline justify-between gap-4 py-1"
                >
                  <span className="text-muted-light">{f.name}</span>
                  <span className="text-white text-right shrink-0">
                    {f.pro === true
                      ? "Yes"
                      : typeof f.pro === "string"
                        ? f.pro
                        : "\u2014"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-muted mt-8">
          All prices in USD. Subscriptions managed through the App Store.
          Cancel anytime. 7-day free trial included with Pro.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-padding border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
          Questions.
        </h2>

        <div className="divide-y divide-white/[0.06]">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer text-left text-lg font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                {faq.question}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="faq-chevron shrink-0 text-muted"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="pb-6 text-muted leading-relaxed pr-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-white/[0.04] px-6 sm:px-8 py-12"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-semibold mb-1">Improvisr</p>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Improvisr. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a
            href="mailto:support@improvisr.app"
            className="hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatItDoes />
        <HowItWorks />
        <Details />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
