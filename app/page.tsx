"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Viewvers"
              width={40}
              height={40}
              className="rounded-lg"
            />

            <div>
              <div className="text-sm font-semibold">Viewvers</div>
              <div className="text-xs text-zinc-500">Travel Discovery</div>
            </div>
          </div>

          <div className="flex items-center gap-3">

            <a
              href="#features"
              className="text-sm font-medium text-zinc-700 hover:text-black"
            >
              Features
            </a>

            <a
              href="#download"
              className="rounded-lg bg-[#3D4C46] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Download
            </a>

          </div>
        </div>
      </header>


      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Discover places. Compare destinations.
          <br />Plan your next trip.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-zinc-600">
          Viewvers helps travelers explore famous tourist spots and discover nearby
          restaurants, shopping malls, and family-friendly activities in one app.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <a
            href="https://play.google.com/store/apps/details?id=com.viewvers.travel"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#3D4C46] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Download on Google Play
          </a>

          <a
            href="#features"
            className="rounded-xl border px-6 py-3 text-sm font-semibold hover:bg-zinc-50"
          >
            See Features
          </a>

        </div>

      </section>


      {/* Features */}
      <section id="features" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-5 py-20">

          <h2 className="text-center text-2xl font-bold">
            What Viewvers includes
          </h2>

          <p className="mt-2 text-center text-zinc-600">
            Built for discovery, comparison and smooth travel planning.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Discover",
                desc: "Explore famous tourist places with images and detailed information.",
              },
              {
                title: "Nearby",
                desc: "Find restaurants, shopping malls and family activities nearby.",
              },
              {
                title: "Compare",
                desc: "Compare two destinations side-by-side before planning your trip.",
              },
              {
                title: "Weather",
                desc: "Check weather forecasts before visiting any destination.",
              },
              {
                title: "Hotels",
                desc: "Browse hotels with booking links for convenient travel planning.",
              },
              {
                title: "Fast & Simple",
                desc: "Clean design with smooth navigation and quick loading.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border bg-white p-6 transition hover:shadow-sm"
              >
                <div className="font-semibold">{f.title}</div>
                <div className="mt-2 text-sm text-zinc-600">{f.desc}</div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Download */}
      <section id="download" className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center">

          <div className="rounded-3xl bg-[#3D4C46] p-12 text-white">

            <h3 className="text-2xl font-bold">
              Get Viewvers on Android
            </h3>

            <p className="mt-3 text-white/80">
              Install the app and start discovering places around the world.
            </p>

            <div className="mt-6 flex justify-center gap-4">

              <a
                href="https://play.google.com/store/apps/details?id=com.viewvers.travel"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#3D4C46]"
              >
                Download on Google Play
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@viewvers.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold"
              >
                Contact
              </a>

            </div>

          </div>

          <p className="mt-8 text-xs text-zinc-500">
            © {new Date().getFullYear()} Viewvers
          </p>

        </div>
      </section>

    </main>
  );
}