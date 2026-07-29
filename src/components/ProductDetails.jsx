
import { useLoaderData } from 'react-router';

const ProductDetails = () => {

    const products = useLoaderData();
    console.log(products);
    return (
        <div>

        </div>
    );
};

export default ProductDetails;