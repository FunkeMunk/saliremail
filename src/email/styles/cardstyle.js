import styled, {css} from "styled-components"

export const Pagewrapper = styled.div`
    display: flex;
    position: relative;
    width: 70%;
    height: 97%;
    padding: 10px;
    background-color: white;
    color: #18181b;
    align-self: flex-end;
`;

export const Name = styled.div`
    position: relative;
    top: 20px;
    left: 20px;
    width: fit-content; 
    font-size: 18px;
`;

export const Title = styled.div`
    position: relative;
    top: 10px;
    left: 20px;
    width: fit-content;
    font-size: 20px;
`;

export const Textarea = styled.div`
    position: relative;
    display: flex;
    top: 50px;
    align-self: center; 
    width: 94%;
    height: 70%;
    left: 20px;
`

export default {Pagewrapper, Name, Title, Textarea}