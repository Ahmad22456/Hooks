import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({title, description, posterURL, rating, add}) {

  const handleClick = (e) => {
    add(title)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Rating: {rating}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={(e) => {handleClick(e)}}>Add Movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;