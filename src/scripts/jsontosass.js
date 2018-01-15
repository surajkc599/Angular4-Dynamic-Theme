var fs = require('fs');
var jsonSass = require('json-sass');

function convertjsontosass() {
    console.log('Éntered jsontosass conversion..');
    fs.createReadStream('src/themes/json/components.json')
        .pipe(jsonSass({
            prefix: '$theme: ',
        }))
        .pipe(fs.createWriteStream('src/themes/sass/theme.scss'));
    console.log('Outputted sass file at destination..');
}
convertjsontosass();