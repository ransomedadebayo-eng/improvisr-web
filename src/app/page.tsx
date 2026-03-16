/* ------------------------------------------------------------------ */
/*  Improvisr Landing Page                                            */
/*  Next.js 14 App Router — fully static, zero client JS              */
/* ------------------------------------------------------------------ */

/* ---------- tiny SVG icon components (no external deps) ----------- */

function IconScale() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function IconHeadphones() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
    </svg>
  );
}

function IconMetronome() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2L8 22h8L12 2z" />
      <path d="M5 12h14" />
      <path d="M12 2l5 10" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

function IconRoute() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 000-7h-11a3.5 3.5 0 010-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

function IconGenre() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4ECDC4"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A0AEC0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#FF9430"
      stroke="none"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-200 group-open:rotate-180"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function AppStoreBadge() {
  return (
    <svg
      width="156"
      height="52"
      viewBox="0 0 156 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Download on the App Store"
    >
      <rect width="156" height="52" rx="8" fill="white" />
      <text x="56" y="18" fill="#000" fontSize="8" fontFamily="system-ui">
        Download on the
      </text>
      <text
        x="56"
        y="35"
        fill="#000"
        fontSize="16"
        fontWeight="600"
        fontFamily="system-ui"
      >
        App Store
      </text>
      {/* Apple logo approximation */}
      <g transform="translate(16, 8)" fill="#000">
        <path d="M18.5 17.9c-.4.9-.9 1.7-1.4 2.4-0.7 1-1.3 1.7-1.8 2.1-.7.7-1.5 1-2.3 1-.6 0-1.3-.2-2.1-.5-.8-.3-1.6-.5-2.2-.5-.7 0-1.4.2-2.2.5-.8.3-1.5.5-2 .5-.8 0-1.6-.4-2.4-1.1-.6-.5-1.2-1.2-1.9-2.2-.7-1-1.3-2.2-1.8-3.5-.5-1.4-.8-2.7-.8-4 0-1.5.3-2.8 1-3.8.5-.8 1.2-1.5 2.1-1.9.8-.5 1.7-.7 2.7-.7.6 0 1.5.2 2.4.6.9.4 1.5.6 1.8.6.2 0 .9-.2 2-.7.9-.4 1.7-.6 2.4-.5 1.7.1 3 .8 3.9 2.2-1.6 1-2.3 2.3-2.3 4 0 1.3.5 2.4 1.4 3.3.4.4.9.7 1.4 1-.1.3-.2.6-.4 1zM14.8 1.6c0 1-.4 2-1.1 2.9-.9 1.1-1.9 1.7-3 1.6 0-.1 0-.2 0-.4 0-1 .4-2 1.2-2.8.4-.4.8-.8 1.4-1.1.6-.3 1.1-.5 1.5-.5 0 .1 0 .2 0 .3z" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: <IconScale />,
    title: "Smart Scale Recommendations",
    description:
      "864 unique combinations of scales, keys, and genres. Select your style and key, and Improvisr instantly recommends the right scales with musical context for why each one works.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: <IconHeadphones />,
    title: "Backing Tracks in Any Key",
    description:
      "Genre-specific backing tracks with real-time pitch shifting. Practice in any key without waiting for new recordings. Jazz, Blues, Rock, Funk, Latin, and R&B styles available.",
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
    icon: <IconMetronome />,
    title: "Built-in Metronome",
    description:
      "Precision metronome integrated directly into your practice flow. Adjust BPM on the fly without switching apps. Stays in sync with your backing tracks.",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: <IconChart />,
    title: "Practice Tracking & Streaks",
    description:
      "Log every session automatically. Track your daily streaks, weekly totals, and progress over time. See which scales and genres you practice most and where to focus next.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: <IconRoute />,
    title: "Guided Practice Routines",
    description:
      "Structured routines that walk you through warm-ups, scale exercises, and improv sessions. Never wonder what to practice next. Timers keep you on track.",
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
    icon: <IconGenre />,
    title: "6 Genres, Infinite Possibilities",
    description:
      "Jazz, Blues, Rock, Funk, Latin, and R&B. Each genre comes with authentic scale recommendations, style-specific backing tracks, and genre-appropriate practice patterns.",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Select Your Style & Key",
    description:
      "Choose from Jazz, Blues, Rock, Funk, Latin, or R&B. Pick any of the 12 keys. Set your instrument.",
  },
  {
    number: "2",
    title: "Get Scale Recommendations",
    description:
      "Improvisr instantly surfaces the best scales for your combination, with explanations of why each scale fits the style.",
  },
  {
    number: "3",
    title: "Practice with Backing Tracks",
    description:
      "Fire up a genre-matched backing track in your chosen key, set the metronome, and start improvising. Your session is logged automatically.",
  },
];

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

const TESTIMONIALS = [
  {
    quote:
      "Stop juggling iReal Pro for tracks, Tonaly for scales, and a separate metronome. One app. One practice flow. All 12 keys.",
    author: "The Improvisr Promise",
    role: "Scale Recs + Tracks + Tracking",
    rating: 5,
  },
  {
    quote:
      "Tap Funk + E minor. See Mixolydian. Hear the backing track. Start practicing. Under 30 seconds from opening the app to meaningful improvisation.",
    author: "How It Works",
    role: "864 Scale-Key-Genre Combinations",
    rating: 5,
  },
  {
    quote:
      "Built by a professional bassist and bandleader who felt the frustration firsthand. Every recommendation reflects real-world performance practice, not textbook theory.",
    author: "Built by a Musician",
    role: "For Musicians",
    rating: 5,
  },
];

const FAQS = [
  {
    question: "What instruments does Improvisr support?",
    answer:
      "Improvisr works with any instrument. Scale recommendations are universal music theory that applies to guitar, bass, piano, saxophone, trumpet, and any other melodic instrument. The backing tracks are genre-specific accompaniments you play along with on whatever instrument you choose.",
  },
  {
    question: "How are the 864 combinations calculated?",
    answer:
      "We combine 12 musical keys, 6 genre styles (Jazz, Blues, Rock, Funk, Latin, R&B), and 12 recommended scales per genre-key pairing. That gives you 12 x 6 x 12 = 864 unique scale-key-genre combinations to explore and practice.",
  },
  {
    question: "Can I use Improvisr offline?",
    answer:
      "Yes. All scale recommendations, the metronome, and your practice log work fully offline. Backing tracks are downloaded for offline use after you play them once. Your practice data syncs automatically when you reconnect.",
  },
  {
    question: "What is the difference between Free and Pro?",
    answer:
      "The free tier gives you scale recommendations in 3 keys and 2 genre styles, plus the metronome and basic practice tracking. Pro unlocks all 12 keys, all 6 genres, the full backing track library with pitch shifting, guided routines, full analytics, and favorites.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer:
      "Yes. New users get a 7-day free trial of Improvisr Pro with full access to every feature. You can cancel anytime during the trial and you will not be charged.",
  },
  {
    question: "How does pitch shifting work?",
    answer:
      "Improvisr uses real-time audio processing to transpose any backing track to any key without affecting tempo or audio quality. This means you get instant access to backing tracks in all 12 keys for every genre, without us needing to record separate tracks for each key.",
  },
  {
    question: "I am a beginner. Is this app for me?",
    answer:
      "Absolutely. Improvisr is designed for musicians at any level. If you are just starting to improvise, the guided routines and scale explanations will teach you which scales work over which styles and why. If you are advanced, you will appreciate the depth of the 864 combinations and the ability to practice across multiple genres.",
  },
  {
    question: "Is Improvisr available on Android?",
    answer:
      "Improvisr is currently iOS-only (iPhone and iPad). An Android version is on our roadmap. Join the waitlist on the App Store page and we will notify you when Android launches.",
  },
];

/* ------------------------------------------------------------------ */
/*  SECTION COMPONENTS                                                 */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-md border-b border-white/[0.06]"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
          aria-label="Improvisr home"
        >
          <span
            className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-navy-900 text-sm font-black"
            aria-hidden="true"
          >
            I
          </span>
          <span>
            Improvis<span className="text-accent">r</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a
            href="#features"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          >
            FAQ
          </a>
        </div>
        <a
          href="https://apps.apple.com/app/improvisr"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-navy-900 text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
          <span
            className="w-2 h-2 rounded-full bg-accent animate-pulse"
            aria-hidden="true"
          />
          Available on iOS
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Your Personal{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">
            Improv Coach
          </span>{" "}
          in Your Pocket
        </h1>

        <p className="text-lg sm:text-xl text-muted-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop juggling four apps to practice improvisation. Improvisr combines
          smart scale recommendations, genre-specific backing tracks, a
          metronome, and practice tracking in one beautiful interface.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://apps.apple.com/app/improvisr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
            aria-label="Download Improvisr on the App Store"
          >
            <AppStoreBadge />
          </a>
          <a href="#how-it-works" className="btn-secondary">
            See How It Works
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent">
              864
            </div>
            <div className="text-sm text-muted mt-1">
              Scale-Key Combinations
            </div>
          </div>
          <div
            className="hidden sm:block w-px h-10 bg-white/10"
            aria-hidden="true"
          />
          <div>
            <div className="text-2xl md:text-3xl font-bold text-teal">6</div>
            <div className="text-sm text-muted mt-1">Music Genres</div>
          </div>
          <div
            className="hidden sm:block w-px h-10 bg-white/10"
            aria-hidden="true"
          />
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gold">12</div>
            <div className="text-sm text-muted mt-1">Keys Supported</div>
          </div>
          <div
            className="hidden sm:block w-px h-10 bg-white/10"
            aria-hidden="true"
          />
          <div>
            <div className="flex items-center gap-1 justify-center text-2xl md:text-3xl font-bold text-white">
              4.8 <IconStar />
            </div>
            <div className="text-sm text-muted mt-1">App Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section-padding bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Stop Guessing{" "}
          <span className="text-accent">Which Scales to Play</span>
        </h2>
        <p className="text-lg text-muted-light max-w-2xl mx-auto mb-16 leading-relaxed">
          Right now, most musicians piece together their improv practice from
          four or five different apps and browser tabs. It is fragmented,
          frustrating, and breaks your creative flow.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {/* Before */}
          <div className="card-glass p-8">
            <div className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">
              Before Improvisr
            </div>
            <ul className="space-y-4 text-muted-light" role="list">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 shrink-0" aria-hidden="true">
                  &times;
                </span>
                <span>
                  Open a scale reference app to look up which scales fit the key
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 shrink-0" aria-hidden="true">
                  &times;
                </span>
                <span>
                  Switch to YouTube or another app for a backing track
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 shrink-0" aria-hidden="true">
                  &times;
                </span>
                <span>Open a separate metronome app to set your tempo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 shrink-0" aria-hidden="true">
                  &times;
                </span>
                <span>
                  No tracking of what you practiced or for how long
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 shrink-0" aria-hidden="true">
                  &times;
                </span>
                <span>
                  Context-switching kills your creative momentum every session
                </span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="card-glass p-8 border-accent/20">
            <div className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
              With Improvisr
            </div>
            <ul className="space-y-4 text-muted-light" role="list">
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">
                  <IconCheck />
                </span>
                <span>
                  Select your genre and key, get instant scale recommendations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">
                  <IconCheck />
                </span>
                <span>
                  Genre-matched backing tracks play right inside the app
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">
                  <IconCheck />
                </span>
                <span>
                  Built-in metronome syncs with your practice session
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">
                  <IconCheck />
                </span>
                <span>
                  Every session is logged automatically with streaks and stats
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">
                  <IconCheck />
                </span>
                <span>
                  One app, zero context-switching, pure creative flow
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Everything You Need to{" "}
            <span className="text-accent">Improvise Better</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Six core features working together in one seamless practice
            experience. No more app-hopping.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="card-glass p-8 transition-all duration-200 hover:border-white/10 hover:bg-navy-700/70"
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-5`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-gradient-to-b from-navy-900 to-navy-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Start Playing in{" "}
            <span className="text-accent">Under a Minute</span>
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Three steps from opening the app to improvising with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative text-center md:text-left">
              {/* Connector line */}
              {idx < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(100%_-_1rem)] w-[calc(100%_-_3rem)] h-px bg-gradient-to-r from-accent/40 to-transparent"
                  aria-hidden="true"
                />
              )}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl font-bold text-accent mb-5 mx-auto md:mx-0">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Simple, <span className="text-accent">Honest Pricing</span>
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Start free. Upgrade when you are ready for the full experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Free tier */}
          <div className="card-glass p-8">
            <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">
              Free
            </div>
            <div className="text-4xl font-bold mb-1">$0</div>
            <div className="text-muted text-sm mb-8">Forever free</div>
            <a
              href="https://apps.apple.com/app/improvisr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full mb-8"
            >
              Get Started
            </a>
            <ul className="space-y-3 text-sm" role="list">
              {PRICING_FEATURES.map((f) => (
                <li key={f.name} className="flex items-center gap-3">
                  {f.free === true ? (
                    <IconCheck />
                  ) : f.free === false ? (
                    <IconX />
                  ) : (
                    <span className="w-5 text-center text-muted" aria-hidden="true">
                      -
                    </span>
                  )}
                  <span className="text-muted-light">
                    {f.name}
                    {typeof f.free === "string" && (
                      <span className="text-muted ml-1">({f.free})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro tier */}
          <div className="card-glass p-8 border-accent/30 relative">
            <div
              className="absolute -top-3 left-8 px-3 py-1 bg-accent text-navy-900 text-xs font-bold rounded-full uppercase tracking-wider"
              aria-label="Most popular plan"
            >
              Most Popular
            </div>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Pro
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold">$5.99</span>
              <span className="text-muted">/month</span>
            </div>
            <div className="text-muted text-sm mb-8">
              or{" "}
              <span className="text-teal font-semibold">
                $39.99/year (save 44%)
              </span>
            </div>
            <a
              href="https://apps.apple.com/app/improvisr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mb-8"
            >
              Start 7-Day Free Trial
            </a>
            <ul className="space-y-3 text-sm" role="list">
              {PRICING_FEATURES.map((f) => (
                <li key={f.name} className="flex items-center gap-3">
                  {f.pro === true ? (
                    <IconCheck />
                  ) : (
                    <span className="w-5 text-center text-teal" aria-hidden="true">
                      -
                    </span>
                  )}
                  <span className="text-muted-light">
                    {f.name}
                    {typeof f.pro === "string" && (
                      <span className="text-teal ml-1">({f.pro})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-muted text-sm">
          All prices in USD. Subscriptions are managed through the App Store.
          Cancel anytime.
        </p>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="section-padding bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Musicians Are{" "}
            <span className="text-accent">Practicing Smarter</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} />
            ))}
          </div>
          <p className="text-muted">4.8 out of 5 on the App Store</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className="card-glass p-8">
              <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <blockquote className="text-muted-light leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="font-semibold text-white">{t.author}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group card-glass overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-left font-medium hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-2xl">
                {faq.question}
                <IconChevron />
              </summary>
              <div className="px-6 pb-6 text-muted leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="section-padding bg-gradient-to-b from-navy-800 to-navy-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">
            Improvise with Confidence
          </span>
          ?
        </h2>
        <p className="text-lg text-muted-light mb-10 max-w-xl mx-auto">
          Join musicians who are finally practicing smarter, not harder.
          Download Improvisr free and start your first session in under a
          minute.
        </p>
        <a
          href="https://apps.apple.com/app/improvisr"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg"
          aria-label="Download Improvisr on the App Store"
        >
          <AppStoreBadge />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-white/[0.06] bg-navy-900"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-lg font-bold mb-4">
              <span
                className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-navy-900 text-xs font-black"
                aria-hidden="true"
              >
                I
              </span>
              Improvis<span className="text-accent">r</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Your personal improv coach. Smart scale recommendations, backing
              tracks, and practice tracking for Jazz, Blues, Rock, Funk, Latin,
              and R&B.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-muted" role="list">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/app/improvisr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-muted" role="list">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@improvisr.app"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-muted mb-6" role="list">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-light mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted hover:text-white transition-colors"
                aria-label="Improvisr on Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted hover:text-white transition-colors"
                aria-label="Improvisr on YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted hover:text-white transition-colors"
                aria-label="Improvisr on TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted hover:text-white transition-colors"
                aria-label="Improvisr on X (Twitter)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4l11.733 16H20L8.267 4H4z" />
                  <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Improvisr. All rights reserved.</p>
          <p>
            Made with passion for musicians, by musicians.
          </p>
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
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Pricing />
        <SocialProof />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
