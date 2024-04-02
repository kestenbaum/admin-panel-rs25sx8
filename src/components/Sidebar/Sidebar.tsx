import Button from "../UI/Button/Button.tsx";
import {FC} from "react";

interface SidebarProps {
    active: boolean,
    setActive: (active:boolean) => void
}

const Sidebar:FC<SidebarProps> = ({active, setActive}) => {
    return (
        <div className={!active ? "sidebar" : "sidebar active"}>
            <Button onClick={() => setActive(false)}>Create</Button>
            <Button onClick={() => setActive(false)}>LogOut</Button>
        </div>
    );
};

export default Sidebar;