import { send } from "node:process"

//importando express com Request e Response e cors
import express, { Request, Response } from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


const Twit = require('twit')



const apikey = 'IpBuBG1C2JSTDPJa877RX53tm'
const apiSecretKey = 'Xrf5GZywh5MbBeM5DIwr7dL7skAANf6QIXep0WMKw7C14OzHzQ'
const accessToken = '1371949600597282817-iojfgPT5lT86K5Vsg4wiSJXchFDJLI'
const accessTokenSecret = 'twz4f4jRHe1vRnUOw31QFbOJEk5CzJsreLpOHkab95XLj'




const newTwit = new Twit({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
  timeout_ms: 60 * 1000,
  strictSSL: true
})

try {
  const params = { q: 'banana since:2020-07-11', count: 100 }
  const res = newTwit.get('/search/tweets', params, function (error:any, tweets: any, response: any) {
    
    response.status(200).send(tweets)
  })

} catch (error) {
  console.log("nao deu bom")
}

