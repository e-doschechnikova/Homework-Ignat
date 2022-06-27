import React, { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import s from "./Greeting.module.css";

// types
export type UserType = {
  _id: string;
  name: string;
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<any>([]); // need to fix any
  const [count, setCount] = useState<number>(0);

  const addUserCallback = (name: string) => {
    setCount(count + 1);
    setUsers([...users, name]);
  };

  return (
    <div className={s.container}>
      <hr />
      homeworks 3{/*should work (должно работать)*/}
      <GreetingContainer
        users={users}
        addUserCallback={addUserCallback}
        count={count}
      />
      <div className={s.users}>
        {users.map((el: string, _id: string) => {
          return <div key={_id}>{el}</div>;
        })}
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr />
    </div>
  );
}

export default HW3;
