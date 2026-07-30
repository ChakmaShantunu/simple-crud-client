import { useLoaderData } from "react-router";


const UpdateCategory = () => {
    const category = useLoaderData();
    console.log(category);

    const handleUpdateCategory = e => {
        e.preventDefault();

        const form = e.target;
        const category_name = form.category_name.value;
        const slug = form.slug.value;
        const updatedCategory = { category_name, slug };
        console.log(updatedCategory);

        // update into the db
        fetch(`http://localhost:3000/categories/${category._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCategory)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("update done");
                    console.log(data);
                }
            })
    }
    return (
        <div>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Update Category</h2>

                <div>
                    <form onSubmit={handleUpdateCategory}>
                        <input type="text" name="category_name" defaultValue={category.category_name} placeholder="Category Name" />
                        <br />
                        <input type="text" name="slug" defaultValue={category.slug} placeholder="Slug" />
                        <br />
                        <input type="submit" value="Add Category" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateCategory;