// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#2F3A56]">
//       <div className="container p-6 mx-auto">
//         <div className="lg:flex">
//           {/* Logo & Info */}
//           <div className="w-full -mx-6 lg:w-2/5">
//             <div className="px-6">
//               <div className="flex items-center">
//                 <Link href="/">
//                   <Image
//                     src="/images/helicopter.png"
//                     alt="Party Logo"
//                     width={160}
//                     height={60}
//                     className="my-4"
//                   />
//                 </Link>
//                 <span className="ml-4 text-3xl font-bold text-white">
//                   AAM JANTA PARTY INDIA
//                 </span>
//               </div>

//               <p className="max-w-sm mt-2 text-white">
//                 Address: 123 Liberty Avenue, Capitol City, Country 123456
//               </p>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="mt-6 lg:mt-0 lg:flex-1">
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//               <div>
//                 <h3 className="text-white uppercase">About</h3>
//                 <Link href="/about-us" className="block mt-2 text-sm text-white hover:underline">
//                   Our Mission
//                 </Link>
//                 <Link href="/leadership" className="block mt-2 text-sm text-white hover:underline">
//                   Leadership
//                 </Link>
//                 <Link href="/history" className="block mt-2 text-sm text-white hover:underline">
//                   History
//                 </Link>
//                 <Link href="/news" className="block mt-2 text-sm text-white hover:underline">
//                   News & Updates
//                 </Link>
//               </div>

//               <div>
//                 <h3 className="text-white uppercase">Policies</h3>
//                 <Link href="/education" className="block mt-2 text-sm text-white hover:underline">
//                   Education
//                 </Link>
//                 <Link href="/healthcare" className="block mt-2 text-sm text-white hover:underline">
//                   Healthcare
//                 </Link>
//                 <Link href="/economy" className="block mt-2 text-sm text-white hover:underline">
//                   Economy
//                 </Link>
//                 <Link href="/environment" className="block mt-2 text-sm text-white hover:underline">
//                   Environment
//                 </Link>
//               </div>

//               <div>
//                 <h3 className="text-white uppercase">Get Involved</h3>
//                 <Link href="/volunteer" className="block mt-2 text-sm text-white hover:underline">
//                   Volunteer
//                 </Link>
//                 <Link href="/donate" className="block mt-2 text-sm text-white hover:underline">
//                   Donate
//                 </Link>
//                 <Link href="/events" className="block mt-2 text-sm text-white hover:underline">
//                   Events
//                 </Link>
//                 <Link href="/membership" className="block mt-2 text-sm text-white hover:underline">
//                   Membership
//                 </Link>
//               </div>

//               <div>
//                 <h3 className="text-white uppercase ">Contact</h3>
//                 <span className="block mt-2 text-sm text-white">
//                   +1 234 567 890
//                 </span>
//                 <span className="block mt-2 text-sm text-white">
//                   contact@unityparty.org
//                 </span>
//                 <span className="block mt-2 text-sm text-white">
//                   123 Liberty Avenue, Capitol City
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <hr className="h-px my-6 bg-gray-200 border-none" />

//         <div>
//           <p className="text-center text-white">
//             ©AAM JANTA PARTY INDIA - All rights reserved
//           </p>
//           <p className="text-center text-white">
//             Designed by{" "}
//             <Link
//               target="_blank"
//               href="https://www.linkedin.com/in/saniya-farzin/"
//               className="text-yellow-100 underline"
//             >
//               Saniya Farzin
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#1E2638] text-white">
      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/helicopter.png"
                alt="AJP Logo"
                width={140}
                height={60}
                className="object-contain"
              />
              <span className="text-xl font-semibold leading-tight">
                AAM JANTA PARTY
                <br />
                <span className="text-sm text-gray-300">INDIA</span>
              </span>
            </Link>

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
              <li><Link href="/about-us" className="hover:text-white">Our Mission</Link></li>
              <li><Link href="/leadership" className="hover:text-white">Leadership</Link></li>
              <li><Link href="/history" className="hover:text-white">History</Link></li>
              <li><Link href="/news" className="hover:text-white">News & Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              Policies
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li><Link href="/education" className="hover:text-white">Education</Link></li>
              <li><Link href="/healthcare" className="hover:text-white">Healthcare</Link></li>
              <li><Link href="/economy" className="hover:text-white">Economy</Link></li>
              <li><Link href="/environment" className="hover:text-white">Environment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
              <li><Link href="/events" className="hover:text-white">Events</Link></li>
              <li><Link href="/membership" className="hover:text-white">Membership</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} AAM JANTA PARTY INDIA. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Designed by{" "}
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
