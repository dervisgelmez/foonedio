import redis from "../../config/redis.config.js";

const redisClient = await redis.connect();

export default {
    has(key) {
        return redisClient.exists(key);
    },
    get(key) {
        return redisClient.get(key);
    },
    set(key, data, minute = 60) {
        const serializedData = JSON.stringify(data);
        return redisClient.set(key, serializedData, {
            EX: (minute * 60),
            NX: true
        });
    },
    async delete(key) {
        const keysToDelete = await redisClient.keys(key);
        if (keysToDelete.length > 0) {
            await redisClient.del(keysToDelete);
        }
    }
}