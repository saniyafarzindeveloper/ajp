import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2F3A56]">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          {/* Logo & Info */}
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/images/helicopter.png"
                    alt="Party Logo"
                    width={160}
                    height={60}
                    className="my-4"
                  />
                </Link>
                <span className="ml-4 text-3xl font-bold text-white">
                  AAM JANTA PARTY
                </span>
              </div>

              <p className="max-w-sm mt-2 text-white">
                Address: 123 Liberty Avenue, Capitol City, Country 123456
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-white uppercase">About</h3>
                <Link href="/about-us" className="block mt-2 text-sm text-white hover:underline">
                  Our Mission
                </Link>
                <Link href="/leadership" className="block mt-2 text-sm text-white hover:underline">
                  Leadership
                </Link>
                <Link href="/history" className="block mt-2 text-sm text-white hover:underline">
                  History
                </Link>
                <Link href="/news" className="block mt-2 text-sm text-white hover:underline">
                  News & Updates
                </Link>
              </div>

              <div>
                <h3 className="text-white uppercase">Policies</h3>
                <Link href="/education" className="block mt-2 text-sm text-white hover:underline">
                  Education
                </Link>
                <Link href="/healthcare" className="block mt-2 text-sm text-white hover:underline">
                  Healthcare
                </Link>
                <Link href="/economy" className="block mt-2 text-sm text-white hover:underline">
                  Economy
                </Link>
                <Link href="/environment" className="block mt-2 text-sm text-white hover:underline">
                  Environment
                </Link>
              </div>

              <div>
                <h3 className="text-white uppercase">Get Involved</h3>
                <Link href="/volunteer" className="block mt-2 text-sm text-white hover:underline">
                  Volunteer
                </Link>
                <Link href="/donate" className="block mt-2 text-sm text-white hover:underline">
                  Donate
                </Link>
                <Link href="/events" className="block mt-2 text-sm text-white hover:underline">
                  Events
                </Link>
                <Link href="/membership" className="block mt-2 text-sm text-white hover:underline">
                  Membership
                </Link>
              </div>

              <div>
                <h3 className="text-white uppercase ">Contact</h3>
                <span className="block mt-2 text-sm text-white">
                  +1 234 567 890
                </span>
                <span className="block mt-2 text-sm text-white">
                  contact@unityparty.org
                </span>
                <span className="block mt-2 text-sm text-white">
                  123 Liberty Avenue, Capitol City
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none" />

        <div>
          <p className="text-center text-white">
            ©AAM JANTA PARTY - All rights reserved
          </p>
          <p className="text-center text-white">
            Designed by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/saniya-farzin/"
              className="text-yellow-100 underline"
            >
              Saniya Farzin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
