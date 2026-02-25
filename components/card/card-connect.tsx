import { Link } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";

const CardConnect = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="text-primary" />
          <span>Connect</span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CardConnect;
