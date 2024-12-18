import express from "express";

import "@/infra/databases/mongodb/mongoose";
import { MongooseConnection } from "@/infra/databases/mongodb/mongoose";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post(
    "/:collection",
    async (req: express.Request, res: express.Response) => {
        const { collection } = req.params;

        const connection = await MongooseConnection.getInstance();

        try {
            const result = await connection.db
                .collection(collection)
                .insertOne(req.body);

            if (result.acknowledged) {
                res.status(201).json({ result });
            } else {
                res.status(500).json({ message: "Erro ao inserir documento" });
            }
        } catch (error) {
            res.status(500).json({
                message: "Erro ao inserir documento",
                error: error.message,
            });
        }
    }
);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
