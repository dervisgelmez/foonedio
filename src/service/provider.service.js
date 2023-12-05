import Fixture from "../schema/fixture.schema.js";
import fixtureService from "../service/fixture.service.js";
import stringUtility from "../utility/string.utility.js";
import hashUtility from "../utility/hash.utility.js";

export default {
    getProviders() {
        return [
            "https://static.onedio.com/case-studies/1819-E0.csv",
            "https://static.onedio.com/case-studies/1718-E0.csv",
            "https://static.onedio.com/case-studies/1819-D1.csv",
            "https://static.onedio.com/case-studies/1718-D1.csv"
        ];
    },
    async fetchFixtureByProvider(provider) {
        return fetch(provider)
                .then(response => response.text())
                .then(_data => {
                    return stringUtility.csvToArray(_data);
                });
    },
    createFixtureByProviderData(_providerData) {
        const fixtureSchema = this.createFixtureSchemaByProviderData(_providerData);
        return fixtureService.create(fixtureSchema);
    },
    createFixtureSchemaByProviderData(_providerData) {
        return new Fixture({
            hash: hashUtility.generateProviderDataHash(_providerData),
            league: stringUtility.findLeagueNameByDivision(_providerData.Div),
            referee: _providerData.Referee,
            matchDate: stringUtility.parseDateString(_providerData.Date),
            homeTeamName: _providerData.HomeTeam,
            awayTeamName: _providerData.AwayTeam,
            homeTeamHalfTimeGoal: _providerData.HTHG,
            awayTeamHalfTimeGoal: _providerData.HTAG,
            homeTeamFullTimeGoal: _providerData.FTHG,
            awayTeamFullTimeGoal: _providerData.FTAG,
            halfTimeResult: _providerData.HTR,
            fullTimeResult: _providerData.FTR
        });
    },
}