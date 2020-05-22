import React, { useState } from "react";
import { axiosWithAuth } from '../utilities/axiosWithAuth';


const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password:''
  })

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubble-page');
    })
    .catch(err => {
      console.log('error', err);
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        name='username'
        value={credentials.username}
        onChange={handleChange} />
        <input
        type='password'
        name='password'
        value={credentials.password}
        onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
