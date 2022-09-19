import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SERVICE_KEY } from "../../../constant";

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
        response = await axios.get(
          `http://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${SERVICE_KEY}&numOfRows=1&pageNo=${randomNum}&MobileOS=WIN&MobileApp=01055234594&_type=json`
        );
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
          {/* <Img src={data[0].firstImageUrl} /> */}
          <RatioWrapper style={{ paddingTop }}>
            <img src={data[0].firstImageUrl} />
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
  /* height: 85%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const RatioWrapper = styled.div`
  width: 80%;
  /* padding: 1rem; */
  /* height: 100%; */
  position: relative;
  background-color: pink;

  img {
    position: absolute;
    top: 50%;

    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    /* height: 50%; */
    display: block;
    object-fit: cover;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 10px;
`;

const Title = styled.div`
  margin: 5px 0;
  font-size: 26px;
`;

const StartButton = styled.button`
  /* width: 50px;
  height: 20px; */
  background-color: purple;
  padding: 10px;
  cursor: pointer;
`;
