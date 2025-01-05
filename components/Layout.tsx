import { ReactNode } from "react";
import Navbar from "./Navbar";
// import ProgressPage from "./ProgressPage";
import StarsCanvas from "./main/StarsBackground";
// const StarsCanvas = lazy(() => import("./main/StarsBackground"));
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <ProgressPage /> */}

      <StarsCanvas />

      <Navbar />
      {children}
    </>
  );
};

export default Layout;
