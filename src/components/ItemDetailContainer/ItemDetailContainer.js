import { useEffect, useState } from "react";
import { React } from "react";
import { useParams } from "react-router-dom";
import { askData } from "../../helpers/askData";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    askData()
      .then((res) => {
        setItem(res.find((el) => el.id === Number(itemId)));
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      {loading ? <h2>loading</h2> : <ItemDetail {...item} />}
    </div>
  );
};
