require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain comic hunt kitchen suspect taste'; 
let testAccounts = [
"0x580787666e7a5610f16424acff9d11e1306ee955242cdafc1efcab7aafc559cb",
"0x4ae525d92b4819a817682cfd52ba6ad55ca7aa136dae9e255c2ff5e229788ab3",
"0x2444239328b175088644dfd74115638e99107ddd0cbb30df78869aebd4f58db6",
"0x33faa7fee82ae31b780766e07adb23ee32cd855bf9ce4eca094e2418092a4c9b",
"0xaf9530562ba1aefae8bcc709317ec4d95e3bdea06ee91e71ae7e7bb8c158530b",
"0xb082b4cd81b6bd2a48bfa509399e395311f1ac54773904e44133aea5f2346d95",
"0x13d14b049b2a0430d58424915cf44b201a66d99000a34c384f55d0ca0c1571d7",
"0xb414ca705757e3553031b2591a7b1b14e67b6a1e3fb6e73282efd301921dd240",
"0xcf38da9318bff0439042f955f0e31e18d21c11c3365d255a7879fb6b1ed57f46",
"0xf4398862ca9ffe524e89c8c92afaf68ca7e54d115829154e6c6bc979f8eec40b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

