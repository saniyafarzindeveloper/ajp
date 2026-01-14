
import Link from "next/link";
import HeroCarousel from "./Carousel";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle tricolor accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Flag-inspired badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1 text-xs font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-500" />
              People • Progress • Prosperity
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Building a{" "}
              <span className="relative">
                Stronger India
                <span className="absolute left-0 -bottom-2 h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 rounded-full" />
              </span>{" "}
              Together
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              A people-first political movement committed to honest leadership,
              inclusive growth, and real solutions that reach every citizen.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/join-us"
                className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-orange-500 to-green-500 px-8 py-4 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Join the Movement
              </Link>

              <a
                href="/manifesto"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 text-sm font-medium text-gray-900 hover:border-green-500 transition"
              >
                Read Our Vision
              </a>
            </div>
          </div>

          {/* Right Visual */}
         <HeroCarousel />

        </div>
      </div>
    </section>
  );
}
