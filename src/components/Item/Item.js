import { Button, Card } from "react-bootstrap";

export const Item = ({ name, price, img, disc }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>Price{disc}</Card.Text>
          <Card.Text>Price{price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
