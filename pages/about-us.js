import Head from "next/head";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";

// component
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// image
import greenDoodle from "../public/images/green-doodle.svg";
const AboutUs = () => {
  return (
    <>    
    <Head>
    <title>Concur - About us</title>
    <link rel="icon" href="./images/logo.png" />

  </Head>
      <Navbar />
      <section className="w-full px-2 mx-auto sm:w-10/12">
        <div className="flex flex-col gap-10 py-20 my-8 sm:px-8 sm:flex-row">
          <div className="flex-col flex-1 text-center sm:text-start">
            <Typography
              variant="lead"
              className="uppercase text-base font-semibold tracking-[0.2em] text-gray-700"
            >
              About us
            </Typography>
            <Typography
              variant="h1"
              className="mt-3 mb-8 mx-8 sm:mx-0 text-2xl sm:text-5xl font-bold leading-[2.6rem] sm:leading-[3.4rem] text-gray-800 font-poppins"
            >
              Helping businesses{" "}
              <span
                className=""
                style={{
                  backgroundImage: `url(${greenDoodle.src})`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "190px",
                }}
              >
                success
              </span>{" "}
              through the power of digital marketing.
            </Typography>
            <Typography
              variant="lead"
              className="text-[1rem] leading-7 tracking-wide text-center sm:text-start text-gray-700 font-poppins sm:pr-8"
            >
              Digital marketing is the future of business in this digital-focused world.
              Concur uses video to change the way companies connect and
              communicate. We help organizations of all sizes humanize their
              communications and personalize their customer experiences.
            </Typography>
            <Button
              variant="gradient"
              color="blue"
              size="lg"
              className="mt-8 mb-8 sm:mb-0"
            >
              Send us a proposal <span className="text-lg">📃</span>
            </Button>
          </div>
          <div className="relative flex-1 px-12 sm:px-0">
            <Image
              src="/images/girl-in-office.webp"
              alt="Girl working with computer"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="w-full pb-20 bg-gray-50 rounded-xl">
          <div className="flex flex-col gap-10 p-10 sm:flex-row">
            <div className="flex-1 mt-4">
              <Typography
                variant="h3"
                className="mt-3 mb-8 text-3xl font-bold leading-10 text-gray-800 font-poppins"
              >
                Record and send videos to reach prospects, connect with
                customers, and change the way you work
              </Typography>
            </div>
            <div className="flex-1 mt-6">
              <Typography
                variant="paragraph"
                className="text-[1rem] leading-7 tracking-wide text-gray-700 font-poppins pr-8"
              >
                Concur is built for business. Our platform goes beyond just
                video hosting and management. Connect with viewers through
                personalized video experiences. Explore analytical insights
                about your audience. Turn those insights into action through
                integrations with top enterprise tools. Prove the impact of your
                video programs.
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-6 text-[1rem] leading-7 tracking-wide text-gray-700 font-poppins pr-8"
              >
                Global leaders and industry pioneers on the Fortune 500 list and
                beyond rely on Concur to power their video strategies and turn
                viewers into customers.
              </Typography>
            </div>
          </div>

          <hr className="py-8 mx-16 mt-10" />

          <div className="grid grid-cols-1 gap-5 mx-16 sm:grid-cols-3">
            <div className="flex flex-col p-5 transition duration-300 cursor-default hover:bg-white rounded-xl">
              <Typography
                variant="h4"
                className="pt-3 text-5xl font-bold text-gray-800 font-poppins"
              >
                300+
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-2 text-[1rem] leading-7 tracking-wide text-gray-700 font-poppins pr-8"
              >
                Since 2010, Concur has grown from a team of 2 to over 300.
              </Typography>
            </div>

            <div className="flex flex-col p-5 transition duration-300 cursor-default hover:bg-white rounded-xl">
              <Typography
                variant="h4"
                className="pt-3 text-5xl font-bold text-gray-800 font-poppins"
              >
                12 million+
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-2 text-[1rem] leading-7 tracking-wide text-gray-700 font-poppins pr-8"
              >
                Over 12 million people use Concur to create and share videos.
              </Typography>
            </div>
            <div className="flex flex-col p-5 transition duration-300 cursor-default hover:bg-white rounded-xl">
              <Typography
                variant="h4"
                className="pt-3 text-5xl font-bold text-gray-800 font-poppins"
              >
                160,000
              </Typography>
              <Typography
                variant="paragraph"
                className="pt-3 mt-2 text-[1rem] leading-7 tracking-wide text-gray-700 font-poppins pr-8"
              >
                160,000 companies choose Concur.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
