export default function Ideology() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1 text-xs font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Our Ideology
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            Values That Guide Our Decisions
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Our ideology is rooted in the belief that governance must be honest,
            inclusive, and focused on long-term progress rather than short-term
            politics.
          </p>
        </div>

        {/* Ideology Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-lg font-semibold">1</span>
            </div>

            <h3 className="mt-5 text-lg font-medium text-gray-900">
              People First
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Every policy and decision must improve the daily lives of citizens,
              especially those who are most often unheard.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-yellow-100 flex items-center justify-center">
              <span className="text-yellow-600 text-lg font-semibold">2</span>
            </div>

            <h3 className="mt-5 text-lg font-medium text-gray-900">
              Inclusive Growth
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Development must reach every region, community, and individual,
              ensuring equal opportunity across India.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-lg font-semibold">3</span>
            </div>

            <h3 className="mt-5 text-lg font-medium text-gray-900">
              Honest Governance
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Transparency, accountability, and integrity are non-negotiable in
              public life and decision-making.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 max-w-3xl">
          <p className="text-base text-gray-700">
            These principles shape our policies, leadership, and actions. They
            define not just what we promise, but how we govern and serve the
            people of India.
          </p>
        </div>
      </div>
    </section>
  )
}
