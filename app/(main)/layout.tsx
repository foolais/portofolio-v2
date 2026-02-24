import Header from "@/components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen min-h-screen py-6">
      <Header />
      {children}
    </div>
  );
};

export default layout;
