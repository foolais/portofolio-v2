import Header from "@/components/header";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen p-6">
      <Header isAdmin />
      {children}
    </div>
  );
};

export default AdminLayout;
