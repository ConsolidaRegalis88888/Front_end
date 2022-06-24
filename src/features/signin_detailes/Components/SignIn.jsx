import React from 'react';
import Customer from "../models/Customer";
import '../fakeServer/FakeServer';
import {Link} from "react-router-dom";


const SignIn = () => {

    const handleSubmit = async (event) => {
            event.preventDefault();
            const customer = new Customer(event.target[0].value, event.target[1].value);

            const response = await fetch(`/main/signin`, {method: 'POST', body: JSON.stringify(customer)})
                .then(response => response.json())
                .then(data => console.log(data))
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