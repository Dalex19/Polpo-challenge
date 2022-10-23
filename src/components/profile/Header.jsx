import portada from "../../assets/mona-china.jpg";
import me from "../../assets/patric.jpg";

import { MainInfo } from "./MainInfo";

import { BsThreeDotsVertical as Menu } from "react-icons/all";

export const Header = () => {
  return (
    <section className="md:h-[55%] max-h-[500px]  w-full md:border-b border-slate-500 flex flex-col">
      <div className="w-full h-[20%] md:h-[30%]">
        <img
          src={portada}
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-full h-[100px] md:h-[100px]  relative flex justify-end items-center gap-2 pr-2 md:pr-4">
        <img
          src={me}
          alt=""
          className="object-cover h-[100px] w-[100px] border-2 border-black absolute -top-4 left-4 rounded-full"
        />
        <button className="border text-white text-xl rotate-90 p-1 rounded-full">
          <Menu />
        </button>
        <button className="bg-white px-4 py-1 rounded-full">
          Follow
        </button>
      </div>
      <MainInfo />
    </section>
  );
};
