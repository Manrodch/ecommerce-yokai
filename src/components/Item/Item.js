import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Item = ({ id, name, price, img, disc, sale }) => {
  const discountPrice = sale ? price * 0.85 : price;

  return (
    <>
      <Card style={{ width: "18rem", margin: "12px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>Price{disc}</Card.Text>

          {sale && <Card.Title>15 % Off </Card.Title>}
          <Card.Text>Price: ${discountPrice}</Card.Text>

          <Link to={`/detail/${id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
