import React from 'react';
import User from "../../data/model/User";
import request from "../../domain/interceptors/request";
import {Link, useNavigate} from "react-router-dom";
import {log} from "util";

const Recovery = () => {

        let [login, setLogin] = React.useState('');
        let navigate = useNavigate();

        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const user = new User(login);
            const recoveryPostRequest = request(`/main/recovery`, user, {method: 'POST'})
                .then((resp) => {
                    if (resp.status >= 400) {
                        alert(resp.error);
                    } else {
                        navigate('/main/signin')
                    }
                })
                .catch(error => alert(error));
        }

        return (
            <div>
                <h2>Restore password</h2> <Link to="/main/signin">Sign in</Link>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Your email" onChange={(e) => setLogin(e.target.value)}/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
;

export default Recovery;