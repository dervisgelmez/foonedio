import dotenv from "dotenv-safe";

dotenv.config();

export default {
    PORT: process.env.PORT || 9000,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/local',
};