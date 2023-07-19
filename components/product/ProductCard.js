/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import { deleteProduct } from '../../utils/data/productData';
// import { useAuth } from '../../utils/context/authContext';

const ProductCard = ({
  id,
  name,
  price,
  image,
}) => {
  // const { user } = useAuth();
  const router = useRouter();

  const deleteThisProduct = () => {
    if (window.confirm('Delete Product?')) {
      deleteProduct(id).then(() => {
        // Perform any necessary actions after deleting the post
        // eslint-disable-next-line no-console

        ('Product deleted');
      });
    }
  };
  return (
    <Card className="text-center">
      <Card.Title> {name}</Card.Title>
      <Card.Body>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Body>
          <img src={image} alt="postimage" style={{ width: '200px' }} />
        </Card.Body>
        {/* <Card.Footer>User Id: {rareUserId.first_name} {rareUserId.last_name}</Card.Footer> */}
      </Card.Body>
      <Button
        onClick={() => {
          router.push(`/products/${id}`);
        }}
      >
        View Product
      </Button>
      <Button
        onClick={() => {
          router.push(`/product/edit/${id}`);
        }}
      >
        Edit Post
      </Button>
      <Button onClick={deleteThisProduct}>Delete Product</Button>
      <Button>Add To Cart</Button>
    </Card>
  );
};
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
