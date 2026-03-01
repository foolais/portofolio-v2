import { Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { projectsData } from "@/lib/data";
import Link from "next/link";

const CardHighlightedProject = () => {
  const data = projectsData.find((project) => project.isHighlighted);

  if (!data) {
    return null;
  }
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Rocket className="text-primary" />
          <span>Highlighted Project</span>
        </CardTitle>
        <CardContent className="px-0">
          <Link href={`/projects/${data.id}`} className="w-full h-full">
            <div className="w-full h-36 md:h-40 relative mb-2 cursor-pointer">
              <div className="w-full h-full rounded-lg bg-secondary" />
              <Badge className="absolute bottom-2 left-4">{data?.name}</Badge>
            </div>
          </Link>
          <div className="ml-4">
            {data.tech.map((tech, index) => (
              <Badge key={index} variant="secondary" className="mr-2">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default CardHighlightedProject;
