"use client"

import Link from "next/link"
import AutoChangingPartyName from "./AutoChangingPartyName"
import { useLanguage } from "@/lib/language-provider"

export default function Footer() {
  const { t } = useLanguage()
  const { footer } = t

  return (
    <footer className="relative bg-[#1E2638] text-white">
      <div className="h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-xl font-semibold">
              <AutoChangingPartyName />
            </div>

            <p className="mt-6 max-w-sm text-sm text-gray-300 leading-relaxed">
              {footer.description}
            </p>

            <p className="mt-4 text-sm text-gray-400 whitespace-pre-line">
              {footer.address}
            </p>
          </div>

          {/* Links */}
          {footer.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
                {section.title}
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center md:text-left">
            {footer.copyright}
          </p>

          <p className="text-xs text-gray-400">
            {footer.developedBy}{" "}
            <Link
              href="https://www.linkedin.com/in/saniya-farzin/"
              target="_blank"
              className="text-yellow-400 hover:text-yellow-300"
            >
              Saniya Farzin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
