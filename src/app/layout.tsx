import InstallPrompt from "@/components/InstalPrompt";
import { Space_Grotesk, Lato } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${lato.variable}`}>
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
