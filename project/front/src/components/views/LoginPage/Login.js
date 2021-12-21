import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    let history = useHistory();
    const onSetEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onSetPwd = (e) => {
        setPwd(e.currentTarget.value)
    }
    const onLogIn =() => {
        
        // history.push('/login/results')
    }

    const onFinish = (values) => {
        console.log('로그인 정보: ', values)
        // axios.get('/login/check').then((응답)=>
        // console.log(응답.data)).catch((에러) => console.log(에러))
        axios.post("/login/check", {
            userEmail: values.userEmail,
            userPwd: values.userPwd
        })
        .then(function () {
            history.push('/')
        }).catch(function (에러) {
           console.log(에러)
        })
    }
    
    
        
    return (
        <div className='divStyle'>
            <h1> 회원가입 </h1>
        <Form
        name="normal_login"
        action="/login/results"
        className="login-form"
        initialValues={{ emember: true}}
        onFinish={onFinish}
    >
        <Form.Item
        name="userEmail"
        rules={[
            {
            required: true,
            message: '이메일을 입력해주세요',
            },
        ]}
        >
        <Input 
        prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" 
        value={email}
        onChange={onSetEmail}
        />
        </Form.Item>
        
        <Form.Item
        name="userPwd"
        rules={[
            {
            required: true,
            message: '비밀번호를 입력해주세요',
            },
        ]}
        >
        <Input
            prefix={<LockOutlined className="site-form-item-icon"
            value={pwd}
            onChange={onSetPwd} />}
            type="password"
            placeholder="Password"
        />
        </Form.Item>

        <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>기억하기</Checkbox>
        </Form.Item>
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button"
        // onClick={onLogIn} 
        >
            Log in
        </Button>
        </Form.Item>
    </Form>
    </div>
    );
};
