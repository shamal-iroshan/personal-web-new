import Grid from '@mui/material/Grid';
import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../../common/components/CustomButton';
import errorToast from '../../about/components/toast/errorToast';

const StyledForm = styled.form`
  width: 100%;
  align-self: center;
`;
const CustomTextBox = styled.input`
  width: 100%;
  height: 45px;
  background-color: #222;
  border: none;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
`;
const CustomTextArea = styled.textarea`
  width: 100%;
  background-color: #222;
  border: none;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  min-height: 150px;
  max-width: 100%;
  min-width: 100%;
`;

export default function ContactForm() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    errorToast('Oops!', 'This function is comming soon.');
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Grid container columnSpacing={4} rowSpacing={3}>
        <Grid item xs={12} md={6}>
          <CustomTextBox type="text" placeholder="Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextBox type="email" placeholder="Email" />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomTextArea cols={30} rows={4} />
        </Grid>
        <Grid item>
          <CustomButton text="Submit message" />
        </Grid>
      </Grid>
    </StyledForm>
  );
}
