import CardConnect from "@/components/card/card-connect";
import CardEducation from "@/components/card/card-education";
import CardExperience from "@/components/card/card-experience";
import CardSelectedProject from "@/components/card/card-selected-project";
import CardTechStack from "@/components/card/card-tech-stack";
import Hero from "@/components/hero";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 lg:w-4xl mx-auto">
        <div className="col-span-3 h-full">
          <CardExperience />
        </div>
        <div className="col-span-2 grid gap-4 h-full">
          <CardConnect />
          <CardTechStack />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 lg:w-4xl mx-auto">
        <div className="md:col-span-2 h-full">
          <CardSelectedProject />
        </div>
        <div className="md:col-span-3 h-full">
          <CardEducation />
        </div>
      </div>
    </div>
  );
};

export default Page;
