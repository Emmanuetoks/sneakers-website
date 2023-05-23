import { createContext, useState } from "react";

const ItemContext = createContext()

const ItemProvider = (children) => {
  return (
    <ItemContext.Provider value={[itemDetails, setItemDetails]}>
        {children}
    </ItemContext.Provider>
  )
}

export default ItemProvider
export {ItemContext}