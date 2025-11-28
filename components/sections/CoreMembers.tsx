import Image from "next/image";

export default function CoreMembers() {
  return (
    <section className="bg-white">
      {/* Top Banner */}
      <div className="h-128 bg-gray-100">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-[#f16c20] capitalize lg:text-4xl">
            Meet Our Core Members
          </h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-[#1F42B0] rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-[#1F42B0] rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-[#1F42B0] rounded-full"></span>
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>
      </div>

      {/* Counsellor Cards */}
      <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="flex flex-col items-center justify-center gap-8 mt-8 xl:mt-16 md:flex-row">
           <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl bg-white shadow-sm">
            <Image
              src="/images/hari.png"
              alt="Hari Patel"
              width={400}
              height={400}
              className="object-cover w-full rounded-xl aspect-square"
            />
            <h1 className="mt-4 text-2xl font-semibold text-[#1F42B0] capitalize">
              HariBhai Patel
            </h1>
            <p className="mt-2 text-gray-500 capitalize">Rashtriya Adhyaksh</p>
          </div>
          {/* Counsellor 1 */}
          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl bg-white shadow-sm">
            <Image
              src="/images/rahil.png"
              alt="Rahil Hussain"
              width={400}
              height={400}
              className="object-cover w-full rounded-xl aspect-square"
            />
            <h1 className="mt-4 text-2xl font-semibold text-[#1F42B0] capitalize">
              Rahil Hussain
            </h1>
            <p className="mt-2 text-gray-500 capitalize">Rashtriya Upadhyaksh</p>
          </div>

         
         

        </div>
      </div>
    </section>
  );
}
