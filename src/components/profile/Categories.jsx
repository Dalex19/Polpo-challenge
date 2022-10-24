import React from "react";
import { jokeContext } from "../context/JokeContext";
import { UseFetch } from "../hook/UseFetch";

export const Categories = () => {
  const chuckApiCategories = `https://api.chucknorris.io/jokes/categories`;
  
  const [data, getInfo] = UseFetch();
  const [jokeR, getJokeR] = UseFetch();
  const [jokeC, getJokeC] = UseFetch()

  const {setJoke} = React.useContext(jokeContext);

  React.useEffect(() => {
    getInfo(chuckApiCategories)
  }, []);

  const getJokeRandom = () => {
    getJokeR('https://api.chucknorris.io/jokes/random');
    let newValue = ({value: `${jokeR.value}`, categorie: 'random'})
    setJoke(newValue);

  }

  const getJokeCate = (cate) => {
    getJokeC(`https://api.chucknorris.io/jokes/random?category=${cate}`)
    let newValue = ({value: `${jokeC.value}`, categorie: `${cate}`})
    setJoke(newValue);

  }
  
  return (
    <div className="w-[95%] mx-auto h-[80px] flex items-center gap-2 justify-between text-white overflow-x-hidden">
      <h2 onClick={getJokeRandom} className="cursor-pointer active:border-b-4 border-blue-600">Random</h2>
      <ul className="flex w-auto justify-start items-center h-full overflow-x-auto gap-6 px-1 text-gray-500">
        {
          data.map((item, index) => (
            <button key={index} onClick={() => getJokeCate(item)} className='cursor-pointer active:border-b-4 border-blue-600'>{item}</button>
          ))
        }
      </ul>
    </div>
  );
};
