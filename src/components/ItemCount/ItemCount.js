import { useEffect, useState } from "react";

export const ItemCount = ({ max, min = 0, counter, setCounter }) => {
  const handleAdd = (e) => {
    counter < max && setCounter(counter + 1);
  };

  const handleRemove = () => {
    counter > min && setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={handleRemove} className=" btn btn-outline-primary ">
        -
      </button>
      <span className="mx-3"> {counter} </span>
      <button onClick={handleAdd} className=" btn btn-primary ">
        +
      </button>
    </div>
  );
};
