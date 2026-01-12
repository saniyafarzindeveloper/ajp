'use client'

import { useState } from 'react'

export default function DonatePage() {
  const presetAmounts = [500, 1000, 2000, 5000]

  const [amount, setAmount] = useState<number | ''>(1000)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Donate Now
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Your contribution helps us build a stronger, fairer India.
            All donations are governed by Election Commission of India guidelines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Donation Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {/* Amount Selection */}
          <div>
            <h2 className="text-xl font-medium text-gray-900">
              Choose Amount
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {presetAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAmount(value)}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition
                    ${
                      amount === value
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    }`}
                >
                  ₹{value.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <input
                type="number"
                placeholder="Custom amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <p className="mt-2 text-sm text-gray-500">
                Donations above ₹2,000 require PAN details as per law.
              </p>
            </div>
          </div>

          {/* Donor Details */}
          <div className="mt-10">
            <h2 className="text-xl font-medium text-gray-900">
              Donor Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Full Name (as per PAN)"
                className="rounded-xl border border-gray-300 px-4 py-3"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="rounded-xl border border-gray-300 px-4 py-3"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                className="rounded-xl border border-gray-300 px-4 py-3"
              />
              <input
                type="text"
                placeholder="State"
                className="rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            {Number(amount) > 2000 && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="PAN Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3"
                />
              </div>
            )}
          </div>

          {/* Declaration */}
          <div className="mt-8">
            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              <span>
                I confirm that I am an Indian citizen and this donation is made
                from my own funds, in compliance with Election Commission of
                India regulations.
              </span>
            </label>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="mt-8 w-full rounded-xl bg-black text-white py-4 text-sm font-medium hover:bg-gray-900 transition"
          >
            Contribute Securely
          </button>
        </div>

        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-sm p-6 md:p-8 h-fit">
          <h3 className="text-lg font-medium text-gray-900">
            Why Your Donation Matters
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-gray-600">
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
  )
}
