import { Button } from "../ui/button";
import LogoutButton from "../logout-button";
import { IMenu, sidebarData } from "@/lib/data";

type IProps = {
  activeMenu: string;
  onChangeMenu: (value: IMenu) => void;
};

const AdminSidebar = ({ activeMenu, onChangeMenu }: IProps) => {
  return (
    <div className="flex flex-col gap-4 w-max">
      {sidebarData.map(({ title, value, icon: Icon }, index) => (
        <div key={index} className="flex flex-col">
          {index === 3 && (
            <span className="text-sm text-slate-500 mb-4 ml-3">Manage</span>
          )}
          <Button
            variant={activeMenu === value ? "default" : "ghost"}
            onClick={() => onChangeMenu(value as IMenu)}
            className="justify-start gap-2"
          >
            <Icon /> {title}
          </Button>
        </div>
      ))}
      <LogoutButton />
    </div>
  );
};

export default AdminSidebar;
