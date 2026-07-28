import { use, useState } from "react";


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
                    const newProducts = [...products, data];
                    setProducts(newProducts);
                    form.reset()
                }
            })
    }
    return (
        <div>
            <div>
                <form onSubmit={handleAddProduct}>
                    <input type="text" name="name" />
                    <br />
                    <input type="number" name="price" />
                    <br />
                    <input type="submit" value="add product" />
                </form>
            </div>
        </div>
    );
};

export default Products;