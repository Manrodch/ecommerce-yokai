import "./ItemList.scss";
import { useEffect, useState } from "react";
import { askData } from "../../helpers/askData";
import { ItemList } from "../Itemlist/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();
  console.log(catId);

  useEffect(() => {
    setLoading(true);

    askData()
      .then((res) => {
        if (catId) {
          setItems(res.filter((el) => el.category === catId));
        } else {
          setItems(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return <>{loading ? <h2>Loading...</h2> : <ItemList Items={Items} />}</>;
};
