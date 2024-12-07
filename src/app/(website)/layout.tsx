import type { Metadata } from "next";
// import "./styles/output.css";
import "../styles/output.css"
import HeaderServer from "@/blocks/global/Header/Server";
import FooterServer from "@/blocks/global/Footer/Server";

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
        <HeaderServer/>
        {children}
        <FooterServer/>
      </body>
    </html>
  );
}
