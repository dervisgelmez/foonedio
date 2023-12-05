const handle = (validate) => async (ctx, next) => {
    const requiredFields = validate.require || [];
    const max = validate.max || {};
    const min = validate.min || {};

    const missingParams = requiredFields.filter(param => !ctx.query[param]);
    if (missingParams.length > 0) {
        ctx.status = 400;
        ctx.body = { error: `Missing required parameters: ${missingParams.join(', ')}.`};
        return;
    }
    for (const param in max) {
        if (ctx.query[param] && ctx.query[param] > max[param]) {
            ctx.status = 400;
            ctx.body = { error: `${param} exceeds the maximum allowed value: ${max[param]}.`};
            return;
        }
    }
    for (const param in min) {
        if (ctx.query[param] && ctx.query[param] < min[param]) {
            ctx.status = 400;
            ctx.body = { error: `${param} exceeds the minimum allowed value: ${min[param]}.`};
            return;
        }
    }
    await next();
};

export default {
    handle,
};