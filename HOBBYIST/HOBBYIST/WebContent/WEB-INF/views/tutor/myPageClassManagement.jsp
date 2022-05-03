<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
	import="java.util.ArrayList, classNotice.model.vo.*, member.model.vo.Member"%>
<%@ page
	import="hobbyistClass.model.vo.*, hobbyistClass.model.service.*"%>

<%
	Member loginUser = (Member) session.getAttribute("loginUser");
	ArrayList<ClassNotice> list = (ArrayList) request.getAttribute("list");
	ArrayList<Member> member = (ArrayList) request.getAttribute("member");
	PageInfo pi = (PageInfo) request.getAttribute("pi");
	
	HClassService hService = new HClassService();
	ArrayList<HClass> hc =  (ArrayList)request.getAttribute("HClass");
	ArrayList<HClass> classList = hService.selectClassList();
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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

			// like취소-button클릭시 찜한 클래스 삭제 기능
			$('.button-like').bind('click', function(event) {
				if (confirm('취소하시겠습니까?')) { // 확인 누를시에만 삭제
					// $(this).toggleClass("liked"); //여기선 없어도 됨
					/* $(this).parent().remove(); */
					// 삭제하는 서블릿으로 이동  location.href="" -> 삭제하고 다시 이 페이지로 돌아오기
				}
			});

			// 후기 삭제 버튼 누를시
			$('.remove').click(function() {
				if (confirm('삭제하시겠습니까?')) { // 확인 누를시에만 삭제
					/* $(this).parent().parent().remove(); */
					// 삭제하는 서블릿으로 이동  location.href="" -> 삭제하고 다시 이 페이지로 돌아오기
				}
			});
		});
</script>
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
						<li><a href="<%= request.getContextPath() %>/tutorMyClass.if"> <span class="app-dashboard-sidebar-text">내
									클래스</span> <%-- 누르고 서블릿 이동하면 tutor정보도 세션에 저장하기? --%>
						</a></li>
						<li style="color: #9ED4C2"><a href="<%= request.getContextPath() %>/tutorInform.me"> <span
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
					</ul>
				</div>
			</div>
			<div class="app-dashboard-body-content off-canvas-content"
				data-off-canvas-content>
				
				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<div class="card mb-4">
								<h1>클래스 관리하기</h1>
								<button>썸네일 수정</button>
								<div></div>
								<img class="card-img-top"
									src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
									alt="..." />
								<div class="card-body">
									<h2 class="card-title"><%=  %></h2>
									<h3>클래스 소개</h3>
									<div>안녕하세요. 오일파스텔로 그리는 꽃그림 클래스 입니다.</div>
									<button>내용 수정</button>
								</div>
							</div>
							<div class="card mb-4">
								<h2>소개 사진</h2>
								<button>이미지 추가</button>
								<div></div>
								<img class="card-img-top"
									src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
									alt="..." />
								<div class="card-body"></div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h2 align="center">수강 튜티 목록</h2>
					<div
						style="width: 1000px; height: 100px; overflow: auto; margin: 0 auto;">

						<table class="table-expand">

							<thead style="background: lightgray;">
								<tr class="table-expand-row">
									<th width="30px">No.</th>
									<th width="200px">아이디</th>
									<th width="200px">닉네임</th>
									<th width="150px">전화번호</th>
									<th width="300px">이메일</th>
									<th width="150px">신청 날짜</th>
								</tr>
							</thead>
							<!-- 							<tbody> -->
<!-- 								<tbody> -->
<%-- 								<% --%>
<%-- -									if (list.isEmpty()) {
<%-- 								%> --%>
<!-- 								<tr> -->
<!-- 									<td colspan="6">수강 인원이 없습니다.</td> -->
<!-- 								</tr> -->
<%-- 								<% --%>
<%-- 									} else {
<%-- 								%> --%>
<%-- 								<% --%>
 <%-- 									for (int i = 0; i < list.size(); i++) {
<%-- 								%> --%>
<!-- 								<tr> -->
<%-- 									<td><%=list.get(i).getClassBoardNo()%></td> --%>
<%-- 									<td><%=list.get(i).getClassBoardName()%></td> --%>
<%-- 									<td><%=list.get(i).getClassBoardWriter()%></td> --%>
<%-- 									<td><%=list.get(i).getClassBoardViews()%></td> --%>
<%-- 									<td><%=list.get(i).getClassBoardDate()%></td> --%>
<%-- 									<td><%=list.get(i).getClassBoardDate()%></td> --%>
<!-- 								</tr> -->
<%-- 								<% --%>
 <%-- 									}
<%-- 								%> --%>
<%-- 								<% --%>
<%-- 									}
<%-- 								%> --%>
<!-- 							</tbody> -->
						</table>
					</div>
				</div>
				<br> <br>
				<div class="board_list_wrap1">
					<br>
					<div>
						<table class="board_list1" id="listArea">
							<h2>공지사항</h2>
							<thead>
								<tr>
									<th>글번호</th>
									<th>글제목</th>
									<th>작성자</th>
									<th>조회수</th>
									<th>작성일</th>
								</tr>
							</thead>
							<tbody>
								<%
									if (list.isEmpty()) {
								%>
								<tr>
									<td colspan="5">존재하는 공지사항이 없습니다.</td>
								</tr>
								<%
									} else {
								%>
								<%
									for (int i = 0; i < list.size(); i++) {
								%>
								<tr>
									<td><%=list.get(i).getClassBoardNo()%></td>
									<td><%=list.get(i).getClassBoardName()%></td>
									<td><%=list.get(i).getClassBoardWriter()%></td>
									<td><%=list.get(i).getClassBoardViews()%></td>
									<td><%=list.get(i).getClassBoardDate()%></td>
								</tr>
								<%
									}
								%>
								<%
									}
								%>
							</tbody>
						</table>
					</div>
					
					<input type="button" id="tutor_enroll_cancel"onclick="location.href='javascript:history.go(-1);'" value ="취소">

					<input type="submit" id="tutor_enroll_complete" value="클래스 신청">

					<div align="right">
						<%
							if (loginUser != null && (loginUser.getMemberGrade().equals("B")/*||loginUser.getMemberGrade().equals("A")*/)) {
						%>
						<%-- 로그인을 했으면서,튜터 아이디인  경우만--%>
						<input type="button" id="writeNoBtn" value="글쓰기"
							onclick="location.href='classNoticeWrite.no'">
						<%
							}
						%>
					</div>

				</div>

			</div>
			<script>
		$('#listArea td').mouseenter(function(){
			$(this).parent().css({'background':'darkgray', 'cursor':'pointer'});
		}).mouseout(function(){
			$(this).parent().css({'background':'none'});
		}).click(function(){
				var num = $(this).parent().children().eq(0).text(); // 글번호 가져오기
			location.href = '<%=request.getContextPath()%>/classNoticedetail.no?no='+ num;
			});
</script>
			
			
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