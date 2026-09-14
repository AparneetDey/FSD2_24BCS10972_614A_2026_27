import express from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
)
app.use(express.json());

const users = [
    {
        id: 1,
        username: "Aparneet",
        isLoggedIn: true
    }
]

app.get("/api/users", (req, res) => {
    console.log("Get")
    res
    .status(200)
    .json(users)
})

app.post("/api/users", (req, res) => {
    const {username} = req.body;

    if(!username || username.trim() === "") {
        res
        .status(401)
        .json("Username is required")
    }

    const newUser = {
        id: Date.now(),
        username,
        isLoggedIn: true
    };
    users.push(newUser)

    res
    .status(201)
    .json(newUser)
})

app.delete("/api/users/:id", (req, res) => {
    let {id} = req.params;
    id = Number(id);

    if(!users.some(user => user.id === id)) {
        res
        .status(404)
        .json("User does not exist")
    }

    users.filter(user => user.id !== id);

    res
    .status(200)
    .json("User deleted successfully")
})

export default app;