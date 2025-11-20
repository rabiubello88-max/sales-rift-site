import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans">
      {/* TOP GRADIENT BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 via-fuchsia-500 to-purple-500 shadow-lg shadow-yellow-500/30">
              <span className="text-lg font-extrabold text-black">AR</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Abuja
              </p>
              <p className="text-sm font-semibold text-zinc-100">
                Sales Rift Carnival 2025
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden items-center gap-4 text-xs sm:flex sm:text-sm text-zinc-300">
            <a href="#hero" className="hover:text-yellow-300 transition">
              Home
            </a>
            <a href="#vendors" className="hover:text-yellow-300 transition">
              Vendors
            </a>
            <a href="#tickets" className="hover:text-yellow-300 transition">
              Tickets
            </a>
            <a href="#lineup" className="hover:text-yellow-300 transition">
              Line-Up
            </a>
            <a href="#experience" className="hover:text-yellow-300 transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#tickets"
            className="inline-flex items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-300 hover:bg-yellow-400/20 sm:text-sm"
          >
            View Gate Tickets &amp; Tables
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="border-b border-white/5 bg-gradient-to-b from-black/60 to-black py-10 sm:py-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          {/* Left side text */}
          <div className="max-w-xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-500" />
              <span>20–21 December 2025 • Chescon Garden, Millennium Park • Abuja</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
              2 Days of Shopping, Music, Fashion &amp; Food in Abuja.
            </h1>

            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              Abuja Sales Rift Carnival 2025 is a 2-day shopping and lifestyle festival
              with massive discounts, live DJs, runway moments, food, kids zone and a
              nightlife experience to close the year in style.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-xs text-zinc-200">
              {[
                "Shopping Discounts",
                "Live DJs & Performances",
                "Fashion & Runway",
                "Food & Drinks",
                "Kids Zone",
                "Nightlife Experience",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-500/30 hover:bg-yellow-300"
              >
                View Tickets &amp; Tables
              </a>
              <a
  href="https://forms.gle/gc2STzzQJ6zjZx5w5"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 text-base font-semibold text-black shadow-lg hover:bg-yellow-300 transition"
>
  Register as Vendor or Guest
</a>
            </div>

            <p className="pt-1 text-xs text-zinc-400">
              Ticketed event • Families, shoppers, food lovers, young professionals &amp;
              lifestyle brands.
            </p>
          </div>

          {/* Right side — Event Card */}
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/80 p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Event Quick Info
              </p>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                Abuja • 2025
              </span>
            </div>

            <div className="space-y-3 text-sm text-zinc-200">
              <div className="flex items-start justify-between gap-3">
                <span className="text-zinc-400">Dates:</span>
                <span className="font-medium text-right">
                  Saturday 20th – Sunday 21st December 2025
                </span>
              </div>
              <div className="flex items-start justify-between gap-3">
                <span className="text-zinc-400">Venue:</span>
                <span className="font-medium text-right">
                  Chescon Garden, Millennium Park, Abuja
                </span>
              </div>
              <div className="flex items-start justify-between gap-3">
                <span className="text-zinc-400">Time:</span>
                <span className="font-medium text-right">
                  10:00 AM till late (both days)
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-yellow-300">
                Gate Fee (Regular Entry)
              </p>
              <p className="mt-1">
                ₦5,000 for tickets bought online • ₦10,000 at the gate.
              </p>
              <p className="mt-2 text-[11px] text-zinc-400">
                VIP table packages available — see Tickets section for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VENDOR SECTION */}
      <section
        id="vendors"
        className="border-b border-white/5 bg-black py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                Vendor Opportunities
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-300">
                Fashion, food, drinks, gadgets, home &amp; lifestyle, crafts and more.
                Limited stands available for serious brands who want visibility and
                sales during the festive season.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-yellow-400/60 px-4 py-2 text-xs font-semibold text-yellow-300 hover:bg-yellow-400/10 sm:text-sm"
            >
              Request Vendor / Guest Pack
            </a>
          </div>

          {/* Vendor Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Small Vendors
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                Table-Top Stands
              </p>
              <p className="mt-2 text-xs text-zinc-300">
                Ideal for SMEs, skincare brands, accessories, confectioneries and more.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-300">
                <li>• 5ft x 5ft table space</li>
                <li>• 1 vendor pass</li>
                <li>• Listing on vendor directory</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-yellow-400/40 bg-gradient-to-br from-yellow-400/10 via-fuchsia-500/5 to-black p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                Medium Vendors
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                Canopy &amp; Brand Booths
              </p>
              <p className="mt-2 text-xs text-zinc-300">
                For fashion brands, food courts, drink stands, gadgets and lifestyle
                brands that want footprint and branding space.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-300">
                <li>• 10ft x 10ft canopy space</li>
                <li>• 2–3 vendor passes</li>
                <li>• Optional power access</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Brand Activations
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                Banks, Fintech, FMCG &amp; Experience Zones
              </p>
              <p className="mt-2 text-xs text-zinc-300">
                Perfect for brands who want sampling, sign-ups, games, photobooths or
                immersive experiences during the carnival.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-zinc-300">
                <li>• Customised footprint</li>
                <li>• Branding &amp; co-marketing</li>
                <li>• On-site content opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TICKETS SECTION */}
      <section
        id="tickets"
        className="border-b border-white/5 bg-zinc-950 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                Gate Tickets &amp; VIP Tables
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-300">
                Choose how you want to experience Abuja Sales Rift Carnival 2025 —
                from regular entry to premium tables for crew, clients and special
                guests.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {/* Regular */}
            <div className="rounded-2xl border border-white/10 bg-black/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Regular Entry
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                Single-Day Access
              </p>
              <p className="mt-4 text-2xl font-extrabold text-yellow-300">
                ₦5,000{" "}
                <span className="text-xs font-normal text-zinc-400">
                  (online pre-sale)
                </span>
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                ₦10,000 at the gate on event days.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-zinc-300">
                <li>• Access to fairgrounds &amp; concerts</li>
                <li>• Access to food, fashion &amp; vendor zones</li>
              </ul>
            </div>

            {/* Weekend Pass */}
            <div className="rounded-2xl border border-yellow-400/40 bg-gradient-to-b from-yellow-500/15 via-black to-black p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                Weekend Pass
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                2-Day Experience
              </p>
              <p className="mt-4 text-2xl font-extrabold text-yellow-200">
                Example: ₦7,000
              </p>
              <p className="mt-1 text-xs text-zinc-300">
                Online only • Limited quantity (exact pricing to be confirmed).
              </p>
              <ul className="mt-4 space-y-1 text-xs text-zinc-200">
                <li>• Access for both days</li>
                <li>• Priority access at main entrance</li>
              </ul>
            </div>

            {/* VIP Tables */}
            <div className="rounded-2xl border border-fuchsia-400/40 bg-gradient-to-b from-fuchsia-500/20 via-black to-black p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-200">
                VIP Tables
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                Nightlife &amp; Premium Seating
              </p>
              <p className="mt-4 text-xs font-semibold text-zinc-100">
                Example Packages:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-zinc-200">
                <li>• Luxury Table: ₦1,000,000</li>
                <li>• Premium Table: ₦500,000</li>
                <li>• Cocktail Table: ₦100,000</li>
              </ul>
              <p className="mt-3 text-[11px] text-zinc-300">
                Table details, bottle inclusions and full benefits will be provided in
                the official table pack.
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-zinc-400">
            * Final prices, table allocations and ticket outlets will be confirmed and
            communicated across all official platforms.
          </p>
        </div>
      </section>

      {/* LINE-UP SECTION */}
      <section
        id="lineup"
        className="border-b border-white/5 bg-black py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                Entertainment Line-Up
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-300">
                A blend of DJs, hypemen and performers to keep the carnival energy high
                from day to night.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Headline DJ
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                DJ Jimmy Jatt (TBC)
              </p>
              <p className="mt-2 text-xs text-zinc-300">
                Lagos to Abuja iconic vibes, classic hits, and carnival-ready sets.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Guest DJs
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                Curated Abuja &amp; guest DJs
              </p>
              <p className="mt-2 text-xs text-zinc-300">
                A rotation of DJs bringing Afrobeats, Amapiano, Hip-Hop and party
                anthems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Hosts &amp; Performers
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-100">
                Hypemen, MCs &amp; Live Acts
              </p>
              <p className="mt-2 text-xs text-zinc-300">
                Crowd control, engagement and stage experiences for both daytime and
                night sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="border-b border-white/5 bg-zinc-950 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                What to Expect
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-300">
                Abuja Sales Rift Carnival is built as a complete lifestyle experience —
                not just a market.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/70 p-5 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-100">Shopping &amp; Deals</p>
              <p className="mt-2 text-xs text-zinc-300">
                Fashion, beauty, gadgets, homeware and more — with end-of-year
                discounts and special carnival offers.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/70 p-5 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-100">Food, Drinks &amp; Chill</p>
              <p className="mt-2 text-xs text-zinc-300">
                Food courts, grills, small chops, mocktails and more — plus spots to
                sit, relax and network.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/70 p-5 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-100">Family &amp; Nightlife</p>
              <p className="mt-2 text-xs text-zinc-300">
                Daytime is family-friendly; evening transitions into a nightlife-driven
                experience with DJs, performances and VIP tables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section
        id="contact"
        className="bg-black py-10 pb-16 sm:py-12 sm:pb-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-bold text-zinc-50 sm:text-2xl">
            Contact &amp; Enquiries
          </h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-300">
            For vendor stands, VIP tables, sponsorships or media partnerships, kindly
            reach out via phone or email.
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 text-sm text-zinc-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Phone / WhatsApp
              </p>
              <p className="mt-2 text-sm">
                0812 425 2558 • 0806 767 7257 • 0703 607 1928
              </p>
              <p className="mt-3 text-xs text-zinc-400">
                You can call or send a WhatsApp message for vendor details, guest
                information or partnership enquiries.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 text-sm text-zinc-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Email / Official Channels
              </p>
              <p className="mt-2 text-sm">
                {/* Replace with your real event email later */}
                example@salesriftcarnival.com
              </p>
              <p className="mt-3 text-xs text-zinc-400">
                Formal proposals, sponsorship decks and partnership documents can be
                shared via email for proper follow-up.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-4 text-xs text-zinc-500 sm:flex sm items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Abuja Sales Rift Carnival • Abuja, Nigeria.
            </p>
            <p className="mt-2 sm:mt-0">
              Website powered by Next.js &amp; Vercel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
