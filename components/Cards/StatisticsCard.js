import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const StatisticsCard = ({ icon, title, href, className, ...props }) => {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <div className="px-3 grid place-items-center py-[0.5rem] text-center bg-white border-2 border-gray-200 max-w-max rounded-xl">
        <Image src={icon} alt="Statistics Icon" width={20} height={20} />
      </div>
      <div className="flex flex-col min-w-xs text-start">
        <Typography variant="h4" className="mt-1 mb-5">
          {title}
        </Typography>
        <Typography className="font-sans font-normal text-gray-600">
          {props.children}
        </Typography>
        {href && (
          <Link href={href}>
          <a className="mt-6 text-blue-600 transition duration-500 transform max-w-max group ">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

          </a>
        </Link>
        )}
      </div>
    </div>
  );
};

export default StatisticsCard;
