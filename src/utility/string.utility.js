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
                }
                arrayResponse.push(row);
            }
        }
        return arrayResponse;
    },
    clearString(_string) {
        return _string.replace("/[^a-zA-Z ]/g", "");
    }
}