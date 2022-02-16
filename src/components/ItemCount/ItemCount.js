import { useState } from "react";

export const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = (e) => {
    setCounter(counter + 1);
  };

  const handleRemove = (e) => {
    setCounter(counter - 1);
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
