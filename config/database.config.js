import mongoose from "mongoose";
import parameter from "./parameter.config.js";

export default {
    async connect() {
        mongoose.connect(parameter.MONGO_URL)
            .then(() => console.log('🟢 MongoDB connected'))
            .catch((err) => console.log(err));
    }
}