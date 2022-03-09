import {
  collection,
  addDoc,
  Timestamp,
  where,
  writeBatch,
  query,
  documentId,
  getDocs,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { KartContext } from "../../Context/KartContext";
import { db } from "../../firebase/config";

export const Checkout = () => {
  const { kart, kartTotal, EmptyKart } = useContext(KartContext);

  const [orderId, setOrderId] = useState(null);

  const generateOrder = async () => {
    const order = {
      buyer: values,
      items: kart,
      total: kartTotal(),
      dateHour: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "products");

    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        kart.map((el) => el.id)
      )
    );
    const products = await getDocs(q);
    const outOfStock = [];

    products.docs.forEach((doc) => {
      const itemUpdate = kart.find((el) => el.id === doc.id);

      if (doc.data().stock >= itemUpdate.amount) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemUpdate.amount,
        });
      } else {
        outOfStock.push(itemUpdate);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(ordersRef, order).then((doc) => {
        batch.commit();
        setOrderId(doc.id);
        EmptyKart();
      });
    } else {
      alert("items out of stock");
    }
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.name.length < 3) {
      alert("Invalid name");
      return;
    }
    if (values.email.length < 7) {
      alert("Invalid mail");
      return;
    }
    if (values.phone.length < 8) {
      alert("Invalid phone");
      return;
    }
    generateOrder();
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Thanks for buying</h2>
        <hr />
        <h3>Your ID order is: {orderId} </h3>
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
      </div>
    );
  }

  if (kart.length === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Your name"
          value={values.name}
          onChange={handleInputChange}
          name="name"
        />
        <input
          className="form-control my-2"
          type="text"
          placeholder="Your mail"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <input
          className="form-control my-2"
          type="phone"
          placeholder="Your phone"
          value={values.phone}
          onChange={handleInputChange}
          name="phone"
        />

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};
