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
          <Icon>로그인</Icon>
        </LinkIcon>
      </Wrapper>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 15%;
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
  min-width: 30rem;
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
