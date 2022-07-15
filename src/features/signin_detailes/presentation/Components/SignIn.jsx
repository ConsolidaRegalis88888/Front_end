import React from 'react';
import User from "../../data/model/User";
import '../../data/api/fakeAPI';
import {Link} from "react-router-dom";
import encodePassword from "../../domain/encodePassword";
import request from "../../domain/interceptors/request";
import responseInterceptor from "../../domain/interceptors/responseInterceptor";


const SignIn = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = new User(event.target[0].value, encodePassword(event.target[1].value));
        const signInPostRequest = request(`/main/signin`, user, {method: 'POST'})
            .then(response => responseInterceptor(response))
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