import "./ItemList.scss";
import { useEffect, useState } from "react";
import { askData } from "../../helpers/askData";
import { ItemList } from "../Itemlist/ItemList";
export const ItemListContainer = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    askData()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finished process");
      });
  }, []);

  return (
    <div>
      <ItemList Items={Items} />
    </div>
  );
};
