import React from "react";
import styled from "styled-components";
import { NavigateBox } from "../navigate/NavigateBox";
import { RouletteModule } from "./RouletteModule";

export const RouletteContainer = () => {
  return (
    <Container>
      <RouletteModule />
      <NavigateBox />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 70vh;
  background-color: orange;
`;
