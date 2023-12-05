import redis from "redis";
import parameter from "./parameter.config.js";

export default {
    async connect() {
        const client = redis.createClient({
            url: parameter.REDIS_URL,
            socket: {
                reconnectStrategy: false
            }
        });
        try {
            await client
                .on('ready', () => console.log('🟢 Redis client connected'))
                .connect();
            return client;
        } catch(e) {
            console.log(e.message);
            return null;
        }
    }
}