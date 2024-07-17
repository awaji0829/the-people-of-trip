import React from "react";
import styled from "styled-components";

export type ListLayoutProps = {
  main: React.ReactNode;
};

export const ListLayout = ({ children }: any) => {
  return (
    <Block>
      <ContentBox>{children}</ContentBox>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
`;

const ContentBox = styled.div`
  flex: 1;
`;
