// import Image from "next/image";

// export default function CoreMembers() {
//   return (
//     <section className="bg-white">
//       {/* Top Banner */}
//       <div className="h-128 bg-gray-100">
//         <div className="container px-6 py-10 mx-auto">
//           <h1 className="text-3xl font-semibold text-center text-[#f16c20] capitalize lg:text-4xl">
//             Meet Our Core Members
//           </h1>

//           <div className="flex justify-center mx-auto mt-6">
//             <span className="inline-block w-40 h-1 bg-[#1F42B0] rounded-full"></span>
//             <span className="inline-block w-3 h-1 mx-1 bg-[#1F42B0] rounded-full"></span>
//             <span className="inline-block w-1 h-1 bg-[#1F42B0] rounded-full"></span>
//           </div>

//           <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
//             incidunt ex placeat modi magni quia error alias, adipisci rem
//             similique, at omnis eligendi optio eos harum.
//           </p>
//         </div>
//       </div>

//       {/* Counsellor Cards */}
//       <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
//         <div className="flex flex-col items-center justify-center gap-8 mt-8 xl:mt-16 md:flex-row">
//            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl bg-white shadow-sm">
//             <Image
//               src="/images/hari.png"
//               alt="Hari Patel"
//               width={400}
//               height={400}
//               className="object-cover w-full rounded-xl aspect-square"
//             />
//             <h1 className="mt-4 text-2xl font-semibold text-[#1F42B0] capitalize">
//               HariBhai Patel
//             </h1>
//             <p className="mt-2 text-gray-500 capitalize">Rashtriya Adhyaksh</p>
//           </div>
//           {/* Counsellor 1 */}
//           <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl bg-white shadow-sm">
//             <Image
//               src="/images/rahil.png"
//               alt="Rahil Hussain"
//               width={400}
//               height={400}
//               className="object-cover w-full rounded-xl aspect-square"
//             />
//             <h1 className="mt-4 text-2xl font-semibold text-[#1F42B0] capitalize">
//               Rahil Hussain
//             </h1>
//             <p className="mt-2 text-gray-500 capitalize">Rashtriya Upadhyaksh</p>
//           </div>

         
         

//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function CoreMembers() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1 text-xs font-medium text-gray-700">
            Leadership
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            Meet Our Core Members
          </h2>

          <div className="flex justify-center mt-4">
            <span className="inline-block w-20 h-1 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500" />
          </div>

          <p className="mt-6 text-lg text-gray-600">
            Our leadership brings experience, integrity, and a deep commitment
            to serving the people and strengthening the nation.
          </p>
        </div>

        {/* Members Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Member Card */}
          <div className="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition">
            <div className="p-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/hari.png"
                  alt="HariBhai Patel"
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover transition group-hover:scale-105"
                />
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold text-[#1F42B0]">
                  HariBhai Patel
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Rashtriya Adhyaksh
                </p>
              </div>
            </div>
          </div>

          {/* Member Card */}
          <div className="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition">
            <div className="p-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/rahil.png"
                  alt="Rahil Hussain"
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover transition group-hover:scale-105"
                />
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold text-[#1F42B0]">
                  Rahil Hussain
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Rashtriya Upadhyaksh
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder / Future Member */}
          <div className="flex items-center justify-center rounded-2xl border border-dashed bg-white p-8 text-center">
            <p className="text-sm text-gray-400">
              More leadership profiles coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

