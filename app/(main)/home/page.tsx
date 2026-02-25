import CardConnect from "@/components/card/card-connect";
import CardExperience from "@/components/card/card-experience";
import CardTechStack from "@/components/card/card-tech-stack";
import Hero from "@/components/hero";

const Page = () => {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 lg:w-4xl mx-auto">
        <div className="col-span-3 h-full">
          <CardExperience />
        </div>
        <div className="col-span-2 grid grid-rows-2 gap-4">
          <CardConnect />
          <CardTechStack />
        </div>
      </div>
    </>
  );
};

export default Page;
