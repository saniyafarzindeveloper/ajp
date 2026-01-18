import CTA from "@/components/layout/CTA";
import Image from "next/image";


export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-yellow-400 to-green-500 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
            A Movement Led by the People,
            <br /> For the People
          </h1>
          <p className="mt-8 text-lg max-w-2xl text-white/90">
            Aam Janta Party India is not just a political party — it is a
            nationwide movement built on truth, transparency, and public
            participation.
          </p>
        </div>
      </section>

      {/* FLAG STRIP */}
      <div className="h-2 bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

      {/* WHO WE ARE */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Who We Are
            </h2>
            <div className="mt-4 h-1 w-20 bg-orange-500" />

            <p className="mt-8 text-gray-700 text-lg leading-relaxed">
              Aam Janta Party India (AJP) emerged from the belief that politics
              should serve citizens — not political dynasties or special
              interests.
            </p>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              We represent farmers, workers, women, youth, and entrepreneurs —
              citizens who want governance that listens, acts, and delivers.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 h-full w-full bg-orange-500 rounded-2xl" />
            <div className="relative h-105 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.jpeg"
                alt="People of India"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative p-10 rounded-2xl bg-white/5 backdrop-blur">
              <span className="text-orange-400 font-semibold uppercase tracking-wider">
                Our Vision
              </span>
              <h3 className="mt-4 text-3xl font-bold">
                A Just, Equal & Strong India
              </h3>
              <p className="mt-6 text-white/80 text-lg leading-relaxed">
                An India where opportunity, dignity, and justice are accessible
                to every citizen — regardless of background.
              </p>
            </div>

            <div className="relative p-10 rounded-2xl bg-white/5 backdrop-blur">
              <span className="text-green-400 font-semibold uppercase tracking-wider">
                Our Mission
              </span>
              <h3 className="mt-4 text-3xl font-bold">
                Governance That Works for People
              </h3>
              <p className="mt-6 text-white/80 text-lg leading-relaxed">
                To build transparent institutions, empower local communities,
                and ensure long-term national development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Our Core Values
        </h2>
        <p className="mt-6 text-center max-w-3xl mx-auto text-gray-600 text-lg">
          The principles that guide every decision we make.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "People First", color: "orange" },
            { title: "Transparent Politics", color: "yellow" },
            { title: "Equal Opportunity", color: "green" },
            { title: "Nation Building", color: "orange" },
          ].map((v, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl border hover:shadow-xl transition"
            >
              <div
                className={`h-1 w-12 mb-6 ${
                  v.color === "orange"
                    ? "bg-orange-500"
                    : v.color === "yellow"
                    ? "bg-yellow-400"
                    : "bg-green-500"
                }`}
              />
              <h4 className="text-xl font-semibold text-gray-900">
                {v.title}
              </h4>
              <p className="mt-4 text-gray-600">
                We believe governance must always reflect the will and welfare
                of the people.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CTA />
    </main>
  );
}
