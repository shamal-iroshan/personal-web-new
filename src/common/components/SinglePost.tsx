import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SECONDARY_WHITE } from '../../utils/colors';

interface SinglePostProps {
  image: string;
  text?: string;
}

const scale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;
const visible = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  &:hover {
    cursor: pointer;
    animation: ${scale} 0.5s forwards;
  }
`;
const DetailContainer = styled.div`
  width: 250px;
  height: 250px;
  opacity: 0;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  padding: 20px;
  color: ${SECONDARY_WHITE};
  background-color: #282c34bb;
  &:hover {
    animation: ${visible} 0.2s forwards;
  }
`;

export default function SinglePost({ image, text }: SinglePostProps) {
  return (
    <ImageContainer>
      <DetailContainer>
        <p>{text}</p>
      </DetailContainer>
      <Image src={image} alt="portfolio" />
    </ImageContainer>
  );
}
