import { createHmac } from "crypto";

export default {
    hash(alg, string, key) {
        return createHmac(alg, key)
        .update(string)
        .digest('hex');
    },
    generateProviderDataHash(_providerData) {
        const matchDate = _providerData.Date;
        const homeTeamName = _providerData.HomeTeam;
        const awayTeamName = _providerData.AwayTeam;

        return this.hash(
            'md5',
            matchDate.concat(homeTeamName, awayTeamName),
            _providerData.Div
        );
    },
    generateUrlHash(url) {
        const hash = this.hash('md5', url, 'urlHash');
        return `rsp_${hash}`;
    },
}