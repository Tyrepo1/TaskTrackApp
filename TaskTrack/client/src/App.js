import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import DashboardPage from "./pages/Dashboard/pages/DashboardPage";
import Home from "./pages/Home/pages/Home";
import ForgotPassword from "./pages/Login/pages/ForgotPassword/ForgotPassword";
import Login from "./pages/Login/pages/Login/Login";
import OTP from "./pages/Login/pages/OTP/OTP";
import QR from "./pages/Signup/pages/QR/QR";
import Signup from "./pages/Signup/pages/Signup/Signup";

function App() {

  const ProtectedRoute = ({ children }) => {
    const loggedIn = localStorage.getItem("loggedIn")
    if (loggedIn === "true") {
      console.log("User is already logged in")
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };

  const ProtectedQRRoute = ({ children }) => {
    const qr = localStorage.getItem("qr")
    if (qr == null) {
      console.log("Missing QR code")
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const ProtectedOTPRoute = ({ children }) => {

    const otp = localStorage.getItem("otp")
    if (otp !== "true") {
      console.log("OTP is not enabled")
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const ProtectedAuthRoute = ({ children }) => {

    const loggedIn = localStorage.getItem("loggedIn")
    if (!loggedIn) {
      console.log("User is not logged in")
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<ProtectedRoute><Login/></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
          <Route path="/signup" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
          <Route path='/qr' element={<ProtectedQRRoute><QR /></ProtectedQRRoute>} />
          <Route path="/otp" element={<ProtectedOTPRoute><OTP /></ProtectedOTPRoute>}/>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path="/dashboard" element={<ProtectedAuthRoute><DashboardPage /></ProtectedAuthRoute>}/>
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App