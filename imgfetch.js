const fumoData = require('./fumo_data.json');
const fs = require('fs');
const path = require('path');
const url = require('url');
const https = require('https');

function downloadFumo(fumo) {
    const targetFileName = 'static/img/' + fumo.id + path.extname(fumo.img);

    console.log(fumo.img, '=>', targetFileName);

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(targetFileName);
        const imgUrl = url.parse(fumo.img);
        https.get({
            host: imgUrl.host,
            path: imgUrl.path,
            headers: {
                'Referer': fumo.link,
            }
        }, (resp) => {
            resp.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(file);
            })
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function doWork() {
    if (!fs.existsSync('static/img')) {
        fs.mkdirSync('static/img', { recursive: true });
    }

    for (let character of fumoData.characters) {
        console.log('Downloading images of ' + character.name + ' fumos...');
        for (let key of ['regular', 'straps', 'puppets', 'dekas']) {
            if (character.hasOwnProperty(key)) {
                for (let fumo of character[key]) {
                    await downloadFumo(fumo);
                }
            }
        }
    }
}

doWork();