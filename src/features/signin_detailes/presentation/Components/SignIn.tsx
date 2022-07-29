import React from 'react';
import User from "../../data/model/User";
import '../../data/api/fakeAPI';
import {Link} from "react-router-dom";
import encodePassword from "../../domain/encodePassword";
import request from "../../domain/interceptors/request";
import responseInterceptor from "../../domain/interceptors/responseInterceptor";

const SignIn = () => {

    let [login, setLogin] = React.useState('');
    let [password, setPassword] = React.useState('');


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = new User(login, encodePassword(password));
        const signInPostRequest = await request(`/main/signin`, user, {method: 'POST'})
            .then(response => responseInterceptor(response))
            .then((resp) => {
                if (resp.status >= 400) {
                    alert(resp.error);
                }
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div>
            <h2>Sign In</h2> <span>Don't have an account?&nbsp;</span> <Link to="/main/signup">Sign up</Link>
            <form method="POST" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name="login" onChange={(e) => setLogin(e.target.value)}/>
                <input type="password" placeholder="Password" name="password"
                       onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Login"/>
            </form>
            <Link to="/main/recovery">Lost your password?</Link>
        </div>
    );
};

export default SignIn;