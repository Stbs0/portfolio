import { ReactNode } from "react";
import Navbar from "./Navbar";
import StarsCanvas from "./main/StarsBackground";

const Layout = ({
  children,
 
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <StarsCanvas />
      
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
