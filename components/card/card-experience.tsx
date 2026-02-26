import { CheckCheck, History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { experienceData } from "@/lib/data";
import { Badge } from "../ui/badge";
import BulletLeftCard from "../bullet-left-card";

const CardExperience = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="text-secondary" />
          <span>Latest Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-start">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
            <BulletLeftCard />
            <div className="flex flex-col gap-2 font-semibold">
              <span>
                {exp.title} @{exp.place}
              </span>
              <Badge variant="secondary">
                {exp.start} - {exp.end}
              </Badge>
              <div className="flex flex-col gap-2">
                {exp.description.map((desc, i) => (
                  <div key={i} className="flex gap-2">
                    <CheckCheck className="size-4 text-secondary shrink-0" />
                    <span className="text-sm text-slate-500 font-normal">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {exp.stack.map((tech, i) => (
                  <Badge key={i}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardExperience;
