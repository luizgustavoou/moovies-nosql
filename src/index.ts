import express from "express";
import "@/infra/databases/mongoose";
import { IMovie, Movie } from "@/domain/entities/moovie.entity";
import { HydratedDocument } from "mongoose";

const app = express();
const PORT = 3000;



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
