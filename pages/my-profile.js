import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
// import Image from 'next/image';
import { getProducts } from '../utils/data/productData';
import ProductCard from '../components/product/ProductCard';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  const showProducts = () => {
    getProducts().then((data) => setProducts(data));
  };
  useEffect(() => {
    showProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (

    <div className="text-center my-4">
      <div className="text-right my-4">
        <Button variant="danger" onClick={signOut}> Sign Out</Button>
        <div className="text-center my-4">
          {/* <Image src={user.photoURL} alt="userURL" width="100px" height="100px" /> */}
          <h1>{user.displayName}</h1>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {products.map((product) => (
          <section key={`product--${product.id}`} className="post">
            <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} onUpdate={showProducts} />
          </section>
        ))}
      </div>

    </div>
  );
}
