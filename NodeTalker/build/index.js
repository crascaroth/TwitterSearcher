"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando express com Request e Response e cors
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//iniciando a aplicação web com express
const app = express_1.default();
//ativando os módulos de Bodyparser e cors
app.use(express_1.default.json());
app.use(cors_1.default());
const Twit = require('twit');
const apikey = 'IpBuBG1C2JSTDPJa877RX53tm';
const apiSecretKey = 'Xrf5GZywh5MbBeM5DIwr7dL7skAANf6QIXep0WMKw7C14OzHzQ';
const accessToken = '1371949600597282817-iojfgPT5lT86K5Vsg4wiSJXchFDJLI';
const accessTokenSecret = 'twz4f4jRHe1vRnUOw31QFbOJEk5CzJsreLpOHkab95XLj';
const newTwit = new Twit({
    consumer_key: apikey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
    timeout_ms: 60 * 1000,
    strictSSL: true
});
app.get('/gettweet/:word', (req, resGeneral) => {
    let searchWord;
    searchWord = req.params.word;
    try {
        const params = { q: searchWord + " since:2011-07-11", count: 3 };
        const res = newTwit.get('/search/tweets', params, function (error, tweets, response) {
            resGeneral.send(tweets);
        });
    }
    catch (error) {
        // console.log(error)
        resGeneral.send(error);
    }
});
//ServerOn
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
