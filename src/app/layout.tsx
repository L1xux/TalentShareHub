import "./globals.css";
import type { Metadata } from "next";
import Providers from "./provider";
import StyledComponentsRegistry from "./_lib/network/registry";
import { Nanum_Pen_Script, Dongle } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const nanumPenScript = Nanum_Pen_Script({
  variable: "--nanum-pen-script-font",
  weight: "400",
  preload: false,
});

const dongleScript = Dongle({
  variable: "--dongle-font",
  weight: "400",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${nanumPenScript.variable} ${dongleScript.variable}`}>
      <body className="font-dongle">
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
