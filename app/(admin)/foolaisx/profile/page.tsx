import LogoutButton from "@/components/logout-button";
import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect("/foolaisx/login");

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user?.email}</p>
      <p>User ID: {user?.id}</p>
      <LogoutButton />
    </div>
  );
}
