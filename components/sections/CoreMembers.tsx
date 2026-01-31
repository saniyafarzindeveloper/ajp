"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-provider";
import { leaderImages } from "@/data/coreMembers";

export default function CoreMembers() {
  const { t } = useLanguage();
  const coreMembers = t.coreMembers;

  return (
    <section className="bg-[#f9fafb]" id="core-members">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-1 text-xs font-medium text-gray-700">
            {coreMembers.badge}
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            {coreMembers.title}
          </h2>

          <div className="flex justify-center mt-4">
            <span className="h-1 w-24 rounded-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />
          </div>

          <p className="mt-6 text-lg text-gray-600">
            {coreMembers.description}
          </p>
        </div>

        {/* Leaders */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {coreMembers.leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="relative bg-gray-50 rounded-2xl p-6 md:p-8 border"
            >
              {/* Image */}
              <div className="relative mx-auto w-56 h-56 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-yellow-400 to-green-500" />
                <div className="absolute inset-1 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={leaderImages[index].image}
                    alt={leader.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-semibold text-[#1F42B0]">
                  {leader.name}
                </h3>

                <p className="mt-1 text-sm uppercase tracking-wide text-orange-600 font-medium">
                  {leader.role}
                </p>

                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

                <p className="mt-6 text-gray-600 leading-relaxed text-base">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
