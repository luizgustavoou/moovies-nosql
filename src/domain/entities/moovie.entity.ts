import mongoose from "mongoose";

export interface IMovie {
    title: string;
    rating: string;
    releaseYear: number;
    hasCreditCookie: boolean;
}

export const movieSchema = new mongoose.Schema<IMovie>({
    title: { type: String },
    rating: String,
    releaseYear: Number,
    hasCreditCookie: Boolean,
});

export const Movie = mongoose.model<IMovie>("Movie", movieSchema);
