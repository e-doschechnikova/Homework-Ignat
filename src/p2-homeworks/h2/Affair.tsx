import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { AffairType } from "./HW2";
import styles from "./Affair.module.css";

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = (_id: number): void => {
    props.deleteAffairCallback(_id);
  };

  return (
    <div className={styles.containerButtons}>
      <div className={styles.name}>{props.affair.name}</div>
      <SuperButton
        className={styles.button}
        onClick={() => deleteCallback(props.affair._id)}
        red
      >
        X
      </SuperButton>
    </div>
  );
}

export default Affair;
