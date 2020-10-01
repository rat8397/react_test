import React from "react";
import styled from "styled-components";
const Users = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const Wrapper = styled.div`
    margin-right:20px;
    border:1px solid red;
`;
const User = ({ user, onRemove ,onToggle}) => {
  return (
    <Wrapper>
      <b onClick={()=>onToggle(user.id)} style={{cursor:"pointer",color:user.active ? 'green' :'black'}}>{user.name}</b>
      <b>{user.id}</b>
      <button onClick={()=>onRemove(user.id)}>삭제</button>
    </Wrapper>
  );
};
///onRemove(id) 처럼 인자를 넣어서 사용하는 경우 onClick={onRemove(id)} => 틀림. onClick={()=>onRemove(id)} 가능
export const UserList = ({ user, onRemove ,onToggle}) => {
  return (
    <Users>
      {user.map((userT) => (
        <User user={userT} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </Users>
  );
};

///tag에 스타일 적용법 style ={{할거하면댐}}