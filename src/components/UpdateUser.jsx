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

        // update user into the db
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Update done");
                    console.log(data);
                }
            })
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