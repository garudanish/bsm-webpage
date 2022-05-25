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
          서있는 사람들은 각각 다른 그룹에 있던 사람들이 뜻을 모아 2020년 만든
          성남 FC 서포터즈 소모임입니다. 우리는
          <br />
          <br />
          우리는 우리의 이름처럼, 성남 FC를 위해 90분간 서서 응원하며 그들과
          함께 합니다. 가입 문의는 인스타그램 @BSM.SEONGNAM 에 DM을 보내주시면
          답변드리겠습니다.
          <br />
          <br />
          우리는 BSM, 서있는 사람들, 庶傞, 브슴, VIRI STANTES, 서사 등 어떤
          이름으로 불려도 괜찮은 서포터 소모임입니다. 성남을 위해 우리 함께
          서있는 사람들이 되길 바랍니다. 우리의 열정은 쉼이 없습니다.
          <br />
          <br />
          TOM HAS OVER 14 YEARS EXPERIENCE WORKING IN-HOUSE AND AT AGENCIES BOTH
          LARGE AND SMALL IN LONDON, SAN FRANCISCO AND NEW YORK. HE IS CURRENTLY
          WORKING AS A DESIGN DIRECTOR AT SQUARESPACE WHERE HE LEADS THE WEB
          DESIGN TEAM IN DEFINING AND ENABLING BEST IN CLASS DESIGN AND
          DEMOCRATIZING IT FOR OUR CUSTOMERS ACROSS ALL TOUCH POINTS WITHIN THE
          COMPANY. HE IS ALWAYS AVAILABLE TO TALK ABOUT PROJECTS AND
          OPPORTUNITIES. FEEL FREE TO GET IN TOUCH AT IAM@TOMSEARS.ME
        </IntroParagraph>
      </IntroSection>
    </StyledLanding>
  );
};

export default Landing;

const StyledLanding = styled.main``;

const LyricsSection = styled.section`
  padding: 0 40px;
  margin-bottom: 20px;
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
  font-weight: 300;
  font-size: 24px;
`;
