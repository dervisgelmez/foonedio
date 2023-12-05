import stringUtility from "../utility/string.utility.js";

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
}