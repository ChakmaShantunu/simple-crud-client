import { use, useState } from "react";
import { Link } from "react-router";


const Products = ({ productsPromise }) => {

    const initialProducts = use(productsPromise);
    const [products, setProducts] = useState(initialProducts);
    console.log(initialProducts);

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const product = { name, price };
        console.log(product);

        fetch("http://localhost:3000/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after post', data);
                if (data.insertedId) {
                    product._id = data.insertedId;
                    const newProducts = [...products, product];
                    setProducts(newProducts);
                    form.reset()
                }
            })
    }

    const handleDeleteProduct = (id) => {
        console.log("product deleted", id);

        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingProduct = products.filter(product => product._id != id);
                    setProducts(remainingProduct);
                    alert("Delete Complete");
                }
                console.log('data after delete', data);
            })
    };


    return (
        <div>
            <div>
                <h2>Products: {products.length}</h2>
                <form onSubmit={handleAddProduct}>
                    <input type="text" name="name" />
                    <br />
                    <input type="number" name="price" />
                    <br />
                    <input type="submit" value="add product" />
                </form>
            </div>

            <div>
                {
                    products.map((product) => <p key={product._id}>{product.name} : {product.price} <Link to={`/products/${product._id}`}>Details</Link> <Link to={`/update/product/${product._id}`}>Edit</Link> <button onClick={() => handleDeleteProduct(product._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Products;