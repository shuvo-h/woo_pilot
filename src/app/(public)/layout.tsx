import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

type THomeLayoutProps = {
  children: React.ReactNode;
};
const HomeLayout = ({ children }: THomeLayoutProps) => {
  return (
    <>
      <Navbar isColored={false} />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
