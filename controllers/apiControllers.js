const CryptoData = require("../schema/cryptoDataScehma");
const standardDeviation = require("../utils/standardDeviation");

const statsController = async (req,res) =>{
    const coin = req.query.coin;
    const coinDetails = await CryptoData.findOne({"CryptoName" : coin},null,{sort:{createdAt:-1}});
    const coinDetail = {
        "coin" : coinDetails.CryptoName,
        "price": coinDetails.price,
        "marketCap": coinDetails.marketCap,
        "24hChange" : coinDetails["24hChange"],
        "createdAt":coinDetails.createdAt.toLocaleTimeString()
    };
    res.status(200).send(coinDetail);
}

const deviationController = async (req,res) =>{
    const coin = req.query.coin;
    const coinDetails = await CryptoData.find({"CryptoName" : coin},{_id:0,price:1},{sort:{createdAt:-1},limit:100});
    const data = [];
    coinDetails.map((detail) => data.push(detail.price));
    const stdDeviation = await standardDeviation(data);
    res.status(200).send({"deviation":stdDeviation});
}

module.exports = {statsController,deviationController};