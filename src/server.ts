import express from "express";
import "@/infra/databases/mongodb/mongoose";
import { MongooseConnection } from "@/infra/databases/mongodb/mongoose";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
