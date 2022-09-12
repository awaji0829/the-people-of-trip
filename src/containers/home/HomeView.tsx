import React from "react";
import styled from "styled-components";
import { ContentGrid } from "../../components/home/content/ContentGrid";
import { RouletteContainer } from "../../components/home/roulette/RouletteContainer";

export const HomeView = () => {
  return (
    <Container>
      <RouletteContainer />
      <ContentGrid />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
