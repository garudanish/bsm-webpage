import React from "react";
import styled from "styled-components";
import LyricsSection from "./LyricsSection/LyricsSection";

const Landing = () => {
  return (
    <StyledLanding>
      <LyricsSection />
      <IntroSection>
        <SectionTitle>
          <h2>소개</h2>
        </SectionTitle>
        <SectionParagraph>
          <p>
            서있는 사람들은 각각 다른 그룹에 있던 사람들이 뜻을 모아 2020년에
            만든 성남 FC 서포터즈 소모임입니다. 우리는 '우리의 열정엔 쉼이
            없단다'라는 가사처럼, 성남 FC를 위해 90분간 서서 응원하며 그들과
            함께 합니다. 2020년 성남 블랙과 함께 다큐멘터리{" "}
            <IntroLink
              href="https://www.youtube.com/watch?v=CtdERhcCFso"
              target="_blank"
              rel="noopenner noreferrer"
            >
              '우리 동네 축구팀'
            </IntroLink>
            을 만들었으며, 2021년 요코하마 축구 영화제에서 '베스트 서포터 상'을
            수상했습니다. 또한 2020년부터 팟캐스트 '브슴팟'을 만들어오는 등 성남
            FC를 응원하는 사람들과 소통하고자 합니다. 우리와 함께 하고자
            하신다면, 인스타그램{" "}
            <IntroLink
              href="https://www.instagram.com/bsm.seongnam/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              @BSM.SEONGNAM
            </IntroLink>
            에 DM을 보내주시면 답변드리겠습니다.
          </p>
        </SectionParagraph>
      </IntroSection>
    </StyledLanding>
  );
};

export default Landing;

const StyledLanding = styled.main``;

const IntroSection = styled.section`
  display: flex;
  max-width: 1080px;
  padding: 0 40px;
  margin: 0 auto 40px;
`;

const SectionTitle = styled.div`
  width: 20%;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
`;

const SectionParagraph = styled(SectionTitle)`
  width: 80%;
  text-indent: 2em;
`;

const IntroLink = styled.a`
  display: inline-block;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-weight: 400;
  text-indent: 0;
`;
