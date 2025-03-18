"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId="2248129170-5nmdf4129dh82ak37iqpk7v0a1jnik74.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
}
