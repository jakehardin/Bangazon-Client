import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Image } from 'react-bootstrap';
import { getSingleProduct } from '../../utils/data/productData';

function ViewProduct() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const { id } = router.query ?? {};

  useEffect(() => {
    getSingleProduct(id).then(setProductDetails);
  }, [id]);

  return (
    <>
      <Head>
        <title>{productDetails?.name}</title>
      </Head>
      <div className="mt-5 d-flex flex-wrap post-details-cont">
        <div className="d-flex flex-column post-details-cont" />
        <div className="text-white ms-5 details">
          <div className="post-details-cont">
            <div className="post-img-details">
              <Image src={productDetails?.image} alt={productDetails?.image} className="post-img-detail" />
            </div>
            <div className="post-content-cont">
              <h2 className="post-details-title">{productDetails?.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
