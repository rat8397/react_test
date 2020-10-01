import React, { useRef } from "react";
import { useState } from "react";
import users from "../DB/User";
import { UserList } from "./UserList";

export const CreateUser = () => {
  const [inputs, setInputs] = useState({
    name: "",
    id: "",
  });
  const [user, setUser] = useState(users);
  const nextUserNumber = useRef(4);
  const onCreate = () => {
    const userTmp = {
      key: nextUserNumber.current,
      name: inputs.name,
      id: inputs.id,
    };
    setUser([...user, userTmp]);
    setInputs({ name: "", id: "" });
    nextUserNumber.current += 1;
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onRemove = (id) => {
    setUser(user.filter((user) => user.id !== id));
  };
  const onToggle=(id)=>{
      setUser(user.map(user=>user.id===id ? {...user,active:!user.active}:user))
  }//active 속성값을 반대로 => id가 일치하면 일치하지않으면 객체 그대로.
  return (
    <>
      <div>
        <input
          name="name"
          placeholder={"이름"}
          onChange={onChange}
          value={inputs.name}
        />
        <input
          name="id"
          placeholder={"아이디"}
          onChange={onChange}
          value={inputs.id}
        />
        <button onClick={onCreate}>등록</button>
      </div>
      <UserList user={user} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
};
///filter => users.filter(user => user.id === id) => 일치하는 것만 남김.
