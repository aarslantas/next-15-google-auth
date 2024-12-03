"use server";

import { signIn, signOut } from "@/app/api/auth/[...nextauth]/route";

export async function socialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/" });
}

export async function socialLogout() {
  await signOut({ redirectTo: "/" });
}
