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
                .then(data => {
                    return data;
                });
    },
}