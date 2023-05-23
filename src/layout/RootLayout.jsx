import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import countContext from "../context/itemCount";
import { CountProvider } from "../context/itemCount";
import ItemProvider from "../context/itemContext";
import { ItemContext } from "../context/itemContext";

const RootLayout = ({ children }) => {
  const [itemDetails, setItemDetails] = useState([])
  return (
    <CountProvider>
      <ItemContext.Provider value={[itemDetails, setItemDetails]}>
        <div
          className="pos-rel no-overflow-x flex bg-white layout"
          style={{ height: "100%", flexDirection: "column" }}
        >
          <header className="layout__header">
            <NavBar />
          </header>
          {children}
        </div>
      </ItemContext.Provider>
    </CountProvider>
  );
};

export default RootLayout;
