import React from "react";
import { useNavigate } from "react-router-dom";
import './logincss.css';
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [name,Setname]=useState('');
  const[pwd,Setpwd]=useState('');

    const handle = () => {
     localStorage.setItem('Name', name);
     localStorage.setItem('Password', pwd);
  };

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
          <form className="forms">
            <div>
              <label>Username: </label>
              <input type="text" id="username" name="Name" value={name} onChange={(e)=>Setname(e.target.value)} required />
            </div>

            <div>
              <label className="pass">Password: </label>
              <input className="pass" type="password" id="password" name="Password"  value={pwd} onChange={(e)=>Setpwd(e.target.value)}required />
            </div>

            <div>
              <button onClick={handle}>Login</button>
            </div>
            <div>
              {
                localStorage.getItem('Name') &&(
                <div>
                  <p>Name: {localStorage.getItem('Name')}</p>
                </div>
                )
              }
               {
                localStorage.getItem('Password') &&(
                  <div>
                    <p>Password: {localStorage.getItem('Password')}</p>
                  </div>
                )
              }
            </div>
            
             
            
          </form>
        </p>
      </div>
    </>








  );
}
