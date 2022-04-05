import React from "react";
import LoginPage from "../components/auth-pages/LoginPage";

function Login() {
  return (
    <div className="relative" style={{ bottom: "2rem" }}>
      <LoginPage />
      <div className="spacer-3rem"></div>
    </div>
  );
}

export default Login;
