
import { isDeveloper } from '@/lib/utils';

const BackgroundImage = ({ career }: { career: string }) => {
  return (
    <div
      className={`fixed   inset-0  bg-[url('/LooperGroup2.png')]    bg-cover  z-[-1]  ${
        isDeveloper(career) ? "" : "invert"
      } `}
    />
  );
}

export default BackgroundImage