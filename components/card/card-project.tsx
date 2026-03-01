import { IProject } from "@/lib/data";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { truncateText } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";

const CardProject = (item: IProject) => {
  return (
    <Card className="py-0 overflow-hidden">
      <div className="w-full h-40 aspect-square md:h-40 relative bg-secondary" />
      <CardContent>
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <span className="text-sm text-slate-500">
            {truncateText(item.description, 150)}
          </span>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tech.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-4">
              <Button size="sm" className="text-xs scale-animate">
                <Github /> Github
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="text-xs scale-animate"
              >
                <Globe /> Demo
              </Button>
            </div>
            <Link href={`/projects/${item.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="text-xs scale-animate"
              >
                View Details <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProject;
