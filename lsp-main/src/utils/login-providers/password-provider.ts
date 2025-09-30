import AuthenticationProvider from "./authentication-provider";
import UserSession from "./user-session";

export default class PasswordProvider implements AuthenticationProvider {
  login(email: string, password: string): Promise<UserSession> {
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
