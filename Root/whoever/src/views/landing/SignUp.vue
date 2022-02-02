<template>
<div class="q-pa-md wrapper signup">
<div class="cont">
<div class="form sign-in">
<h2>Welcome to <b>WHOEVER</b></h2>
<label>
<q-input
flat
v-model="email"
label="E-mail *"
lazy-rules
color="deep-purple-13"
/>
</label>
<label>
<q-form>
<q-input
flat
type="password"
v-model="pwd"
label="Password *"
lazy-rules
color="deep-purple-13"
:rules="[
	val => !!val || '* Required',
	val => val.length > 5 || '6자 이상으로 입력해 주세요',
	]"
autocomplete="off"
/>
</q-form>
</label>
<q-space class="q-pa-md"/>
<p class="forgot-pass">비밀번호를 잃어버리셨나요?</p>
<button type="button" class="submit" @click="$store.commit('setLogin', [email, pwd])">로그인</button>
<button type="button" class="fb-btn"><span>facebook</span> 으로 로그인</button>
</div>
<div class="sub-cont">
<div class="img">
<div class="img__text m--up">
<h2>New to here?</h2>
<p>간단한 가입절차로 계정을 생성하거나 or</p>
</div>
<div class="img__text m--in">
<h2>One of Us?</h2>
<p>이미 계정이 있으시다면, 가입하셨던 메일로 로그인을 해주세요</p>
</div>
<div class="img__btn" @click="toggle">
<span class="m--up">가입하기</span>
<span class="m--in">로그인하기</span>
</div>
</div>
<div class="form sign-up">
<h2>To be a <b>WHOEVER</b>'s family</h2>
<div class="row">
<div class="col-6">
<q-input
flat
v-model="newemail"
label="E-mail *"
suffix="인증받기"
lazy-rules
color="deep-purple-13"
>
		<template v-slot:append>
		<q-icon name="mail" @click="verification" />
		</template>
	</q-input>
<q-form>
	<q-input
	flat
	type="password"
	v-model="newpwd"
	label="Password *"
	lazy-rules
	counter
	color="deep-purple-13"
	:rules="[
          val => !!val || '* Required',
          val => val.length > 5 || '6자 이상으로 입력해 주세요',
        ]"
	autocomplete="off"
	/>
	</q-form>
	<q-input
	flat
	v-model="newphone"
	label="Phone"
	mask="###- #### - ####"
	fill-mask
	color="deep-purple-13"
	hint="숫자로만 작성해 주세요"
	/>
	<q-input flat color="deep-purple-13" v-model="newbdate" type="date" hint="생년월일 ex) 2000.01.01." />
	</div>
	<div class="col-6">
	<q-input
	flat
	v-model="newname"
	label="Name *"
	suffix="ex) 이지은"
	lazy-rules
	color="deep-purple-13"
	/>
	<q-form>
		<q-input
	flat
	type="password"
	v-model="newpwd2"
	label="Repeat Password *"
	lazy-rules
	counter
	color="deep-purple-13"
	:rules="[
	val => !!val || '* Required',
	val => val.length > 5 || '6자 이상으로 입력해 주세요',
	]"
	autocomplete="off"
	/>
	</q-form>
	<label>성별</label>
	<q-radio color="deep-purple-13" v-model="newgender" val="female" label="여자" />
      <q-radio color="deep-purple-13" v-model="newgender" val="male" label="남자" />
      <q-radio color="deep-purple-13" v-model="newgender" val="nochoice" label="선택안함" />
	<button type="button" class="submit" @click="$store.commit('setSignup', [newemail, newpwd, newname, newphone, newbdate, newgender])">가입하기</button>
	<button type="button" class="fb-btn" @click="cxlConfirm">취소하기</button>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</template>

<script>
export default {
	name : 'signup',
	data() { 
		return{
		email: '',
		pwd: '',
		newemail: '',
		newpwd: '',
		newpwd2: '',
		newname: '',
		newphone: '',
		newbdate: '',
		newgender: 'female',

		
	}},
	methods: {
		toggle(){
		document.querySelector('.cont').classList.toggle('s--signup');
		},
		verification(){

		},
		cxlConfirm(){
            !confirm('가입 화면을 나가시겠습니까?') ? alert('기재하신 내용이 삭제됩니다') : this.$router.go(-1)
        },
		pwdRule(){
			
		}
	},
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
	*, *:before, *:after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	}

	body {
	font-family: 'GowunDodum-Regular','Quicksand','Open Sans', Helvetica, Arial, sans-serif;
	background-image: url('https://github.com/JemmaJeon/kkotgalpi/blob/main/typing.jpeg?raw=true');
	background-color: rgb(131, 131, 131);
	background-blend-mode:luminosity;
	}

	input, button {
	border: none;
	outline: none;
	background: none;
	font-family: 'GowunDodum-Regular', 'Quicksand','Open Sans', Helvetica, Arial, sans-serif;
	}
	.signup {
	display: grid;
	place-items: center;
	min-height: 100vh;
	padding: 3rem;
	}

	$contW: 900px;
	$imgW: 260px;
	$formW: $contW - $imgW;
	$switchAT: 1.2s;

	$inputW: 260px;
	$btnH: 36px;

	$diffRatio: ($contW - $imgW) / $contW;

	@mixin signUpActive {
	.cont.s--signup & {
	@content;
	}
	}

	.tip {
	font-size: 20px;
	margin: 40px auto 50px;
	text-align: center;
	}

	.cont {
	overflow: hidden;
	position: relative;
	width: $contW;
	height: 600px;
	margin: 0 auto 100px;
	background: rgba(255, 255, 255, 0.9);
	border-radius: 10px;
	}

	.form {
	position: relative;
	width: $formW;
	height: 100%;
	transition: transform $switchAT ease-in-out;
	padding: 50px 30px 0;
	}

	.sub-cont {
	overflow: hidden;
	position: absolute;
	left: $formW;
	top: 0;
	width: $contW;
	height: 100%;
	padding-left: $imgW;
	background: rgba(255, 255, 255);
	transition: transform $switchAT ease-in-out;

	@include signUpActive {
	transform: translate3d($formW * -1,0,0);
	}
	}

	button {
	display: block;
	margin: 0 auto;
	width: $inputW;
	height: $btnH;
	border-radius: 30px;
	color: #fff;
	font-size: 15px;
	cursor: pointer;
	}

	.img {
	overflow: hidden;
	z-index: 2;
	position: absolute;
	left: 0;
	top: 0;
	width: $imgW;
	height: 100%;
	padding-top: 360px;

	&:before {
	content: '';
	position: absolute;
	right: 0;
	top: 0;
	width: $contW;
	height: 100%;
	background-image: url('https://raw.githubusercontent.com/JemmaJeon/kkotgalpi/ca4f3db63582c4c6dff5764be183c09b6c22d049/write2.jpeg');
	background-size: cover;
	transition: transform $switchAT ease-in-out;
	}

	&:after {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	}

	@include signUpActive {
	&:before {
	transform: translate3d($formW,0,0);
	}
	}

	&__text {
	z-index: 2;
	position: absolute;
	left: 0;
	top: 50px;
	width: 100%;
	padding: 0 20px;
	text-align: center;
	color: #fff;
	font-weight: bold;
	transition: transform $switchAT ease-in-out;

	h2 {
	margin-bottom: 10px;
	font-size: 35px;
	font-weight: normal;
	}

	p {
	font-size: 14px;
	line-height: 1.5;
	}

	&.m--up {

	@include signUpActive {
	transform: translateX($imgW*2);
	}
	}

	&.m--in {
	transform: translateX($imgW * -2);

	@include signUpActive {
	transform: translateX(0);
	}
	}
	}

	&__btn {
	overflow: hidden;
	z-index: 2;
	position: relative;
	width: 100px;
	height: $btnH;
	margin: 0 auto;
	background: transparent;
	color: #fff;
	text-transform: uppercase;
	font-size: 15px;
	cursor: pointer;

	&:after {
	content: '';
	z-index: 2;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: 2px solid #fff;
	border-radius: 30px;
	}

	span {
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	transition: transform $switchAT;

	&.m--in {
	transform: translateY($btnH*-2);

	@include signUpActive {
		transform: translateY(0);
	}
	}

	&.m--up {
	@include signUpActive {
		transform: translateY($btnH*2);
	}
	}
	}
	}
	}

	h2 {
	width: 100%;
	font-size: 35px;
	text-align: center;
	}

	label {
	display: block;
	width: $inputW;
	margin: 25px auto 0;
	color: #5c5c5c;
	

	span {
	font-size: 14px;
	color: #838383;
	text-transform: uppercase;
	}
	}

	input {
	display: block;
	width: 100%;
	margin-top: 5px;
	padding-bottom: 5px;
	font-size: 16px;
	border-bottom: 1px solid rgba(0,0,0,0.4);
	text-align: center;
	}

	.forgot-pass {
	margin-top: 15px;
	text-align: center;
	font-size: 12px;
	color: #838383;
	}

	.submit {
	margin-top: 40px;
	margin-bottom: 20px;
	background: #6333fa;
	text-transform: uppercase;
	}

	.fb-btn {
	border: 2px solid #d3dae9;
	color: darken(#d3dae9, 20%);

	span {
	font-weight: bold;
	color: darken(#768cb6, 20%);
	}
	}

	.sign-in {
	transition-timing-function: ease-out;

	@include signUpActive {
	transition-timing-function: ease-in-out;
	transition-duration: $switchAT;
	transform: translate3d($formW,0,0);
	}
	}

	.sign-up {
	transform: translate3d($contW * -1,0,0);

	@include signUpActive {
	transform: translate3d(0,0,0);
	}
	}
	.fb {
		background: rgba(59, 89, 152, .5);
		font-weight: bold;
	}
	.kt {
		background: rgba(254, 239, 27, .5);
		color: #3A1D1D;
		font-weight: bold;
	}
</style>