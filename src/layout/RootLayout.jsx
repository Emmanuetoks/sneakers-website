import { useContext } from "react";
import NavBar from "../components/NavBar";
import countContext from "../context/itemCount";
import { CountProvider } from "../context/itemCount";
const RootLayout = ({ children }) => {
  return (
    <CountProvider>
      <div
        className="pos-rel no-overflow-x flex bg-white"
        style={{ height: "100%", flexDirection: "column" }}
      >
        <header>
          <NavBar />  
        </header>
        {children}
      </div>
    </CountProvider>
  );
};

export default RootLayout;
