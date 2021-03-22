import React, { useContext, useEffect } from 'react'
import Context from '../../GlobalState/Context'
import { Title, Text, Card, Container, Welcome } from './TweetList_styles'

const TweetList = () => {
    const { states, setters, requests } = useContext(Context)



    useEffect(() => {

    }, [states.tweetListVar])

    if (states.searchWord === null || states.searchWord === undefined || states.searchWord === "") {
        return(
            <Container>
                <Welcome>Welcome! Please, insert a Word</Welcome>
            </Container>
        )
    }
    else {
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
}

export default TweetList