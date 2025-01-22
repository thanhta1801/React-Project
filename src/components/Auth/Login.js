import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../Services/apiServices";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const navigate = useNavigate();
  const hanldeLogin = async () => {
    // validate

    let res = await postLogin(email, password);
    if (res && res.EC === 0) {
      navigate("/");
      toast.success(res.EM);
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Sign Up
        </button>
      </div>
      <div className="title col-4 mx-auto">Đăng Nhập</div>
      <div className="welcome col-4 mx-auto">Hello , who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="from-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <span>Forgot password ?</span>
        <button onClick={() => hanldeLogin()}>Login</button>
        <div className="back-home text-center">
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            &#60; &#60; Go To HomePage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
