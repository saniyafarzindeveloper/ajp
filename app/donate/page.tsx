"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-provider";

export default function DonatePage() {
  const { t } = useLanguage();
  const d = t.donatePage;

  const presetAmounts = [500, 1000, 2000, 5000];
  const [amount, setAmount] = useState<number | "">(1000);

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-yellow-50 to-green-50">
      <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Donation Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6 md:p-10">
          {/* Amount Selection */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {d.chooseAmount}
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
                placeholder={d.customAmountPlaceholder}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <p className="mt-2 text-sm text-gray-600">{d.panNote}</p>
            </div>
          </div>

          {/* Donor Details */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900">
              {d.donorDetails}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <input
                placeholder={d.fullName}
                className="rounded-xl border px-4 py-3"
              />
              <input
                placeholder={d.mobile}
                className="rounded-xl border px-4 py-3"
              />
              <input
                placeholder={d.email}
                className="rounded-xl border px-4 py-3"
              />
              <input
                placeholder={d.state}
                className="rounded-xl border px-4 py-3"
              />
            </div>

            {Number(amount) > 2000 && (
              <div className="mt-4">
                <input
                  placeholder={d.pan}
                  className="w-full rounded-xl border border-orange-300 bg-orange-50 px-4 py-3"
                />
              </div>
            )}
          </div>

          {/* Declaration */}
          <div className="mt-8">
            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input type="checkbox" className="mt-1 accent-green-600" />
              <span>{d.declaration}</span>
            </label>
          </div>

          <button className="mt-10 w-full rounded-lg border-2 border-orange-500 bg-white py-4 text-sm font-semibold text-orange-600 hover:border-orange-600">
            {d.submit}
          </button>
        </div>

        {/* Sidebar */}
        <aside className="bg-white rounded-3xl shadow-lg p-6 md:p-8 h-fit border-t-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-900">
            {d.sidebarTitle}
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-700">
            {d.sidebarPoints.map((p) => (
              <li key={p}>• {p}</li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4 text-xs text-gray-500">
            {d.footerNote}
          </div>
        </aside>
      </section>
    </div>
  );
}
