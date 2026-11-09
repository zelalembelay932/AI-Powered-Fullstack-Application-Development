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

        <nav className={style.nav}>
            <a href="#" className={style.item}>
                <MessageSquare size={18}/>
                <span>New Chat</span>
            </a>
            <a href="#" className={style.item}>
                <Search size={18}/>
                <span>Search Chat</span>
            </a>
            <a href="#" className={style.item}>
                <ImageIcon size={18}/>
                <span>Images</span>
            </a>
            <a href="#" className={style.item}>
                <LayoutGrid size={18}/>
                <span>Apps</span>
            </a>
            <a href="#" className={style.item}>
                <Microscope size={18}/>
                <span>Deep research</span>
            </a>
            <a href="#" className={style.item}>
                <Code2 size={18}/>
                <span>Codex</span>
            </a>
            <a href="#" className={style.item}>
                <FolderKanban size={18}/>
                <span>Projects</span>
            </a>
        </nav>
    </aside>
  );
};

export default Sidebar;
