import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import './login.css';
import email from "./imagesForLogin/email.jpg";
import pass from "./imagesForLogin/pass.png";
import React from "react";


const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signin(user, () => navigate(fromPage, {replace: true}));
    }

  return (
      <div className="hero-container">
          <video src='/videos/video-1.mp4' autoPlay loop muted />
        <div className="sub-main">
                <div>
                    <h1>Login Page</h1>
                    <form onSubmit={handleSubmit}>
                    <div>
                        <img src={email} alt="email" className="emailing"/>
                        <input type="text" placeholder="user name" className="name"/>
                    </div>
                    <div className="second-input">
                        <img src={pass} alt="pass" className="emailing"/>
                        <input type="password" placeholder="password" className="name"/>
                    </div>
                        <hr></hr>
                        <button className="text-uppercase btn-block button" name="submit" type="submit">Login
                        </button>
                    </form>
                </div>
        </div>
      </div>

  );
}

export {LoginPage};


