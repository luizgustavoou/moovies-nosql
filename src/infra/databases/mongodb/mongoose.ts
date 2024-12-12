import { IMovieDoc, Movie } from "@/infra/databases/mongodb/models";

import mongoose, { HydratedDocument } from "mongoose";

export class MongooseConnection {
    private static instance: mongoose.Connection = null;

    private constructor() {}

    public static async getInstance(): Promise<mongoose.Connection> {
        if (!MongooseConnection.instance) {
            const conn = await mongoose.connect(
                "mongodb://mongodb:27017/movies"
            );
            MongooseConnection.instance = conn.connection;
        }

        return MongooseConnection.instance;
    }
}

// (async () => {
//     try {
//         const conn = await mongoose.connect("mongodb://mongodb:27017/movies");
//         conn.connection;

//         console.log("Conexão com MongoDB bem-sucedida!");

//         console.log(new mongoose.Types.ObjectId().toHexString());

//         var thor: HydratedDocument<IMovieDoc> = new Movie({
//             title: "Thor",
//             rating: "PG-13",
//             releaseYear: "2011",
//             hasCreditCookie: true,
//         });

//         console.log("thor ", thor);
//     } catch (error) {
//         console.error("Erro ao conectar ao MongoDB:", error);
//     }
// })();
