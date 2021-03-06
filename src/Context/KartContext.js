import { createContext, useState } from "react";

export const KartContext = createContext();

export const KartProvider = ({ children }) => {
  const [kart, setKart] = useState([]);

  const addToKart = (item) => {
    console.log(isInKart(item.id));
    setKart([...kart, item]);
  };

  const isInKart = (id) => {
    return kart.some((item) => item.id === id);
  };

  const kartAmount = () => {
    return kart.reduce((acc, item) => acc + item.amount, 0);
  };
  const kartTotal = () => {
    return kart.reduce((acc, item) => acc + item.amount * item.price, 0);
  };

  const EmptyKart = () => {
    setKart([]);
  };

  const RemoveItem = (id) => {
    setKart(kart.filter((item) => item.id !== id));
  };

  return (
    <KartContext.Provider
      value={{
        kart,
        addToKart,
        isInKart,
        kartAmount,
        kartTotal,
        EmptyKart,
        RemoveItem,
      }}
    >
      {children}
    </KartContext.Provider>
  );
};
