/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import { deleteOrder } from '../../utils/data/orderData';
// import { useAuth } from '../../utils/context/authContext';

const OrderCard = ({
  id,
  date,
}) => {
  // const { user } = useAuth();
  const router = useRouter();

  const deleteThisOrder = () => {
    if (window.confirm('Delete Order?')) {
      deleteOrder(id).then(() => {
        // Perform any necessary actions after deleting the post
        // eslint-disable-next-line no-console

        ('Order deleted');
      });
    }
  };
  return (
    <Card className="text-center">
      <Card.Title> Order: {id}</Card.Title>
      <Card.Body>
        <Card.Text>Date: {date}</Card.Text>
        {/* <Card.Footer>User Id: {rareUserId.first_name} {rareUserId.last_name}</Card.Footer> */}
      </Card.Body>
      <Button
        onClick={() => {
          router.push(`/orders/${id}`);
        }}
      >
        View Order
      </Button>
      <Button
        onClick={() => {
          router.push(`/orders/edit/${id}`);
        }}
      >
        Edit Order
      </Button>
      <Button onClick={deleteThisOrder}>Delete Order</Button>
    </Card>
  );
};
OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default OrderCard;
