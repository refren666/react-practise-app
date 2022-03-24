import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/app.css'
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import PostId from "./pages/PostId";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import {AuthContext} from "./context";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navbar/>}>
            <Route index element={<Posts/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/posts'} element={<Posts/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path={'/posts/:postId'} element={<PostId/>}/>
            </Route>
            {/*<Route path={'*'} element={<Navigate to={'/posts'}/>}/>*/}
            <Route path={'*'} element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;