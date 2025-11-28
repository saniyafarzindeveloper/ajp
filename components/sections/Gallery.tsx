import Image from "next/image";

const images = {
  G1: "/images/img1.JPG",
  G2: "/images/img2.JPG",
  G3: "/images/img3.JPG",
  G4: "/images/img4.JPG",
  G5: "/images/img5.JPG",
  G6: "/images/img6.JPG",
  LIB: "/images/hero.jpeg",
};

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-5xl text-4xl title-font text-[#04a558] font-bold lg:w-1/3 lg:mb-0 mb-4">
            AJP&apos;s Galleria
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image src={images.G3} alt="gallery" className="object-cover object-center" width={500} height={500} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image src={images.G4} alt="gallery" className="object-cover object-center" width={500} height={500} />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image src={images.G1} alt="gallery" className="object-cover object-center" width={1000} height={500} />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image src={images.G2} alt="gallery" className="object-cover object-center" width={1000} height={500} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image src={images.LIB} alt="gallery" className="object-cover object-center" width={500} height={500} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image src={images.G5} alt="gallery" className="object-cover object-center" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
