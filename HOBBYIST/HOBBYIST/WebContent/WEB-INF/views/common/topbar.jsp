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
</head>
<body>
	<header>
	  <nav>
		<!-- 상단바 -->
			<div class="row expanded app-dashboard-top-nav-bar">
				<div class="topbar columns medium-2">
					<a class="app-dashboard-logo" href="<%= request.getContextPath() %>"><img
						src="assets/images/hlogo.png" width="70px" height="55px"></a>
				</div>
				<div class="topbar columns shrink app-dashboard-top-bar-actions">
				
					<% if(loginUser == null) { %>
					<div class="nav-item"><a class="nav-link"><img src="images/myPage.png" onclick="alert('로그인을 먼저 해주세요.');"></a></div>
					<% } else { %>
					<div class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/myInfo.me"><img src="images/myPage.png"></a></div> <!-- 마이페이지아이콘 -->
					<% }  %>
					
					<div class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/FAQ.bo"><img src="images/contact.png"></a></div> <!-- 콘택트아이콘 -->
							
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
		</nav>
	</header>
</body>
</html>