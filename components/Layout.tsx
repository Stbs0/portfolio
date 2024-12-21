import Navbar from "./Navbar";
import StarsCanvas from "./main/StarsBackground";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StarsCanvas />
      {/* <div
          className={`absolute right-0  h-full  bg-[url('/LooperGroup2.png')] ${
            isDeveloper(params.career) ? "" : "invert"
          }  bg-no-repeat    z-[-1] `}
        /> */}
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
