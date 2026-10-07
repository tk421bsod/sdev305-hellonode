import express from 'express';

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Node");
});

app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
});