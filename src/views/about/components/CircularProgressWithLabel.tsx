import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import { SECONDARY_WHITE } from '../../../utils/colors';

interface CircularProgressWithLabelProps {
  label: string;
  value: number;
}

const ProgressContainer = styled.div`
  margin: 30px 0;
`;

export default function CircularProgressWithLabel({
  label,
  value,
}: CircularProgressWithLabelProps) {
  return (
    <ProgressContainer>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          size={150}
          variant="determinate"
          value={value}
          color="primary"
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            color={SECONDARY_WHITE}
            variant="caption"
            component="div"
            sx={{ fontSize: '20px' }}
          >
            {value} %
          </Typography>
        </Box>
      </Box>
      <Typography color={SECONDARY_WHITE} sx={{ textAlign: 'center' }}>
        {label}
      </Typography>
    </ProgressContainer>
  );
}
