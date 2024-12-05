import { IMovie, Movie } from "@/domain/entities/moovie.entity";
import mongoose, { HydratedDocument } from "mongoose";

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/movies");

        console.log("Conexão com MongoDB bem-sucedida!");

        var thor: HydratedDocument<IMovie> = new Movie({
            title: "Thor",
            rating: "PG-13",
            releaseYear: "2011",
            hasCreditCookie: true,
        });

        console.log(thor);
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
})();
