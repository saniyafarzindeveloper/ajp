"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-provider";

export default function JoinPage() {
  const [role, setRole] = useState("member");
  const { t } = useLanguage();
  const { join } = t;

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 opacity-90" />
        <div className="relative max-w-6xl mx-auto px-4 py-14 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {join.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            {join.hero.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6 md:p-10">
          {/* Role Selection */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              How would you like to contribute?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
              {[
                {
                  id: "member",
                  label: join.contribution.member,
                  color: "orange",
                },
                {
                  id: "volunteer",
                  label: join.contribution.volunteer,
                  color: "green",
                },
                {
                  id: "youth",
                  label: join.contribution.youth,
                  color: "yellow",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setRole(item.id)}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition cursor-pointer
                    ${
                      role === item.id
                        ? item.color === "orange"
                          ? "border-orange-500 bg-orange-50 text-orange-700"
                          : item.color === "green"
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-yellow-400 bg-yellow-50 text-yellow-800"
                        : "border-gray-300 bg-white hover:border-gray-400"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {role === "member" && (
              <div className="mt-4 rounded-xl border border-orange-300 bg-orange-50 px-4 py-3 text-sm text-gray-700">
                One-time membership fee of <strong>₹1,500/-</strong> is
                applicable.
              </div>
            )}
          </div>

          {/* Personal Details */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900">
              Personal Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <input
                type="email"
                placeholder="Email (optional)"
                className="rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <input
                type="text"
                placeholder="State"
                className="rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <input
                type="text"
                placeholder="City"
                className="rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <input
                type="text"
                placeholder="Aadhaar Number"
                maxLength={12}
                className="rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            {/* Photograph Upload */}
            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Photograph
              </label>

              <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-center">
                <div>
                  <p className="text-sm text-gray-600">
                    Upload a recent passport-size photograph
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    JPG or PNG, max 2MB
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    className="mt-4 block w-full text-sm text-gray-600
            file:mr-4 file:rounded-full file:border-0
            file:bg-orange-50 file:px-4 file:py-2
            file:text-sm file:font-semibold file:text-orange-600
            hover:file:bg-orange-100"
                  />
                </div>
              </div>
            </div>

            {role !== "member" && (
              <div className="mt-5">
                <textarea
                  placeholder="How would you like to contribute?"
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
            )}
          </div>

          {/* Declaration */}
          <div className="mt-8">
            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input type="checkbox" className="mt-1 accent-green-600" />
              <span>
                I confirm that I am an Indian citizen and agree to be contacted
                for party-related communication.
              </span>
            </label>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="mt-10 w-full rounded-lg cursor-pointer border-2 border-orange-500 bg-white py-4 text-sm font-semibold text-orange-600 transition "
          >
            Join Now
          </button>
        </div>

        {/* Sidebar */}
        <aside className="bg-white rounded-3xl shadow-lg p-6 md:p-8 h-fit border-t-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-900">Why Join Us?</h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-700">
            <li>• Be part of grassroots change</li>
            <li>• Work directly with local leadership</li>
            <li>• Contribute to policy & outreach</li>
            <li>• Represent your community</li>
          </ul>

          <div className="mt-6 border-t pt-4 text-xs text-gray-500">
            Your information will be kept confidential and used only for
            organisational communication.
          </div>
        </aside>
      </section>
    </div>
  );
}
