import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Authentication App",
  description: "Sign in or sign up to your account",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
