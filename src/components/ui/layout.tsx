
import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { BackToTop } from "@/components/back-to-top";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
