// import Image from "next/image";

// const images = {
//   G1: "/images/img1.JPG",
//   G2: "/images/img2.JPG",
//   G3: "/images/img3.JPG",
//   G4: "/images/img4.JPG",
//   G5: "/images/img5.JPG",
//   G6: "/images/img6.JPG",
//   LIB: "/images/hero.jpeg",
// };

// export default function Gallery() {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto flex flex-wrap">
//         <div className="flex w-full mb-20 flex-wrap">
//           <h1 className="sm:text-5xl text-4xl title-font text-[#04a558] font-bold lg:w-1/3 lg:mb-0 mb-4">
//             AJP&apos;s Galleria
//           </h1>
//           <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
//             Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.
//           </p>
//         </div>
//         <div className="flex flex-wrap md:-m-2 -m-1">
//           <div className="flex flex-wrap w-1/2">
//             <div className="md:p-2 p-1 w-1/2">
//               <Image src={images.G3} alt="gallery" className="object-cover object-center" width={500} height={500} />
//             </div>
//             <div className="md:p-2 p-1 w-1/2">
//               <Image src={images.G4} alt="gallery" className="object-cover object-center" width={500} height={500} />
//             </div>
//             <div className="md:p-2 p-1 w-full">
//               <Image src={images.G1} alt="gallery" className="object-cover object-center" width={1000} height={500} />
//             </div>
//           </div>
//           <div className="flex flex-wrap w-1/2">
//             <div className="md:p-2 p-1 w-full">
//               <Image src={images.G2} alt="gallery" className="object-cover object-center" width={1000} height={500} />
//             </div>
//             <div className="md:p-2 p-1 w-1/2">
//               <Image src={images.LIB} alt="gallery" className="object-cover object-center" width={500} height={500} />
//             </div>
//             <div className="md:p-2 p-1 w-1/2">
//               <Image src={images.G5} alt="gallery" className="object-cover object-center" width={500} height={500} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

const images = [
  { src: "/images/img1.JPG", alt: "Public gathering" },
  { src: "/images/img2.JPG", alt: "Community outreach" },
  { src: "/images/img3.JPG", alt: "Leadership meeting" },
  { src: "/images/img4.JPG", alt: "Volunteer activity" },
  { src: "/images/img5.JPG", alt: "Campaign moment" },
  { src: "/images/img6.JPG", alt: "Grassroots engagement" },
  { src: "/images/hero.jpeg", alt: "Party vision event" },
];

export default function Gallery() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-1 text-xs font-medium text-gray-700">
            Media & Moments
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            AJP in Action
          </h2>

          <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500" />

          <p className="mt-6 text-lg text-gray-600">
            Glimpses from our campaigns, community engagements, and on-ground
            efforts across regions — capturing the spirit of the movement.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end">
                <p className="p-4 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Follow our journey on social media for more updates and stories.
          </p>
        </div>
      </div>
    </section>
  );
}
