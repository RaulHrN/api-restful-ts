import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        Logger.info("Database connected.");
    } catch (error) {
        Logger.error("Connection failed.");
        Logger.error(`Error: ${error}`);
        process.exit(1);
    }
}

export default connect;
