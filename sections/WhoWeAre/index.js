import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import StatisticsCard from "../../components/Cards/StatisticsCard";

const Index = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto text-center bg-gray-50 rounded-t-[2rem] p-14 sm:p-20">
        <div className="flex flex-col items-center gap-10 pb-10 sm:flex-row sm:justify-around sm:gap-20">
          <div className="font-bold font-poppins">
            <Typography variant="h1" className="text-8xl sm:text-[9rem] -mt-2">
              700+
            </Typography>
            <Typography variant="h4" className="text-lg sm:text-2xl">
              Brands already onboard
            </Typography>
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
      <div className="max-w-6xl mx-auto mb-16 -mt-16 bg-gray-200 rounded-b-[2rem] p-14 sm:p-20">
        <div className="flex">
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-around sm:gap-20">
            <Image
              src="/images/discussion.jpg"
              alt="Coworking space"
              height={400}
              width={340}
              objectFit="cover"
              className="rounded-[2rem]"
            />
            <div className="flex flex-col">
              <Typography variant="h2" className="text-3xl">
                How <span className="font-semibold">Concur</span> creates growth business
              </Typography>
              <ul className="flex flex-col items-start mt-8 space-y-4 text-start">
                <li className="">
                  <span className="inline-block w-6 h-6 mr-4 text-center align-middle border border-blue-600 rounded-full place-items-center">
                    <svg
                      className="inline-block w-4 h-4 mb-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="leading-loose">
                    Dedicated account manager for each account
                  </span>
                </li>
                <li className="">
                  <span className="inline-block w-6 h-6 mr-4 text-center align-middle border border-blue-600 rounded-full">
                    <svg
                      className="inline-block w-4 h-4  mb-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="leading-loose">
                    Clear and concise reporting platfrom
                  </span>
                </li>
                <li className="mb-3">
                  <span className="inline-block w-6 h-6 mr-4 text-center align-middle border border-blue-600 rounded-full">
                    <svg
                      className="inline-block w-4 h-4  mb-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="leading-loose">
                    Partner status with Google, Facebook, Bing and more
                  </span>
                </li>
                <li className="mb-3 ">
                  <span className="inline-block w-6 h-6 mr-4 text-center align-middle border border-blue-600 rounded-full">
                    <svg
                      className="inline-block w-4 h-4  mb-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="leading-loose">
                    On-staff experts in marketing, design, automation &
                    development
                  </span>
                </li>

                <a className="mt-[3rem!important] cursor-pointer text-lg  text-blue-600 max-w-max transition transform duration-300 group">
                  Send me a proposal
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-2 mt-20 sm:gap-10 gap-y-16 sm:flex-row">
          <StatisticsCard
            icon="/images/cup.svg"
            title="Proven Performance"
            className="flex-1"
          >
            Our team ov over 450 experts is one of the largest performance
            digital marketing agencies in the world. We have partnered with the
            best to bring the greatest marketing technology to our clients.
          </StatisticsCard>
          <StatisticsCard
            icon="/images/thumbs-up.svg"
            title="Unparalleled track record"
            className="flex-1"
          >
            We have a 92% client retention rate and a client recommendation
            score that&apos;s 60% higher than the worldwide average. Our 700+
            client testimonials, award-winning culture are perfect recipe for a
            successful digital campaign.
          </StatisticsCard>
        </div>
      </div>

      <section className="max-w-6xl mx-auto my-16 p-14 sm:p-20">
        <div className="flex flex-col gap-20 sm:flex-row">
          <div className="flex-1">
            <Typography
              variant="lead"
              className="text-3xl font-semibold sm:text-5xl font-poppins"
            >
              By the numbers
            </Typography>
            <Typography
              variant="h2"
              className="text-8xl sm:text-[12rem] mt-6 sm:mt-12 font-poppins"
            >
              92%
            </Typography>
            <Typography variant="h4" className="mt-4">
              Retention rate
            </Typography>
            <Typography variant="paragraph" className="mt-3">
              Your business is in good hands at Concur. While the
              average retention rate for marketing agencies hovers around 50%,
              over 90% of our clients stay with us over the long haul because of
              the results we deliver and the relationships we build.
            </Typography>
          </div>
          <div className="flex-1">
            <Typography variant="paragraph">
              Our best-in-class digital marketing agency impresses customers
              with impactful results and wows them with stellar customer
              service.
            </Typography>
            <div className="flex justify-start gap-10 mt-20">
              <div className="relative w-24 bg-[#F3F3F3] h-80 rounded-t-xl">
                <div className="absolute bottom-0 w-full bg-[#F5DBCC] h-60 rounded-t-xl" />
              </div>
              <div className="relative w-24 bg-[#F3F3F3] h-80 rounded-t-xl">
                <div className="absolute bottom-0 w-full bg-[#C3EBED] h-[7rem] rounded-t-xl" />
              </div>
              <div className="relative w-24 bg-[#F3F3F3] h-80 rounded-t-xl">
                <div className="absolute bottom-0 w-full bg-[#5134FF] h-[17rem] rounded-t-xl" />
              </div>
              <div className="relative w-24 bg-[#F3F3F3] h-80 rounded-t-xl">
                <div className="absolute bottom-0 w-full bg-[#C7C7C7] h-48 rounded-t-xl" />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-20" />
        <div className="flex flex-col gap-10 sm:gap-20 sm:flex-row">
          <div className="flex-1">
            <Typography
              variant="h4"
              className="text-3xl sm:text-[2.4rem] leading-snug"
            >
              Ready to grow with a digital marketing agency you can trust?{" "}
              <br className="hidden sm:block" />
              Get your proposal now!
            </Typography>
          </div>
          <div className="flex-1">
            <Typography variant="paragraph">
              Our digital marketing experts have put together thousands of
              successfuldigital marketing campaigns for businesses looking to
              increase leads, phone calls, transactions, and qualified website
              traffic. They will do the same for you, request a free strategy
              proposal and get a game plan for elite revenue.
            </Typography>
            <Button variant="gradient" color="blue" size="lg" className="mt-8">
              Send me a proposal 📃
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
