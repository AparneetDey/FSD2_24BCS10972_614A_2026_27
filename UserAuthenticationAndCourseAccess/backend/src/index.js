import app from "./app.js";

const PORT = 5000;

app.listen(PORT, () => {
    console.log("[SERVER ON] Server is listening on", PORT);
})