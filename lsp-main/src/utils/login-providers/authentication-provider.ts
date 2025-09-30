import UserSession from "./user-session";

export default interface AuthenticationProvider {
  login(email: string, password: string): Promise<UserSession>;
}
