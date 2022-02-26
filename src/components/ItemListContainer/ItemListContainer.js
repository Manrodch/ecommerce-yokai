import "./ItemList.scss";
import { useEffect, useState } from "react";
import { askData } from "../../helpers/askData";
import { ItemList } from "../Itemlist/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(Items);
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");
    const q = catId
      ? query(productsRef, where("category", "==", catId))
      : productsRef;

    getDocs(q)
      .then((resp) => {
        setItems(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return <>{loading ? <h2>Loading...</h2> : <ItemList Items={Items} />}</>;
};
