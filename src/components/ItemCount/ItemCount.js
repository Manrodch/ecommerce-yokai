import { ConfigBtns } from "./ConfigBtns";

export const ItemCount = ({ max, min = 0, counter, setCounter }) => {
  const handleAdd = (e) => {
    counter < max && setCounter(counter + 1);
  };

  const handleRemove = () => {
    counter > min && setCounter(counter - 1);
  };

  const { configRemove, configAdd } = ConfigBtns(
    counter,
    max,
    min,
    handleAdd,
    handleRemove
  );
  return (
    <div>
      <button {...configRemove}>-</button>
      <span className="mx-3"> {counter} </span>
      <button {...configAdd}>+</button>
    </div>
  );
};
