export const ConfigBtns = (counter, max, min, Add, Remove) => {
  const configRemove = {
    className: `btn ${
      counter === min ? "btn-outline-danger " : "btn-outline-primary"
    }`,
    disabled: counter === min,
    onClick: Remove,
  };

  const configAdd = {
    className: `btn ${counter === max ? "btn-danger" : "btn-primary"}`,
    disabled: counter === max,
    onClick: Add,
  };

  return { configRemove, configAdd };
};
