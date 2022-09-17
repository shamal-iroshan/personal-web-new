import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONTACT } from '../../../common/routes';

const TEXTS = ['Designer', 'Developer', 'Freelancer'];

const ContentContainer = styled.div`
  position: fixed;
  max-width: 900px;
  top: 100px;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TransitionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
const StaticText = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: #a2a2a2;
`;
const StyledButton = styled.button`
  text-transform: capitalize;
  color: #fff;
  display: inline-block;
  background-color: #4169e1;
  padding: 15px 40px;
  text-align: center;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
`;

function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => i + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <ContentContainer>
      <TitleText>
        Shamal <span>Iroshan</span>
      </TitleText>
      <TransitionContainer>
        <StaticText>Creative&nbsp;</StaticText>
        <TextTransition
          springConfig={presets.wobbly}
          style={{ color: '#fff', fontSize: '25px' }}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </TransitionContainer>
      <StyledButton
        type="button"
        onClick={() => navigate(ROUTE_CONTACT, { replace: false })}
      >
        get in touch
      </StyledButton>
    </ContentContainer>
  );
}

export default Home;
