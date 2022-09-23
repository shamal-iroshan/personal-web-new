import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';
import { SECONDARY_WHITE } from '../../../utils/colors';

interface LinearProgressWithLabelProps {
  label: string;
  value: number;
}

const ProgressContainer = styled.div`
  margin: 30px 0;
`;

export default function LinearProgressWithLabel({
  label,
  value,
}: LinearProgressWithLabelProps) {
  return (
    <ProgressContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '5px',
        }}
      >
        <Typography color={SECONDARY_WHITE}>{label}</Typography>
        <Typography variant="body2" color={SECONDARY_WHITE}>
          {value} %
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={value} color="primary" />
    </ProgressContainer>
  );
}
