import React, { useState } from "react";
import Context from "../GlobalState/Context.js"
import axios from 'axios'
import { auth, BASE_URL } from '../Components/Constants/Constants'


const Provider = (props) => {
    const [searchWord, setSearchWord] = useState("")
    const [tweetList, setTweetList] = useState([])

    const consumer_key1 = "pzj1Me9iFE4pHRmglbniMWqGi"
    const consumer_secret1 = "goBIkSFc3fZppYzzWO30HQZqK6fVj1g8yuC1AinuzmRUy0vw0j"


    const apikey = 'IpBuBG1C2JSTDPJa877RX53tm'
    const apiSecretKey = 'Xrf5GZywh5MbBeM5DIwr7dL7skAANf6QIXep0WMKw7C14OzHzQ'
    const accessToken = '1371949600597282817-iojfgPT5lT86K5Vsg4wiSJXchFDJLI'
    const accessTokenSecret = 'twz4f4jRHe1vRnUOw31QFbOJEk5CzJsreLpOHkab95XLj'
    


    const onChange = (event) => {
        event.preventDefault()
        setSearchWord(event.target.value)
    }

    const searchTweet = async () => {

        const Twitter = require('twit')

        const newTwit = new Twitter({
            consumer_key: apikey,
            consumer_secret: apiSecretKey,
            access_token: accessToken,
            access_token_secret: accessTokenSecret,
            timeout_ms:60*1000,
            strictSSL: true
        })
        
        try {
            const params = {q: 'banana since:2020-07-11', count: 100}
            const res = await newTwit.get('search/tweets', params, function(error, tweets, response){
                console.log(tweets)
            })

        } catch (error) {
            console.log("nao deu bom")
        }
        
    



    }

    const states = { searchWord }
    const setters = { setSearchWord }
    const requests = { onChange, searchTweet }

    const data = { states, setters, requests };



    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    );
}

export default Provider;