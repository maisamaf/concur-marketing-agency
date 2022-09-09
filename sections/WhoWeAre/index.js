import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const Index = () => {
  return (
    <section className="max-w-6xl rounded-xl p-14 sm:p-20 mb-20 text-center mx-auto bg-gray-100">
      <div className="flex flex-col items-center sm:flex-row sm:justify-around gap-10 sm:gap-20">
        <div className="font-bold font-poppins">
        <Typography variant="h1" className="text-8xl sm:text-[9rem] -mt-2">700+</Typography>
          <Typography variant="h4" className="text-lg sm:text-2xl">Brands already onboard</Typography>
        </div>
        <div className="grid grid-cols-4 gap-5 sm:grid-cols-5 sm:gap-7">
        <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/airbnb.png"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/evenico.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/reist-bier.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/sunshine.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/swirl.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/earth.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
            </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/simple-green.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/sticky-icky.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/twin-pop.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/red-turquoise.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>

          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/earth.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
            </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/simple-green.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/sticky-icky.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/twin-pop.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full">
            <Image
              src="/images/brands/red-turquoise.avif"
              alt="Airbnb logo"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
