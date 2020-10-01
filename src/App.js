import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { CreateUser} from "./Components/CreateUser";
import { FatText } from "./Components/FatText";
import Header from "./Components/Header";
import InputSample from "./Components/Input";
import { testChildren } from "./Components/testChildren";
import { UserList } from "./Components/UserList";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

const Button = styled.button`
  display: block;
  width: 100%;
`;
const ButtonSet = styled.div`
  width: 500px;
  display: block;
`;
function App() {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount((prev) => prev + 1); //인자가 오면 인자는 이전값이 오도록 정의한것임.
    //setCount(callback){callback(count)}이렇게 정의되어있는것임.
    //setCount((prev)=>prev+1) ==> prev == count가 되는것이다.
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Header siteName={"JSR."} />

          <Wrapper>
            <FatText size={"24px"}>이것은 useState를 위함.</FatText>
            <h1>{count}</h1>
            <ButtonSet>
              <Button onClick={plusCount}>+</Button>
              <Button onClick={minusCount}>-</Button>
            </ButtonSet>
            <InputSample />
            <CreateUser />
          </Wrapper>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;






// 13장=> 중요한거 많이배움 hook은 일단 최상위이면서, 함수형 컴포넌트 안에서만 사용해주어야함.
//     => 함수형 컴포넌트는 최상위 하나만 내보낼수있음 => 두개를 내보내고싶으면 <> </>로 해주어야함
//     => useRef로 선언된 변수는 렌더링을 다시해도 값이 변하지않음 => 인덱스를 가리키게 하거나 id값을 줄때 활용하면됨
//     => 배열이나 객체가 useState된 경우 setInput({...input,[속성]:새로운값})으로 최신화 setInput([...input,newInput])