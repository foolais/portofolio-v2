import { School } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { educationData } from "@/lib/data";
import BulletLeftCard from "../bullet-left-card";
import { Badge } from "../ui/badge";

const CardEducation = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <School className="text-secondary" />
          <span>Education</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-start">
        {educationData.map((edu, index) => (
          <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
            <BulletLeftCard />
            <div className="flex flex-col gap-2 font-semibold">
              <span>
                {edu.degree} @{edu.school}
              </span>
              <Badge variant="secondary">
                {edu.start} - {edu.end}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardEducation;
