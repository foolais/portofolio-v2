import { connectData } from "@/lib/data";
import { Card, CardContent } from "../ui/card";

const CardConnect = () => {
  return (
    <div className="grid grid-cols-2 md:grid-flow-row gap-4">
      {connectData.map(({ icon: Icon, ...connect }, index) => (
        <Card key={index} className="cursor-pointer h-max">
          <CardContent className="flex flex-col items-center justify-center gap-4">
            <Icon
              className={`size-10 ${
                index == 0 || index == 3 ? "text-primary" : "text-secondary"
              }`}
            />
            <span className="text-sm font-semibold">{connect.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardConnect;
