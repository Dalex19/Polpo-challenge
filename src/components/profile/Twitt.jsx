import React from "react";

import avatar from "../../assets/patric.jpg";
import { UseFetch } from "../hook/UseFetch";
import { UseDate } from "../hook/UseDate";

import { FaCamera, MdOutlineNavigateNext } from "react-icons/all";
import takeScreen from "../hook/TakeScreen";

export const Twitt = () => {
  const chuckApi = 'https://api.chucknorris.io/jokes/random';
  const {date} = UseDate();

  const { getJoke, joke } = UseFetch();
  React.useEffect(() => {
    getJoke(chuckApi);
  }, []);

  
  return (
    <div
      className="w-[90%] relative bg-black mx-auto h-auto md:h-auto grid grid-cols-4 grid-rows-3 text-white border-y mt-4 border-slate-500 md:pb-2"
      id="#capture"
    >
      <img
        src={avatar}
        className="col-span-1  row-span-3 md:w-[70px] w-[60px] md:h-[70px] h-[60px] rounded-full self-start mt-2 md:md:justify-self-center"
      />
      <p className="col-span-3 flex flex-wrap gap-x-2 self-center">
        <span className="font-bold">Chuck Norris</span>{" "}
        <span className="text-gray-500">@chucknorris</span>{" "}
        <span className="text-gray-500">{date}</span>
      </p>
      <div className="col-span-3 row-span-2 flex flex-wrap justify-between items-center">
        <p className="">{joke.value}</p>
        <div className="w-[50%] flex justify-start gap-4 py-1">
          <button
            onClick={() => getJoke(chuckApi)}
            className="text-3xl transition-all ease-in-out hover:scale-110"
          >
            <MdOutlineNavigateNext />
          </button>
          <button
            className="text-xl transition-all ease-in-out hover:scale-110"
            onClick={takeScreen}
          >
            <FaCamera />
          </button>
        </div>
      </div>
    </div>
  );
};
