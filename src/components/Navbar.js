import React, {useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import {AuthContext} from "../context";

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div>
      <div className={'navbar'}>
        <div className="navbar__links">
          <Link to={'/about'}>About</Link>
        </div>
        <div className="navbar__links">
          <Link to={'/posts'}>Posts</Link>
        </div>
        <MyButton onClick={logOut}>Log Out</MyButton>
      </div>

      <Outlet/>
    </div>
  );
};

export default Navbar;