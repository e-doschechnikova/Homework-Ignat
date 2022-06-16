import React, { ChangeEvent, useState } from "react";
import Greeting from "./Greeting";

type GreetingContainerPropsType = {
  users: string;
  addUserCallback: (name: string) => void;
  count: number;
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
  count,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    if (e.currentTarget.value.trim() !== "") {
      setError("");
    } else {
      setError("empty value");
    }
  };

  const addUser = () => {
    if (name.trim() !== "") {
      alert(`Hello ${name}!`);
      addUserCallback(name);
      setName("");
      setError("");
    } else {
      setError("empty value");
    }
  };

  const totalUsers = count;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  );
};

export default GreetingContainer;
