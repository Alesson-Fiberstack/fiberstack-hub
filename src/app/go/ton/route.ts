import { NextResponse } from "next/server";

const TON_REFERRAL_URL =
  "https://ton.com.br/catalogo/?referrer=A06BEA91-498C-4155-9446-C0C4A98C41A6&userAnticipation=0&utm_medium=invite_share&utm_source=revendedor";

export function GET() {
  return NextResponse.redirect(TON_REFERRAL_URL, 302);
}
