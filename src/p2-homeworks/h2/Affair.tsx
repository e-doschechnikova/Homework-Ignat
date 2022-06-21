import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { AffairType } from "./HW2";

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = (_id: number): void => {
    props.deleteAffairCallback(_id);
  };

  return (
    <div>
      {props.affair.name}

      <SuperButton onClick={() => deleteCallback(props.affair._id)} red>
        X
      </SuperButton>
    </div>
  );
}

export default Affair;
