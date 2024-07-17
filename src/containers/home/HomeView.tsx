import React from "react";
import styled from "styled-components";
import MainResponsive from "../../components/common/MainResponsive";
import { ContentGrid } from "../../components/home/content/ContentGrid";
import { RouletteContainer } from "../../components/home/roulette/RouletteContainer";
import { ListLayout } from "../../components/home/content/ListLayout";

export const HomeView = () => {
  return (
    <Container>
      <MainResponsive>
        <RouletteContainer />
        <ListLayout>
          <ContentGrid />
        </ListLayout>
      </MainResponsive>
    </Container>
  );
};

const Container = styled.div`
  /* width: 100vw;
  height: 100vh; */
`;
