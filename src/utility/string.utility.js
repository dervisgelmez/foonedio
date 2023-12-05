export default {
    csvToArray(_csvData) {
        let arrayResponse = [];
        let rows = _csvData.split("\r\n");
        let headers = rows[0].split(",");
        for (let i = 1; i < rows.length; i++) {
            let cells = rows[i].split(",");
            if(cells.length > 1) {
                let row = {};
                for(let j = 0; j < cells.length; j++) {
                    row[this.clearString(headers[j])] = this.clearString(cells[j]);
                    row[this.clearString('rowCount')] = i;
                }
                arrayResponse.push(row);
            }
        }
        return arrayResponse;
    },
    clearString(_string) {
        return _string.replace("/[^a-zA-Z ]/g", "");
    },
    findLeagueNameByDivision(_division) {
        const divisionMap = {
            premierleague: [
                'E0'
            ],
            bundesliga: [
                'D1'
            ]
        };

        _division = _division.toUpperCase();
        for (const key in divisionMap) {
            if (divisionMap[key].includes(_division)) {
                return key;
            }
        }
        return _division;
    },
    parseDateString(_dateString) {
        const parts = _dateString.split('/');
        const year = parts[2].length === 4 ? parts[2] : `20${parts[2]}`;
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[0], 10);

        return new Date(year, month, day);
    },
}