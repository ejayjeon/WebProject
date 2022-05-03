<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
	body{
		background: #9ED4C2; 
	}
	
	#cancelBtn{
		width: 80px;
		height: 40px;
		background: lightgrey;	
		margin-right: 20px;
		border : 1px solid black;
	}
	
	#confirmBtn{
		width: 80px;
		height: 40px;
		background: #778899;
		border : 1px solid black;	
	}
</style>
</head>
<body>
		<br><br>
		<h1 align="center">정말 탈퇴하시겠습니까?😢</h1>
		<div align="center">
			<button id="cancelBtn" onclick="history.back();"><b>취소</b></button> <%-- <%= request.getContextPath() %> --%>
			<button id="confirmBtn" onclick="location.href='<%= request.getContextPath() %>/deleteConfirm.me'"><b>확인</b></button>
		</div>

</body>
</html>