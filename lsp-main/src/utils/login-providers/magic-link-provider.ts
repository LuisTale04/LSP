import AuthenticationProvider from "./authentication-provider";
import { MagiclinkCredentials } from "./credentials";
import UserSession from "./user-session";

export default class MagicLinkProvider implements AuthenticationProvider {
  canHandle(credentials: object): boolean {
      return 'email' in credentials && 'token' in credentials;
  }

  login(credentials: object): Promise<UserSession> {
    const isValid = this.canHandle(credentials);
    if (!isValid) {
      return Promise.reject(new Error("Invalid credentials for MagicLinkProvider"));
    }
    
    const { email, token } = credentials as MagiclinkCredentials;

    console.log("User logged in with email:", email);
    console.log("Magic link token used:", token);

    if (!/^\d+$/.test(token)) {
      return Promise.reject(new Error("Invalid magic link token"));
    }

    return Promise.resolve({
      userId: "user123",
      sessionId: "session123",
      createdAt: new Date(),
    });
  }
}
