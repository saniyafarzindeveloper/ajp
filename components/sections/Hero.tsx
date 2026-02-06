"use client";

import Link from "next/link";
import HeroCarousel from "./Carousel";
import { useLanguage } from "@/lib/language-provider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative  bg-linear-to-r from-orange-100 via-yellow-50 to-green-100 overflow-hidden">
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
              {t.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              {t.hero.titleLine1}{" "}
              <span className="relative">
                {t.hero.titleHighlight}
                <span className="absolute left-0 -bottom-2 h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 rounded-full" />
              </span>{" "}
              {t.hero.titleLine2}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/join-us"
                className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-orange-500 to-green-500 px-8 py-4 text-sm font-medium text-white hover:opacity-90 transition"
              >
                {t.hero.ctaJoin}
              </Link>

              <Link
                href="#vision"
                className="inline-flex items-center justify-center rounded-xl border border-green-500 px-8 py-4 text-sm font-medium text-gray-900 hover:border-green-700 transition"
              >
                {t.hero.ctaVision}
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
