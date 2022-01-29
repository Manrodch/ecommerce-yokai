export const ContainerDesign = ({ children }) => {
  const ContStyle = {
    margin: "0 auto",
    maxWidth: "1000px",
  };

  return <div style={ContStyle}>{children}</div>;
};
