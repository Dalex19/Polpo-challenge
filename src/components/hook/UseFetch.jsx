import React from "react";

export const UseFetch = () => {
  const [joke, setJoke] = React.useState("");

  const getJoke = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((error) => console.log(`Ups! ${ error }`));
  };
  return { getJoke, joke };
};
