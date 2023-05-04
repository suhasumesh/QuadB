const Crypto = require('../Model/cryptoschema')
const Ticker = require('../Model/tickerschema');

exports.getTickers = async (req, res, next) => {
    const resp = await fetch('https://api.wazirx.com/api/v2/tickers');
    const data = await resp.json();
    res.send(data);
}

exports.saveTickers = async (req, res) => {
    // const {base_unit,name,lowPrice,highPrice,lastPrice,volume,sell,open} = req.body;
    const tickersData = req.body
    // const ticker = new Ticker({
    //     base_unit:base_unit,
    //     name:name,
    //     lowPrice:lowPrice,
    //     highPrice:highPrice,
    //     lastPrice:lastPrice,
    //     volume:volume,
    //     open:open,
    //     sell:sell,
    //     buy:buy
    // })
    try {
      await Ticker.insertMany(tickersData).then(()=>{
        console.log("saved successfully");
          res.status(200).send("saved successfully");
      }
      )
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
}