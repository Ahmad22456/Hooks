import Card from 'react-bootstrap/Card';

function AddedCard({title, description, posterURL, rating}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{rating}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AddedCard;