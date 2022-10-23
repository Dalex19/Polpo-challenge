import {
    BsCalendar3Week,
    HiOutlineLocationMarker as Location,
    BiLinkAlt,
    BsThreeDotsVertical as Menu,
  } from "react-icons/all";

export const MoreInfo = () => {
    return (
      <div className="w-[90%] flex flex-wrap gap-1 mx-auto text-[19px] text-gray-500">
        <h3 className="flex-1 flex justify-start items-center gap-1">
          {" "}
          <Location /> Navasota, TX
        </h3>
        <h3 className=" flex-1 flex justify-start items-center gap-1 text-blue-500">
          <BiLinkAlt />{" "}
          <a href="https://chucknorris.com/">chucknorris.com</a>
        </h3>
        <h3 className="flex-1 flex justify-start items-center gap-2">
          <BsCalendar3Week /> Joined June 2011
        </h3>
        
      </div>
    );
  };