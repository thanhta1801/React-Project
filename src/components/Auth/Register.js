import { useState } from "react";
import "./Login.scss";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { postRegister } from "../../Services/apiServices";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const hanldeRegister = async () => {
    if (email && password) {
      if (!validateEmail(email)) {
        toast.error("Email không hợp lệ");
      }
      let res = await postRegister(email, password, userName);
      if (res && res.EC === 0) {
        navigate("/login");
        toast.success(res.EM);
      }
      if (res && res.EC !== 0) {
        toast.error(res.EM);
      }
    } else {
      toast.warning("Bạn chưa nhập Email hoặc Password");
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
      <div className="title col-4 mx-auto">Đăng Kí</div>
      <div className="welcome col-4 mx-auto">Hello , who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="from-group">
          <div className="email-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
            {showPassword ? (
              <span
                className="icon-eye-off"
                onClick={() => {
                  setShowPassword(false);
                }}
              >
                <IoMdEye />
              </span>
            ) : (
              <span
                className="icon-eye-off"
                onClick={() => {
                  setShowPassword(true);
                }}
              >
                <IoMdEyeOff />
              </span>
            )}
          </div>
          <div className="user-name-group">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <span>Forgot password ?</span>
        <button onClick={() => hanldeRegister()}>Create My Free Account</button>
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

export default Register;


