import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,

  type: PropTypes.string,
};

// Form Field
function InputField(props) {
  const { form, name, label, type } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => <TextField label={label} type={type} {...field} />}
    ></Controller>
  );
}

export default InputField;
