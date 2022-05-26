import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <StyledLanding>
      <LyricsSection>
        <Lyrics>눈이 오고</Lyrics>
        <Lyrics>비가 내려도</Lyrics>
        <Lyrics>우리의 함성을</Lyrics>
        <Lyrics>누가 막을쏘냐</Lyrics>
        <Lyrics>번개가 치고</Lyrics>
        <Lyrics>땅이 울려도</Lyrics>
        <Lyrics>우리의 열정엔</Lyrics>
        <Lyrics>쉼이 없단다</Lyrics>
      </LyricsSection>
      <IntroSection>
        <h2 className="visually-hidden">소개</h2>
        <IntroParagraph>
          서있는 사람들은 각각 다른 그룹에 있던 사람들이 뜻을 모아 2020년에 만든
          성남 FC 서포터즈 소모임입니다. 우리는 '우리의 열정엔 쉼이 없단다'라는
          가사처럼, 성남 FC를 위해 90분간 서서 응원하며 그들과 함께 합니다.
          2020년 성남 블랙과 함께 다큐멘터리{" "}
          <IntroLink
            href="https://www.youtube.com/watch?v=CtdERhcCFso"
            target="_blank"
            rel="noopenner noreferrer"
          >
            '우리 동네 축구팀'
          </IntroLink>
          을 만들었으며, 2021년 요코하마 축구 영화제에서 '베스트 서포터 상'을
          수상했습니다. 또한 2020년부터 팟캐스트 '브슴팟'을 만들어오는 등 성남
          FC를 응원하는 사람들과 소통하고자 합니다. 우리와 함께 하고자 하신다면,
          인스타그램{" "}
          <IntroLink
            href="https://www.instagram.com/bsm.seongnam/"
            target="_blank"
            rel="noopenner noreferrer"
          >
            @BSM.SEONGNAM
          </IntroLink>
          에 DM을 보내주시면 답변드리겠습니다.
        </IntroParagraph>
      </IntroSection>
    </StyledLanding>
  );
};

export default Landing;

const StyledLanding = styled.main``;

const LyricsSection = styled.section`
  padding: 0 40px;
  margin-bottom: 40px;
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

const IntroSection = styled(LyricsSection)``;

const IntroParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  text-indent: 2em;
`;

const IntroLink = styled.a`
  display: inline-block;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  font-weight: 400;
  text-indent: 0;
`;
