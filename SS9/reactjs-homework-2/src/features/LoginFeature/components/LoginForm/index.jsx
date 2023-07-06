import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/InputField';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

// Form Component
function LoginForm(props) {
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField form={form} name="username" label="Username" />
      <InputField form={form} name="password" label="Password" type="password" />
      <Button type="submit" color="primary" size="large" variant="contained">
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
