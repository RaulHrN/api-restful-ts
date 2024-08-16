// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";

const app = express();

// JSON middleware
app.use("/api/", router);

// Routes
app.use

// app port
const port = config.get<number>("port");

app.listen(3000, async () => {
    await db();

    Logger.info(`Application running on port: ${port}`);
});