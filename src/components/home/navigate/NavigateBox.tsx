import React from "react";
import styled from "styled-components";

export const NavigateBox = () => {
  return (
    <Container>
      <Wrapper>
        <LinkIcon>
          <Icon>커뮤니티</Icon>
        </LinkIcon>
        <LinkIcon>
          {" "}
          <Icon>로그인</Icon>
        </LinkIcon>{" "}
      </Wrapper>
    </Container>
  );
};

const Container = styled.ul`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
  background-color: yellowgreen;
`;

const LinkIcon = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  min-width: 20rem;
  background-color: aqua;
`;

const Icon = styled.div`
  padding: 5px 3px;
  border-radius: 15px;
  background-color: bisque;
  color: black;
  text-align: center;
  cursor: pointer;
`;
