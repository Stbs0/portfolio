import { isDeveloper } from "@/lib/utils";

const BackgroundImage = ({ career }: { career: string }) => {
  return (
    <span
      className={`fixed inset-0 z-[-1] bg-[url("/LooperGroup2.webp")] bg-cover ${
        isDeveloper(career) ? "" : "invert"
      } `}
    ></span>
  );
};

export default BackgroundImage;
