import React from 'react';
import User from "../models/User";
import request from "../interceptors/request";

const Recovery = () => {
        const handleSubmit = async (event) => {
            event.preventDefault();
            const user = new User(event.target[0].value);
            const recoveryPostRequest = request(`/main/recovery`, user, {method: 'POST'})
                .then(response => window.sessionStorage.setItem('token', response.JWT))
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