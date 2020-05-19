import React, { useState } from "react"
import {Cardbox, Nameheader, Titleheader, Cardwrapper, Contentwrapper, Tabs, CurentTab} from "../styles/historystyle"
import { useStoreActions } from "easy-peasy"

export function History ({buttonAction, isButtonPressed}) {
    const [Filterby, setFilter] = useState("incoming")
    const [history, sethistory] = useState([
        {title: "RE: Revolution", type: "incoming", user: "joseph Stalini"},
        {title: "Make money", type: "incoming", user: "John Capitalist"}
    ])

    const setcurrent = useStoreActions(state => state.email.setcurrent)

    const Mapper = () => {

        const onItemClick = (name, title) => {
            setcurrent({Name: name, Title: title});
            if (isButtonPressed) buttonAction(false)
        }

        return (
            <React.Fragment>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", borderBottom: "1px solid #eee"}} >
                    {Filterby === "incoming"? 
                    <CurentTab onClick={() => setFilter("incoming")}> incoming </CurentTab> 
                    : 
                    <Tabs onClick={() => setFilter("incoming")}> incoming </Tabs>}

                    {Filterby === "outgoing"?
                    <CurentTab onClick={() => setFilter("outgoing")} > outgoing</CurentTab>
                    :
                    <Tabs onClick={() => setFilter("outgoing")} > outgoing </Tabs> }                    
                </div>

    
                {history.filter((a) => a.type === Filterby).map((a, key) => (
                    <Cardbox className="cardbox" key={key} onClick={() => onItemClick(a.user, a.title)}>
                        <Contentwrapper>
                            <Nameheader>
                                {a.user}                        
                            </Nameheader>
                            <Titleheader>
                                {a.title} 
                            </Titleheader>                        
                        </Contentwrapper>
                    </Cardbox>
                ))}                
            </React.Fragment>

        )
    }

    return (
        <React.Fragment>
            <Cardwrapper>
                <Mapper/>                
            </Cardwrapper>
        </React.Fragment>
    )
}

export default History  