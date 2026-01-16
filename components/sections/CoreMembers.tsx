import Image from "next/image";

const leaders = [
  {
    name: "HariBhai Patel",
    role: "Rashtriya Adhyaksh",
    image: "/images/hari.png",
    bio: `HariBhai Patel is the National President of Aam Janta Party India.
    With decades of grassroots experience, he has worked relentlessly to
    empower the common citizen, promote transparent governance, and build
    a people-first political movement rooted in integrity.`,
  },
  {
    name: "Rahil Hussain",
    role: "Rashtriya Upadhyaksh",
    image: "/images/rahil.png",
    bio: `Rahil Hussain serves as the National Vice President of the party.
    Known for his organisational strength and youth outreach, He is a revolutionary leader who believes in sovereignty and inclusiveness of the country.`,
  },
];

export default function CoreMembers() {
  return (
    <section className="bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-1 text-xs font-medium text-gray-700">
            Party Leadership
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            National Core Leadership
          </h2>

          <div className="flex justify-center mt-4">
            <span className="h-1 w-24 rounded-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />
          </div>

          <p className="mt-6 text-lg text-gray-600">
            Experienced leadership guiding the party with vision,
            responsibility, and commitment to national progress.
          </p>
        </div>

        {/* Leaders */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="relative bg-gray-50 rounded-2xl p-6 md:p-8 border"
            >
              {/* Image */}
              <div className="relative mx-auto w-56 h-56 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-yellow-400 to-green-500" />
                <div className="absolute inset-1 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-semibold text-[#1F42B0]">
                  {leader.name}
                </h3>

                <p className="mt-1 text-sm uppercase tracking-wide text-orange-600 font-medium">
                  {leader.role}
                </p>

                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

                <p className="mt-6 text-gray-600 leading-relaxed text-base">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
