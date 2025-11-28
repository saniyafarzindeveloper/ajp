import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bottom-32 -z-10 bg-linear-to-br from-[#fae012] to-[#f27e01]" />

      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="mt-10 text-center text-3xl font-bold text-white sm:mt-20 sm:text-5xl">
          Building a better India
        </h1>

        <p className="mt-6 text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut
          hic, deserunt recusandae dolorem minus quaerat suscipit excepturi
          doloribus nam labore? Voluptatem modi maxime iste.
        </p>

        <div className="relative mx-auto mt-8 w-full max-w-sm space-y-2 sm:space-y-0">
          <div className="flex justify-center mt-3">
            <Button className="bg-[#f27e01] text-white px-6 py-2 rounded-full hover:bg-[#cd6a00]">
              Know More
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-xl shadow-lg shadow-indigo-100">
        <Image
          src="/images/hero.jpeg"
          alt="Hero Image"
          width={1400}
          height={800}
          className="object-cover"
        />
      </div>
    </div>
  );
}
