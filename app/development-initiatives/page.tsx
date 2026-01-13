import CTA from "@/components/layout/CTA";
import Image from "next/image";

const initiatives = [
  {
    title: "Women Empowerment",
    desc: "Ensuring equal opportunities, economic independence, and leadership roles for women across all sectors of society.",
    color: "orange",
    image:
      "https://images.pexels.com/photos/35601471/pexels-photo-35601471.jpeg",
  },
  {
    title: "Accessible Healthcare",
    desc: "Quality and affordable healthcare for every citizen through strengthened public health infrastructure and preventive care.",
    color: "green",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
  },
  {
    title: "Education for All",
    desc: "Universal access to quality education, from early childhood to higher education, regardless of socio-economic background.",
    color: "yellow",
    image: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg",
  },
  {
    title: "Strict Laws for Women’s Safety",
    desc: "Zero tolerance for crimes against women through fast-track courts, strict enforcement, and victim support systems.",
    color: "orange",
    image: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg",
  },
  {
    title: "Women Regiment in the Indian Army",
    desc: "Formation of dedicated women regiments to promote gender equality, national pride, and leadership in defense services.",
    color: "green",
    image:
      "https://images.pexels.com/photos/13316131/pexels-photo-13316131.jpeg",
  },
  {
    title: "Jobs & Skill Development for Youth",
    desc: "Large-scale skill training, entrepreneurship support, and employment generation to unlock India’s demographic dividend.",
    color: "yellow",
    image: "https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg",
  },
];

export default function DevelopmentInitiativesPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-yellow-400 to-green-500" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold max-w-4xl">
            Development Initiatives
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/90">
            Aam Janta Party India is committed to inclusive development that
            empowers women, strengthens youth, and builds a resilient nation.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Roadmap for a Stronger India
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          Our development agenda focuses on people-centric policies that create
          opportunity, ensure safety, and promote national progress.
        </p>
      </section>

      {/* INITIATIVES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Color badge */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white rounded-full ${
                    item.color === "orange"
                      ? "bg-orange-500"
                      : item.color === "green"
                      ? "bg-green-500"
                      : "bg-yellow-400 text-gray-900"
                  }`}
                >
                  Initiative
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Divider */}
                <div
                  className={`mt-6 h-1 w-16 ${
                    item.color === "orange"
                      ? "bg-orange-500"
                      : item.color === "green"
                      ? "bg-green-500"
                      : "bg-yellow-400"
                  }`}
                />

                {/* Focus points */}
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li>• Policy-driven implementation</li>
                  <li>• Measurable impact & accountability</li>
                  <li>• Nationwide reach</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
