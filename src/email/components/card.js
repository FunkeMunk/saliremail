import React from "react"
import {Pagewrapper, Name, Title, Textarea} from "../styles/cardstyle"
import { useStoreState } from "easy-peasy"

export function Card () {

    const State = useStoreState(state => state.email.current)

    return (
        <React.Fragment>
            <Pagewrapper>
                <div style={{width: "100%", height: "100%"}} >
                    <Title>
                        {State.title}
                    </Title>
                    <Name>
                        {State.name}
                    </Name>
                    <Textarea>
                    </Textarea>
                </div>                
            </Pagewrapper>
        </React.Fragment>
    )
}

export default Card