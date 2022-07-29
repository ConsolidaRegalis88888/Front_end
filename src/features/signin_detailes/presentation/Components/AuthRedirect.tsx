import {Route, Navigate, Routes} from "react-router-dom";

const AuthRedirect = () => {
    let token;
    const getFromUrl = () => {
        let href = window.location.href;
        let regex = new RegExp(`.+\/main\/authredirect\\?token=`)
        if (href.match(regex)) {
            const token = href.replace(regex, '')
            return token;
        }
        return null;
    }

    token = getFromUrl()

    if (token) {
        if (base64decoder(token) == 'valid') { // or any 'valid' identificator
            return (
                //TODO apply Route ?
                {/*<Routes>
                    <Route path={"*"} element={<Navigate to="/main/signin"/>}/>
                </Routes>*/}
            );
        }
    }
}

export default AuthRedirect;