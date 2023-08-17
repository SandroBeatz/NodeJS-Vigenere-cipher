import express from "express";
import cors from "cors";
import ciphersRouter from "./routes/ciphers";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/ciphers', ciphersRouter);

app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});
