import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

//api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?serviceKey=%2Fx4nRuZVHKnIJM7AKGOeF8tdvDAqs6yZ6cSnl6FP4WI%2B52BVts%2BgW2OHoYXAZnyhW1giKWZUM4DXyZScB2SU4Q%3D%3D&pageNo=1&numOfRows=10&MobileOS=ETC&MobileApp=AppTest
export const ContentGrid = () => {
  const SERVICE_KEY =
    "%2Fx4nRuZVHKnIJM7AKGOeF8tdvDAqs6yZ6cSnl6FP4WI%2B52BVts%2BgW2OHoYXAZnyhW1giKWZUM4DXyZScB2SU4Q%3D%3D";
  const getPhoto = async () => {
    const picture = await axios.get(
      `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?serviceKey=${SERVICE_KEY}`
    );

    console.log("결과", picture);
    //msyu1207.tistory.com/entry/React로-영화-정보를-검색해보자-두번째-네이버-API-사용-CORS-설정-하기#toc-📢네이버 검색 API를 이용하여 영화 정보 가져오기 [로띠 로그:티스토리]
  };

  useEffect(() => {
    getPhoto();

    // console.log(picture);
  }, []);

  return <Contaienr>ContentGrid</Contaienr>;
};

const Contaienr = styled.div``;
