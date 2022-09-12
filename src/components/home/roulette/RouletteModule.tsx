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
  const getList = () => {
    console.log("실행");
    setTimeout(async () => {
      setLoading(true);
      const randomNum = getRandomArbitrary(1, 1000);
      let response = null;
      try {
        response = await axios.get(
          `http://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${SERVICE_KEY}&numOfRows=1&pageNo=${randomNum}&MobileOS=WIN&MobileApp=01055234594&_type=json`
        );
        if (response.status === 200) {
          console.log("왁!", response.data.response.body.items.item);
          setData(response.data.response.body.items.item);
          // return response;
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }, 300);
  };

  // useEffect(() => {
  //   getList();
  // }, []);

  // return data?.map((camp: any, inx: number) => (
  //   <Container key={inx}>
  //     {loading! ? <Img src={camp.firstImageUrl} /> : <div>불러오는중,,,</div>}
  //     <StartButton onClick={() => getList()}>나의 캠핑지를 골라줘</StartButton>
  //   </Container>
  // ));

  return (
    <Container>
      {data[0] !== undefined && loading! ? (
        <Img src={data[0].firstImageUrl} />
      ) : (
        // <div>불러오는중,,,</div>
        <div>불러오는중,,,</div>
      )}
      <StartButton onClick={() => getList()}>나의 캠핑지를 골라줘</StartButton>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 500px;
  height: 300px;
`;

const StartButton = styled.button`
  width: 50px;
  height: 20px;
  background-color: purple;
`;
