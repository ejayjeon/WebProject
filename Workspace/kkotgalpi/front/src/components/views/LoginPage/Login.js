    import React, { useState } from 'react';
    import { Form, Input, Button, Checkbox } from 'antd';
    import { UserOutlined, LockOutlined } from '@ant-design/icons';
    import './login.css'
    import { useHistory } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const onSetEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onSetPwd = (e) => {
        setPwd(e.currentTarget.value)
    }
    const onPressEnter = (e) => {
        if(e.key === 'Enter') {
            onLogIn()
        }
    }
    const onLogIn =() => {}
    let history = useHistory();
    const style = {display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', flexDirection: 'column'}
    const onFinish = (values) => {
    console.log('로그인 정보: ', values)
    };
        
    return (
        <div style={style}>
            <h1> 회원가입 </h1>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
        remember: true,
        }}
        onFinish={onFinish}
    >
        <Form.Item
        name="username"
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
        name="password"
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

        {/* <a className="login-form-forgot" onClick={() => {history.push('/')}}>
            Forgot password
        </a> */}
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button"
        onClick={onLogIn}>
            Log in
        </Button>
        </Form.Item>
    </Form>
    </div>
    );
};
