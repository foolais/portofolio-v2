import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";

const DetailProject = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const data = projectsData.find((item) => item.id === +id);

  return (
    <div className="lg:w-4xl mx-auto py-8 px-6">
      <div className="h-72  w-full md:w-5/6 bg-secondary mx-auto rounded-lg mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
        <div className="flex flex-col gap-2 col-span-2 w-5/6">
          <div className="flex items-center gap-2">
            <div className="h-full w-1 bg-primary" />
            <h1 className="text-2xl font-bold">
              {data?.name} @{id}
            </h1>
          </div>
          <p className="text-slate-500">{data?.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {data?.tech.map((tech, index) => (
              <Badge key={index} className="text-xs border-primary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-8 mt-10 lg:mt-20">
        {data?.details.map((detail, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-8 justify-between items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2 mb-10">
              <Badge
                className="text-lg border-primary mb-4"
                variant={index % 2 === 0 ? "default" : "secondary"}
              >
                <div className="mr-2">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <span>{detail.title}</span>
              </Badge>
              <p className="text-slate-500">{detail.description}</p>
            </div>
            <div className="h-72 lg:h-80 aspect-square relative group cursor-pointer">
              <div
                className={`w-full h-full bg-primary rounded-lg scale-110 ${
                  index % 2 === 0 ? "mr-4 rotate-6" : "ml-4 -rotate-6"
                } group-hover:rotate-0 group-hover:scale-100 transition-transform duration-300 ease-in-out`}
              >
                <div
                  className={`absolute rounded-lg inset-0 bg-secondary ${
                    index % 2 === 0 ? "rotate-[8deg]" : "-rotate-[8deg]"
                  } group-hover:rotate-0 transition-transform duration-300 ease-in-out`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailProject;
