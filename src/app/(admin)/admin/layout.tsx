import React, { PropsWithChildren } from "react";
import AdminNavigationSideBar from "@/components/navigation/AdminNavigationSideBar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-screen max-w-full overflow-hidden">
      <AdminNavigationSideBar />
      <Separator orientation="vertical" />
      <main className="flex-grow flex flex-col overflow-hidden">
        <div className="flex-grow overflow-y-scroll">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
