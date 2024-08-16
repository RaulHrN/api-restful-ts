import { body } from "express-validator"


export const movieCreateValidation = () => {
    return [
        body("title").isString().withMessage("Title required.").isLength({min: 5}).withMessage("Title needs at least 5 characters."),
        body("rating").isNumeric().withMessage("Rating needs to be a number.").custom((value: number) => {
            if (value < 0 || value > 10) {
                throw new Error("Rating between 0 and 10.");
            }
        }),
        body("description").isString().withMessage("Description is required."),
        body("director").isString().withMessage("Director is required."),
        body("poster").isURL().withMessage("Image needs to a URL."),
    ]
}