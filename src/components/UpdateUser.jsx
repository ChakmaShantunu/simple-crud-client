import { useLoaderData } from "react-router";


const UpdateUser = () => {

    const user = useLoaderData();
    console.log(user);

    const handleUpdateUser = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);
    }
    return (
        <div>

            <div>
                <form onSubmit={handleUpdateUser}>
                    <input type="text" name="name" defaultValue={user.name} />
                    <br />
                    <input type="email" name="email" defaultValue={user.email} />
                    <br />
                    <input type="submit" value="update user" />
                </form>
            </div>

        </div>
    );
};

export default UpdateUser;