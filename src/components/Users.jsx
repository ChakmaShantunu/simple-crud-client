import { use, useState } from "react";


const Users = ({ usersPromise }) => {

    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);
    console.log(initialUsers);

    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);


        // create user in the db

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after creating user in the db', data);
                if (data.insertedId) {
                    user._id = data.insertedId;
                    const newUsers = [...users, user];
                    setUsers(newUsers);
                    alert("User added succesfully");
                    form.reset();
                }
            })
    }

    const handleUserDelete = (id) => {
        console.log('user delete done', id);
    }


    return (
        <div>

            {/* add user */}
            <div>
                <form onSubmit={handleAddUser}>
                    <input type="text" name="name" />
                    <br />
                    <input type="email" name="email" />
                    <br />
                    <input type="submit" value="add user" />
                </form>
            </div>

            {/* view users */}

            {
                users.map((user) => <p key={user._id}>{user.name} : {user.email} <button onClick={() => handleUserDelete(user._id)}>X</button></p>)
            }

        </div>
    );
};

export default Users;