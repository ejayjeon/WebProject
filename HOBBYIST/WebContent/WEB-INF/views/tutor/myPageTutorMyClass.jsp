<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
	import="java.util.ArrayList, classNotice.model.vo.*, member.model.vo.Member"%>
<%
	Member loginUser = (Member) session.getAttribute("loginUser");
	ArrayList<ClassNotice> list = (ArrayList) request.getAttribute("list");
	ArrayList<Member> member = (ArrayList) request.getAttribute("member");
	PageInfo pi = (PageInfo) request.getAttribute("pi");


/* Tutor tutor = (Tutor)session.getAttribute("tutor"); */
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My Classroom</title>
<script src="js/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/menubar.css">
<link rel="stylesheet" type="text/css" href="css/tutorBoard.css">
<script>
		$(function() {
			// 사이드바 토글 기능
			$('[data-app-dashboard-toggle-shrink]').on(
					'click',
					function(e) {
						e.preventDefault();
						$(this).parents('.app-dashboard').toggleClass(
								'shrink-medium').toggleClass('shrink-large');
					});
		});
	</script>
<style>
#logBtn {
	/* 임시로 상단바의 로그인버튼 폰트 적용 */
	font-family: monospace;
	font-weight: bold;
}
</style>
</head>
<body>
	<div class="app-dashboard shrink-medium">

		<!-- 상단바 -->
		<div class="row expanded app-dashboard-top-nav-bar">
			<div class="columns medium-2">
				<a class="app-dashboard-logo" href="<%=request.getContextPath()%>"><img
					src="images/logo.png" width="70px" height="55px"></a>
			</div>
			<div class="columns shrink app-dashboard-top-bar-actions">
				<div class="nav-item">
					<a class="nav-link" href="<%=request.getContextPath()%>/myInfo.me"><img
						src="images/myPage.png"></a>
				</div>
				<!-- 마이페이지아이콘 -->
				<div class="nav-item">
					<a class="nav-link" href="<%=request.getContextPath()%>/contact.co"><img
						src="images/contact.png"></a>
				</div>
				<!-- 콘택트아이콘 -->
				<div class="nav-item">
					<a class="nav-link" href="<%=request.getContextPath()%>/myClass.me"><img
						src="images/like.png"></a>
				</div>
				<!-- 찜아이콘  -->

				<%
					if (loginUser == null) {
				%>
				<div class="nav-item">
					<a class="nav-link"
						href="<%=request.getContextPath()%>/loginForm.me"><button
							id="logBtn">Login</button></a>
				</div>
				<!-- 로그인 -->
				<%
					} else {
				%>
				<div class="nav-item">
					<a class="nav-link" href="<%=request.getContextPath()%>/logout.me"><button
							id="logBtn">LogOut</button></a>
				</div>
				<!-- 로그아웃 -->
				<%
					}
				%>



				<!-- <button href="#" class="button hollow">Logout</button> 로그아웃 버튼 -->
				<!-- <a href="#" height="30" width="30" alt=""><i class="fa fa-info-circle"></i></a> -->
			</div>
		</div>


		<div class="app-dashboard-body off-canvas-wrapper">
			<div id="app-dashboard-sidebar"
				class="app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium"
				data-off-canvas>
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
						<li><a href="#"> <span class="app-dashboard-sidebar-text"><h3>나의
										클래스룸</h3></span> <!-- 누르면 나의 클래스룸 -> 수강중/수강완료/찜한클래스/후기 전체 볼 수 있는 페이지 -->
						</a></li>
						<li><a href="#"> <span class="app-dashboard-sidebar-text">수강중인
									클래스</span> <!-- 누르면 수강중인 클래스 페이지로 이동(페이지 따로 만들기) -->
						</a></li>
						<li><a href="#"> <span class="app-dashboard-sidebar-text">수강완료
									클래스</span> <!-- 누르면 수강완료 클래스 페이지로 이동 -->
						</a></li>
						<li><a href="#"> <span class="app-dashboard-sidebar-text">찜한
									클래스</span> <!-- 누르면 찜한 클래스 페이지로 이동 -->
						</a></li>
						<li><a href="#"> <span class="app-dashboard-sidebar-text">내가
									쓴 후기</span> <!-- 누르면 내가 쓴 후기 페이지로 이동 -->
						</a></li>
						<br>
						<li><a href="#"> <span class="app-dashboard-sidebar-text"><h3>내
										정보</h3></span> <!-- 내 정보 조회 페이지  -->
						</a></li>
						<li><a href="#"> <span class="app-dashboard-sidebar-text">내
									정보 수정</span> <!--  내 정보 수정 페이지-->
						</a></li>
						<li><a href="#"> <span class="app-dashboard-sidebar-text">결제정보</span>
						</a></li>
						<li><a href="#"> <span class="app-dashboard-sidebar-text">튜티
									탈퇴</span>
						</a></li>
						<br>
						<br>
						<br>

						<%-- <% if(tutor == null) { %> 로그인할때 tutor정보도 세션에 저장하고 상단에서 객체 생성하기 --%>
						<%
							if (loginUser != null && loginUser.getMemberGrade().equals("B")) {
						%>
						<%-- 로그인한 유저의 그레이드가 'B'즉 튜터가 아니면 튜터 신청 버튼 활성화 --%>
						<li><span class="app-dashboard-sidebar-text"><h3>튜터</h3></span>
						</li>
						<li><a href="#"> <span class="app-dashboard-sidebar-text">내
									클래스</span> <%-- 누르고 서블릿 이동하면 tutor정보도 세션에 저장하기? --%>
						</a></li>
						<li style="color: #9ED4C2"><a href="#"> <span
								class="app-dashboard-sidebar-text">튜터 정보</span>
						</a></li>
						<li style="color: #9ED4C2"><a href="#"> <span
								class="app-dashboard-sidebar-text">정산하기</span>
						</a></li>

						<%
							} else {
						%>
						<li><span class="app-dashboard-sidebar-text"><button
									id="apply-tutor-btn">튜터 신청하기</button></span></li>
						<%-- span class="app-dashboard-sidebar-text"가 있어야 사이드바 닫힐때 안 보임  --%>

						<%
							}
						%>
						<br>
						<br>
						<br>
					</ul>


				</div>
			</div>

			<!-- 본문 내용 -->
			<div class="app-dashboard-body-content off-canvas-content"
				data-off-canvas-content>
				<h2 class="text-center">내 클래스 목록</h2>
				<button type="button"
					onclick="location.href = '<%=request.getContextPath()%>/classSignUp.me'"
					class="button hollow">+ 클래스 신청하기</button>

				<div class="work-feature-block row">
					<div style="width: 30%; height: 150px; float: left;">
						<img class="work-feature-block-image"
							src="https://i.imgur.com/6jMbuU1.jpg" width="300px" />
					</div>
					<div class="columns medium-5">
						<h2 class="work-feature-block-header">[새벽] 디지털 카메라 배우기</h2>
						<p>수강기간: 2021.11.10 ~ 2022.01.30</p>
						<p>수강인원: 20/30</p>
						<button onclick="location.href = '<%=request.getContextPath()%>/classManagement.tt'" type="button" href="#" class="button hollow">클래스
							관리하기</button>
					</div>
				</div>
				<div class="work-feature-block row">
					<div style="width: 30%; height: 150px; float: left;">
						<img class="work-feature-block-image"
							src="https://i.imgur.com/6jMbuU1.jpg" width="300px" />
					</div>
					<div class="columns medium-5">
						<h2 class="work-feature-block-header">[오전] 아이패드 드로잉</h2>
						<p>수강기간: 2021.10.20 ~ 2021.12.31</p>
						<p>수강인원: 27/30</p>
						<button onclick="location.href = '<%=request.getContextPath()%>/classManagement.tt'" class="button hollow">클래스 관리하기</button>
					</div>
				</div>

				<br> <br> <br>

				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<h2>승인 전 클래스</h2>
							<div class="row">
								<div class="col-lg-6">
									<div class="card mb-4">
										<img class="card-img-top"
											src="https://dummyimage.com/300x200/dee2e6/6c757d.jpg"
											alt="..." /> <img class="card-img-top"
											src="https://dummyimage.com/300x200/dee2e6/6c757d.jpg"
											alt="..." />


										<div class="card-body">
											<h3>아이와 함께하는 드로잉 클래스</h3>
											<button onclick="location.href = '<%=request.getContextPath()%>/classopendetail.me'">클래스 수정하기</button>
										</div>

									</div>
									<!-- Blog post-->
									<div class="card mb-4">
										<h2>완료 클래스</h2>
										<a href="#"><img class="card-img-top"
											src="https://dummyimage.com/300x200/dee2e6/6c757d.jpg"
											alt="..." /></a>
										<div class="card-body">
											<h3>CODING 야 너두 할 수 있어!</h3>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- FOOTER -->
		<footer class="container"
			style="text-align: center; background: #F5F5F5;">

			<p class="float-end">
				<a href="#">Back to top</a>
			</p>
			<p>
				&copy; 2021 HOBBYIST, Inc. &middot; <a
					href="<%=request.getContextPath()%>/contact.co">Contact</a>
				<!-- &middot; <a href="#">Terms</a> -->
			</p>
		</footer>
	</div>

</body>
</html>