import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from '../Layout'
import Header from '../Header'
import Footer from '../Footer'
import Home from '../Home'
import Main from '../Main'
import Registration from '../Registration'
import Login from '../Login'
import Error from '../Error'
import Profile from '../Profile'

import { checkAuth } from '../../redux/thunk/asyncUsers';

function App() {
  const dispatch = useDispatch();

  const { session } = useSelector(state => state.session);
  
  useEffect(() => { dispatch(checkAuth()) }, [ dispatch, session.id ])

  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
