import type React from "react";
import type { ColorKey, IdeologySectionProps } from "@/types/ideologyTypes";

const colorMap: Record<ColorKey, { bg: string; text: string }> = {
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

function renderDescriptionWithLeaders(
  text: string,
  leaders: string[] | undefined,
  highlightClass: string,
) {
  if (!leaders || leaders.length === 0) return text;

  return (
    <>
      {text}{" "}
      {leaders.map((leader, index) => (
        <span key={leader} className={`${highlightClass} font-medium`}>
          {leader}
          {index < leaders.length - 1 ? ", " : "."}
        </span>
      ))}
    </>
  );
}

export default function IdeologySection({
  badgeLabel,
  title,
  description,
  points,
}: IdeologySectionProps) {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1 text-xs font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {badgeLabel}
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            {title}
          </h2>

          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>

        {/* Ideology Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point) => {
            const colors = colorMap[point.color];

            return (
              <div
                key={point.number}
                className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`h-10 w-10 rounded-xl flex items-center justify-center ${colors.bg}`}
                >
                  <span className={`text-lg font-semibold ${colors.text}`}>
                    {point.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-medium text-gray-900">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {renderDescriptionWithLeaders(
                    point.description,
                    point.leaders,
                    colorMap[point.color].text,
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
