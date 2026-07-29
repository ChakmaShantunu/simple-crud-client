import { useLoaderData } from "react-router";


const UpdateProducts = () => {

    const product = useLoaderData();
    console.log(product);

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const updatedProduct = { name, price };
        console.log(updatedProduct);

        
    }

    return (
        <div>

            <div>
                <form onSubmit={handleUpdateProduct}>
                    <input type="text" name="name" defaultValue={product.name} />
                    <br />
                    <input type="number" name="price" defaultValue={product.price} />
                    <br />
                    <input type="submit" value="update product" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProducts;