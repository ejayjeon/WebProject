import React, { useState } from 'react'
//import { useDispatch } from 'react-redux'
import '../../../../node_modules/gestalt/dist/gestalt.css'
import { Button, ButtonGroup, Flex } from "gestalt";
import Liked from '../../utils/Liked'
export default function Scribe() {
    const [title, setTitle] = useState('');
    const [scribe, setScribe] = useState('');
    const [mention, setMention] = useState('');
    //const dispatch = useDispatch();

    // style 

    const titleStyle = { border: '1px solid #fff', fontSize: '36px', maxLength: '100', margin: '24 0 24 0', padding: '30px 0 36px', outline: 'none'}

    const textAreaStyle = { display: 'flex', alignItems: 'baseline', border: '1px solid #fff', fontSize: '17px', outline: 'none', resize:'none', padding: '30px 0 0 50px', width: '80%', height: '100%', }

    
    const Btn = () => (
        <ButtonGroup>
            <Button
            accessibilityLabel='Follow'
            size='md'
            text='등록하기'
            role='submit'
            color='blue'
            />
            <Button
            accessibilityLabel='Cancle'
            size='md'
            text='취소하기'
            role='reset'
            />
        </ButtonGroup>
    )

    // style

    // handler
    const onTitleHandler = (e) => {
        setTitle(e.currentTarget.value);
    }
    const onScribeHandler = (e) => {
        setScribe(e.currentTarget.value);
    }
    const onMentionHandler = (e) => {
        setMention(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const enterScribe = () => {
            return scribe.replaceAll(" ", "&nbsp;").replaceAll("<", "&lt;").replace(">","&gt;").replaceAll("\n", "<br>").replaceAll('\r\n');
        }
        const body = {
            title : title,
            scribe : enterScribe,
        }
        
    }
    // handler


    return (
     
        <>
        <input type="text" 
        value={title} 
        onChange={onTitleHandler} 
        placeholder='제목을 입력하세요' 
        style={titleStyle}
        />

        <div style={{borderBottom: '1px solid #f1f1f1'}} ></div>
        <textarea 
        value={scribe} 
        onChange={onScribeHandler} 
        placeholder='글을 작성해 주세요' 
        style={textAreaStyle} 
        maxLength={20000}
        rows={20}
        />
        
        <div style={{borderBottom: '1px solid #f1f1f1'}} ></div>
        <textarea 
        value={mention} 
        onCddhange={onMentionHandler} 
        placeholder='작가의 한마디(최대 2,000자)' 
        style={textAreaStyle} 
        maxLength={2000}
        rows={5}
        />
    

        <Btn type="submit" onSubmit={onSubmitHandler}/>
        </>
    )
}