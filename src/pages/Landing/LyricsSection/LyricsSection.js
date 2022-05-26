import React from "react";
import styled from "styled-components";

const LyricsSection = () => {
  return (
    <StyledLyricsSection>
      <Lyrics>눈이 오고</Lyrics>
      <Lyrics>비가 내려도</Lyrics>
      <Lyrics>우리의 함성을</Lyrics>
      <Lyrics>누가 막을쏘냐</Lyrics>
      <Lyrics>번개가 치고</Lyrics>
      <Lyrics>땅이 울려도</Lyrics>
      <Lyrics>우리의 열정엔</Lyrics>
      <Lyrics>쉼이 없단다</Lyrics>
    </StyledLyricsSection>
  );
};

export default LyricsSection;

const StyledLyricsSection = styled.section`
  padding: 0 40px;
  margin-bottom: 120px;
`;

const Lyrics = styled.span`
  font-family: "국립박물관문화재단클래식B";
  display: block;
  font-size: 8vw;
  margin-bottom: 16px;

  &:nth-child(even) {
    text-align: right;
  }
`;
