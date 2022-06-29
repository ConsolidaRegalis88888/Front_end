import React from 'react';
import {Link} from "react-router-dom";
import User from "../models/User";
import encodePassword from "../encoding/encodePassword";
import request from "../interceptors/request";

const SignUp = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = new User(event.target[1].value, encodePassword(event.target[2].value), event.target[0].value);

        const signUpPostRequest = request(`/main/signup`, user, {method: 'POST'})
            .then(response => window.sessionStorage.setItem('token', response.JWT))
            .catch(error => console.log('Error: ' + error));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign up</h2> <span>Already have an account?&nbsp;</span> <Link to="/main/signin">Sign in</Link>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm password"/>
                <button>Sign up</button>
            </form>
            <p>By signing in to your account you agree with our <a><b>Privacy Policy</b></a> and <a><b>Terms
                of Use</b></a></p>
        </div>
    );
};

export default SignUp;