import "./globals.css";
import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import localFont from "next/font/local";
import { ThemeProvider } from "@True-Me-Digital-Man/components";
import { Toaster } from "@True-Me-Digital-Man/components/ui/toaster";
import { cn } from "@True-Me-Digital-Man/lib/utils";

const DouyinSans = localFont({
  src: [
    {
      path: "../assets/DouyinSans/DouyinSansBold.ttf",
    },
  ],
});
const mtn = localFont({
  src: [
    {
      path: "../assets/mtn/MTNBrighterSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/mtn/MTNBrighterSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "True Me Digital Man",
  description:
    "30 seconds video, 1 minute easy copy exclusive to your digital doppelganger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      {/* <UserProvider> */}
      <body
        className={cn(
          `${DouyinSans.className} ${DouyinSans.style}`,
          `${mtn.className} ${mtn.style}`,
          "antialiased bg-background text-foreground"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
      {/* </UserProvider> */}
    </html>
  );
}
