// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

// Router
import router from "./router";

// Database
import db from "../config/db";

// Logger
import Logger from "../config/logger";

// Middlerware
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();

// JSON middleware
app.use(morganMiddleware);

app.use("/api/", router);


// app port
const port = config.get<number>("port");

app.listen(3000, async () => {
    await db();

    Logger.info(`Application running on port: ${port}`);
});