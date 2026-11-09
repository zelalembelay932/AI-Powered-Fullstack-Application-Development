import style from "./Sidebar.module.css";
import {MessageSquare, Search, Image as ImageIcon, LayoutGrid, Microscope, Code2, FolderKanban, PanelLeftClose} from 'lucide-react'


const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
        <div className={style.header}>
            <div className={style.logo}>
                <div className={style.iconBtn}>
                    <PanelLeftClose size={20}/>
                </div>
            </div>
            <button className={style.iconBtn}>
                <MessageSquare size={20} />
            </button>
        </div>

        
    </aside>
  );
};

export default Sidebar;
