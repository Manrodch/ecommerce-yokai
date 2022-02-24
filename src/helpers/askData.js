import { stock } from "../data/stock";

export const askData = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 1000);
  });
};
