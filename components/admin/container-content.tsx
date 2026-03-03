"use client";

import { useState } from "react";
import AdminSidebar from "./admin-sidebar";
import { IMenu } from "@/lib/data";
import AdminFormProfile from "./admin-form-profile";

const ContainerContent = () => {
  const [menu, setMenu] = useState<IMenu>("newProject");

  const handleChangeMenu = (value: IMenu) => setMenu(value);

  return (
    <div className="flex  flex-1 gap-8 mt-4">
      <AdminSidebar activeMenu={menu} onChangeMenu={handleChangeMenu} />
      <div className="flex-1 bg-red-100 min-h-fit">
        {menu === "profile" && <AdminFormProfile />}
      </div>
    </div>
  );
};

export default ContainerContent;
