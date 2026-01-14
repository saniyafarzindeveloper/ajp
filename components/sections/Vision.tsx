import Image from "next/image";

export default function Vision() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header – left aligned */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-1 text-xs font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Our Vision
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            A Stronger, Fairer India for Every Citizen
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Our vision is to build a nation where opportunity, dignity, and
            justice are accessible to all — driven by transparent leadership,
            people-centric policies, and sustainable development.
          </p>
        </div>

        {/* Vision Content */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left – Vision Points */}
          <div className="space-y-6">
            {/* Point 1 */}
            <div className="flex gap-5 rounded-2xl bg-white p-6 border shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                <span className="text-orange-600 text-lg font-semibold">
                  01
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Empowered Citizens
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  A country where every citizen has access to quality education,
                  healthcare, and opportunities to grow and thrive.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-5 rounded-2xl bg-white p-6 border shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-yellow-100 flex items-center justify-center shrink-0">
                <span className="text-yellow-600 text-lg font-semibold">
                  02
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Responsible Governance
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Decision-making that is transparent, accountable, and focused
                  on long-term national interest rather than short-term gains.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-5 rounded-2xl bg-white p-6 border shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <span className="text-green-600 text-lg font-semibold">03</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sustainable Progress
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Development that balances economic growth with environmental
                  responsibility and social well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Right – Vision Highlight */}
          <div className="rounded-3xl p-2 overflow-hidden">
            <div className="relative w-full h-full rounded-2xl">
              <Image
                src="/images/poverty.jpg"
                alt="Vision for inclusive India"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
