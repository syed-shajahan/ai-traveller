import { ReactNode, useState } from "react";
import { createContext } from "react";

type typeGlobalContext = {
  theme: string;
  changeTheme: () => void;
};

const globalContexts = createContext<typeGlobalContext | null>(null);

const GlobalContext = ({ Children }: { Children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <globalContexts.Provider value={{ theme, changeTheme }}>
      {Children}
    </globalContexts.Provider>
  );
};

export default GlobalContext;
