<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="member.model.vo.Member" %>
<%
	Member loginUser = (Member)session.getAttribute("loginUser");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/menubar.css">
<script src="js/jquery-3.6.0.min.js"></script>
</head>
<body>
	 
	<div class="app-dashboard shrink-medium">
		<!-- 상단바 -->
		<div class="row expanded app-dashboard-top-nav-bar">
			<div class="columns medium-2">
				<a class="app-dashboard-logo" href="<%= request.getContextPath() %>"><img
					src="images/logo.png" width="70px" height="55px"></a>
			</div>
			<div class="columns shrink app-dashboard-top-bar-actions">
					<% if(loginUser == null) { %>
					<div class="nav-item"><a class="nav-link"><img src="images/myPage.png" onclick="alert('로그인을 먼저 해주세요.');"></a></div>
					<% } else { %>
					<div class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/myInfo.me"><img src="images/myPage.png"></a></div> <!-- 마이페이지아이콘 -->
					<% }  %>
					
					<div class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/contact.co"><img src="images/contact.png"></a></div> <!-- 콘택트아이콘 -->
							
					<% if(loginUser == null) { %>
						<div class="nav-item"><a class="nav-link"><img src="images/like.png" onclick="alert('로그인을 먼저 해주세요.');"></a></div>
					<% } else { %>
						<div class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/myClass.te"><img src="images/like.png"></a></div> <!-- 찜아이콘  -->
					<% }  %>
					
						
					<% if(loginUser == null) { %>
						<div class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/loginForm.me"><button id="logBtn">Login</button></a></div> <!-- 로그인 -->
					<% } else { %>
						<div class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/logout.me"><button id="logBtn">Logout</button></a></div> <!-- 로그아웃 -->
					<% } %>
			</div>
		</div>
		
		
		<!-- 바디 영역(사이드바, 본문) -->
		<div class="app-dashboard-body off-canvas-wrapper">
		
		<!-- 본문 내용 / 푸터 하단에 붙이기 위해 이 div의 클래스명 필요함 --> 
		<div class="app-dashboard-body-content off-canvas-content"
				data-off-canvas-content>
			<p>여기에 본문을 작성하시면 됩니다!</p>
			
			여기에 본문
			
			
			
		</div>
		
		</div>
		<!-- FOOTER -->
		<footer class="container" style="text-align: center; background: #F5F5F5;">
			
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					&copy; 2021 HOBBYIST, Inc. &middot; <a href="<%= request.getContextPath() %>/contact.co">Contact</a>
					&middot; <a href="#">Terms</a>
				</p>
		</footer> 
	</div>
	
</body>
</html>>