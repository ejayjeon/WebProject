<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
	import="java.util.ArrayList, classNotice.model.vo.*, member.model.vo.Member, hobbyistClass.model.vo.*"%>
<%@ page
	import="hobbyistClass.model.vo.*, hobbyistClass.model.service.*"%>
<%
	Member loginUser = (Member) session.getAttribute("loginUser");
	ArrayList<Member> member = (ArrayList) request.getAttribute("member");
	PageInfo pi = (PageInfo) request.getAttribute("pi");

	ArrayList<HClass> classList = (ArrayList)request.getAttribute("bList");
	ArrayList<HClassFile> fileList = (ArrayList)request.getAttribute("cfList");
	ArrayList<HClass> classAList = (ArrayList)request.getAttribute("aList");
	ArrayList<HClass> classCList = (ArrayList)request.getAttribute("cList");

/* Tutor tutor = (Tutor)session.getAttribute("tutor"); */
%>
<!DOCTYPE html>
<html>
<head>
<style>
	.container-fluid div{background: white;}
.container-fluid div{background: white;}
</style>
<meta charset="UTF-8">
<title>Insert title here</title>
<%@ include file="../common/css.jsp"%>
</head>
<body>

	<div class="banner_bg_main">
		<div class="container">
			<div class="header_section_top">
				<div class="row">
					<div class="col-sm-12">
						<div class="custom_menu">
							<ul>
								<li><a href="mainPage.jsp">MAIN</a></li>
								<li></li>
								<li><a href="../tutee/likedClass.jsp">LIKED CLASS</a></li>
								<li></li>
								<li><a href="../member/loginPage.jsp">LOG-IN</a></li>
								<li></li>
								<li><a href="../member/myInfo.jsp">MY INFO</a></li>
								<li></li>
								<li><a href="../admin/faq.jsp">FAQ</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="sidebar">
		<div class="scrollbar-inner sidebar-wrapper">
			<div class="user">
				<div class="photo">
					<img src="../assets/images/iu2.jpg">
				</div>
				<div class="info">
					<a class="" data-toggle="collapse" href="#collapseExample"
						aria-expanded="true"> <span> <b>김샘플</b> <!-- loginUser의 NickName 불러오기 -->
							<span class="user-level">튜티(Tutee)</span> <!-- loginUser의 grade 불러오기 -->
							<span class="caret"></span>
					</span>
					</a>
					<div class="clearfix"></div>

					<div class="collapse in" id="collapseExample" aria-expanded="true"
						style="">
						<ul class="nav">
							<li><a href="<%= request.getContextPath() %>/myInfo.me">
									<span class="link-collapse">내 정보 보기</span>
							</a></li>
							<li><a href="<%= request.getContextPath() %>/updateForm.me">
									<span class="link-collapse">내 정보 수정</span>
							</a></li>
							<li><a
								href="<%= request.getContextPath() %>/deleteConfirm.me"> <span
									class="link-collapse">튜티 탈퇴</span>
							</a></li>
						</ul>
					</div>
				</div>
			</div>
			<ul class="nav">
				<li class="nav-item active"><a
					href="<%=request.getContextPath()%>/myClass.te"> <i
						class="la la-toggle-on"></i>
						<p>MY CLASS</p> <span class="badge badge-primary">5</span>
				</a></li>
				<li class="nav-item"><a
					href="<%=request.getContextPath()%>/likedClass.cl"> <i
						class="la la-gittip"></i>
						<p>LIKED CLASS</p>
				</a></li>
				<li class="nav-item"><a
					href="<%=request.getContextPath()%>/review.re"> <i
						class="la la-camera-retro"></i>
						<p>MY REVIEW</p>
				</a></li>
				<hr>
				<li class="nav-item"><a
					href="<%=request.getContextPath()%>/paymend.pa"> <i
						class="la la-money"></i>
						<p>MY PAYMENT</p>
				</a></li>
				<li class="nav-item"><a
					href="<%=request.getContextPath()%>/notification.no"> <i
						class="la la-bell"></i>
						<p>NOTIFICATIONS</p>
				</a></li>
				<%
							if (loginUser != null && loginUser.getMemberGrade().equals("B")) {
					%>
				<hr>
				<li class="nav-item"><a
					href="<%=request.getContextPath()%>/tutorSignUp.no"> <i
						class="la la-pencil"></i>
						<p>APPLICATION</p>
				</a></li>
				<li class="nav-item"><a
					href="<%=request.getContextPath()%>/tutorClass.no"> <i
						class="la la-calendar-o"></i>
						<p>TUTOR ON CLASS</p>
				</a></li>
				<%
							} else {
				%>
				<li class="nav-item update-pro">
					<button onclick="reservation()">
						<i class="la la-hand-pointer-o"></i>
						<p>튜터 신청하기</p>
					</button>
				
						<%
							}
						%>
				</li>
			</ul>
		</div>
	</div>
	<!-- 사이드바 영역 -->

	<!-- 메인 영역 -->
	<div class="main-panel">
		<div class="content">
			<div class="container-fluid">
				<h4 class="page-title">MY CLASS</h4>
				<button type="button"
					onclick="location.href = '<%=request.getContextPath()%>/move.co'"
					class="button hollow">+ 클래스 신청하기</button><br><br>
				<div class="row">

					<div class="col-md-4">
						<div class="card card-stats card-primary active">
							<div class="card-body" >
								<div class="row justify-content-center">
									<h2>수강 중인 클래스</h2>
									<% if (classList.isEmpty() || fileList.isEmpty()) { %>
									<h1>등록된 강의가 없습니다.</h1>
									<% } else { %>
									<%	for (int i = 0; i < classList.size(); i++) { %>
									<% HClass hc = classList.get(i); %>
									<div class="col-md-12">
										<div class="box_main">
											<% for (int j = 0; j < fileList.size(); j++) { %>
											<% HClassFile f = fileList.get(j);%>
											<% if (hc.getClassNo() == f.getBoardNo()) { %>
											<div class="thumbnailArea">
												<img width="40%" height="225"
													src="<%=request.getContextPath()%>/uploadFiles/<%=fileList.get(j).getChangeName() %>"
													class="thumbnail" alt="Thumbnail">
											</div>
											<%
															}
														%>
											<%
														}
													%>
											<h4 class="shirt_text"><%=classList.get(i).getClassName()%></h4>
											<!-- 좋아요 버튼 -->
											&nbsp; <span class="likeBtnArea"> <input type="hidden"
												class="cNo" name="cNo"
												value="<%=classList.get(i).getClassNo()%>">
												<button
													onclick="location.href = '<%=request.getContextPath()%>/classManagement.tt'"
													type="button">
													<span>클래스 관리하기</span>
												</button>
											</span> <br> <br> <br> <br>
										</div>
									</div>
									<%
									}
								%>
									<% } %>
								</div>
							</div>
						</div>
					</div>
					<!-- 수강 중인 클래스 -->
					<div class="col-md-4">
						<div class="card card-stats card-success">
							<div class="card-body">
								<div class="row justify-content-center">
									<h2>수강 신청한 클래스</h2>
									<% if (classAList.isEmpty() || fileList.isEmpty()) { %>
									등록된 강의가 없습니다.
									<% } else { %>
									<%	for (int i = 0; i < classAList.size(); i++) { %>
									<% HClass hca = classAList.get(i); %>
									<div class="col-md-12">
										<div class="box_main">
											<% for (int j = 0; j < fileList.size(); j++) { %>
											<% HClassFile f = fileList.get(j);%>
											<% if (hca.getClassNo() == f.getBoardNo()) { %>
											<div class="thumbnailArea">
												<img width="40%" height="225"
													src="<%=request.getContextPath()%>/uploadFiles/<%=fileList.get(j).getChangeName() %>"
													class="thumbnail" alt="Thumbnail">
											</div>
											<%
															}
														%>
											<%
														}
													%>
											<h4 class="shirt_text"><%=classAList.get(i).getClassName()%></h4>
											<!-- 좋아요 버튼 -->
											&nbsp; <span class="likeBtnArea"> <input type="hidden"
												class="cNo" name="cNo"
												value="<%=classAList.get(i).getClassNo()%>">
												<button
													onclick="location.href = '<%=request.getContextPath()%>/classOpenDetail.tt?bId=<%=classAList.get(i).getClassNo()%>'"
													type="button">
													<span>클래스신청 수정하기</span>
												</button>
											</span> <br> <br> <br> <br>
										</div>
									</div>
									<%
									}
								%>
									<% } %>
									</div>
								</div>
							</div>
						</div>
						<!-- 승인 전 클래스 -->

						<div class="col-md-4">
							<div class="card card-stats card-danger">
								<div class="card-body">
									<div class="row justify-content-center">
										<h2>완료 된 클래스</h2>
										<% if (classCList.isEmpty() || fileList.isEmpty()) { %>
										완료된 강의가 없습니다.
										<% } else { %>
										<%	for (int i = 0; i < classCList.size(); i++) { %>
										<% HClass hcc = classCList.get(i); %>
										<div class="col-md-12">
											<div class="box_main">
												<% for (int j = 0; j < fileList.size(); j++) { %>
												<% HClassFile f = fileList.get(j);%>
												<% if (hcc.getClassNo() == f.getBoardNo()) { %>
												<div class="thumbnailArea">
													<img width="40%" height="225"
														src="<%=request.getContextPath()%>/uploadFiles/<%=fileList.get(j).getChangeName() %>"
														class="thumbnail" alt="Thumbnail">
												</div>
												<%
															}
														%>
												<%
														}
													%>
												<h4 class="shirt_text"><%=classCList.get(i).getClassName()%></h4>
											</div>
										</div>
										<%
									}
								%>
									<% } %>	
					
										
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>

		<%@ include file="../common/js.jsp"%>
</body>
</html>