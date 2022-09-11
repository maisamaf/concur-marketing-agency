import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

const Index = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal font-poppins"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal font-poppins"
      >
        <a href="#what-we-do" className="flex items-center">
          What we do
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal font-poppins"
      >
        <a href="#our-work" className="flex items-center">
          Our Work
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal font-poppins"
      >
        <a href="#who-are-we" className="flex items-center">
          Who we are
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal font-poppins"
      >
        <Link href="/blog" className="flex items-center">
          Blog
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="px-4 py-2 mx-auto shadow-none lg:py-4">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <div className="flex">
          <Image
            src="/images/logo.png"
            alt="Concur Agency Logo"
            height={30}
            width={120}
            objectFit="cover"
          />
          <Typography
            as="a"
            href="#"
            variant="small"
            className="-ml-4 mr-4 cursor-pointer py-1.5 font-bold font-poppins text-lg"
          >
            <span>CONCUR</span>
          </Typography>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="fill"
          color="gray"
          size="sm"
          className="hidden text-gray-700 bg-gray-300 mr-9 lg:inline-block"
        >
          <span className="normal-case ">
            Get in touch <span className="text-lg">👋</span>
          </span>
        </Button>
        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button
          variant="fill"
          color="gray"
          size="sm"
          fullWidth
          className="mb-2 text-gray-700 bg-gray-300"
        >
          <span className="normal-case">
            Get in touch <span className="text-lg">👋</span>
          </span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};

export default Index;
