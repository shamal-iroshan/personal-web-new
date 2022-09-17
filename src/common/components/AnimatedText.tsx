import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import styled from 'styled-components';

interface AnimatedTextProps {
  texts?: string[];
  textSize?: number;
}
interface TextProps {
  textSize: number;
}

const TransitionContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StaticText = styled.span<TextProps>`
  font-size: ${(props) => props.textSize}px;
  font-weight: 700;
  color: #a2a2a2;
`;

const TEXTS = ['Designer', 'Developer', 'Freelancer'];

export default function AnimatedText({
  texts = TEXTS,
  textSize = 25,
}: AnimatedTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => i + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TransitionContainer>
      <StaticText textSize={textSize}>Creative&nbsp;</StaticText>
      <TextTransition
        springConfig={presets.wobbly}
        style={{ color: '#fff', fontSize: textSize }}
      >
        {texts[index % texts.length]}
      </TextTransition>
    </TransitionContainer>
  );
}
