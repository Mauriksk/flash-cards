import { useContext } from "react";
import styles from "./folders.module.css";
import { UIContext } from "@/context/ui";

export const Folders = () => {
  const { folders } = useContext(UIContext);
  return (
    <div className={styles.folderContainer}>
      <div className={styles.folderHeader}>
        <button className={styles.newFolderButton}>Create Folder</button>
      </div>
      <div className={styles.folderBody}>
        {folders.map((folder) => (
          <div className={styles.folder}>
            <h1>{folder.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
