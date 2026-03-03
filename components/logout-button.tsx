"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { toast } from "sonner";

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
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
