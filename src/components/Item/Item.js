import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Item = ({ id, name, price, img, disc }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>Price{disc}</Card.Text>
          <Card.Text>Price{price}</Card.Text>
          <Link to={`/detail/${id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
