import React from "react";
import Affair from "./Affair";
import { AffairType, FilterType } from "./HW2";

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
    <div>
      {mappedAffairs}

      <button onClick={setAll}>All</button>
      <button onClick={setHigh}>High</button>
      <button onClick={setMiddle}>Middle</button>
      <button onClick={setLow}>Low</button>
    </div>
  );
}

export default Affairs;
