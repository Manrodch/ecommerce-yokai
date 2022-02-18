import { createContext } from "react";

export const KartContext = createContext();

export const KartProvider = () => {
  return <KartContext.Provider></KartContext.Provider>;
};
