"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
      router.push("/foolaisx/login");
      router.refresh();
    }
  };
  return (
    <Button
      variant="destructive"
      onClick={handleLogout}
      className="w-full justify-start gap-4"
    >
      <LogOut />
      Logout
    </Button>
  );
};

export default LogoutButton;
