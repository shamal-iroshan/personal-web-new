import React from 'react';
import styled from 'styled-components';
import AnimatedText from '../../../common/components/AnimatedText';
import CustomButton from '../../../common/components/CustomButton';

const ContentContainer = styled.div`
  position: fixed;
  max-width: 900px;
  top: 100px;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileImage = styled.img`
  width: 360px;
  height: 360px;
  object-fit: cover;
  border-radius: 16px;
`;
const RightContainer = styled.div`
  margin-left: 100px;
`;
const NameText = styled.h2`
  text-transform: uppercase;
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  span {
    color: #4169e1;
  }
`;
const DescriptionText = styled.p`
  margin: 30px 0;
  font-size: 16px;
  word-wrap: break-word;
  font-weight: 400;
  color: #a2a2a2;
  span {
    color: #ffffff;
    font-weight: 700;
  }
`;

function About() {
  return (
    <ContentContainer>
      <ProfileImage
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="profile"
      />
      <RightContainer>
        <NameText>
          shamal <span>iroshan</span>
        </NameText>
        <AnimatedText textSize={20} />
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
            // eslint-disable-next-line no-console
            console.log('test');
          }}
        />
      </RightContainer>
    </ContentContainer>
  );
}

export default About;
