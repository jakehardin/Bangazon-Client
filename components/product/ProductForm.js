import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createProduct, updateProduct } from '../../utils/data/productData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  image: '',
  price: '',
};

const ProductForm = ({ obj }) => {
  const [currentProduct, SetCurrentProduct] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      SetCurrentProduct({
        id: obj.id,
        name: obj.name,
        image: obj.image,
        price: obj.price,
        uid: user.uid,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    SetCurrentProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    if (obj.id) {
      const productUpdate = {
        id: obj.id,
        name: currentProduct.name,
        image: currentProduct.image,
        price: currentProduct.price,
        uid: user.uid,
      };

      updateProduct(productUpdate)
        .then(() => router.push('/post'));
    } else {
      const products = {
        name: currentProduct.name,
        image: currentProduct.image,
        price: currentProduct.price,
        uid: user.uid,
      };

      createProduct(products).then(() => router.push('/product'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Product</h2>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentProduct.name} onChange={handleChange} type="string" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control name="image" required value={currentProduct.image} onChange={handleChange} type="string" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" required value={currentProduct.price} onChange={handleChange} type="string" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  );
};

ProductForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
  }),
};

ProductForm.defaultProps = {
  obj: initialState,
};
export default ProductForm;
