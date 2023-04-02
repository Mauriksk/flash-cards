import React, { useContext } from "react";
import { NavBar } from "../ui/navBar/NavBar";
import { UIContext } from "@/context/ui";
import styles from "./MainLayOut.module.css";
import { Folders, Profiler, Statistics } from "../ui/bodies/";

export const MainLayOut = () => {
  const { currentItem } = useContext(UIContext);

  const bodies = [
    {
      name: "Folders",
      component: <Folders />,
    },
    {
      name: "Profiler",
      component: <Profiler />,
    },
    {
      name: "Statistics",
      component: <Statistics />,
    },
  ];
  return (
    <div className={styles.layOutContainer}>
      <NavBar />
      <div className={styles.contentContainer}>
        {bodies.find(({ name }) => name === currentItem)?.component}
      </div>
    </div>
  );
};
