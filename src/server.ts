import express from "express";

import "@/infra/databases/mongodb/mongoose";
import { MongooseConnection } from "@/infra/databases/mongodb/mongoose";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/:collection", async (req: express.Request, res: express.Response) => {
    try {
        const { collection } = req.params;

        console.log(collection);

        const connection = await MongooseConnection.getInstance();

        const findCursor = await connection.db.collection(collection).find();

        const documents = await findCursor.toArray();

        res.status(200).json({ documents });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar documentos",
            error: error.message,
        });
    }
});

app.post(
    "/:collection",
    async (req: express.Request, res: express.Response) => {
        const { collection } = req.params;

        const connection = await MongooseConnection.getInstance();

        try {
            const insertResult = await connection.db
                .collection(collection)
                .insertOne(req.body);

            if (insertResult.acknowledged) {
                res.status(201).json({ insertResult });
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
