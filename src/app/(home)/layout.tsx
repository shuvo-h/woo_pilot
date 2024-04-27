import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

type THomeLayoutProps = {
  children: React.ReactNode;
};
const HomeLayout = ({ children }: THomeLayoutProps) => {
  return (
    <>
      <main className="flex flex-col grow">
        <Navbar isColored={true} />
        <div className="grow">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default HomeLayout;
