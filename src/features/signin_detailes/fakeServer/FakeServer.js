import {createServer, Response} from "miragejs"
import Customer from "../customer/Customer";

const customer1 = new Customer('Vano', '12345', 'a@b.c');
let customers = [customer1];

createServer({

    routes() {
        this.namespace = 'api'
        this.post('/signin', (schema, request) => {
            let email = (JSON.parse(request.requestBody)).email;
            if (email == customers[0].email) {
                return new Response(200, undefined, 'Profile with this email-address is already exists!');
            } else {
                return new Response(201, undefined, 'Profile created');
            }
        })
    },
})