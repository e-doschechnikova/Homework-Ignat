import React, { ChangeEvent } from "react";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string | null;
  totalUsers: number;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : s.notError; // need to fix with (?:)

  return (
    <div className={s.container}>
      <SuperInputText
        value={name}
        onChange={setNameCallback}
        error={error}
        onEnter={addUser}
      ></SuperInputText>

      <SuperButton onClick={addUser}>add</SuperButton>
      <span className={s.usersGreeting}>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
