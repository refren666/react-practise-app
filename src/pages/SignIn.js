import React, {useContext} from 'react';

import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const SignIn = () => {
  const {setIsAuth} = useContext(AuthContext);

  const submit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div className={'App'}>
      <h1>Sign in</h1>
      <form onSubmit={submit}>
        <MyInput type="text" placeholder={'Enter login'} />
        <MyInput type="password" placeholder={'Enter password'} />
        <MyButton>Sign in</MyButton>
      </form>
    </div>
  );
};

export default SignIn;