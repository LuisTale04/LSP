import AuthenticationProvider from "./authentication-provider";
import MagicLinkProvider from "./magic-link-provider";
import PasswordProvider from "./password-provider";
import SmsProvider from "./sms-provider";

type Credentials = {
  email: string;
  password: string;
  type: string;
};

export default class LoginController {
  private providers: Map<string, AuthenticationProvider> = new Map();

  constructor() {
    this.providers.set("password", new PasswordProvider());
    this.providers.set("magic_link", new MagicLinkProvider());
    this.providers.set("sms", new SmsProvider());
  }

  async handleLogin(credentials: Credentials) {
    const provider = this.providers.get(credentials.type);

    if (!provider) {
      throw new Error("Unsupported login type");
    }

    const session = await provider.login(
      credentials.email,
      credentials.password
    );

    return session;
  }
}
