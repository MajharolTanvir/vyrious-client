import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const LoginProcess = () => {
  return (
    <div className="flex justify-center items-center">
      <Login></Login>
      <Register></Register>
    </div>
  );
};

export default LoginProcess;
