import { Typography } from "@material-tailwind/react";


// components
import StatisticsCard from "../../components/Cards/StatisticsCard";

const Index = () => {
  return (
    <section className="max-w-8xl mb-20 text-center mx-auto">
      <div className="relative mx-16" id="our-work">
      <Typography variant="h2" className="text-4xl font-poppins">
          We are the best choice of your{" "}
          <span className="text-blue-700">Digital Marketing.</span>
            <span className="absolute text-start right-[4.2rem] -bottom-24 sm:right-[25rem] sm:bottom-[7rem] text-4xl text-gray-200">
              Branding.
            </span>
            <span className="absolute right-14 -bottom-12 sm:right-[24.2rem] sm:bottom-[3.8rem] text-4xl text-gray-300">
              Social Ads
            </span>
      </Typography>

      </div>
      <div className="max-w-6xl sm:my-20 mx-auto mt-40 mb-20">
        <div className="flex flex-wrap justify-center gap-10">
          <StatisticsCard icon="/images/stats.svg" title="Earning Traffic">
            A Website without traffic is worthless. Our marketers partners are
            with you to identify your target market and get to work making your
            site more visible to your key market through our comprehensive
            digital marketing services.
          </StatisticsCard>
          <StatisticsCard icon="/images/design.svg" title="Design that dazzles">
            Your business is unique and you need a website that can help
            separate you from the competition. The CreativeAgency interactive
            team lays the creative groundwork for your digital presence with a
            cutting-edge website design.
          </StatisticsCard>
          <StatisticsCard
            icon="/images/rocket.svg"
            title="Expand your social reach"
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
