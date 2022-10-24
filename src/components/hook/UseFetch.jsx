import React from "react";

export const UseFetch = () => {
  const [data, setData] = React.useState([]);

  const getInfo = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(req => setData(req))
      .catch(error => console.log(`Ups! ${ error }`));
  };
  return [data, getInfo];
};
