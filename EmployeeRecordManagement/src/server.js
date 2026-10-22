import {app} from './app.js';

const PORT = 8000;

app.listen(PORT, () => {
    console.log("[SERVER] Server is on and running on port", PORT);
})