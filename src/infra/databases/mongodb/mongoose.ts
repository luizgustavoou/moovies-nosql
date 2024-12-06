import { IMovieDoc, Movie } from "@/infra/databases/mongodb/models";

import mongoose, { HydratedDocument } from "mongoose";

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/movies");

        console.log("Conexão com MongoDB bem-sucedida!");

        console.log(new mongoose.Types.ObjectId().toHexString());

        var thor: HydratedDocument<IMovieDoc> = new Movie({
            title: "Thor",
            rating: "PG-13",
            releaseYear: "2011",
            hasCreditCookie: true,
        });

        console.log("thor ", thor);
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
})();
