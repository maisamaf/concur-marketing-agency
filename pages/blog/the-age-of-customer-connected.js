import { Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import Date from "../../components/Date";

import Image from "next/image";

const TheAgeOfCustomerConnected = () => {
  return (
    <>
      <Navbar />
      <article className="w-9/12 p-20 px-6 mx-auto">
        <div className="flex gap-5">
          <div className="flex flex-col flex-1 text-gray-800">
            <Typography
              variant="lead"
              className="text-sm font-bold uppercase font-poppins"
            >
              20 min read
            </Typography>
            <Typography
              variant="h1"
              className="my-6 text-4xl font-bold leading-tight font-poppins"
            >
              The Age of the Connected Customer
            </Typography>
            <Typography variant="lead" className="text-md font-poppins">
              Written by Alex Birkett
            </Typography>
            <Typography variant="lead" className="mt-4 text-md font-poppins">
              Published on <Date dateString="2022-09-11" />{" "}
            </Typography>
          </div>
          <div className="flex-1">
            <Image
              src="/images/blog-2.jpg"
              alt="The Age of connected customer"
              width={600}
              height={300}
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        <section className="my-6 ">
          <Typography
            variant="paragraph"
            className="leading-relaxed text-justify "
          >
            Growing a business has never been easy. But these days, it feels
            impossible. Companies are trying to predict growth in an
            unpredictable macro environment. The economy is down, the market is
            volatile, socio-political issues are raging, and the dust is still
            settling on hybrid work. Every week, there’s a new twist or turn.
            <br />
            <br /> In case navigating all this uncertainty isn’t hard enough,
            companies are dealing with another major shift. Over the past year,
            the strategies that businesses rely on to attract, engage, and
            delight customers have started to break. It’s harder to generate
            demand, drive leads, reach prospects, and meet customers’ high
            expectations. At the height of the pandemic, many businesses thrived
            in a digital-first world, but now that momentum is slowing and it’s
            harder than ever to connect with customers.
            <br />
            <br /> <code> The flywheel feels frozen. But why?</code>
            <br />
            <br /> This question keeps me up at night. Helping organizations
            grow better is our mission at HubSpot. We’re passionate about
            helping scaling companies get ahead and navigate periods of
            uncertainty. That’s why we went on a listening tour to understand
            what’s standing in the way of our customers’ growth, and how we can
            help solve it.
            <br /> <br /> Across hundreds of conversations with customers, there
            was one word that kept coming up: disconnected. We discovered that
            companies are in a crisis of disconnection today, caused by three
            major disconnects. They’re struggling with disconnected systems,
            disconnected people, and disconnected customers. I want to share
            what we’ve learned about each disconnect, and how we believe
            companies can solve this crisis.
          </Typography>
          <Typography variant="h3" className="my-6 text-2xl">
            Systems Are Disconnected
          </Typography>
          <Typography variant="paragraph">
            The first theme we heard loud and clear is that companies are
            struggling with disconnected systems. This has always been a
            problem, but it’s gotten worse over the past few years. We recently
            ran a pulse survey to understand the biggest challenges businesses
            are facing, and the number one pain point was disconnected systems
            (HubSpot Market Research, 2022).
            <br />
            <br />
            It makes sense when you think about it. During the pandemic,
            companies shifted to fully-digital overnight and there was a frenzy
            of buying point solutions. They bought a tool for every task, every
            team, and every department. As a result, the average scaling company
            has 242 SaaS tools today. The problem isn’t that companies have a
            lot of tools, though — it’s that too few are connected. Each has its
            own data and processes but there’s no one place tying it all
            together.
            <br />
            <br />
            As a result, companies are spending more time connecting data than
            connecting with their customers. They have to spend hours cleaning
            data and trying to cobble insights together from different systems.
            What’s worse is that their go-to-market teams don’t have a unified
            view of the customer’s journey, so they’re working in silos and
            their customer experience is suffering.
            <br /> <br />
            <code>It’s a total mess.</code> <br />
            <br />
            That’s why, when it comes to growth, it’s time to accept that
            disconnected point solutions are not the solution.
            <br />
          </Typography>

          <div className="my-16">
            <Typography variant="h4" className="w-full py-4 ">
              Related Articles
            </Typography>
            <div className="flex flex-row flex-wrap gap-10 m3-5">
              <div className="flex-1 max-w-md pb-4 transition duration-500 transform cursor-pointer bg-gray-50 rounded-b-xl hover:scale-105">
                <div className="flex-col">
                  <div className="relative h-[200px]">
                    <Image
                      src="/images/blog-1.jpg"
                      alt="two girls talking"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-xl"
                    />
                  </div>
                  <Typography variant="h5" className="p-2">
                    The 15 Best Marketing Automation Tools Available to You
                  </Typography>
                  <Typography variant="paragraph" className="px-2 mb-0 text-sm">
                    <span className="font-semibold font-poppins">Author:</span>{" "}
                    Alex Birkett
                  </Typography>
                  <Typography variant="paragraph" className="px-2 mt-0 text-sm">
                    <span className="font-semibold font-poppins">
                      Reading time:
                    </span>{" "}
                    20 mins
                  </Typography>
                </div>
              </div>
              <div className="flex-1 max-w-md pb-4 transition duration-500 transform cursor-pointer bg-gray-50 rounded-b-xl hover:scale-105">
                <div className="flex-col">
                  <div className="relative h-[200px]">
                    <Image
                      src="/images/blog-3.jpg"
                      alt="two girls talking"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-xl"
                    />
                  </div>
                  <Typography variant="h5" className="p-2">
                    50 Free Online Marketing Classes to Take This Year
                  </Typography>
                  <Typography variant="paragraph" className="px-2 mb-0 text-sm">
                    <span className="font-semibold font-poppins">Author:</span>{" "}
                    Alex Birkett
                  </Typography>
                  <Typography variant="paragraph" className="px-2 mt-0 text-sm">
                    <span className="font-semibold font-poppins">
                      Reading time:
                    </span>{" "}
                    20 mins
                  </Typography>
                </div>
              </div>{" "}
              <div className="flex-1 max-w-md pb-4 transition duration-500 transform cursor-pointer bg-gray-50 rounded-b-xl hover:scale-105">
                <div className="flex-col">
                  <div className="relative h-[200px]">
                    <Image
                      src="/images/blog-2.jpg"
                      alt="two girls talking"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-xl"
                    />
                  </div>

                  <Typography variant="h5" className="p-2">
                    8 Steps to Launching an Online Learning Academy Your
                    Customers Will Love
                  </Typography>
                  <Typography variant="paragraph" className="px-2 mb-0 text-sm">
                    <span className="font-semibold font-poppins">Author:</span>{" "}
                    Alex Birkett
                  </Typography>
                  <Typography variant="paragraph" className="px-2 mt-0 text-sm">
                    <span className="font-semibold font-poppins">
                      Reading time:
                    </span>{" "}
                    20 mins
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default TheAgeOfCustomerConnected;
