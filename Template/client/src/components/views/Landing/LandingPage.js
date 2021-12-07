import React, { useEffect } from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello').then(response => console.log(response.data))
        // 이 엔드포인트를 서버로 보낼 것
        
    }, [])


    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
