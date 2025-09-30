import AuthenticationProvider from "./authentication-provider";
import { PasswordCredentials } from "./credentials";
import UserSession from "./user-session";

export default class PasswordProvider implements AuthenticationProvider {
  canHandle(credentials: object): boolean {
    return 'email' in credentials && 'password' in credentials;
  }

  login(credentials: object): Promise<UserSession> {
    const isValid = this.canHandle(credentials);
    if (!isValid) {
      return Promise.reject(new Error("Invalid credentials for PasswordProvider"));
    }
    
    const { email, password } = credentials as PasswordCredentials;

    console.log("User logged in with email:", email);
    console.log("Password used:", password);

    if (password !== "correct_password") {
      return Promise.reject(new Error("Invalid credentials"));
    }

    return Promise.resolve({
      userId: "user123",
      sessionId: "session123",
      createdAt: new Date(),
    });
  }
}
