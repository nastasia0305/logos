import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import Profile from "./components/Profile/Profile";
import { checkAuthFetch } from './redux/thunk/asyncUsers';
import FeedBackForm from './components/FeedBack/FeedBackForm'

function App() {
  const dispatch = useDispatch();
  const { session } = useSelector(state => state.session);
  console.log(session);

  useEffect(() => {
    dispatch(checkAuthFetch())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
        <Route path="/feedback" element={<FeedBackForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
