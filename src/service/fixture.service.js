import Fixture from "../schema/fixture.schema.js";

export default {
    async create(fixtureSchema) {
        const _fixture = await Fixture.findOne({hash: fixtureSchema.hash});
        if (!_fixture) {
            return fixtureSchema.save();
        } else {
            return fixtureSchema;
        }
    }
}