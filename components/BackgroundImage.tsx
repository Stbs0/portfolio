import { isDeveloper } from "@/lib/utils";
import Image from "next/image";

const BackgroundImage = ({ career }: { career: string }) => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Image
        fill
        priority
        alt=""
        src={"/LooperGroup2.webp"}
        className={`${isDeveloper(career) ? "" : "invert"} object-cover`}
      />
    </div>
  );
};

export default BackgroundImage;
