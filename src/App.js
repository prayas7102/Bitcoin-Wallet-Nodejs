const { createWalllet } = require('wallet');
const { sendBitcoin } = require('./sendCrypto');

sendBitcoin("mnJJCCLa8FEpVFKoCeE2BUQWKaT6rWUGWV", 0.0001)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
    
console.log(createWalllet());