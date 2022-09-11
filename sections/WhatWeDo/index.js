import { Typography } from "@material-tailwind/react";

// components
import StatisticsCard from "../../components/Cards/StatisticsCard";

const Index = () => {
  return (
    <section className="mx-auto mb-20 text-center max-w-8xl">
      <div className="relative mx-16" id="our-work">
        <Typography variant="h2" className="inline-block text-4xl font-poppins">
          We are the best choice of your{" "}
        </Typography>
        <div className="relative inline-block max-w-max">
        <span className="mx-2 text-4xl text-blue-700 max-w-max font-poppins">Digital Marketing.</span>
          <span className="absolute text-4xl text-gray-300 left-2 top-10 sm:top-auto sm:bottom-10">
            Social Ads
          </span>
          <span className="absolute text-4xl text-gray-200 left-2 top-20 sm:top-auto sm:bottom-20 text-start">
            Branding.
          </span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-40 mb-20 sm:my-20">
        <div className="flex flex-wrap justify-center gap-10">
          <StatisticsCard
            className="max-w-xs"
            icon="/images/stats.svg"
            title="Earning Traffic"
            href="#"
          >
            A Website without traffic is worthless. Our marketers partners are
            with you to identify your target market and get to work making your
            site more visible to your key market through our comprehensive
            digital marketing services.
          </StatisticsCard>
          <StatisticsCard
            className="max-w-xs"
            icon="/images/design.svg"
            title="Design that dazzles"
            href="#"
          >
            Your business is unique and you need a website that can help
            separate you from the competition. The CreativeAgency interactive
            team lays the creative groundwork for your digital presence with a
            cutting-edge website design.
          </StatisticsCard>
          <StatisticsCard
            className="max-w-xs"
            icon="/images/rocket.svg"
            title="Expand your social reach"
            href="#"
          >
            Connectivity and online interaction are a must for any company
            focused on growth. Our team of social media experts can create a
            social media management plan that gets the right message in front of
            your desired audience.
          </StatisticsCard>
        </div>
      </div>
    </section>
  );
};

export default Index;
