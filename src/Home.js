import React from 'react';

import './style/style.css';
import './style/home.css';

const Home = () => {
    return (
        <div className="homeScreen">
            <i className="fa fa-music fa-3x" aria-hidden="true"></i>
            <h4 style={{ fontSize: 28, fontWeight: 700 }}>JamHeart</h4>
            <a className="btn btn-block signUpButton" href="/signup" role="button">Sign Up</a>
            <a className="btn btn-block fbSignUpButton" href="#" role="button">Continue with Facebook</a>
            <div className="line"></div>
                <div className="accountText">Already have an account?</div>
            <div className="line"></div>
            <a className="btn btn-block loginButton" href="login" role="button">Login</a>
        </div>
    );
}

export default Home;