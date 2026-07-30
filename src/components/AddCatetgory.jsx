import { use, useState } from "react";
import { Link } from "react-router";


const AddCategory = ({ categoryPromise }) => {

    const initialCategories = use(categoryPromise);
    const [categories, setCategories] = useState(initialCategories);
    console.log(categories);

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
                if (data.insertedId) {
                    categories._id = data.insertedId;
                    const newCategories = [...categories, category];
                    setCategories(newCategories);
                    alert("Category post done");
                    form.reset();
                }
            })
    }

    const handleDeleteCategory = (id) => {
        console.log('category deleted', id);

        fetch(`http://localhost:3000/categories/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingCategories = categories.filter((category) => category._id != id);
                    setCategories(remainingCategories);
                    alert("Delete Done");
                }
            })
    }


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Category: {categories.length}</h2>

            <div>
                <form onSubmit={handleAddCategory}>
                    <input type="text" name="category_name" placeholder="Category Name" />
                    <br />
                    <input type="text" name="slug" placeholder="slug" />
                    <br />
                    <input type="submit" value="Add Category" />
                </form>
            </div>

            <div>
                {
                    categories.map((category) => <p key={category._id}>{category.category_name} : {category.slug}
                        <Link to={`/categories/${category._id}`}>Details</Link>
                        <Link to={`/categories/${category._id}`}>Edit</Link>
                        <button onClick={() => handleDeleteCategory(category._id)}>X</button></p>)
                }
            </div>
            <br />
            <br />
        </div>
    );
};

export default AddCategory;