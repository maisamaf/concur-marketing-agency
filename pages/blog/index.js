import Image from "next/image";
import { Typography } from "@material-tailwind/react";

// component
import Navbar from "../../components/Navbar";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <Navbar />
      <section className="w-full pb-20 mx-auto px- sm:w-10/12">
        <div className="flex flex-col items-center justify-center p-20 my-8 bg-blue-gray-50 rounded-xl">
          <Typography
            variant="h1"
            className="mb-3 text-3xl font-bold sm:text-5xl font-poppins"
          >
            Concur Blog
          </Typography>
          <Typography variant="lead" className="text-center">
            Learn How Concur creates growth business
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col p-5 transition-all sm:flex-row group hover:bg-gray-50 rounded-xl">
            <div className="relative w-full h-[220px] sm:w-[240px] sm:h-[180px]">
              <Link href="/blog/blog-post">
                <Image
                  src="/images/blog-1.jpg"
                  alt="How to grow business article"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full cursor-pointer rounded-xl"
                />
              </Link>
            </div>
            <div className="flex flex-col w-full mx-4 mt-3 break-words sm:max-w-3xl">
              <Link href="/blog/blog-post">
                <Typography
                  variant="h2"
                  className="text-2xl cursor-pointer font-poppins"
                >
                  The 15 Best Marketing Automation Tools Available to You
                </Typography>
              </Link>
              <Typography variant="paragraph" className="mx-1 my-2 text-sm ">
                <span className="font-semibold">Author: </span> Alex Birkett
              </Typography>
              <Typography variant="paragraph" className="mx-1 mb-2 text-sm ">
                <span className="font-semibold">Reading time: </span> 20 mins
              </Typography>
              <Typography
                variant="paragraph"
                className="max-w-2xl mx-1 text-sm"
              >
                A majority of businesses use marketing automation tools nowadays
                — in fact, studies cite around 56% of businesses currently use
                the technology, and that number continues to grow.
              </Typography>
              <Typography variant="paragraph" className="mx-1 my-2 text-sm ">
                <span className="font-semibold">Publish Date: </span> 2 days ago
              </Typography>
            </div>
          </div>
          <div className="flex flex-col p-5 transition-all sm:flex-row group hover:bg-gray-50 rounded-xl">
            <div className="relative w-full h-[220px] sm:w-[240px] sm:h-[180px]">
              <Link href="/blog/blog-post">
                <Image
                  src="/images/blog-2.jpg"
                  alt="How to grow business article"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full cursor-pointer rounded-xl"
                />
              </Link>
            </div>
            <div className="flex flex-col max-w-3xl mx-4 mt-3">
              <Link href="/blog/blog-post">
                <Typography
                  variant="h2"
                  className="text-2xl cursor-pointer font-poppins"
                >
                  The Age of the Connected Customer
                </Typography>
              </Link>
              <Typography variant="paragraph" className="mx-1 my-2 text-sm ">
                <span className="font-semibold">Author: </span> Alex Birkett
              </Typography>
              <Typography variant="paragraph" className="mx-1 mb-2 text-sm ">
                <span className="font-semibold">Reading time: </span> 15 mins
              </Typography>
              <Typography
                variant="paragraph"
                className="max-w-2xl mx-1 text-sm"
              >
                A majority of businesses use marketing automation tools nowadays
                — in fact, studies cite around 56% of businesses currently use
                the technology, and that number continues to grow.
              </Typography>
              <Typography variant="paragraph" className="mx-1 my-2 text-sm ">
                <span className="font-semibold">Publish Date: </span> 10 mins
                ago
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
