import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import ProductCard from '../../components/product/ProductCard';
import { getProducts } from '../../utils/data/productData';

function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const showProducts = () => {
    getProducts().then((data) => setProducts(data));
  };
  useEffect(() => {
    showProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <article className="products">
        <h1>Products</h1>

        <Button
          onClick={() => {
            router.push('/products/new');
          }}
        >
          Register New Product
        </Button>
        {products.map((product) => (
          <section key={`product--${product.id}`} className="post">
            <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} onUpdate={showProducts} />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
