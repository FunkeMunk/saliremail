import styled, {css} from "styled-components"

export const Cardwrapper = styled.div`
    position: relative;
    height: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-right: 1px solid #eee;
    div.cardbox{
        border-bottom: 2px solid whitesmoke;
    }
`;

export const Cardbox = styled.div`
    display: inline-flex;
    position: relative;
    width: 96.5%;
    height: 70px;
    background-color: white;
    color: #18181b;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    user-select: none;
    cursor: pointer;
    &:hover{
        background-color: #f7feff; 
    }
`

export const Nameheader = styled.div`
    position: relative;
    height: 20px;
    width: 50%;
    font-size: 17px;
`;

export const Titleheader = styled.div`
    position: relative;
    height: 20px;
    width: 50%;
    font-size: 17px;
`;

export const Contentwrapper = styled.div`
    position: relative;
    display: flex;
    height: 71%;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    padding-left: 10px;
    flex-direction: column;
`;

export const Tabs = styled.button`
    border: none;
    text-decoration: none;
    background-color: transparent;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    height: 40px;   
    width: 100px;
    font-weight: 600;
    color: black;
    &:hover{
        background-color: white ;
    }
`;

export const CurentTab = styled.button`
    border: none;
    border-bottom: 3px solid rgb(44, 24, 104.0);
    text-decoration: none;
    background-color: transparent;
    margin: 5px;
    cursor: pointer;
    height: 40px;   
    width: 100px;
    font-weight: 600;
    color: black;
`;

export default {Cardwrapper, Cardbox, Nameheader, Titleheader, Contentwrapper}