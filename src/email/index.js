import React, { useState } from "react"
import {Container } from "./styles/mailstyle"
import History from "./components/history"
import Createmail from "./actions/createmail"
import Sendmail from "./actions/sendmail"
import Card from "./components/card"
import Button from "./components/button"

 export function Mail () {
    const [isButtonPressed, setisButtonPressed] = useState(false)

    const IsEditing = () => {
        switch (isButtonPressed) {
            case false:
                return <Card/>
            case true:
                return <Createmail cancelAction={() => setisButtonPressed(false)}/>
            default:
                return <p>Error.... :(</p>
        }
    }

    return (
        <React.Fragment>
            <Container>
                <Button clickFunc={() => setisButtonPressed(true)} label=" ＋ Create new"/>
                <History isButtonPressed={isButtonPressed} buttonAction={setisButtonPressed} />                    
                <IsEditing/>
            </Container>
        </React.Fragment>
    )
}

export default Mail