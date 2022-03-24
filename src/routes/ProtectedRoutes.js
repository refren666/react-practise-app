import React, {useContext} from 'react';
import {Outlet} from 'react-router-dom';

import SignIn from "../pages/SignIn";
import {AuthContext} from "../context";

const ProtectedRoutes = () => {
  const {isAuth} = useContext(AuthContext);

  return isAuth ? <Outlet/> : <SignIn/>
};

export default ProtectedRoutes;