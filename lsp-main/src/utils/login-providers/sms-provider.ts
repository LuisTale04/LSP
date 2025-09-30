import AuthenticationProvider from "./authentication-provider";
import { SmsCredentials } from "./credentials";
import UserSession from "./user-session";

export default class SmsProvider implements AuthenticationProvider {
  canHandle(credentials: object): boolean {
    return 'phoneNumber' in credentials && 'code' in credentials;
  }

  login(credentials: object): Promise<UserSession> {
    const isValid = this.canHandle(credentials);
    
    if (!isValid) {
      return Promise.reject(new Error("Invalid credentials for SmsProvider"));
    }

    const {phoneNumber, code} = credentials as SmsCredentials;

    console.log("User logged in with phone number:", phoneNumber);
    console.log("Code used:", code);

    if (code !== "123456") {
      return Promise.reject(new Error("Invalid code"));
    }

    return Promise.resolve({
      userId: "user123",
      sessionId: "session123",
      createdAt: new Date(),
    });
  }
}
