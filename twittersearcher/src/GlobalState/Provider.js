import React, { useState } from "react";
import Context from "../GlobalState/Context.js"
import axios from 'axios'
import { auth, BASE_URL } from '../Components/Constants/Constants'


const Provider = (props) => {
    const [searchWord, setSearchWord] = useState("")
    const [tweetList, setTweetList] = useState([])

    const consumer_key1 = "pzj1Me9iFE4pHRmglbniMWqGi"
    const consumer_secret1 = "goBIkSFc3fZppYzzWO30HQZqK6fVj1g8yuC1AinuzmRUy0vw0j"


    const concatenate = "pzj1Me9iFE4pHRmglbniMWqGi:goBIkSFc3fZppYzzWO30HQZqK6fVj1g8yuC1AinuzmRUy0vw0j"
    const concatenatebase64 = "cHpqMU1lOWlGRTRwSFJtZ2xibmlNV3FHaTpnb0JJa1NGYzNmWnBwWXp6V08zMEhRWnFLNmZWajFnOHl1QzFBaW51em1SVXkwdncwag=="
    const access_token1 = "1371949600597282817-4ROmk8s48GXv96ETv0kuotRO8xTfbf"
    const token_secret1 = "AmAUlIFm2CmqpM0pXjbNtrU49JVWXnLd2FIBCVrl3oQzw"



    const onChange = (event) => {
        event.preventDefault()
        setSearchWord(event.target.value)
    }

    const searchTweet = async () => {

        const Twitter = require('twitter')

        const newTwit = new Twitter({
            consumer_key: consumer_key1,
            consumer_secret: consumer_secret1,
            access_token: access_token1,
            access_token_secret: token_secret1
        })
        
        const params = {screen_name: 'nodejs'};
        newTwit.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                console.log(tweets);
            }
        });

        // try {
        //     const response = await newTwit.get(`${BASE_URL}tweets/search/recent?query=asus`, newTwit)
        //     console.log(`${BASE_URL}tweets/search/recent?query=${searchWord}`)
        //     console.log(response)
        // } catch (error) {
        //     console.log(error)
        // }

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