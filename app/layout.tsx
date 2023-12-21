import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar/NavBar";
import Footer from "@/components/ui/footer/Footer";
import AuthContext from "@/context/AuthContext";
import getCurrentUser from "./actions/getCurrentUser";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "700"] });

export const metadata: Metadata = {
  title: "Travel n' export",
  description: "Travel tech blog, see the world through this amazing website",
  keywords: "travel, blog, world, amazing",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <AuthContext>
        <body className={`${roboto.className}overflow-x-hidden bg-light `}>
          <NavBar user={user} />
          {children}
          <Footer />
        </body>
      </AuthContext>
    </html>
  );
}
