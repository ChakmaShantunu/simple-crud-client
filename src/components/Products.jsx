

const Products = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const product = { name, price };
        console.log(product);
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