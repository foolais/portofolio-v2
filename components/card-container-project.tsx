import { projectsData } from "@/lib/data";
import CardProject from "./card/card-project";

const CardContainerProject = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
      {projectsData.map((item, index) => (
        <CardProject key={index} {...item} />
      ))}
    </div>
  );
};

export default CardContainerProject;
