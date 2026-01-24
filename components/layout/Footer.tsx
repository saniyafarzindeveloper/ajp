import Link from "next/link";
import AutoChangingPartyName from "./AutoChangingPartyName";

export default function Footer() {
  return (
    <footer className="relative bg-[#1E2638] text-white">
      {/* Top Accent */}
      <div className="h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-xl font-semibold leading-tight">
              <AutoChangingPartyName />
            </span>

            <p className="mt-6 max-w-sm text-sm text-gray-300 leading-relaxed">
              A people-first political movement committed to justice, equality,
              and inclusive development across India.
            </p>

            <p className="mt-4 text-sm text-gray-400">
              123 Liberty Avenue,
              <br />
              Capitol City, India – 123456
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              About
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#core-members" className="hover:text-white">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-white">
                  History
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              Policies
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/education" className="hover:text-white">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="hover:text-white">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/economy" className="hover:text-white">
                  Economy
                </Link>
              </li>
              <li>
                <Link href="/environment" className="hover:text-white">
                  Environment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/join-us" className="hover:text-white">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="hover:text-white">
                  Membership
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} AAM JANTA PARTY (INDIA). All rights
            reserved.
          </p>

          <p className="text-xs text-gray-400">
            Designed & Developed by{" "}
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
  );
}
