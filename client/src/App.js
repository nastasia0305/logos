import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { checkAuthFetch } from './redux/thunk/asyncUsers';

function App() {
  const dispatch = useDispatch();
  const { session } = useSelector(state => state.session);
  console.log(session);

  useEffect(() => {
    dispatch(checkAuthFetch())
  },[dispatch])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
