"use client";

import { useState } from "react";

export default function DonatePage() {
  const presetAmounts = [500, 1000, 2000, 5000];
  const [amount, setAmount] = useState<number | "">(1000);

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 opacity-90" />
        <div className="relative max-w-6xl mx-auto px-4 py-14 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">Donate Now</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Your contribution helps us build a stronger, fairer India. All
            donations are governed by Election Commission of India guidelines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Donation Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6 md:p-10">
          {/* Amount Selection */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Choose Amount
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              {presetAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAmount(value)}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition
                    ${
                      amount === value
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-gray-300 bg-white hover:border-orange-400"
                    }`}
                >
                  ₹{value.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mt-5">
              <input
                type="number"
                placeholder="Custom amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <p className="mt-2 text-sm text-gray-600">
                Donations above ₹2,000 require PAN details as per law.
              </p>
            </div>
          </div>

          {/* Donor Details */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900">
              Donor Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <input
                type="text"
                placeholder="Full Name (as per PAN)"
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
            </div>

            {Number(amount) > 2000 && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="PAN Number"
                  className="w-full rounded-xl border border-orange-300 bg-orange-50 px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            )}
          </div>

          {/* Declaration */}
          <div className="mt-8">
            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input type="checkbox" className="mt-1 accent-green-600" />
              <span>
                I confirm that I am an Indian citizen and this donation is made
                from my own funds, in compliance with Election Commission of
                India regulations.
              </span>
            </label>
          </div>

          <button
            type="button"
            className="mt-10 w-full rounded-lg border-2 border-orange-500 bg-white py-4 text-sm font-semibold text-orange-600 transition hover:border-orange-600 cursor-pointer"
          >
            Contribute Securely
          </button>
        </div>

        {/* Sidebar */}
        <aside className="bg-white rounded-3xl shadow-lg p-6 md:p-8 h-fit border-t-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-900">
            Why Your Donation Matters
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-700">
            <li>• Supports grassroots campaigns</li>
            <li>• Helps organise community outreach</li>
            <li>• Strengthens transparent governance efforts</li>
            <li>• Enables policy research and awareness</li>
          </ul>

          <div className="mt-6 border-t pt-4 text-xs text-gray-500">
            All contributions are subject to disclosure under applicable laws.
            For queries, contact the party office.
          </div>
        </aside>
      </section>
    </div>
  );
}
