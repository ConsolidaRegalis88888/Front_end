import React from 'react';
import {Link} from "react-router-dom";
import User from "../../data/model/User";
import encodePassword from "../../domain/encodePassword";
import request from "../../domain/interceptors/request";
import validatePassword from "../../domain/validatePassword";

const SignUp = () => {

    let [login, setLogin] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [name, setName] = React.useState('');
    let [confirm, setConfirm] = React.useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validatePassword(password)) {
            if (password === confirm) {

                const user = new User(login, encodePassword(password), name);

                const signUpPostRequest = request(`/main/signup`, user, {method: 'POST'})
                    .then(response => window.sessionStorage.setItem('token', response.JWT))
                    .catch(error => alert(error));
            } else {
                alert('confirmation password is not valid')
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign up</h2> <span>Already have an account?&nbsp;</span> <Link to="/main/signin">Sign in</Link>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e) => setLogin(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm password" onChange={(e) => setConfirm(e.target.value)}/>
                <button>Sign up</button>
            </form>
            <p>By signing in to your account you agree with our <a><b>Privacy Policy</b></a> and <a><b>Terms
                of Use</b></a></p>
        </div>
    );
};

export default SignUp;