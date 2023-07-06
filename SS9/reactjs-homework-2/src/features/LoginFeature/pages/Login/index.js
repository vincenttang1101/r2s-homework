import React from 'react';
import LoginForm from '../../components/LoginForm';

LoginPage.propTypes = {};

// Page
function LoginPage(props) {
  const handleLoginFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      Login Page
      <LoginForm onSubmit={handleLoginFormSubmit} />
    </div>
  );
}

export default LoginPage;
