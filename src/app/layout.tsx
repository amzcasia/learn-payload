import type { Metadata } from "next";
import "./styles/output.css";

export const metadata: Metadata = {
  title: "MyMe",
  description: "My Messenger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
