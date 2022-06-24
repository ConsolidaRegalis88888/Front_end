class Customer {
    id
    login //CHAR(30)
    password //CHAR(50)
    name //CHAR(20)
    s_name	//CHAR(20)
    family	//CHAR(20)
    email //login????
    date_activity //DATETIME
    telephone //(current telephone) int
    address //(current address) String
    ip_address// Object {ipv4: CHAR(15), ipv6: CHAR(39)}

    constructor(email, password, login) {
        this.email = email;
        this.password = password;
        this.login = login;
    }
}

export default Customer;