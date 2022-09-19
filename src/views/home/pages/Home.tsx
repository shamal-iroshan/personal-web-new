import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONTACT } from '../../../common/routes';
import AnimatedText from '../../../common/components/AnimatedText';
import CustomButton from '../../../common/components/CustomButton';

const ContentContainer = styled.div`
  position: absolute;
  max-width: 900px;
  top: 100px;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 1300px) {
    text-align: center;
  }
`;
const AnimatedTextContainer = styled.div`
  margin-bottom: 40px;
`;
const TitleText = styled.h1`
  color: #fff;
  font-size: 72px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 20px;
  span {
    color: #4169e1;
  }
  @media all and (max-width: 600px) {
    font-size: 40px;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <ContentContainer>
      <TitleText>
        Shamal <span>Iroshan</span>
      </TitleText>
      <AnimatedTextContainer>
        <AnimatedText />
      </AnimatedTextContainer>
      <CustomButton
        text="get in touch"
        action={() => navigate(ROUTE_CONTACT, { replace: false })}
      />
    </ContentContainer>
  );
}

export default Home;
