import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Login = (props) => {
  const api_uri = 'http://localhost:5000/api';
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  useEffect(() => {
    console.log(`Login: credentials`, credentials);
  }, [credentials]);

  const handleChange = (e) => {
    console.log(`Login: handleChange: Target: Name: '${e.target.name}', Value: '${e.target.value}'`);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const login = (e) => {
    e.preventDefault();

    Axios
    .post(api_uri+'/login', credentials)

    .then(res => {
      console.log(`Login: login -> res`, res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/friends');
    })

    .catch(err => {
      console.log(`Login: login -> err`, err);
    });
  };

  return (
    <form onSubmit={login}>
      <h2>Login:</h2>
      <input
        type='text'
        name='username'
        placeholder='Username'
        onChange={handleChange}
        value={credentials.username}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={handleChange}
        value={credentials.password}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;