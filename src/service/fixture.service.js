import Fixture from "../schema/fixture.schema.js";
import fixtureDTO from "../dto/fixture.dto.js";
import fixtureRepository from "../repository/fixture.repository.js";
import cacheService from "./cache.service.js";
import hashUtility from "../utility/hash.utility.js";

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
        const fixtures = await fixtureRepository.search(ctx);
        
        return fixtureDTO.generateFixturesResponse(fixtures);
    },
    async getFixturesByLeague(ctx) {
        const { limit = 100, page = 1, sort = 'ASC'} = ctx.query;
        const fixtures = await Fixture
            .find({league: ctx.params.league})
            .limit(parseInt(limit)).skip(((page - 1) * limit));
        ;
        
        return fixtureDTO.generateFixturesResponse(fixtures);
    },
    cacheFixtureResponse(ctx, response) {
        cacheService.set(
            hashUtility.generateUrlHash(ctx.url),
            response,
            5
        );
    }
}