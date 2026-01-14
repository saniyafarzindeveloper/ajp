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
            Principles That Shape Our Governance
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Our ideology is grounded in the belief that governance must be
            ethical, inclusive, and accountable — focused on lasting national
            progress rather than temporary political gains.
          </p>
        </div>

        {/* Ideology Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-lg font-semibold">01</span>
            </div>

            <h3 className="mt-5 text-lg font-medium text-gray-900">
              Citizens Before Politics
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Every decision we take is guided by its impact on ordinary
              citizens, with special focus on voices that are often ignored or
              left behind.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-yellow-100 flex items-center justify-center">
              <span className="text-yellow-600 text-lg font-semibold">02</span>
            </div>

            <h3 className="mt-5 text-lg font-medium text-gray-900">
              Equitable Development
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Growth must be fair and balanced, reaching every region,
              community, and individual so that opportunity is not limited by
              geography or background.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-lg font-semibold">03</span>
            </div>

            <h3 className="mt-5 text-lg font-medium text-gray-900">
              Integrity in Public Life
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Transparency, accountability, and ethical conduct are
              non-negotiable foundations of public service and
              decision-making.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 max-w-3xl">
          <p className="text-base text-gray-700">
            These principles guide our leadership, policies, and actions. They
            define not only what we commit to, but how we govern and remain
            accountable to the people of India.
          </p>
        </div>
      </div>
    </section>
  )
}
