import { createContext, useState } from "react";

const countContext = createContext("");

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={[count, setCount]}>{children}</countContext.Provider>
  );
};

export default countContext;
export { CountProvider};

