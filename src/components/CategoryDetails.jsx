import { useLoaderData } from "react-router";


const CategoryDetails = () => {
    const category = useLoaderData();
    console.log(category);
    return (
        <div>

        </div>
    );
};

export default CategoryDetails;