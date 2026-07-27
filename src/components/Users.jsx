

const Users = () => {

    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);
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

        </div>
    );
};

export default Users;