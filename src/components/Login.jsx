import React from "react";

const Login = ({ children }) => {
  return (
    <main className="main flex ">
      <img
        className="login-left"
        src="https://w0.peakpx.com/wallpaper/865/804/HD-wallpaper-deadpool-love-dc-funny-love-marvel-ryan-reynolds.jpg"
        alt=""
      />

      <section className="login-right grid grid-center">{children}</section>
    </main>
  );
};

export default Login;
