import React from 'react';
import Customer from "../customer/Customer";
import '../fakeServer/FakeServer';

const SignIn = (props) => {

    async function handleSubmit(event) {
        event.preventDefault();
        const customer = new Customer(null, event.target[1].value, event.target[0].value);
        try {
            const response = await fetch('/api/signin', {method: 'POST', body: JSON.stringify(customer)})
            console.log(response._bodyText);
        } catch (rejected) {
            console.log(rejected);
        }
    }

    return (
        <div>
            <h2>Sign In</h2> <span>Don't have an account?&nbsp;</span> <a>Sign up</a>
            <form method="POST" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="submit" value="Login"/>
            </form>
            <a>Lost your password?</a>
        </div>
    );
};

export default SignIn;