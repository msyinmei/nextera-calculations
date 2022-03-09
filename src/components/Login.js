import React, { useState } from "react";
import styled from '@emotion/styled';
import Dashboard from '../components/Dashboard.js';

const LoginForm = styled.form({
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'space-around',
  flexDirection: 'column',
  backgroundColor: '#DCDCDC',
  margin: '20px',
  padding: '20px',
  borderRadius: '4px',
});

const InputContainer = styled.label({
  display: 'flex',
  alignContent: 'space around',
  alignSelf: 'center',
  margin: '5px 10px',
  padding: '5px 10px',
  borderRadius: '4px'
});

const SubmitButton = styled.button({
  display: 'flex',
  alignSelf: 'center',
  backgroundColor: 'pink',
  borderRadius: '4px'
});

const Login = () => {
  const [data, setData] = useState("");
  const [username, setUser] = useState({username: ""});
  const [password, setPass] = useState({password: ""});

  const handleSubmit = (props) => {
    console.log(props);
    //make request to api
    //localStorage.setItem("key","value") to save the token, convert to JSON with useEffect
  }

  // if (isLoggedIn) {
  return (
    <LoginForm onSubmit={handleSubmit}>
      <InputContainer>
        <input type="text" value={username} onChange={setUser} placeholder="username" required />
      </InputContainer>
      <InputContainer>
        <input type="password" value={password} onChange={setPass} placeholder="password" required />
      </InputContainer>
      <p>{data}</p>
      <SubmitButton type="submit">
        Submit
      </SubmitButton>
    </LoginForm>
    )
  // } else {
  //   return (
  //   <Dashboard />
  //   );
  // };
};

export default Login;