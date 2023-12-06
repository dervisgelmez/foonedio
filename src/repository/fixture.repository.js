import Fixture from "../schema/fixture.schema.js";

export default {
    async search(ctx) {
        const { limit = 100, page = 1, sort = 'DESC'} = ctx.query;

        return await Fixture
            .find(this.prepareFixtureFilter(ctx))
            .limit(parseInt(limit)).skip(((page - 1) * limit))
            .sort({matchDate: sort.toLowerCase()});
    },
    prepareFixtureFilter(ctx) {
        let filter = {};
        if (ctx.query.league) {
            filter.league = ctx.query.league;
        }
        if (ctx.query.homeTeam) {
            filter.homeTeamName = ctx.query.homeTeam;
        }
        if (ctx.query.awayTeam) {
            filter.awayTeamName = ctx.query.awayTeam;
        }
        if (ctx.query.team) {
            filter.$or = [
                { homeTeamName: ctx.query.team },
                { awayTeamName: ctx.query.team }
            ];
        }
        return filter;
    }
}