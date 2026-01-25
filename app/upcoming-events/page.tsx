import CTA from "@/components/layout/CTA";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Jan Samvad Rally – Gurugram",
    date: "25 March 2026",
    time: "10:00 AM – 1:00 PM",
    location: "Sector 44, Gurugram, Haryana",
    description:
      "An open dialogue with citizens to discuss local issues, governance, and development priorities.",
    image: "https://images.pexels.com/photos/2774568/pexels-photo-2774568.jpeg",
    tag: "Public Rally",
  },
  {
    id: 2,
    title: "Women Empowerment Conference",
    date: "2 April 2026",
    time: "11:00 AM – 3:00 PM",
    location: "Community Hall, New Delhi",
    description:
      "Focused discussions on women’s safety, education, employment, and leadership opportunities.",
    image: "https://images.pexels.com/photos/13231504/pexels-photo-13231504.jpeg",
    tag: "Conference",
  },
  {
    id: 3,
    title: "Youth Interaction Program",
    date: "10 April 2026",
    time: "4:00 PM – 6:00 PM",
    location: "City Auditorium, Jaipur",
    description:
      "Interactive session with students and young professionals on jobs, skills, and nation-building.",
    image: "https://images.pexels.com/photos/29555738/pexels-photo-29555738.jpeg",
    tag: "Youth",
  },
];

export default function UpcomingEventsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">
            Upcoming Events
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Join us at our upcoming rallies, meetings, and community programs as
            we work together to shape a stronger and fairer India.
          </p>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="group rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600 shadow">
                  {event.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h3>

                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p>📅 {event.date}</p>
                  <p>⏰ {event.time}</p>
                  <p>📍 {event.location}</p>
                </div>

                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-6">
                  <button className="inline-flex items-center rounded-lg border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (future-proof) */}
        {events.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">
              No upcoming events at the moment. Please check back soon.
            </p>
          </div>
        )}
      </section>

    <CTA />
    </main>
  );
}
