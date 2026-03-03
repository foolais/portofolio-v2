import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const AdminFormProfile = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="admin-card-title">
          <Button size="icon">
            <User className="size-5" />
          </Button>
          Profile
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent></CardContent>
    </Card>
  );
};

export default AdminFormProfile;
