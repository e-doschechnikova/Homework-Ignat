import React from "react";
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
      <button onClick={() => deleteCallback(props.affair._id)}>X</button>
    </div>
  );
}

export default Affair;
