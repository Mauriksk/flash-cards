import { useContext } from "react";
import style from "./navBar.module.css";
import { UIContext } from "@/context/ui";

export const NavBar = () => {

  const { selectItem } = useContext(UIContext)
  return (
    <div className={style.navBarcontainer}>
      <div onClick={() => selectItem('Profiler')} className={style.navItem}>
        <p>Profiler</p>
      </div>
      <div onClick={() => selectItem('Folders')} className={style.navItem}>
        <p>Folders</p>
      </div>
      <div onClick={() => selectItem('Statistics')} className={style.navItem}>
        <p>Statistics</p>
      </div>
    </div>
  );
};
