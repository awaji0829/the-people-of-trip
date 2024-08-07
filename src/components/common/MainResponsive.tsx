import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/media";

export type MainResponsiveProps = {
  children: React.ReactNode;
};

export const MainResponsive = ({ children }: MainResponsiveProps) => {
  return <Block> {children}</Block>;
};

const Block = styled.div`
  /* background-color: pink; */
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1919)} {
    width: 1376px;
  }
  ${mediaQuery(1440)} {
    width: 1024px;
  }
  ${mediaQuery(1056)} {
    width: calc(100% - 2rem);
  }
`;

export default MainResponsive;
