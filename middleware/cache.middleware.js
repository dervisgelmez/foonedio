import cacheService from "../src/service/cache.service.js";
import hashUtility from "../src/utility/hash.utility.js";
import parameter from "../config/parameter.config.js";

const handle = () => async (ctx, next) => {
    const cacheKey = hashUtility.generateUrlHash(ctx.url);
    if(await cacheService.has(cacheKey) && parameter.APP !== 'DEV') {
        console.log('🟠 Response from cache');
        const response = await cacheService.get(cacheKey);
        ctx.body = JSON.parse(response);
    } else {
        console.log('🔵 Response from controller');
        await next();
    }
};

export default {
    handle,
};