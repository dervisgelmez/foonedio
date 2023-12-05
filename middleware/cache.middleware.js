import cacheService from "../src/service/cache.service.js";
import hashUtility from "../src/utility/hash.utility.js";

const handle = () => async (ctx, next) => {
    const cacheKey = hashUtility.generateUrlHash(ctx.url);
    if(await cacheService.has(cacheKey)) {
        console.log('🟠 Response from cache');
        ctx.body = await cacheService.get(cacheKey);
    } else {
        console.log('🔵 Response from controller');
        await next();
    }
};

export default {
    handle,
};