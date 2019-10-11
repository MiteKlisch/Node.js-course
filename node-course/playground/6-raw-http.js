const https = require('https');

const url = 'https://api.darksky.net/forecast/9e7798a23023b395aef09a22ed063e6d/40,75';

 const request = https.request(url, (response) => {
    let data = '';


    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })


    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })

    response.on('error', (error) =>{
        console.log('An error ', error);
    })
});


request.end();