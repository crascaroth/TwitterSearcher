import React, { useContext } from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import TweetList from '../../Components/TweetList/TweetList'
import Context from '../../GlobalState/Context.js'
import { Title, Input, Button, TopContainer } from './MainPage_styles'


const MainPage = () => {
    const { states, setters, requests } = useContext(Context)

    


    return (
        <>
            <TopContainer>
                <Title>Twitter Hashtag Searcher!</Title>

                <Input
                    value={states.searchWord}
                    onChange={requests.onChange}
                    placeholder="Hashtag"
                />

                <Button onClick={requests.searchTweet}>Search</Button>

            </TopContainer>
            <TweetList />
        </>
    )
}

export default MainPage