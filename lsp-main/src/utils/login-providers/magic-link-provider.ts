import AuthenticationProvider from "./authentication-provider";
import UserSession from "./user-session";

export default class MagicLinkProvider implements AuthenticationProvider {
  login(email: string, password: string): Promise<UserSession> {
    console.log("User logged in with email:", email);
    console.log("Magic link token used:", password);

    if (!/^\d+$/.test(password)) {
      return Promise.reject(new Error("Invalid magic link token"));
    }

    return Promise.resolve({
      userId: "user123",
      sessionId: "session123",
      createdAt: new Date(),
    });
  }
}
