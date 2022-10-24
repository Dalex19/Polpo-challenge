import React from "react";
import { UseFetch } from "../hook/UseFetch";

export const jokeContext = React.createContext();

export const JokeContext = ({ children }) => {

  const [joke, setJoke] = React.useState("");
  
return (
    <jokeContext.Provider value={{ joke, setJoke }}>
      {children}
    </jokeContext.Provider>
  );
};
