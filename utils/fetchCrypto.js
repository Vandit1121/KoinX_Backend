const axios = require("axios");
const CryptoData = require( "../schema/cryptoDataScehma");

async function fetchCryptoData() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'bitcoin,matic-network,ethereum',
                vs_currencies: 'usd',
                include_market_cap: 'true',
                include_24hr_change: 'true',
            },
        });
        const { bitcoin, 'matic-network': matic, ethereum } = response.data;
        const newBitcoinCryptoData = new CryptoData({
            CryptoName: "bitcoin",
            price: bitcoin.usd,
            marketCap: bitcoin.usd_market_cap,
            "24hChange": bitcoin.usd_24h_change,
        });
        await newBitcoinCryptoData.save();
        const newMaticNetworkCryptoData = new CryptoData({
            CryptoName: "matic-network",
            price: matic.usd,
            marketCap: matic.usd_market_cap,
            "24hChange": matic.usd_24h_change,
        });
        await newMaticNetworkCryptoData.save();
        const newEthereumCryptoData = new CryptoData({
            CryptoName: "ethereum",
            price: ethereum.usd,
            marketCap: ethereum.usd_market_cap,
            "24hChange": ethereum.usd_24h_change,
        });
        await newEthereumCryptoData.save();
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = fetchCryptoData;