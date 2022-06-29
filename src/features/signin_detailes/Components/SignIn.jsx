import React from 'react';
import User from "../models/User";
import '../fakeServer/FakeServer';
import {Link} from "react-router-dom";
import encodePassword from "../encoding/encodePassword";
import request from "../interceptors/request";


const SignIn = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = new User(event.target[0].value, encodePassword(event.target[1].value));
        const signInPostRequest = request(`/main/signin`, user, {method: 'POST'})
            .then(response => window.sessionStorage.setItem('token', response.JWT))
            .catch(error => console.log('Error: ' + error));
    }

    return (
        <div>
            <h2>Sign In</h2> <span>Don't have an account?&nbsp;</span> <Link to="/main/signup">Sign up</Link>
            <form method="POST" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="submit" value="Login"/>
            </form>
            <Link to="/main/recovery">Lost your password?</Link>
        </div>
    );
};

export default SignIn;