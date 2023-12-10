import app from "./api/server.js";

const port = process.env.port || 8000;

app.listen(port, () => console.log(`*** Server listening on port ${port} ***`));
