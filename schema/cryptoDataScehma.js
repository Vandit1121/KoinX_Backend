const mongoose =require ("mongoose");

const CryptoDataSchema = new mongoose.Schema({
    CryptoName: String,
    price: Number,
    marketCap: Number,
    "24hChange":Number,
    createdAt:{
        type:Date,
        default:new Date(),
    }
});

const CryptoData = mongoose.model('CryptoData',CryptoDataSchema);

module.exports= CryptoData;