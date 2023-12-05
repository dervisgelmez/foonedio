import fixtureService from "../service/fixture.service.js"

async function list(ctx, next) {
    ctx.body = await fixtureService.getFixtures(ctx);
    await next();
}

async function listByLeague(ctx, next) {
    ctx.body = await fixtureService.getFixturesByLeague(ctx);
    await next();
}

export default {list, listByLeague};