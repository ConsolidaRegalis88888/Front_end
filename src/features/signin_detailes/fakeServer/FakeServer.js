import {createServer, Response, Model} from "miragejs";

createServer({
    models: {
        customer: Model,
        token: Model
    },

    routes() {
        this.urlPrefix = 'http://localhost:3000';
        this.post('/main/signin', (schema, request) => {
                const email = (JSON.parse(request.requestBody)).email;
                const user = schema.customers.findBy({email: email});
                if (user != null)
                    return user.id;
                else
                    return new Response(400, {}, {error: "Bad Request"});
            });
        this.post('/main/signup', (schema, request) => {
            const login = (JSON.parse(request.requestBody)).login;
            const email = (JSON.parse(request.requestBody)).email;
            const password = (JSON.parse(request.requestBody)).password;
            const user = schema.customers.findBy({email: email});
            if (user == null) {
                const customer = schema.customers.create({login: login, email: email, password: password});
                return {access_token: '12345', refresh_token: '54321', customer_id: customer.id};
            } else {
                return new Response(400, {}, {error: "Bad Request"});
            }
        });
        this.post('/main/recovery', (schema, request) => {
                const email = (JSON.parse(request.requestBody)).email;
                const user = schema.customers.findBy({email: email});
                if (user != null)
                    return user.id;
                else
                    return new Response(400, {}, {error: "Bad Request"});
        });
    },
    seeds(server) {
        server.create("customer", {login: "Vano", email: "a@b.c", password: "12345"});
        server.create("token", {customerID: 1, refreshToken: "qwerty"});
    }
});