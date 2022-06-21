import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import Affair from "./Affair";
import { AffairType, FilterType } from "./HW2";
import styles from "./Affairs.module.css";

type AffairsPropsType = {
  data: Array<AffairType>;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((element: AffairType) => {
    return (
      <Affair
        key={element._id}
        affair={element}
        deleteAffairCallback={props.deleteAffairCallback}
      />
    );
  });

  const setAll = (): void => {
    props.setFilter("all");
  };
  const setHigh = (): void => {
    props.setFilter("high");
  };
  const setMiddle = (): void => {
    props.setFilter("middle");
  };

  const setLow = (): void => {
    props.setFilter("low");
  };

  return (
    <div className={styles.container}>
      {mappedAffairs}

      <SuperButton onClick={setAll}>All</SuperButton>
      <SuperButton onClick={setHigh}>High</SuperButton>
      <SuperButton onClick={setMiddle}>Middle</SuperButton>
      <SuperButton onClick={setLow}>Low</SuperButton>
    </div>
  );
}

export default Affairs;
