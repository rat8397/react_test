import React from "react";
import styled from "styled-components";
import { compass_img, paperplane_img } from "../Image/svg";
import { MyLogo } from "../Image/MyLogo";
const Header = styled.header`
  width: 100%;
  max-width: 935px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20px 0px;
`;
//상위컴포넌트가 relative 하위컴포넌트는 position:absolute left right로 조정가능.
const Logo_Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  
`;
const Logo = styled.div`
  background-image: url(${(props) => props.logoUrl}) !important;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-size: cover;
`; //background-size : cover => 채우는거 인듯.
const SiteName = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme.headerColor};
  font-weight: 600;
  margin:10px 20px;
`;

export default ({ siteName }) => {
  return (
    <Header>
      <Logo_Wrapper>
        <Logo logoUrl={MyLogo} />
      </Logo_Wrapper>
      <SiteName>{siteName}</SiteName>
      <Logo_Wrapper>
        <Logo logoUrl={MyLogo} />
      </Logo_Wrapper>
    </Header>
  );
};
