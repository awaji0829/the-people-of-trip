import React from "react";
import styled from "styled-components";
import MainResponsive from "../../common/MainResponsive";
import { NavigateBox } from "../navigate/NavigateBox";
import { RouletteModule } from "./RouletteModule";

export const RouletteContainer = () => {
  return (
    <Container>
      <NavigateBox />
      <RouletteModule />{" "}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  /* width: 100vw; */
  height: 50vh;
  /* background-color: orange; */
`;
