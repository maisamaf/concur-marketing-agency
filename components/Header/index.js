import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

// components
import SimpleCard from "../Cards/SimpleCard";

const Index = () => {
  return (
    <header className="container py-8 mx-auto sm:p-16">
      <div className="flex flex-col items-center mx-4 my-6 text-center sm:text-start sm:items-start sm:max-w-screen-lg sm:mx-16">
        <Typography variant="h1" className="text-4xl font-bold sm:text-5xl font-poppins" style={{lineHeight: "1.2"}}>
        Choose <span className="font-black uppercase">Concur</span> as your digital marketing agency.
        </Typography>
        <Button
          variant="gradient"
          color="primary"
          size="lg"
          className="mt-8 rounded-full max-w-max"
        >
          <span className="normal-case">Get in touch</span>
          <svg
            className="inline-block w-5 h-5 ml-2 mr-0"
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
      <div className="flex flex-wrap justify-center gap-5 mx-8 my-24">
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
