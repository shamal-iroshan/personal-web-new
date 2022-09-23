import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedText from '../../../common/components/AnimatedText';
import CustomButton from '../../../common/components/CustomButton';
import LearnMoreDialog from '../components/LearnMoreDialog';
import { GRAY, PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';

const ContentContainer = styled.div`
  position: absolute;
  max-width: 900px;
  width: 900px;
  top: 100px;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    top: 200px;
  }
`;
const ProfileImage = styled.img`
  width: 360px;
  height: 360px;
  object-fit: cover;
  border-radius: 16px;
  @media all and (max-width: 1400px) {
    width: 320px;
    height: 320px;
  }
  @media all and (max-width: 900px) {
    width: 300px;
    height: 300px;
    padding: 20px;
  }
  @media all and (max-height: 600px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  margin-left: 100px;
  @media all and (max-width: 900px) {
    margin-left: 20px;
    margin-bottom: 40px;
  }
`;
const NameText = styled.h2`
  text-transform: uppercase;
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 800;
  color: ${SECONDARY_WHITE};
  span {
    color: ${PRIMARY_BLUE};
  }
  @media all and (max-width: 1400px) {
    font-size: 32px;
  }
`;
const DescriptionText = styled.p`
  margin: 30px 0;
  font-size: 16px;
  word-wrap: break-word;
  font-weight: 400;
  color: ${GRAY};
  span {
    color: ${SECONDARY_WHITE};
    font-weight: 700;
  }
  @media all and (max-width: 900px) {
    padding-right: 10px;
  }
`;

function About() {
  const [openLearnMore, setOpenLearnMore] = useState(false);

  return (
    <>
      <ContentContainer>
        <ProfileImage
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="profile"
        />
        <RightContainer>
          <NameText>
            shamal <span>iroshan</span>
          </NameText>
          <AnimatedText textSize={20} smallTextSize={16} />
          <div />
          <DescriptionText>
            My name is <span>David Parker</span>. I am a graphic designer, and
            I&apos;m very passionate and dedicated to my work. With 20 years
            experience as a professional a graphic designer, I have acquired the
            skills and knowledge.
          </DescriptionText>
          <CustomButton
            text="learn more"
            action={() => {
              setOpenLearnMore(true);
            }}
          />
        </RightContainer>
      </ContentContainer>
      <LearnMoreDialog
        open={openLearnMore}
        handleClose={() => setOpenLearnMore(false)}
      />
    </>
  );
}

export default About;
