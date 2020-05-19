import React, { useState } from "react"
import { Editor, EditorState, RichUtils, SelectionState, KeyBindingUtil, Modifier } from "draft-js"
import { Createwrapper, SmallText, Textarea, Texttag, EditorButtonWrapper, EditorButton } from "../styles/createmailstyle"
import ReactDOM from 'react-dom';
import Button from "../components/button";
import styled, { css } from "styled-components";

export function Createmail ({cancelAction}) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [sendingTo, setsendingTO] = useState(EditorState.createEmpty())
    const [ title, settitle ] = useState(EditorState.createEmpty())

    const CancelButton = styled.button`
        border-radius: 5px;
        border: none;
        background-color: transparent;
        margin: 5px;
        cursor: pointer;
        width: fit-content;
        font-weight: 600;
        height: 40px;   
        width: 80px;
        color: black;
        &:hover{
            background-color: white;
        }
        margin: 0 0 0 4%;
    `;

    const editor = React.useRef(null);
    const receiver = React.useRef(null);
    const Title = React.useRef(null)

    function focusEditor() {
        editor.current.focus();
      }
    function focusReceiver() {
        receiver.current.focus();
    }
    function focusTitle() {
        Title.current.focus()
    }
    
    React.useEffect(() => {
        focusTitle()
    }, []);

    const _boldOnClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }

    const _italicOnClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
    }

    const _strikeOnClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'))
    }

    const _lineunderOnClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
    }

    const _addLink = () => {
        const selection = editorState.getSelection();
        const link = window.prompt('Paste the link -')

        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity('LINK', 'MUTABLE', {url: link});
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        const contentStateWithLink = Modifier.applyEntity(
            contentWithEntity,
            selection,
            entityKey
        );
        const newEditorState = EditorState.push(
            editorState,
            contentStateWithLink,
            "insert-characters"
        );
        console.log(newEditorState, selection, entityKey)
        setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey))
    }

    console.log(editorState)

    return (
        <React.Fragment>
            <Createwrapper>
                <CancelButton onClick={cancelAction} >
                    Cancel
                </CancelButton>
                <SmallText onClick={focusTitle}>
                <Texttag style={{width: "40px"}}> To: </Texttag> <Editor ref={Title} editorState={title} onChange={settitle}/>
                </SmallText>
                <SmallText onClick={focusReceiver}>
                <Texttag style={{width: "60px"}}> Title: </Texttag> <Editor ref={receiver} editorState={sendingTo} onChange={setsendingTO}/>
                </SmallText>
                <div style={{display: "flex", flexDirection: "column", width: "90%", height: "70%", alignSelf: "center",}}>
                    <EditorButtonWrapper>
                        <EditorButton style={{fontWeight: "600"}} onMouseDown={() => _boldOnClick()} > 
                            B
                        </EditorButton>
                        <EditorButton onMouseDown={() => _lineunderOnClick()} >
                            _
                        </EditorButton>
                        <EditorButton onMouseDown={() => _italicOnClick()}>
                            I
                        </EditorButton>
                        <EditorButton onMouseDown={() => _strikeOnClick()}>
                            -
                        </EditorButton>
                        <EditorButton onMouseDown={() => _addLink()} >
                            link
                        </EditorButton>
                    </EditorButtonWrapper>
                    <Textarea onClick={focusEditor}>
                        <Editor textDirectionality="LTR" ref={editor} editorState={editorState} onChange={setEditorState} />
                    </Textarea>                         
                </div>
            </Createwrapper>
        </React.Fragment>
    )
}

export default Createmail