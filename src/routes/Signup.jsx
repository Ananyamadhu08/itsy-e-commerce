import React from "react";
import SignupPage from "../components/auth-pages/SignupPage";

function Signup() {
  return (
    <div className="relative" style={{ bottom: "2rem" }}>
      <SignupPage />
      <div className="spacer-3rem"></div>
    </div>
  );
}

export default Signup;
