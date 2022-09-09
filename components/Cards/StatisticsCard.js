import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const StatisticsCard = ({ icon, title, href = "#", ...props }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-max p-3 border-gray-200 border-2 rounded-xl bg-white text-center">
        <Image src={icon} alt="Statistics Icon" width={20} height={20} />
      </div>
      <div className="flex flex-col text-start max-w-xs">
        <Typography variant="h4" className="mb-5 mt-1">
          {title}
        </Typography>
        <Typography className="text-gray-600 font-normal font-sans">
          {props.children}
        </Typography>
        <Link href={href}>
          <a className="max-w-max text-blue-600 mt-6 link link-underline">
            Learn more
            <span>
              <svg
                className="w-3 h-3 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default StatisticsCard;
