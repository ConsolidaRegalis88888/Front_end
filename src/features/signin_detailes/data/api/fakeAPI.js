import {createServer, Response, Model} from "miragejs";
import {createJWT} from "./jwt";
import requestInterceptor from "./requestInterceptor";

createServer({
    models: {
        user: Model
    },

    routes() {
        this.urlPrefix = 'http://localhost:3000';
        this.post('/main/signin', (schema, request) => {
            console.log(request)
            request = requestInterceptor(request);
            if (request.requestHeaders.Authorization == 'Bearer unauthorized'){
                return new Response(401,{},{error: 'user is unauthorized'})
            }
            const login = (JSON.parse(request.requestBody)).login;
            const user = schema.users.findBy({login: login});
            console.log('user: ' + user)
            if (user) {
                console.log('inside if(user)')
                const JWT = createJWT(
                    {alg: "HS256", typ: "JWT"},
                    {login: login, role: "user", exp: Date.now() + 60000},
                    "secret"
                )
                return {JWT};
            } else {
                return new Response(400, {}, {error: "This user is not exist"})
            }
        });
        this.post('/main/signup', (schema, request) => {
            const name = (JSON.parse(request.requestBody)).name;
            const login = (JSON.parse(request.requestBody)).login;
            const password = (JSON.parse(request.requestBody)).password;
            let user = schema.users.findBy({login: login});
            if (!user) {
                user = schema.users.create({name: name, login: login, password: password});
                return {
                    JWT: createJWT({alg: "HS256", typ: "JWT"}, {
                        login: login,
                        role: "user",
                        exp: Date.now() + 60000
                    })
                };
            } else {
                return new Response(400, {}, {error: "Bad Request"});
            }
        });
        this.post('/main/recovery', (schema, request) => {
            const login = (JSON.parse(request.requestBody)).login;
            console.log(login)
            const user = schema.users.findBy({login: login});
            console.log(user)
            if (user)
                return {
                    JWT: createJWT({alg: "HS256", typ: "JWT"}, {
                        login: login,
                        role: "user",
                        exp: Date.now() + 60000
                    })
                };
            else
                return new Response(400, {}, {error: "Bad Request"});
        });
    },
    seeds(server) {
        server.create("user", {login: "a@b.c", password: "MTIzNDU=", name: "Vano", role: "user"}); //password: "12345"
        server.create("user", {login: "1@2.3", password: "MTIz", name: "Dany", role: "anonymous"}); //password: "123"
        server.create("user", {login: "admin", password: "YWRtaW4=", name: "admin", role: "admin"}); //password: "admin"
    }
});