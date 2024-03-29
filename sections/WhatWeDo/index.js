import { Typography } from "@material-tailwind/react";

// components
import StatisticsCard from "../../components/Cards/StatisticsCard";

const Index = () => {
  return (
    <section className="mx-auto mb-20 text-center max-w-8xl">
      <div className="relative mx-16" id="our-work">
        <Typography variant="h2" className="inline-block text-2xl font-bold sm:text-4xl font-poppins">
          We are the best choice of your{" "}
        </Typography>
        <div className="relative inline-block max-w-max sm:mb-14">
        <span className="mx-2 text-2xl font-bold text-blue-700 sm:text-4xl max-w-max font-poppins">Digital Marketing.</span>
          <span className="absolute text-2xl font-bold text-gray-300 font-poppins sm:text-4xl left-3 sm:left-2 sm:top-14 top-10 lg:top-auto lg:bottom-10">
            Social Ads
          </span>
          <span className="absolute text-2xl font-bold text-gray-200 sm:text-4xl left-3 sm:left-2 sm:top-28 top-20 lg:top-auto lg:bottom-20 text-start">
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
            separate you from the competition. The Concur interactive
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
