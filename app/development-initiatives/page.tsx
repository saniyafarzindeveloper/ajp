"use client";

import Image from "next/image";
import CTA from "@/components/layout/CTA";
import { useLanguage } from "@/lib/language-provider";
import { CheckCircle2 } from "lucide-react";

export default function DevelopmentInitiativesPage() {
  const { t } = useLanguage();
  const { developmentInitiatives } = t;

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-18 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-[#f5872f]">
              {developmentInitiatives.hero.title}
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-xl">
              {developmentInitiatives.hero.description}
            </p>
          </div>

          {/* Right visual block */}
          <div className="relative h-80 rounded-3xl bg-linear-to-br from-orange-500 via-yellow-400 to-green-500 p-0.75">
            <div className="relative h-full w-full rounded-[22px] overflow-hidden bg-white">
              <Image
                src="/images/img4.JPG"
                alt="development discussion"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {developmentInitiatives.intro.title}
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          {developmentInitiatives.intro.description}
        </p>
      </section>

      {/* INITIATIVES */}
      <section className="relative max-w-7xl mx-auto px-6 pb-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          {developmentInitiatives.initiatives.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                {/* Badge */}
                <span
                  className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold shadow ${
                    item.color === "orange"
                      ? "bg-orange-500 text-white"
                      : item.color === "green"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-400 text-gray-900"
                  }`}
                >
                  Initiative
                </span>
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Accent line */}
                <div
                  className={`mb-4 h-1 w-16 rounded-full ${
                    item.color === "orange"
                      ? "bg-orange-500"
                      : item.color === "green"
                        ? "bg-green-500"
                        : "bg-yellow-400"
                  }`}
                />

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Focus Points */}
                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {item.focusPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 ${
                          item.color === "orange"
                            ? "text-orange-500"
                            : item.color === "green"
                              ? "text-green-500"
                              : "text-yellow-500"
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
