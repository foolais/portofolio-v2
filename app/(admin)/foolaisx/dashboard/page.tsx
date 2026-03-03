import ContainerContent from "@/components/admin/container-content";
import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect("/foolaisx/login");

  return (
    <div className="px-8 py-4 max-w-7xl mx-auto min-h-[85vh] flex flex-col">
      <h1 className="text-2xl font-semibold">Content Management</h1>
      <ContainerContent />
    </div>
  );
}
