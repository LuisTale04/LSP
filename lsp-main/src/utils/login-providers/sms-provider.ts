import AuthenticationProvider from "./authentication-provider";
import UserSession from "./user-session";

export default class SmsProvider implements AuthenticationProvider {
  login(email: string, password: string): Promise<UserSession> {
    console.log("User logged in with phone number:", email);
    console.log("Code used:", password);

    if (password !== "123456") {
      return Promise.reject(new Error("Invalid code"));
    }

    return Promise.resolve({
      userId: "user123",
      sessionId: "session123",
      createdAt: new Date(),
    });
  }
}
