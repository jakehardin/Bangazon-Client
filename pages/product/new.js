import ProductForm from '../../components/product/ProductForm';
import { useAuth } from '../../utils/context/authContext';

const NewPost = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2> Add Product</h2>
      <ProductForm user={user} />
    </div>
  );
};

export default NewPost;
