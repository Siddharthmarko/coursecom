import React, { useEffect, useState } from "react";
import logoimg from "../photos/logo-img.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/UserSlices";
const baseUrl = process.env.REACT_APP_URL;
// import { setUser } from "./userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const userdata = Cookies.get("user");
  // useEffect(() => {
  //   if (userdata) {
  //     navigate("/home");
  //   }
  // }, []);
  // const makeFieldsEmpty = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  const login = async (e) => {
    e.preventDefault();
      try {
        // "https://bigbulls.co.in/api/v1/auth/login",
      const response = await axios.post(`${baseUrl}/login`,{ email, password, } );
      // console.log(response.data);
      console.log(response);

      // Cookies.set("authToken", response.data.token, { expires: 7 });
      console.log('line number 42');
      Cookies.set("authToken", response.data.token, { expires: 7 });
      const userData = {
        // name: response.user.name,
        // id: response.user.id, 
        name: response.data.user.name,
        id: response.data.user.id,
      };
      console.log('line number 50');
      console.log(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      dispatch(setUser(userData));
      cogoToast.success("Login Successfull");
      navigate("/edit-profile");
    } catch (error) {
      console.log(error.response);
      cogoToast.error(error.response);
      console.log('line number 64');
      // console.log(error.response.data);
      // cogoToast.error(error.response.data);
    }
  };

  const authToken = Cookies.get("authToken");

  return (
    <>
      <form onSubmit={login}>
        <div className="outer-login-container ">
          <div className="login-container">
            <div className="login-left">
              <img src={logoimg} alt="user" />
            </div>
            <div className="login-right">
              <h1>Login</h1>
              <br />
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your username"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <Link to="/forgotpassword" className="fp">
                Forgot password?
              </Link>
              {/* <input type="submit" placeholder="Login" /> */}
              <button type="submit" className="btn btn-info">
                Login
              </button>
              <hr className="light-grey-hr" />
              <p>
                Don't have an account? <Link to="/enrollnow">Enroll now</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
