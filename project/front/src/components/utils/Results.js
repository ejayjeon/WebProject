import React from 'react';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

export default function Results() {
    let history = useHistory();
    const toMain = function() {
        history.push('/')}
    


    return (

        


    <Result
        status="success"
        title="Success Writing"
        subTitle="로그인이 성공했습니다"
        extra={[
        <Button onClick={toMain} type="primary" shape="round" key="main">메인으로</Button>,
        <Button onClick={() => {history.goBack()}}key="back" shape="round">뒤로가기</Button>,]}/>

       
    )
}