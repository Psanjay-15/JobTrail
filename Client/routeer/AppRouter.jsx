import { Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home.jsx";
import Login from "../src/pages/Login.jsx";
import Register from "../src/pages/Register.jsx";
import Application from "../src/pages/Application.jsx";
import AddAplication from "../src/components/ApplicationComponent/AddAplication.jsx";
import Google from "../src/pages/Google.jsx";
function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/application" element={<Application />}></Route>
        <Route path="/addApplication" element={<AddAplication />}></Route>
        <Route path="/google/:token" element={<Google/>}></Route>
      </Routes>
    </>
  );
}

export default AppRouter;
