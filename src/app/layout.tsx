import Script from "next/script";
import "@/css/bootstrap.min.css";
import "@/css/slick.css";
import "@/css/style.css";
import "@/css/media-query.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} mx-auto`}>
        <div className="site-content">{children}</div>

        <Script src="js/jquery-min-3.6.0.js" />
        <Script src="js/slick.min.js" />
        <Script src="js/bootstrap.bundle.min.js" />
        <Script src="js/modal.js" />
        <Script src="js/custom.js" />
      </body>
    </html>
  );
}
