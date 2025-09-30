import UserSession from "./user-session";

export default interface AuthenticationProvider {
  canHandle(credentials: object): boolean;
  login(credentials: object): Promise<UserSession>;
}
