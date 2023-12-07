import express from "express";
import bodyParser from "body-parser"
import userRoutes from './routes/users.js'
const app = express();
const PORT = 5000

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users/', userRoutes)

app.listen(PORT, () =>
    console.log(`server is listening on port: http://localhost:${PORT}`)
)