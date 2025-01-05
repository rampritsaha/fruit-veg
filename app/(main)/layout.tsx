import { Header } from "@/components/header";
import { MobileTabs } from "@/components/mobile-tabs";
import React, { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <MobileTabs />
    </div>
  );
};

export default MainLayout;
