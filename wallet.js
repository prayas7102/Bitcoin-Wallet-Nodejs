const { PrivateKey } = require('bitcoinjs-lib');
const Mnemonic = require('bitcore-mnemonic')

const createWalllet = (network = bitcore.Networks.defaultNetwork) => {
    let phrase = new Mnemonic(Mnemonic.Words.ENGLISH);
    let xpriv = phrase.toHDPrivateKey(phrase.toString(), network)
    return {
        xpub: xpriv.xpubkey,
        privateKey: xpriv.privateKey.toString(),
        address: xpriv.publicKey.toAddress().toString(),
        mnemonic: phrase.toString(),
    };
};

module.exports = { createWalllet }