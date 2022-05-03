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
<script src="js/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/menubar.css">
<script src="js/menubar.js"></script>
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
		
			<!-- 사이드바 영역 -->
			<div id="app-dashboard-sidebar" class="app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium" data-off-canvas>
				
				<!-- 사이드바 close, open -->
				<div class="app-dashboard-sidebar-title-area">
					<div class="app-dashboard-close-sidebar">
						<!-- Close button -->
						<button id="close-sidebar" data-app-dashboard-toggle-shrink
							class="app-dashboard-sidebar-close-button show-for-medium"
							aria-label="Close menu" type="button">
							<span aria-hidden="true"><a href="#"><i
									class="large fa fa-angle-double-left"><img
								src="images/three-dots-vertical.svg"></i></a></span> 
						</button>
					</div>
					<!-- open button -->
					<div class="app-dashboard-open-sidebar">
						<button id="open-sidebar" data-app-dashboard-toggle-shrink
							class="app-dashboard-open-sidebar-button show-for-medium"
							aria-label="open menu" type="button">
							<span aria-hidden="true"><a href="#"><i
									class="large fa fa-angle-double-right"><img
								src="images/three-dots-vertical.svg"></i></a></span> 
						</button>
					</div>
				</div>
				
				<!-- 사이드바 -->
				<div class="app-dashboard-sidebar-inner">
					<ul class="menu vertical">
						<li><a href="#">
							<span class="app-dashboard-sidebar-text"><h3>나의 클래스룸</h3></span>
						</a></li>
						<li><a href="#content1">
							<span class="app-dashboard-sidebar-text">수강중인 클래스</span>
						</a></li>
						<li><a href="#content2"> 
							<span class="app-dashboard-sidebar-text">수강완료 클래스</span>
						</a></li>
						<li><a href="#content3"> 
							<span class="app-dashboard-sidebar-text">찜한 클래스</span>
						</a></li>
						<li><a href="#content4"> 
							<span class="app-dashboard-sidebar-text">내가 쓴 후기</span>
						</a></li>
						<br>
						<li>
							<span class="app-dashboard-sidebar-text"><h3>내 정보 관리</h3></span>
						</li>
						<li><a href=""> 
							<span class="app-dashboard-sidebar-text">내 정보 수정하기</span>
						</a></li>
						<li><a href=""> 
							<span class="app-dashboard-sidebar-text">결제정보</span>
						</a></li>
						<li><a href=""> 
							<span class="app-dashboard-sidebar-text">튜티 탈퇴</span>
						</a></li>
						<br><br><br>
						
						<% if(loginUser != null && loginUser.getMemberGrade().equals("B")) { %> 
						<li>
							<span class="app-dashboard-sidebar-text"><h3>튜터</h3></span> 
						</li>
						<li ><a href=""> 
							<span class="app-dashboard-sidebar-text">내 클래스</span>  <%-- 누르고 서블릿 이동하면 tutor정보도 세션에 저장하기? --%>
						</a></li>
						<li style="color: #9ED4C2"><a href=""> 
							<span class="app-dashboard-sidebar-text">튜터 정보</span>
						</a></li>
						<li style="color: #9ED4C2"><a href=""> 
							<span class="app-dashboard-sidebar-text">정산하기</span>
						</a></li>		
						
						<% } else { %>  <%-- 로그인한 유저의 그레이드가 'B'즉 튜터가 아니면 튜터 신청 버튼 활성화 --%>
						<li>
							<span class="app-dashboard-sidebar-text"><button id="apply-tutor-btn">튜터 신청하기</button></span>
						</li> <%-- span class="app-dashboard-sidebar-text"가 있어야 사이드바 닫힐때 안 보임  --%>	
					
						<% }  %>
						<br><br><br>
					</ul>
					
					
				</div>
			</div>

			<!-- 본문 영역 -->
			<div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
				
						
						여기다 본문 내용 적기
						
			</div>
			
			
		</div>
		
			<!-- FOOTER -->
			<footer class="container" style="text-align: center; background: #F5F5F5;">
			
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					&copy; 2021 HOBBYIST, Inc. &middot; <a href="<%= request.getContextPath() %>/contact.co">Contact</a>
					<!-- &middot; <a href="#">Terms</a> -->
				</p>
			</footer> 
	</div>
</body>
</html>