import Grid from '@mui/material/Grid';
import React from 'react';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import CustomButton from '../../../common/components/CustomButton';
import { useAppDispatch, useAppSelector } from '../../../store/types';
import {
  contactActions,
  selectCreateMessageIsLoading,
} from '../slice/contactSlice';

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
  const dispatch = useAppDispatch();
  const sendMessageIsLoading = useAppSelector(selectCreateMessageIsLoading);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-ignore
    const name = event.target.elements.name.value;
    // @ts-ignore
    const email = event.target.elements.email.value;
    // @ts-ignore
    const message = event.target.elements.message.value;

    dispatch(
      contactActions.createMessage({
        name,
        email,
        message,
        date: new Date().toISOString(),
      }),
    );

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    event.target.elements.name.value = '';
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    event.target.elements.email.value = '';
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    event.target.elements.message.value = '';
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Grid container columnSpacing={4} rowSpacing={3}>
        <Grid item xs={12} md={6}>
          <CustomTextBox required type="text" placeholder="Name" name="name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextBox
            required
            type="email"
            placeholder="Email"
            name="email"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomTextArea required cols={30} rows={4} name="message" />
        </Grid>
        <Grid item display="flex" alignItems="center">
          <CustomButton text="Submit message" disable={sendMessageIsLoading} />
          {sendMessageIsLoading && (
            <BeatLoader
              color="#718096"
              margin={2}
              size={12}
              style={{ marginLeft: 30 }}
            />
          )}
        </Grid>
      </Grid>
    </StyledForm>
  );
}
