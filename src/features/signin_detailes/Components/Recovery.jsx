import React from 'react';
import Customer from "../models/Customer";

const Recovery = () => {
        const handleSubmit = async (event) => {
            event.preventDefault();
            const customer = new Customer(event.target[0].value);
            const response = await fetch(`/main/recovery`, {method: 'POST', body: JSON.stringify(customer)})
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log('Error: ' + error));
        }

        return (
            <div>
                <h2>Restore password</h2> <a>Sign in</a>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Your email"/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
;

export default Recovery;