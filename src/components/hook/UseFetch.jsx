import { useState, useEffect } from "react";

export const UseFetch = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.log("tenemos una cagada" + error));
  };
  return { getJoke, joke };
};
