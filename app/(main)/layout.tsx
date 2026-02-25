import Header from "@/components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen p-6">
      <Header />
      {children}
    </div>
  );
};

export default layout;
