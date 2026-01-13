const CTA = () => {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Together, We Build the Future
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl">
              Development is not a promise — it is a responsibility. Your
              participation strengthens democracy and governance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              href="/join-us"
              className="px-7 py-4 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              Join the Movement
            </a>

            <a
              href="/donate"
              className="px-7 py-4 rounded-lg border border-gray-500 text-gray-200 font-medium hover:border-white hover:text-white transition"
            >
              Support the Initiatives
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
