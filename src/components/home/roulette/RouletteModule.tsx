import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const getRandomArbitrary = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const RouletteModule = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const paddingTop = "32%";
  const getList = () => {
    // console.log("실행");
    setTimeout(async () => {
      // setLoading(true);
      const randomNum = getRandomArbitrary(1, 1000);
      let response = null;
      try {
        response = await axios.get(`http://apis.data.go.kr`);
        if (response.status === 200) {
          setData(response.data.response.body.items.item);
          // return response;
        }
      } catch (error) {
        console.error(error);
      }

      // setLoading(false);
    }, 300);
  };

  return (
    <Container>
      {data[0] !== undefined ? (
        <>
          <RatioWrapper style={{ paddingTop }}>
            <img
              src={data[0].firstImageUrl}
              alt="random-image"
              // layout="fill"
            />
          </RatioWrapper>
          <Title>
            {data[0].facltNm} ({data[0].doNm})
          </Title>
        </>
      ) : (
        <div>불러오는중,,,</div>
      )}
      <StartButton onClick={() => getList()}>나의 캠핑지를 골라줘</StartButton>{" "}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const RatioWrapper = styled.div`
  width: 80%;

  position: relative;

  img {
    position: absolute;
    top: 50%;

    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    /* height: 50%; */
    display: block;
    object-fit: cover;
    border-radius: 16px;
  }
`;

const Title = styled.div`
  margin: 5px 0;
  font-size: 26px;
`;

const StartButton = styled.button`
  background-color: purple;
  padding: 10px;
  cursor: pointer;
`;
