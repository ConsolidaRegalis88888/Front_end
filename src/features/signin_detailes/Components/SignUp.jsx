import React from 'react';
import {Link} from "react-router-dom";
import Customer from "../models/Customer";

const SignUp = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const customer = new Customer(event.target[1].value, event.target[2].value, event.target[0].value);

        const response = await fetch(`/main/signup`, {method: 'POST', body: JSON.stringify(customer)})
            .then(response => response.json())
            .then(data => console.log(data))
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