import { CodeXml } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { stackData } from "@/lib/data";
import { Badge } from "../ui/badge";

const CardTechStack = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CodeXml className="text-primary" />
          <span>Stack</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-sm text-slate-500 mb-1">Core</p>
          {stackData.core.map((tech, index) => (
            <Badge key={index} className="mr-2 mb-2">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-sm text-slate-500">Others</p>
          {stackData.others.map((tech, index) => (
            <Badge key={index} variant="secondary" className="mr-2 mb-2">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTechStack;
