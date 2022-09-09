import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

// components
import SimpleCard from "../Cards/SimpleCard";

const Index = () => {
  return (
    <header className="container py-8 sm:p-16 mx-auto">
      <div className="flex flex-col items-center text-center sm:text-start sm:items-start mx-4 sm:max-w-screen-lg my-6 sm:mx-16">
        <Typography variant="h1" className="text-4xl sm:text-5xl font-bold font-poppins" style={{lineHeight: "1.4"}}>
        Choose Creative Agency as your digital marketing agency.
        </Typography>
        <Button
          variant="gradient"
          color="primary"
          size="lg"
          className="max-w-max mt-8 rounded-full"
        >
          <span className="normal-case">Get in touch</span>
          <svg
            className="w-5 h-5 inline-block ml-2 mr-0"
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
        </Button>

      </div>
      <div className="flex flex-wrap justify-center gap-5 my-24 mx-8">
        <SimpleCard image="/images/planning.jpg" alt="Writing Plan" />
        <SimpleCard
          image="/images/stats.jpg"
          alt="Showing Statistics on Mobile"
          className="mt-8"
        />
        <SimpleCard image="/images/work.jpg" alt="Writing Plan" />

        <SimpleCard
          image="/images/wireframing.jpg"
          alt="Showing Statistics on Mobile"
          className="mt-8"
        />
      </div>
    </header>
  );
};

export default Index;
