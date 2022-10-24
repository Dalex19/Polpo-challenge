import { MoreInfo } from "./MoreInfo";

export const MainInfo = () => {
    return (
      <div className="text-white flex flex-col gap-2 border border-black">
        <h1 className="w-[90%] mx-auto flex flex-col text-lg">
          Chuck Norris
          <span className="text-gray-500 text-sm">@chucknorris</span>
        </h1>
        <p className="w-[90%] mx-auto text-[18px]">
          Welcome to the Official Chuck Norris Twitter page. Chuck is an
          international television and film star. His TV series “Walker,
          Texas Ranger”ran for 81/2 years
        </p>
        <MoreInfo />
        <div className="text-gray-500 flex gap-2 w-[90%] mx-auto text-[17px]">
          <Details following='3' followers='15.4K'/>
        </div>
      </div>
    );
  };

  const Details = ({following, followers}) => {
    return (
      <>
        <p>
          <span className="font-bold text-white">{following}</span> Following
        </p>
        <p>
          <span className="font-bold text-white">{followers}</span> Followers
        </p>
      </>
    );
  };