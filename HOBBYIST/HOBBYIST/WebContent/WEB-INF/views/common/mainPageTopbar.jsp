<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="member.model.vo.Member" %>
<%
	 Member loginUser = (Member)session.getAttribute("loginUser");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>top navbar</title>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/jquery-3.6.0.min.js"></script> <!-- 여기다 연결하면 jquery 어디에서나 쓸수 있음 -->

<%-- 부트스트랩 CDN이 연결되어 있는 메인페이지 전용 상단바 파일/ 부트스트랩 템플릿 사용할 일이 잇으면 이 상단바 이용해도 될듯  --%>

	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author"
		content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
	<meta name="generator" content="Hugo 0.88.1">
	
 	<!-- Bootstrap CSS CDN -->
 	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<style>
	#top{
		background: #9ED4C2;
		display: inline-block;
		text-align: right;
	}
	
	#logo img{
		position: absolute;
		margin-left: 46.91%; /* 메인페이지의 로고위치를 다른 페이지들과 맞춤 */
		top: 10%;
	}
	
	.nav-item img{
		heigh: 25px;
		width: 25px; 
		margin-right: 10px;
		margin-top: 25%;
	}
	
	#logBtn{
		background: none;
		border: 1px solid white;
		color: white;
		width: 80px;
		height: 40px;
		font-size: large;
		font-weight: bold;
	}
	
	#logBtn:hover{
		background: white;
		color: #5F9EA0; /* CadetBlue */
		border: 1px solid #5F9EA0;
	}
	
	header {
		/* 상단바의 폰트 적용 */
		font-family: monospace;
		
	}

</style>
</head>
<body>
	<header>
		<nav id="top" class="navbar navbar-expand-md navbar-dark fixed-top"> <!-- fixed-top : 상단에 고정 -->
	 		<div class="container-fluid"> 
	 				<div id="logo">
						<a href="<%= request.getContextPath() %>">
							<img src="<%= request.getContextPath() %>/images/logo.png" width="70px"height="55px">
						</a>
					</div>
			 
					<div id="navList">
						<ul class="navbar-nav me-auto mb-2 mb-md-0"> <!-- navbar-nav me-auto mb-2 mb-md-0 : li 옆에 나열하는 효과  -->
							<% if(loginUser == null) { %>
							<li class="nav-item"><a class="nav-link"><img src="images/myPage.png" onclick="alert('로그인을 먼저 해주세요.');"></a></li>
							<% } else { %>
							<li class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/myInfo.me"><img src="images/myPage.png"></a></li> <!-- 마이페이지 정보조회 아이콘 -->
							<% }  %>
							<li class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/FAQ.bo"><img src="images/contact.png"></a></li> <!-- 콘택트아이콘 -->
							
							<% if(loginUser == null) { %>
							<li class="nav-item"><a class="nav-link"><img src="images/like.png" onclick="alert('로그인을 먼저 해주세요.');"></a></li><!-- 내클래스(찜한클래스) 아이콘  -->	
							<% } else { %>
							<li class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/myClass.te"><img src="images/like.png"></a></li> 
							<% }  %>
							
							<% if(loginUser == null) { %>
								<li class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/loginForm.me"><button id="logBtn">Login</button></a></li> <!-- 로그인 -->
							<% } else { %>
								<li class="nav-item"><a class="nav-link" href="<%= request.getContextPath() %>/logout.me"><button id="logBtn">Logout</button></a></li> <!-- 로그아웃 -->
							<% } %>
						</ul>
					</div>
			</div>
		</nav>
	</header>
</body>
</html>