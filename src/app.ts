import express from "express";
import config from "config";
import router from "./router";

const app = express();

// JSON middleware
app.use("/api/", router);

// Routes
app.use

// app port
const port = config.get<number>("port");

app.listen(3000, async () => {
    console.log(`Application running on port: ${port}`);
});