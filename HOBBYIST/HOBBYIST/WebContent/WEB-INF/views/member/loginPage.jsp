<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String msg = (String)request.getAttribute("msg");
%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/jquery-3.6.0.min.js"></script>
</head>
<style>
	body{
		background:url('<%= request.getContextPath() %>/images/mintbackground.jpg') no-repeat center center fixed;
		background-size: cover;
	}
	
	#loginTable{text-align: center; height: 100px;}
	#loginTable td:nth-child(1){padding-right: 15px;}
	.loginBtns{
		margin-left: 60px;
	}
	.loginBtns input{background: #5F9EA0;}
	.loginBtns input+input{background: teal;}
	#goMain{background: gray;}
	input[type=button], input[type=submit]{cursor: pointer; color: white;}
	#userInfo label{font-weight: bold;}
</style>
<body>
	<h1 align="center">HOBBYIST에 오신걸 환영합니다</h1>
	
	<div class="loginArea" align="center">
		<form id="loginForm" action="<%= request.getContextPath() %>/login.me" method="post">
			<table id="loginTable" >
				<tr>
					<td><label>ID</label></td>
					<td><input type="text" name="userEmail" id="userEmail"></td>
				</tr>
				<tr>
					<td><label>PWD</label></td>
					<td><input type="password" name="userPwd" id="userPwd"></td>
				</tr>
			</table>
			<br>
			<div class="loginBtns">
				<input type="submit" value="로그인">
				<input type="button" value="회원가입" onclick="location.href='<%= request.getContextPath() %>/signUpForm.me'"> <!-- 페이지 이동을 위한 url -->
				<br><br>
				<input type="button" id="goMain"value="메인으로" onclick="location.href='<%= request.getContextPath() %>'"> 
			
			</div>
		</form>
	</div>	
	
	<script>
		window.onload = function() { 
		if ('<%= msg %>' != 'null') {
			alert('<%= msg %>'); // alert메시지 출력 <- 로그인 실패시
		}
	}
	</script>
</body>
</html>