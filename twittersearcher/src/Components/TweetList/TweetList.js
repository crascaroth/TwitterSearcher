import React, { useContext, useEffect } from 'react'
import Context from '../../GlobalState/Context'
import { Title, Text, Card, NoTweets } from './TweetList_styles'

const TweetList = () => {
    const { states, setters, requests } = useContext(Context)



    useEffect(() => {

    }, [states.tweetListVar])






    
        return (
            <>
                {
                    states.tweetListVar &&
                    states.tweetListVar.map((t) => {
                        return (
                            <Card>
                                <Title>{t.user.name}</Title>
                                <Text>{t.text}</Text>

                            </Card>
                        )
                    })

                }
            </>
        )
    
   

}

export default TweetList