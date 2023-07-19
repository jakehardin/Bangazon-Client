import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import OrderCard from '../../components/order/OrderCard';
import { getOrders } from '../../utils/data/orderData';

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  const showOrders = () => {
    getOrders().then((data) => setOrders(data));
  };
  useEffect(() => {
    showOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <article className="orders">
        <h1>Orders</h1>

        <Button
          onClick={() => {
            router.push('/order/new');
          }}
        >
          Create New Order
        </Button>
        {orders.map((order) => (
          <section key={`order--${order.id}`} className="post">
            <OrderCard id={order.id} date={order.date} onUpdate={showOrders} />
          </section>
        ))}
      </article>
    </>
  );
}

export default OrdersPage;
