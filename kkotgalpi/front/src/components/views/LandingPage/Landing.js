import React, { useState, useRef } from 'react';
import '../../../../node_modules/gestalt/dist/gestalt.css';
import { useHistory } from 'react-router-dom';
import { Button, Dropdown, Flex } from 'gestalt';
import '../views.scss';

export default function Landing() {
	//const [입력, 입력값변경] = useState('');
	// const [open, setOpen] = useState(false);
	// const [selected, setSelected] = useState(null);
	// const anchorRef = useRef(null);
	// const onSelect = ({ item }) => setSelected(item);
	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'end',
		gap: '50px',
		width: '100%',
	};
	const imgStyle = {
		display: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '200px',
		height: '300px',
		margin: '30px',
		top: '40%'
	};
	let history = useHistory();
	const SignUp = () => (
		<Button
			accessibilityLabel='SignUp'
			iconEnd='arrow-up-right'
			size='lg'
			text='가입하기'
			role='link'
			color='red'
			onClick={() => {
				history.push('/signup');
			}}></Button>
	);
	const Library = () => (
		<Button
			accessibilityLabel='Library'
			iconEnd='arrow-up-right'
			size='lg'
			text='내 서재 가기'
			role='link'
			onClick={() => {
				history.push('/mylibrary');
			}}></Button>
	);

	return (
		<>
			<div style={{height: '500px'}}>
				<img src={require('../MainPage/img/illu1.jpeg')} alt='이미지' style={imgStyle} />
			</div>
			<div style={style}>
				<Library />
				<SignUp />
			</div>
		</>
	);
}

//     return(
// var input = document.getElementsByClassName("text")[0];
// var interval = setInterval(textChange, 5000);
// function textChange() {
//   var phrases = [
//     "머물러 있는 청춘인 줄 알았는데 또 하루 멀어져 간다.",
//     "좋은 책을 읽는 것은 과거의 가장 뛰어난 사람들과 대화를 나누는 것과 같다",
//     "사랑하는 이여, 상처받지 않은 이가 어디있으랴. 추운 겨울 다 지내고 꽃필 차례가 바로 그대 앞에 있다  김종해 <그대 앞에 봄이 있다>",
//     "눈부시게 빛나지 않아도 괜찮아. 시들지만 말아라  <시들지만 말아라>",
//     "사막이 아름다운 건 어딘가에 샘을 숨기고 있기 때문이죠  <어린왕자>",
//     "파도가 바다의 일이라면, 너를 생각하는 것은 나의 일이었다  김연수 <파다가 바다의 일이라면>"
//   ];
//   var placeholder = phrases[Math.floor(Math.random()*phrases.length)];
//   input.setAttribute("placeholder", placeholder);
// }

//         <>
//         <input type="text" onChange={(e) => {입력값변경(e.target.value)} } placeholder={''} className={"text"} autofocus/>

//         <div style={style}>
//         <Drop/>
//         <SignUp/>
//         </div>
//         </>
//     )
