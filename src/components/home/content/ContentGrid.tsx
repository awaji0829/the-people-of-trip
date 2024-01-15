import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import { SERVICE_KEY } from "../../../constant";
import { ContentCard } from "../../common/ContentCard";
import { mediaQuery } from "../../../styles/media";

export const ContentGrid = () => {
  const [contents, setContents] = useState<any>();
  const getPhoto = async () => {
    const picture = await axios.get(
      `http://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${process.env.SERVICE_KEY}&numOfRows=16&MobileOS=WIN&MobileApp=01055234594&_type=json`
    );
    console.log("picture", picture.data.response.body.items.item);
    setContents(picture.data.response.body.items.item);
  };

  useEffect(() => {
    getPhoto();

    // console.log(picture);
  }, []);
  if (contents) {
    return (
      <Block>
        {contents.map((content: any) => (
          <ContentCard key={content.contentId} content={content} />
        ))}
      </Block>
    );
  } else {
    return <div>로딩중</div>;
  }
};

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;

  /* gap: 8px; */
  ${mediaQuery(767)} {
    margin: 0;
  }
`;
