import CardAuth from "@/components/card/card-auth";
import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

const AdminLoginPage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return redirect("/foolaisx/profile");
  return (
    <div className="flex items-center justify-center mt-14">
      <CardAuth />
    </div>
  );
};

export default AdminLoginPage;
