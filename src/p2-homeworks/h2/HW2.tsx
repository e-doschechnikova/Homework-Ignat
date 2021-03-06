import React, { useState } from "react";
import Affairs from "./Affairs";
import s from "./Affairs.module.css";

export type AffairPriorityType = "high" | "low" | "middle";

export type AffairType = {
  _id: number;
  name: string;
  priority: AffairPriorityType;
};
export type FilterType = "all" | AffairPriorityType;

const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "JS", priority: "low" },
  { _id: 3, name: "C++", priority: "low" },
  { _id: 4, name: "PHP", priority: "high" },
  { _id: 5, name: "HTML & CSS", priority: "middle" },
];

export const filterAffairs = (
  affairs: Array<AffairType>,
  filter: FilterType
): Array<AffairType> => {
  if (filter === "all") return affairs;

  return affairs.filter((el: AffairType) => {
    return el.priority === filter;
  });
};

export const deleteAffair = (
  affairs: Array<AffairType>,
  _id: number
): Array<AffairType> => {
  return affairs.filter((el: AffairType) => {
    return el._id !== _id;
  });
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id));

  return (
    <div className={s.container}>
      homeworks 2{/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
   
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
   
    </div>
  );
}

export default HW2;
