const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'dist', 'tmp');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
    console.log('tmp folder created successfully.');
} else {
    console.log('tmp folder already exists.');
}
