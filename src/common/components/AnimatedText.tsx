import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import styled from 'styled-components';
import { Theme } from '@mui/material';
import { GRAY, SECONDARY_WHITE } from '../../utils/colors';

interface AnimatedTextProps {
  texts?: string[];
  textSize?: number;
  smallTextSize?: number;
}
interface TextProps {
  textSize: number;
  smallTextSize: number;
}

const TransitionContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StaticText = styled.span<TextProps>`
  font-size: ${(props) => props.textSize}px;
  font-weight: 700;
  color: ${GRAY};
  @media all and (max-width: 600px) {
    font-size: ${(props) => props.smallTextSize}px;
  }
`;

const TEXTS = ['Designer', 'Developer', 'Freelancer'];

export default function AnimatedText({
  texts = TEXTS,
  textSize = 25,
  smallTextSize = 18,
}: AnimatedTextProps) {
  const [index, setIndex] = useState(0);
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => i + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TransitionContainer>
      <StaticText textSize={textSize} smallTextSize={smallTextSize}>
        Creative&nbsp;
      </StaticText>
      <TextTransition
        springConfig={presets.wobbly}
        style={{
          color: SECONDARY_WHITE,
          fontSize: isSmallScreen ? smallTextSize : textSize,
        }}
      >
        {texts[index % texts.length]}
      </TextTransition>
    </TransitionContainer>
  );
}
