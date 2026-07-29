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

        // update product info into the db
        fetch(`http://localhost:3000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Product update done");
                    console.log(data);
                }
            })
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