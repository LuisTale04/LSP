import { NextRequest, NextResponse } from "next/server";

import AuthenticationProvider from "@/utils/login-providers/authentication-provider";
import PasswordProvider from "@/utils/login-providers/password-provider";
import MagicLinkProvider from "@/utils/login-providers/magic-link-provider";
import SmsProvider from "@/utils/login-providers/sms-provider";
import UserSession from "@/utils/login-providers/user-session";

export async function POST(request: NextRequest) {
  const { type } = await request.json();

  let provider: AuthenticationProvider;
  let session: UserSession;

  if (type === "magic_link") {
    provider = new MagicLinkProvider();
    session = await provider.login("user@example.com", "75486547");
  } else if (type === "sms") {
    provider = new SmsProvider();
    session = await provider.login("user@example.com", "123456");
  } else {
    provider = new PasswordProvider();
    session = await provider.login("user@example.com", "correct_password");
  }

  return NextResponse.json({ session });
}
