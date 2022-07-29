import React from "react";
import request from "../../domain/interceptors/request";
import {Routes, useNavigate} from "react-router-dom"
import validatePassword from "../../domain/validatePassword";

const NewPassword = () => {

    let [password, setPassword] = React.useState('');
    let [confirm, setConfirm] = React.useState('');
    let navigate = useNavigate();

    let token: any;
    const getFromUrl = () => {
        let href = window.location.href;
        let regex = new RegExp(`.+\/main\/newpassword\\?token=`)
        if (href.match(regex)) {
            const token = href.replace(regex, '')
            return token;
        }
        return null;
    }

    token = getFromUrl()
    const decodedToken = base64decoder(token);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validatePassword(password)) {
            if (password === confirm) {
                const NewPasswordPostRequest = request(`/main/newpassword`, {
                    login: decodedToken.login,
                    password: password
                }, {method: 'POST'})
                    .then(response => navigate('/main/signin'))
                    .catch(error => alert(error));
            } else {
                alert('confirmation password is not valid')
            }
        }
    }

    if (token) {
        if (decodedToken.login) {
            return (
                <Routes>
                    <form onSubmit={handleSubmit}>
                        <h2>Create new password for {decodedToken.login}</h2>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" placeholder="Confirm password"
                               onChange={(e) => setConfirm(e.target.value)}/>
                        <button>Change password</button>
                    </form>
                </Routes>
            )
        }
    }
}

export default NewPassword;