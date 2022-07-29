import {createServer, Response, Model} from "miragejs";
import {createJWT} from "./jwt";
import requestInterceptor from "./requestInterceptor";
import User from "../model/User";

createServer({
    models: {
        user: Model
    },

    routes() {
        this.urlPrefix = 'http://localhost:3000';
        this.post('/main/signin', (schema, request) => {
            request = requestInterceptor(request);
            const login: string = (JSON.parse(request.requestBody)).login;
            console.log(login)
            let user: any = userDataBase.find((el) => el.login == login);
            console.log('user: ' + user)
            if (user) {
                if (user.password == JSON.parse(request.requestBody).password) {
                    return {
                        JWT: createJWT(
                            {alg: "HS256", typ: "JWT"},
                            {login: login, role: "user", exp: Date.now() + 60000},
                            "secret"
                        )
                    };
                } else {
                    return new Response(401, {}, {status: 401, error: "Wrong password"})
                }
            } else {
                return new Response(401, {}, {status: 401, error: "This user is not exist"})
            }
        });
        this.post('/main/signup', (schema, request) => {
            const name: string = (JSON.parse(request.requestBody)).name;
            const login: string = (JSON.parse(request.requestBody)).login;
            const password: string = (JSON.parse(request.requestBody)).password;
            let user: any = userDataBase.find((el) => el.login == login);
            if (!user) {
                userDataBase.push({name: name, login: login, password: password, role: 'user'});
                return new Response(201,{},{status: 201, message: 'User created. Confirm registration by your email'});
            } else {
                return new Response(401, {}, {status: 401, error: "User with this email is already exists"});
            }
        });
        this.post('/main/recovery', (schema, request) => {
            const login = (JSON.parse(request.requestBody)).login;
            console.log(login)
            let user: any = userDataBase.find((el) => el.login == login);
            console.log(user)
            if (user)
                return new Response(202, {},{status: 202, message: 'New password link has sent to your email'})
            else
                return new Response(404, {}, {status: 404, error: "There is now user with current email address"});
        });
    }
});

let userDataBase: Array<User> = [
    {login: "a@b.c", password: "MTIzNDU=", name: "Vano", role: "user"}, //password: "12345"
    {login: "1@2.3", password: "MTIz", name: "Dany", role: "anonymous"}, //password: "123"
    {login: "admin", password: "YWRtaW4=", name: "admin", role: "admin"} //password: "admin"
];