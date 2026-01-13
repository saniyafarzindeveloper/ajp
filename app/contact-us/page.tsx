export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Reach out to us for support, collaboration, or to be part of the
            movement shaping India’s future.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT – CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Whether you’re a citizen, volunteer, media representative, or
              supporter — we’d love to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
                  @
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg text-gray-900">
                    contact@aamjantaparty.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office Address</p>
                  <p className="text-lg text-gray-900 leading-relaxed">
                    Aam Janta Party India<br />
                    Sector 44, Gurugram<br />
                    Haryana – 122003
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h3>

            <form className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="w-full h-[450px]">
        <iframe
          title="Gurugram Location"
          src="https://www.google.com/maps?q=Gurugram,Haryana&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
