// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";

const app = express();

// JSON middleware
app.use("/api/", router);

// Routes
app.use

// app port
const port = config.get<number>("port");

app.listen(3000, async () => {
    await db();

    console.log(`Application running on port: ${port}`);
});