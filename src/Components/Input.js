import React, { useRef, useState } from "react";

const InputSample = () => {
  // text=>{id,password}
  const [text, setText] = useState({
    id: "",
    password: "",
  });
  const idInput = useRef()
  const { id, password } = text;
  const onReset = () => {
    console.log(idInput)
    setText({
      id: "",
      password: "",
    });
    idInput.current.focus();//focus가 잡히게 해준다.
  };
  const onChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target; //name,value를 추출
    setText({
      ...text,
      [name]: value
    }); //setState => {기존객체,키값}
    
  };

  return (
    <div>
      <input
        onChange={onChange}
        name={"id"}
        placeholder={"아이디"}
        value={id}
        ref={idInput}
      />
      <input
        onChange={onChange}
        name={"password"}
        placeholder={"비밀번호"}
        value={password}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {id} ({password})
      </div>
    </div>
  );
};
export default InputSample;
