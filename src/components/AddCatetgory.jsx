

const AddCategory = () => {

    const handleAddCategory = e => {
        e.preventDefault();
        const form = e.target;
        const category_name = form.category_name.value;
        const slug = form.slug.value;
        const category = { category_name, slug };
        console.log(category);

        // add category in the server
        fetch("http://localhost:3000/categories", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after post category', data);
            })
    }


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Category: { }</h2>

            <div>
                <form onSubmit={handleAddCategory}>
                    <input type="text" name="category_name" placeholder="Category Name" />
                    <br />
                    <input type="text" name="slug" placeholder="slug" />
                    <br />
                    <input type="submit" value="Add Category" />
                </form>
            </div>
            <br />
            <br />
        </div>
    );
};

export default AddCategory;