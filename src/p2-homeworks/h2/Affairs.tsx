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
      <div>{mappedAffairs}</div>
      <div className={styles.containerButtons}>
        <SuperButton onClick={setAll}>all</SuperButton>
        <SuperButton onClick={setHigh}>high</SuperButton>
        <SuperButton onClick={setMiddle}>middle</SuperButton>
        <SuperButton onClick={setLow}>low</SuperButton>
      </div>
    </div>
  );
}

export default Affairs;
