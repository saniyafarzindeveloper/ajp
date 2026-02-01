"use client";

import CTA from "@/components/layout/CTA";
import Image from "next/image";
import { useLanguage } from "@/lib/language-provider";

export default function AboutPage() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-yellow-400 to-green-500 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
            {about.hero.titleLine1}
            <br /> {about.hero.titleLine2}
          </h1>
          <p className="mt-8 text-lg max-w-2xl text-white/90">
            {about.hero.description}
          </p>
        </div>
      </section>

      <div className="h-2 bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

      {/* WHO WE ARE */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              {about.whoWeAre.title}
            </h2>
            <div className="mt-4 h-1 w-20 bg-orange-500" />

            <p className="mt-8 text-gray-700 text-lg leading-relaxed">
              {about.whoWeAre.paragraph1}
            </p>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              {about.whoWeAre.paragraph2}
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
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl bg-white/5 backdrop-blur">
              <span className="text-orange-400 font-semibold uppercase tracking-wider">
                {about.visionMission.vision.label}
              </span>
              <h3 className="mt-4 text-3xl font-bold">
                {about.visionMission.vision.title}
              </h3>
              <p className="mt-6 text-white/80 text-lg">
                {about.visionMission.vision.description}
              </p>
            </div>

            <div className="p-10 rounded-2xl bg-white/5 backdrop-blur">
              <span className="text-green-400 font-semibold uppercase tracking-wider">
                {about.visionMission.mission.label}
              </span>
              <h3 className="mt-4 text-3xl font-bold">
                {about.visionMission.mission.title}
              </h3>
              <p className="mt-6 text-white/80 text-lg">
                {about.visionMission.mission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center">
          {about.coreValues.title}
        </h2>
        <p className="mt-6 text-center max-w-3xl mx-auto text-gray-600 text-lg">
          {about.coreValues.subtitle}
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {about.coreValues.items.map((v, i) => (
            <div key={i} className="p-8 rounded-2xl border">
              <div className="h-1 w-12 mb-6 bg-orange-500" />
              <h4 className="text-xl font-semibold">{v.title}</h4>
              <p className="mt-4 text-gray-600">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
