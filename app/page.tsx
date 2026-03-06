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
              width={36}
              height={36}
              className="rounded-lg"
            />

            <div>
              <div className="text-sm font-semibold">Viewvers</div>
              <div className="text-xs text-zinc-500">Travel Discovery</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">

            <a href="#features" className="text-sm font-medium text-zinc-800 hover:text-black">
              Features
            </a>

            <a href="/privacy" className="text-sm font-medium text-zinc-800 hover:text-black">
              Privacy
            </a>

            <a href="/delete-account" className="text-sm font-medium text-zinc-800 hover:text-black">
              Delete Account
            </a>

            <a
              href="#download"
              className="rounded-lg bg-[#3D4C46] px-4 py-2 text-sm font-medium text-white"
            >
              Download
            </a>

          </div>

          <a
            href="#download"
            className="md:hidden rounded-lg bg-[#3D4C46] px-4 py-2 text-sm font-medium text-white"
          >
            Download
          </a>

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
            className="rounded-xl bg-[#3D4C46] px-6 py-3 text-sm font-semibold text-white"
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


      {/* Trust Section */}
      <section className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">

          <div className="grid gap-6 md:grid-cols-3 text-zinc-700">

            <div>
              ⭐ Explore hundreds of famous places
            </div>

            <div>
              🌍 Discover destinations worldwide
            </div>

            <div>
              🍽 Find nearby restaurants & malls
            </div>

          </div>

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
              className="rounded-xl border w-full max-w-sm mx-auto shadow-lg"
            />

            <img
              src="/images/screenshot2.jpg"
              alt="app screenshot"
              className="rounded-xl border w-full max-w-sm mx-auto shadow-lg"
            />

            <img
              src="/images/screenshot3.jpg"
              alt="app screenshot"
              className="rounded-xl border w-full max-w-sm mx-auto shadow-lg"
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
              { name: "France", image: "/images/france.jpg" },
              { name: "Dubai", image: "/images/dubai.jpg" },
              { name: "Japan", image: "/images/japan.jpg" },
              { name: "USA", image: "/images/usa.jpg" },
              { name: "Italy", image: "/images/italy.jpg" },
              { name: "Singapore", image: "/images/singapore.jpg" },
            ].map((d) => (
              <div
                key={d.name}
                className="overflow-hidden rounded-xl border bg-white hover:shadow-lg"
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
            Why travelers use Viewvers
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border bg-white p-6 text-center">
              🌍 Discover famous places worldwide
            </div>

            <div className="rounded-xl border bg-white p-6 text-center">
              🍽 Find nearby restaurants
            </div>

            <div className="rounded-xl border bg-white p-6 text-center">
              👨‍👩‍👧 Explore family activities
            </div>

            <div className="rounded-xl border bg-white p-6 text-center">
              🛍 Discover shopping malls
            </div>

            <div className="rounded-xl border bg-white p-6 text-center">
              🌦 Weather forecast
            </div>

            <div className="rounded-xl border bg-white p-6 text-center">
              🏨 Hotel recommendations
            </div>

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


      {/* Sticky Mobile Download */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 md:hidden">
        <a
          href="https://play.google.com/store/apps/details?id=com.viewvers.travel"
          target="_blank"
          className="block rounded-xl bg-[#3D4C46] py-3 text-center text-sm font-semibold text-white"
        >
          Download Viewvers
        </a>
      </div>

    </main>
  );
}