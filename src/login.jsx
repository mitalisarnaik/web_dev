import React from "react";
import { useNavigate } from "react-router-dom";
import './logincss.css';

export default function Login() {
  const navigate = useNavigate();

  const HandleClick = (e) => {
    e.preventDefault();
      navigate('/page2');
    
  };

  return (
    <>
      <h1>Login Page</h1>
      <br />
      <div>
        <p>
          <form className="forms" onSubmit={HandleClick}>
            <div>
              <label>Username: </label>
              <input type="text" id="username" name="username" required />
            </div>

            <div>
              <label className="pass">Password: </label>
              <input className="pass" type="password" id="password" name="password" required />
            </div>

            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </p>
      </div>
    </>
  );
}
