import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Registration from "./components/Registration";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import Profile from "./components/Profile/Profile";


function App() {
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
      <Route path="*"  element={<Error />} />
    </Routes>

    
    <div className="App">
    </div>
    </BrowserRouter>
  );
}

export default App;
