export interface PasswordCredentials{
    email: string;
    password: string;
}

export interface MagiclinkCredentials{
    email: string;
    token: string;
}

export interface SmsCredentials{
    phoneNumber: number;
    code: string;
}
