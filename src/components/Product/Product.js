import Sepuku from "../ItemListContainer/Sepuku.png";
import { Button, Card } from "react-bootstrap";

export const Product = ({ title, content }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Sepuku} />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
