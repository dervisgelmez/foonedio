export default {
    generateFixturesResponse(fixtures) {
        let response = [];
        fixtures.forEach(_fixture => {
            response.push(this.generateFixtureResponse(_fixture));
        });
        return response;
    },
    generateFixtureResponse(_fixture) {
        return {
            description: this.generateResultText(_fixture),
            scoreboard: `${_fixture.homeTeamName} ${_fixture.homeTeamFullTimeGoal} - ${_fixture.awayTeamFullTimeGoal} ${_fixture.awayTeamName}`,
            homeTeam: {
                name: _fixture.homeTeamName,
                goals: {
                    firstHalf: _fixture.homeTeamHalfTimeGoal,
                    secondHalf: parseInt(_fixture.homeTeamFullTimeGoal-_fixture.homeTeamHalfTimeGoal)
                }
            },
            awayTeam: {
                name: _fixture.awayTeamName,
                goals: {
                    firstHalf: _fixture.awayTeamHalfTimeGoal,
                    secondHalf: parseInt(_fixture.awayTeamFullTimeGoal-_fixture.awayTeamHalfTimeGoal)
                }
            },
        };
    },
    generateResultText(_fixture) {
        switch (_fixture.fullTimeResult) {
            case 'H':
                return `${_fixture.homeTeamName} won!`;
            case 'D':
                return 'Friendship won!';
            case 'A':
                return `${_fixture.awayTeamName} won!`;
        }
    },
}