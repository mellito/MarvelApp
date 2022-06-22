import { useState, useEffect } from "react";
import Login from "../components/Login";
import Logo from "../assets/img/logomarvel.png";
import loginData from "../assets/json/logindata.json";
import { useNavigate } from "react-router-dom";
import { CHARACTERS_ROUTE } from "../components/Routes";
const Home = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    setLoginError("");
  }, [loginForm]);

  const onHandleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData[0].email.toLowerCase());
    if (
      loginForm.email.toLowerCase() === loginData[0].email.toLowerCase() &&
      loginForm.password.toLowerCase() === loginData[0].password.toLowerCase()
    ) {
      localStorage.setItem("user", JSON.stringify(loginForm));
      navigate(CHARACTERS_ROUTE);
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <Login>
      <div className="home flex">
        <img src={Logo} alt="" marvel logo className="home-logo " />
        <form onSubmit={onHandleSubmit} className="home-form flex">
          <input
            type="text"
            placeholder="User *"
            name="email"
            className="input-login font-24"
            value={loginForm.email}
            onChange={onHandleChange}
          />
          <input
            type="password"
            placeholder="Password *"
            name="password"
            className="input-login font-24"
            value={loginForm.password}
            onChange={onHandleChange}
          />

          {loginError && <p className="error">{loginError}</p>}
          <button type="submit" className="input-login button-login font-24">
            Login
          </button>
        </form>
      </div>
    </Login>
  );
};

export default Home;
