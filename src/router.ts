import { Router, Request, Response } from "express";

// Controller
import { createMovie, getAllMovies, findMovieById, removeMovie, updateMovie } from "./controllers/movieControllers";

// Validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API working.");
})
.post("/movie", movieCreateValidation(), validate, createMovie)
.get("/movie", getAllMovies)
.get("/movie/:id", findMovieById)
.patch("/movie/:id", updateMovie)
.delete("/movie/:id", movieCreateValidation(), validate, removeMovie);