export class Administrator {
    id: number;
    login: string;
    password: string;
    lastAuth : Date;
    constructor(id: number, login: string, password: string, pageType: string, lastAuth: Date) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.lastAuth = lastAuth;
    }
}