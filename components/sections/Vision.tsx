import Image from "next/image";

export type VisionPoint = {
  number: string;
  title: string;
  description: string;
  color: "orange" | "yellow" | "green";
};

type VisionSectionProps = {
  badgeLabel: string;
  title: string;
  description: string;
  points: VisionPoint[];
  imageSrc: string;
};

const colorMap: Record<
  VisionPoint["color"],
  { bg: string; text: string }
> = {
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
};

export default function VisionSection({
  badgeLabel,
  title,
  description,
  points,
  imageSrc,
}: VisionSectionProps) {
  return (
    <section className="bg-white" id="vision">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-1 text-xs font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {badgeLabel}
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            {title}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Points */}
          <div className="space-y-6">
            {points.map((point) => {
              const colors = colorMap[point.color];

              return (
                <div
                  key={point.number}
                  className="flex gap-5 rounded-2xl bg-white p-6 border shadow-sm hover:shadow-md transition"
                >
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${colors.bg}`}
                  >
                    <span
                      className={`text-lg font-semibold ${colors.text}`}
                    >
                      {point.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="rounded-3xl p-2 overflow-hidden">
            <div className="relative w-full min-h-105 rounded-2xl">
              <Image
                src={imageSrc}
                alt={title}
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
