export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-zinc-800 bg-black/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-[0.25em] uppercase text-yellow-300">
            ASRC 2025
          </div>
          <nav className="flex items-center gap-4 text-xs sm:text-sm text-zinc-300">
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
    Lineup
  </a>
  <a href="#expect" className="hover:text-yellow-300 transition">
    Experience
  </a>
  <a href="#contact" className="hover:text-yellow-300 transition">
    Contact
  </a>
</nav>
        </div>
      </header>

      {/* PAGE WRAPPER */}
      <div className="max-w-5xl mx-auto px-4 py-10 sm:py-16 flex flex-col gap-16">

        {/* HERO SECTION */}
        <section
          id="hero"
          className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-zinc-400 mb-3">
              Official Website
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Abuja Sales Rift Carnival 2025
            </h1>
            <p className="text-lg text-zinc-300 mb-6">
              2 days of Shopping • Food • Music • Family Fun • Brand Activations.
              Join hundreds of vendors and thousands of guests in the heart of Abuja.
            </p>
            <p className="text-base text-zinc-300 mb-6">
              <span className="font-semibold text-yellow-400">
                20th – 21st December, 2025
              </span>{" "}
              • Chescon Garden, Millennium Park, Abuja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="https://forms.gle/v35vLkNQUgTw12FY8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-black shadow-lg hover:bg-yellow-500 transition"
              >
                Register as a Vendor or Guest
              </a>
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400 px-6 py-3 text-base font-semibold text-yellow-300 hover:bg-yellow-400/10 transition"
              >
                View Gate Tickets & Tables
              </a>
            </div>
          </div>

          <div className="border border-zinc-700 rounded-3xl px-6 py-5 sm:px-7 sm:py-6 bg-zinc-900/60 shadow-lg w-full sm:w-80">
            <h2 className="text-lg font-semibold mb-3 text-yellow-300">
              Event Quick Info
            </h2>
            <div className="text-sm space-y-2 text-zinc-300">
              <p>
                <span className="text-zinc-400">Dates:</span>{" "}
                20–21 December 2025
              </p>
              <p>
                <span className="text-zinc-400">Venue:</span>{" "}
                Chescon Garden, Millennium Park, Abuja
              </p>
              <p>
                <span className="text-zinc-400">Time:</span>{" "}
                10:00 AM till late (both days)
              </p>
              <p>
                <span className="text-zinc-400">Audience:</span>{" "}
                Families, shoppers, food lovers, young professionals & brands.
              </p>
            </div>
          </div>
        </section>

        {/* VENDOR PRICING SECTION */}
        <section id="vendors">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
            Vendor Stand Categories & Prices
          </h2>
          <p className="text-zinc-300 mb-6 text-center sm:text-left">
            Choose a stand that best fits your brand. All stands include a
            canopy space, basic lighting and access to event promotion.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-5">
              <h3 className="text-xl font-semibold mb-2">Small Business</h3>
              <p className="text-yellow-300 font-bold text-lg mb-2">
                ₦30,000
              </p>
              <p className="text-zinc-300 text-sm mb-3">
                Ideal for small brands, solo entrepreneurs and artisans.
              </p>
              <ul className="text-sm text-zinc-400 list-disc pl-4 space-y-1">
                <li>1 standard stand space</li>
                <li>Brand listing on vendor directory</li>
                <li>Social media mention (grouped)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-5">
              <h3 className="text-xl font-semibold mb-2">Medium Business</h3>
              <p className="text-yellow-300 font-bold text-lg mb-2">
                ₦100,000
              </p>
              <p className="text-zinc-300 text-sm mb-3">
                For growing brands that want visibility and steady traffic.
              </p>
              <ul className="text-sm text-zinc-400 list-disc pl-4 space-y-1">
                <li>Prime stand positioning</li>
                <li>Logo on select digital creatives</li>
                <li>Social media highlight post</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-5">
              <h3 className="text-xl font-semibold mb-2">Large Business</h3>
              <p className="text-yellow-300 font-bold text-lg mb-2">
                ₦200,000
              </p>
              <p className="text-zinc-300 text-sm mb-3">
                Perfect for established brands, malls, and distributors.
              </p>
              <ul className="text-sm text-zinc-400 list-disc pl-4 space-y-1">
                <li>Premium stand zone</li>
                <li>Brand mention on stage</li>
                <li>Dedicated spotlight on social media</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-5">
              <h3 className="text-xl font-semibold mb-2">
                Bank & Fintech / Special Categories
              </h3>
              <p className="text-yellow-300 font-bold text-lg mb-2">
                ₦200,000
              </p>
              <p className="text-zinc-300 text-sm mb-3">
                For banks, fintechs and special partners looking to run strong
                activations.
              </p>
              <ul className="text-sm text-zinc-400 list-disc pl-4 space-y-1">
                <li>Strategic stand placement</li>
                <li>Co-branded content opportunities</li>
                <li>On-ground engagement and product demos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GATE TICKETS & TABLES SECTION */}
        {/* ENTERTAINMENT LINEUP SECTION */}
<section id="lineup">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
    Entertainment Lineup & DJs
  </h2>
  <p className="text-zinc-300 mb-6 text-center sm:text-left">
    A blend of top DJs, hype MCs and surprise performances to keep the
    carnival energy high from start to finish.
  </p>

  <div className="grid sm:grid-cols-3 gap-5 text-sm text-zinc-300">
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
      <h3 className="font-semibold mb-1 text-yellow-300">
        DJ Jimmy Jatt
      </h3>
      <p className="text-zinc-400 mb-2">Headline DJ</p>
      <p>
        Legendary DJ bringing classic hits, Afrobeat bangers and
        non-stop party vibes to Abuja.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
      <h3 className="font-semibold mb-1 text-yellow-300">
        Guest DJs & MCs
      </h3>
      <p className="text-zinc-400 mb-2">Supporting Acts</p>
      <p>
        A curated mix of Abuja&apos;s finest DJs and hype MCs to keep the
        crowd engaged all day and night.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
      <h3 className="font-semibold mb-1 text-yellow-300">
        Special Performances
      </h3>
      <p className="text-zinc-400 mb-2">Artists & Surprises</p>
      <p>
        Live performances, brand activations and fun crowd moments
        designed for content, selfies and memories.
      </p>
    </div>
  </div>
</section>

        {/* WHAT TO EXPECT SECTION */}
        <section id="expect">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
            What to Expect
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 text-sm text-zinc-300">
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
              <h3 className="font-semibold mb-2 text-yellow-300">
                Non-stop Entertainment
              </h3>
              <p>
                Live DJs, performances, host MCs, games, and exciting giveaways
                across both days.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
              <h3 className="font-semibold mb-2 text-yellow-300">
                Massive Shopping Experience
              </h3>
              <p>
                Fashion, food, tech gadgets, beauty, kids items, lifestyle
                products and more from top vendors.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
              <h3 className="font-semibold mb-2 text-yellow-300">
                Family-Friendly Vibes
              </h3>
              <p>
                Safe environment, great food, photo spots and relaxation areas
                for friends, couples and families.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer
          id="contact"
          className="border-t border-zinc-800 pt-6 mt-6 text-center text-sm text-zinc-400"
        >
          <p className="mb-2">
            For sponsorships, partnerships or enquiries:
          </p>
          <p className="mb-2">
            Call / WhatsApp: <span className="text-yellow-300">+234 808 227 9135</span> •{" "}
            Email: <span className="text-yellow-300">Info@faceofcongeniality.com</span>
          </p>
          <p className="mb-1">
            Powered by <span className="text-yellow-300">iTeleStream</span> &{" "}
            <span className="text-yellow-300">Ozigon</span>.
          </p>
          <p className="text-xs text-zinc-500 mt-2">
            © {new Date().getFullYear()} Abuja Sales Rift Carnival. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
