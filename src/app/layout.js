import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import NavBar from "../components/navBar";

export const metadata = {
  title: 'Portfolio Alisée',
  description: 'Portfolio de projets BTS SIO',
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
