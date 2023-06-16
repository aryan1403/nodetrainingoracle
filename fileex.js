const fs = require('fs');


const prev_data = fs.readFileSync('names.txt', (err, data) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log(data.toString());
        return data.toString();
    }
});
fs.writeFile('names.txt', prev_data + '\nhello', () => {
    
});