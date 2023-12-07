import { v4 as uuidv4 } from 'uuid';
uuidv4();

let users = []

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} sent to the users`);
}

export const getUser = (req, res) => {
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with the id ${id} deleted`)
}

export const updateUser = (req, res) => {
    const { id } = req.params

    const { firstName, lastName, age } = req.body

    const user = users.find(user => user.id === id)

    if (firstName && lastName && age) {
        user.firstName = firstName
        user.lastName = lastName
        user.age = age
        res.send(`User with the id ${id} updated`)
    }
}