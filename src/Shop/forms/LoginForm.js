import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { Container, Input, Form, Button, Message } from "semantic-ui-react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/auth";

const schema = yup.object().shape({
  email: yup.string().email('EMAIL FIELD'),
  password: yup.string().required()
});

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    dispatch(login(data)).then(result => {
      if (result.payload.success) {
        history.replace('/')
      } else {
        alert('Incorrect credentials! Please try again!')
      }
    })
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label htmlFor="">Email</label>
          <Controller
            name='email'
            control={control}
            as={Input}
            placeholder='test@gmail.com'
            defaultValue=''
          />
          {errors.email && <Message color='red'>{errors.email.message}</Message> }
        </Form.Field>
        <Form.Field>
          <label htmlFor="">Password</label>
          <Controller
            type='password'
            name='password'
            control={control}
            as={Input}
            placeholder='*****'
            defaultValue=''
          />
          {errors.firstName && <Message color='red'>{errors.firstName.message}</Message> }
        </Form.Field>
        <Button type="submit" primary>Sign In</Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
