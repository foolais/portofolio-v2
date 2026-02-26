import { Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { highlightedProjects } from "@/lib/data";

const CardSelectedProject = () => {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Rocket className="text-primary" />
          <span>Selected Project</span>
        </CardTitle>
        <CardContent className="px-0">
          <div className="w-full h-36 md:h-40 relative mb-2">
            <div className="w-full h-full rounded-lg bg-secondary" />
            <Badge className="absolute bottom-2 left-4">
              {highlightedProjects.name}
            </Badge>
          </div>
          <div className="ml-4">
            {highlightedProjects.tech.map((tech, index) => (
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

export default CardSelectedProject;
