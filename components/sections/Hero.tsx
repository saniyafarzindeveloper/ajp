// import Image from "next/image";
// import { Button } from "@/components/ui/button";

import Link from "next/link";

// export default function Hero() {
//   return (
//     <div className="relative">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bottom-32 -z-10 bg-linear-to-br from-[#fae012] to-[#f27e01]" />

//       <div className="mx-auto flex max-w-3xl flex-col">
//         <h1 className="mt-10 text-center text-3xl font-bold text-white sm:mt-20 sm:text-5xl">
//           Building a better India
//         </h1>

//         <p className="mt-6 text-center text-white">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut
//           hic, deserunt recusandae dolorem minus quaerat suscipit excepturi
//           doloribus nam labore? Voluptatem modi maxime iste.
//         </p>

//         <div className="relative mx-auto mt-8 w-full max-w-sm space-y-2 sm:space-y-0">
//           <div className="flex justify-center mt-3">
//             <Button className="bg-[#f27e01] text-white px-6 py-2 rounded-full hover:bg-[#cd6a00]">
//               Know More
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Hero Image */}
//       <div className="mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-xl shadow-lg shadow-indigo-100">
//         <Image
//           src="/images/hero.jpeg"
//           alt="Hero Image"
//           width={1400}
//           height={800}
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// }


export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle tricolor accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            {/* Flag-inspired badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1 text-xs font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-500" />
              People • Progress • Prosperity
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Building a{' '}
              <span className="relative">
                Stronger India
                <span className="absolute left-0 -bottom-2 h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 rounded-full" />
              </span>
              {' '}Together
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              A people-first political movement committed to honest leadership,
              inclusive growth, and real solutions that reach every citizen.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/join-us"
               
                className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-orange-500 to-green-500 px-8 py-4 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Join the Movement
              </Link>

              <a
                href="/manifesto"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 text-sm font-medium text-gray-900 hover:border-green-500 transition"
              >
                Read Our Vision
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gray-100 overflow-hidden shadow-sm">
              {/* Replace with real imagery */}
              <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
                Community • Campaign • People
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-md px-5 py-3 border-l-4 border-green-500">
              <p className="text-xs text-gray-500">Committed to</p>
              <p className="text-sm font-medium text-gray-900">
                Transparency & Accountability
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
