import React, {useContext} from 'react'
import TweetList from '../../Components/TweetList/TweetList'
import Context from '../../GlobalState/Context.js'
import {Title, Input, Button} from './MainPage_styles'


const MainPage = () => {
    const { states, setters, requests } = useContext(Context)
  
    

    return (
        <>  <topContainer>
            <Title>Twitter Hashtag Searcher!</Title>

            <Input 
            value={states.searchWord} 
            onChange={requests.onChange} 
            />

            <Button onClick={requests.searchTweet}>clique em mim</Button>
            
            </topContainer>
            <TweetList />
        </>
    )
}

export default MainPage