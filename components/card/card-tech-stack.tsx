import { Code } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";

const CardTechStack = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="text-primary" />
          <span>Stack</span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CardTechStack;
