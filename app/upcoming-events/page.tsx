'use client';
import CTA from "@/components/layout/CTA";
import Image from "next/image";
import { useLanguage } from "@/lib/language-provider";

export default function UpcomingEventsPage() {
  const { t } = useLanguage();
  const { events: eventsT } = t;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">
            {eventsT.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            {eventsT.heroDescription}
          </p>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsT.events.map((event) => (
            <div
              key={event.id}
              className="group rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600 shadow">
                  {event.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h3>

                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p>📅 {event.date}</p>
                  <p>⏰ {event.time}</p>
                  <p>📍 {event.location}</p>
                </div>

                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-6">
                  <button className="inline-flex items-center rounded-lg border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition">
                    {eventsT.viewDetails}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (future-proof) */}
        {eventsT.events.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">
              {eventsT.emptyState}
            </p>
          </div>
        )}
      </section>

    <CTA />
    </main>
  );
}
