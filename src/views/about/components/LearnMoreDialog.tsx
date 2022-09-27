import React from 'react';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import AnimatedText from '../../../common/components/AnimatedText';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';
import Summary from './Summary';
import AboutDetails from './AboutDetails';
import SkillDetails from './SkillDetails';

interface LearnMoreDialogProps {
  open: boolean;
  handleClose: () => void;
}

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  object-fit: cover;
`;
const ModalTitle = styled.h3`
  font-size: 30px;
  margin: 10px 0;
  color: ${SECONDARY_WHITE};
  span {
    color: ${PRIMARY_BLUE};
  }
`;

export default function LearnMoreDialog({
  open,
  handleClose,
}: LearnMoreDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Grid
        sx={(theme) => ({
          width: '800px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '30px',
          [theme.breakpoints.down('md')]: {
            width: '100%',
          },
        })}
      >
        <ProfileImage
          src="https://document.shamaliroshan.com/my-image.jpg"
          alt="profile"
        />
        <ModalTitle>
          shamal <span>iroshan</span>
        </ModalTitle>
        <AnimatedText textSize={20} smallTextSize={15} />

        <Summary />

        <AboutDetails />

        <SkillDetails />
      </Grid>
    </Dialog>
  );
}
