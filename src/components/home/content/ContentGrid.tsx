import React, { useState } from "react";
import styled from "styled-components";

import { ContentCard } from "../../common/ContentCard";
import { mediaQuery } from "../../../styles/media";
import { useQuery } from "@tanstack/react-query";
import { getCampList } from "../../../hooks/camp";

export const ContentGrid = () => {
  const [contents, setContents] = useState<any>();
  const { data } = useQuery({
    queryKey: ["camp-list"],
    queryFn: () => getCampList({ randomNum: 2 }),
  });

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
