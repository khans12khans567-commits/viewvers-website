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
          restaurants, shopping malls and family-friendly activities in one app.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <a
            href="https://play.google.com/store/apps/details?id=com.viewvers.travel"
            target="_blank"
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


      {/* Screenshots */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-20">

          <h2 className="text-center text-2xl font-bold">
            App Screenshots
          </h2>

          <p className="mt-2 text-center text-zinc-600">
            A quick look at the Viewvers app experience.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <img
            src="/images/screenshot1.jpg"
            alt="app screenshot"
            className="rounded-xl border w-full"
            />

            <img
            src="/images/screenshot2.jpg"
            alt="app screenshot"
            className="rounded-xl border w-full"
            />

           <img
           src="/images/screenshot3.jpg"
           alt="app screenshot"
           className="rounded-xl border w-full"
           />

          </div>

        </div>
      </section>


      {/* Destinations */}
      <section className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-5 py-20">

          <h2 className="text-center text-2xl font-bold">
            Popular Destinations
          </h2>

          <p className="mt-2 text-center text-zinc-600">
            Discover famous travel destinations available in Viewvers.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              { name: "Paris", image: "/images/paris.jpg" },
              { name: "Dubai", image: "/images/dubai.jpg" },
              { name: "Tokyo", image: "/images/tokyo.jpg" },
              { name: "New York", image: "/images/newyork.jpg" },
              { name: "Rome", image: "/images/rome.jpg" },
              { name: "Singapore", image: "/images/singapore.jpg" },
            ].map((d) => (
              <div
                key={d.name}
                className="overflow-hidden rounded-xl border bg-white hover:shadow-sm"
              >

                <Image
                  src={d.image}
                  alt={d.name}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 font-semibold">
                  {d.name}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Features */}
      <section id="features" className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-20">

          <h2 className="text-center text-2xl font-bold">
            What Viewvers includes
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              "Discover famous places",
              "Nearby restaurants",
              "Shopping malls",
              "Family activities",
              "Weather forecast",
              "Hotel recommendations",
            ].map((f) => (
              <div
                key={f}
                className="rounded-xl border bg-white p-6 text-center"
              >
                {f}
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

            <div className="mt-6">

              <a
                href="https://play.google.com/store/apps/details?id=com.viewvers.travel"
                target="_blank"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#3D4C46]"
              >
                Download on Google Play
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-5 py-10 text-center text-sm text-zinc-600">

          <div className="font-semibold text-zinc-800">
            Viewvers
          </div>

          <p className="mt-2">
            Travel discovery app for exploring destinations, restaurants,
            malls and family activities.
          </p>

          <div className="mt-4 flex justify-center gap-6">

            <a href="#features" className="hover:text-black">
              Features
            </a>

            <a href="#download" className="hover:text-black">
              Download
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@viewvers.app"
              target="_blank"
              className="hover:text-black"
            >
              Contact
            </a>

          </div>

          <p className="mt-6 text-xs">
            © {new Date().getFullYear()} Viewvers
          </p>

        </div>
      </footer>

    </main>
  );
}