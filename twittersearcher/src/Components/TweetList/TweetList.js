import React, { useContext, useEffect } from 'react'
import Context from '../../GlobalState/Context'
import { Title, Text, Card, Container } from './TweetList_styles'

const TweetList = () => {
    const { states, setters, requests } = useContext(Context)



    useEffect(() => {

    }, [states.tweetListVar])






    
        return (
            <Container>
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
            </Container>
        )
    
   

}

export default TweetList