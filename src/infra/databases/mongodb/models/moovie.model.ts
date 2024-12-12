import mongoose from "mongoose";

export interface IMovie {
    title: string;
    rating: string;
    releaseYear: number;
    hasCreditCookie: boolean;
}

export interface IMovieDoc extends IMovie, mongoose.Document {}

export interface IMovieModel extends mongoose.Model<IMovieDoc> {}

const MovieSchemaFields: mongoose.SchemaDefinition<IMovie> = {
    title: { type: String },
    rating: String,
    releaseYear: Number,
    hasCreditCookie: Boolean,
};

export const movieSchema = new mongoose.Schema<IMovieDoc>(MovieSchemaFields);

export const Movie = mongoose.model<IMovieDoc, IMovieModel>(
    "Movie",
    movieSchema
);

