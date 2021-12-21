import React, { useEffect } from 'react';
import axios from 'axios';
import './Landing.css'
//import '../../../../node_modules/gestalt/dist/gestalt.css';

export default function Landing() {
    useEffect(() => {
        axios.get('/api/hello')
        // 이 엔드포인트를 서버로 보내게 된다
        // 하지만 서버와 클라이언트의 포트가 다르다 보니까 Failed to load resource: the server responded with a status of 404 (Not Found) 에러가 뜬다
        // CORS 정책
        .then(응답 => console.log(응답.data))
    }, [])

    return (
        <div className='divStyle'>
            <h1>기가명은 4G 충전</h1>
        </div>
    )
}
