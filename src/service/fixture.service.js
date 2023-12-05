import Fixture from "../schema/fixture.schema.js";
import fixtureDTO from "../dto/fixture.dto.js"; 

export default {
    async create(fixtureSchema) {
        const _fixture = await Fixture.findOne({hash: fixtureSchema.hash});
        if (!_fixture) {
            return fixtureSchema.save();
        } else {
            return fixtureSchema;
        }
    },
    async getFixtures(ctx) {
        const { limit = 100, page = 1} = ctx.query;
        const fixtures = await Fixture.find().limit(parseInt(limit)).skip(((page - 1) * limit));
        
        return fixtureDTO.generateFixturesResponse(fixtures);
    },
    async getFixturesByLeague(ctx) {
        const { limit = 100, page = 1} = ctx.query;
        const fixtures = await Fixture.find({league: ctx.params.league}).limit(parseInt(limit)).skip(((page - 1) * limit));
        
        return fixtureDTO.generateFixturesResponse(fixtures);
    }
}