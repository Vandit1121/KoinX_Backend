const cron = require ('node-cron');
const fetchCryptoData = require ("./fetchCrypto");

cron.schedule('0 */2 * * *',() =>{
    fetchCryptoData();
});