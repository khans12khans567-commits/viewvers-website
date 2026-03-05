"use client";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl border bg-zinc-50">
              <Image
                src="/images/logo.png"
                alt="Viewvers"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Viewvers</div>
              <div className="text-xs text-zinc-500">Travel Discovery</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.viewvers.travel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on Google Play
              </a>

              <a
                href="#features"
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
              >
                Features
              </a>
            <a
              href="#download"
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Get the App
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Beta • Built for travelers
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Discover places. Compare. Plan your next trip.
            </h1>

            <p className="mt-4 text-base leading-7 text-zinc-600">
              Viewvers helps you explore famous tourist spots and discover nearby
              restaurants, shopping malls, and family-friendly activities — all in one place.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#download"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Download on Google Play
              </a>
              <a
                href="#features"
                className="rounded-xl border px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
              >
                See Features
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border bg-white p-3">
                <div className="text-lg font-bold">30+</div>
                <div className="text-xs text-zinc-500">Countries</div>
              </div>
              <div className="rounded-xl border bg-white p-3">
                <div className="text-lg font-bold">Places</div>
                <div className="text-xs text-zinc-500">Hand-picked</div>
              </div>
              <div className="rounded-xl border bg-white p-3">
                <div className="text-lg font-bold">Compare</div>
                <div className="text-xs text-zinc-500">Side-by-side</div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-2xl border bg-gradient-to-b from-zinc-50 to-white p-5 shadow-sm">
            <div className="rounded-xl border bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Today’s Picks</div>
                <div className="text-xs text-zinc-500">Demo</div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { title: 'Famous Places', desc: 'Explore top landmarks & attractions' },
                  { title: 'Nearby Restaurants', desc: 'Find best food spots around you' },
                  { title: 'Shopping & Malls', desc: 'Best malls with highlights & ratings' },
                  { title: 'Family Activities', desc: 'Kid-friendly activities nearby' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border p-3">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-zinc-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              Tip: This is just the website landing page. Your real data stays inside the app.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-bold">What Viewvers includes</h2>
          <p className="mt-2 text-zinc-600">
            Built for discovery, comparison, and smooth planning.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Discover', desc: 'Tourist places with beautiful visuals & details.' },
              { title: 'Nearby', desc: 'Restaurants, malls, and kids activities with info.' },
              { title: 'Compare', desc: 'Compare two places side-by-side in the app.' },
              { title: 'Weather', desc: 'Forecast view so travelers plan better.' },
              { title: 'Hotels', desc: 'Hotel list and booking links for convenience.' },
              { title: 'Fast UI', desc: 'Modern design with smooth navigation.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border bg-white p-5">
                <div className="text-base font-semibold">{f.title}</div>
                <div className="mt-1 text-sm text-zinc-600">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="rounded-3xl border bg-zinc-900 p-8 text-white md:p-10">
            <h3 className="text-2xl font-bold">Get Viewvers on Android</h3>
            <p className="mt-2 max-w-xl text-white/80">
              Install the beta and share feedback. Website will soon support signup, updates, and more.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.viewvers.travel"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900"
              >
                Download on Google Play
              </a>
              <a
                href="mailto:support@viewvers.app"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Viewvers • Built with Next.js
          </p>
        </div>
      </section>
    </main>
  );
}