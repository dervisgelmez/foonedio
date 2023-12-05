import fixtureService from "../service/fixture.service.js"

async function list(ctx, next) {
    const response = await fixtureService.getFixtures(ctx);
    fixtureService.cacheFixtureResponse(ctx, response);

    ctx.body = response;
    await next();
}

async function listByLeague(ctx, next) {
    const response = await fixtureService.getFixturesByLeague(ctx);
    fixtureService.cacheFixtureResponse(ctx, response);
    
    ctx.body = response;
    await next();
}

export default {list, listByLeague};