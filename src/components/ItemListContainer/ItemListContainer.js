import "./ItemList.scss";
import { useEffect, useState } from "react";
import { askData } from "../../helpers/askData";
import { ItemList } from "../Itemlist/ItemList";
export const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    askData()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>{loading ? <h2>Loading...</h2> : <ItemList Items={Items} />}</div>
  );
};
