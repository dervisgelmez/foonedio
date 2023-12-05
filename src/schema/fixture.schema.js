import { Schema, model } from "mongoose";

const fixtureSchema = new Schema({
    hash: {type: String, required: true},
    league: {type: String, required: true},
    referee: {type: String, required: true},
    matchDate: {type: Date, required: true},
    homeTeamName: {type: String, required: true},
    awayTeamName: {type: String, required: true},
    homeTeamHalfTimeGoal: {type: Number, required: true},
    awayTeamHalfTimeGoal: {type: Number, required: true},
    homeTeamFullTimeGoal: {type: Number, required: true},
    awayTeamFullTimeGoal: {type: Number, required: true},
    fullTimeResult: {type: String, enum: ['H', 'A', 'D']},
    halfTimeResult: {type: String, enum: ['H', 'A', 'D']},
});

export default model('Fixture', fixtureSchema);