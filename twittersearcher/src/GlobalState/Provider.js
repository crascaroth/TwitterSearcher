import React, { useState } from "react";
import Context from "../GlobalState/Context.js"
import axios from 'axios'
import { auth, BASE_URL } from '../Components/Constants/Constants'


const Provider = (props) => {
    const [searchWord, setSearchWord] = useState("")
    const [tweetListVar, setTweetListVar] = useState([])

    const onChange = (event) => {
        event.preventDefault()
        setSearchWord(event.target.value)
    }

    const searchTweet = async () => {
        try {
            let resposta = await axios.get('http://localhost:3003/gettweet/'+searchWord)
            // console.log(resposta.data.statuses)
            let obj = resposta.data.statuses
            console.log(Object.values(obj))
            setTweetListVar(Object.values(obj))
        } catch (error) {
            console.log(error)
        }     
    }

    

    const states = { searchWord, tweetListVar }
    const setters = { setSearchWord, setTweetListVar }
    const requests = { onChange, searchTweet }

    const data = { states, setters, requests };



    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    );
}

export default Provider;