'use client'

import { useState } from 'react'

export default function JoinPage() {
  const [role, setRole] = useState('member')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Join the Movement
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Be a part of a people-first political movement working towards
            transparent governance and inclusive growth across India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {/* Role Selection */}
          <div>
            <h2 className="text-xl font-medium text-gray-900">
              How would you like to contribute?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[
                { id: 'member', label: 'Party Member' },
                { id: 'volunteer', label: 'Volunteer' },
                { id: 'youth', label: 'Youth Wing' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setRole(item.id)}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition
                    ${
                      role === item.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div className="mt-10">
            <h2 className="text-xl font-medium text-gray-900">
              Personal Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Full Name"
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

            {role !== 'member' && (
              <div className="mt-4">
                <textarea
                  placeholder="How would you like to contribute?"
                  rows={3}
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
                I confirm that I am an Indian citizen and agree to be contacted
                for party-related communication.
              </span>
            </label>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="mt-8 w-full rounded-xl bg-black text-white py-4 text-sm font-medium hover:bg-gray-900 transition"
          >
            Join Now
          </button>
        </div>

        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-sm p-6 md:p-8 h-fit">
          <h3 className="text-lg font-medium text-gray-900">
            Why Join Us?
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-gray-600">
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
  )
}
