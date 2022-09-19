import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../styles/media";

export const ContentCard = ({ content }: { content: any }) => {
  //   console.log(content);

  const getTags = (tags: string) => {
    if (!tags) return null;
    return tags.split(",");
  };
  const Tags = getTags(content.posblFcltyCl);

  const paddingTop = "52%";
  return (
    <Block>
      <RatioWrapper style={{ paddingTop }}>
        <img src={content.firstImageUrl} />
      </RatioWrapper>
      <DescBox>{content.facltNm}</DescBox>
      <TagBox>
        {Tags?.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}{" "}
      </TagBox>
    </Block>
  );
};

const Block = styled.div`
  /* width: calc(1376px / 4 - 2rem); */

  width: 20rem;
  /* border-radius: 4px; */
  margin: 1rem;

  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
    ${mediaQuery(1024)} {
      transform: none;
    }
  }
  ${mediaQuery(1056)} {
    width: calc(50% - 2rem);
  }
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 1rem;
    }
  }
`;

const RatioWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const DescBox = styled.div`
  padding: 1rem;
  padding-left: 0;

  font-size: 2rem;
  /* text-align: center; */
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  span {
    font-size: 13px;
    padding: 5px;
    /* margin-right: 5px; */
    border-radius: 10px;
    background-color: green;
  }
`;
