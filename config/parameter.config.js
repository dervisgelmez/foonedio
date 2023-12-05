import dotenv from "dotenv-safe";

dotenv.config({
    allowEmptyValues: true,
});

export default {
    PORT: process.env.PORT || 9000,
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost/local",
    REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
};