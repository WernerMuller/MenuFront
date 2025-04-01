import type { Metadata } from "next";
import Header from "../components/layout/Dashboard/Header";
import Footer from "../components/layout/Dashboard/Footer";
import DashboardDrawer from "../components/layout/Dashboard/Drawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MenuApp",
  description: "MenuApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <DashboardDrawer />
        <main style={{ marginTop: "64px", padding: "16px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
