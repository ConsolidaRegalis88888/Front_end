class User {
    login: string //CHAR(30)
    password?: string //CHAR(50)
    name?: string //CHAR(20)
    role?: string

    constructor(login: string, password?: string, name?: string) {
        this.login = login;
        this.password = password;
        this.name = name;
    }
}

export default User;