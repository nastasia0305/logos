import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home";
import Main from "../Main";
import Registration from "../Registration";
import Login from "../Login";
import Error from "../Error";
import Profile from "../Profile";
import UpdateProfile from "../UpdateProfile";
import Chats from "../Chats";
import ConfirmEducation from "../ConfirmEducation";

import { checkAuth } from "../../redux/thunk/asyncUsers";

function App() {
  const dispatch = useDispatch();

  const { session } = useSelector((state) => state.session);

  const { session } = useSelector(state => state.session)
  console.log(session)

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
            <Route path="updateProfile" element={<UpdateProfile />} />
            <Route path="confirmEducation" element={<ConfirmEducation />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
