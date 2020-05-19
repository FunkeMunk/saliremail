import styled, {css} from "styled-components"

export const Createwrapper = styled.div`
    display: flex;
    position: relative;
    width: 70%;
    height: 97%;
    padding: 10px;
    color: #18181b;
    flex-direction: column;
    background-color: white;
`;

export const Textarea = styled.div`
    position: relative;
    display: inline-flex;
    align-self: center; 
    width: 100%;
    height: 90%;
    background-color: white;
    color: #18181b;
    padding: 10px;
    font-size: 18px;
    text-align: left;
    border: 2px solid  #eee;
`;

export const SmallText = styled.div`
    position: relative;
    display: inline-flex;
    align-self: center; 
    width: 90%;
    height: 25px;
    background-color: white;
    color: #18181b;
    cursor: text;
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    border: 2px solid  #eee;
`;

export const Texttag = styled.div`
    position: relative;
    display: inline-flex;
    height: 40px;
    font-size: 19px;
    align-self: left;
    color: #18181b;
    margin-top: 0px;
`

export const EditorButtonWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    top: 10px;
    height: 40px;
    align-self: center;
    background-color: whitesmoke;
    border: 2px solid whitesmoke;
    padding: 10px;
`;

export const EditorButton = styled.button`
    display: flex;
    width: 35px;
    border: none;
    height: 35px;
    font-size: 19px;
    text-align: center;
    align-content: center;
    justify-content: center;
    padding: 0 5px 0 5px;
    cursor: pointer;
    color: #282828;
    background-color: transparent;
    &:hover{
        background-color: azure;

    }
`;

export default {Createwrapper, Textarea, SmallText, Texttag, EditorButtonWrapper, EditorButton}