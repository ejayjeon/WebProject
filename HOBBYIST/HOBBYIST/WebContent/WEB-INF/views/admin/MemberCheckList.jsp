<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.ArrayList, member.model.vo.*" %>
<% 
	ArrayList<Member> tuteeList = (ArrayList)request.getAttribute("tuteeList");
	ArrayList<Member> tutorList = (ArrayList)request.getAttribute("tutorList");
	MemberInfo pi = (MemberInfo)request.getAttribute("pi");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>admin - 회원 조회</title>
<style>
	#outer {
		width: 1500px;
		height : 1400px;
		margin-left: 10px;
	}
	.tableArea {
		width: 1300px;
		height : 500px;
		margin-left: 0;
 	}

	#listArea1, #listArea2 {
		text-align: center;
		margin-bottom: 50px;
	}
	
	#writeFaqBtn {
		background: #9ED4C2;
		border: 1px solid white;
		width : 100px;
		height : 35px;
		font-weight: bold;
		color : white;
	}
	
	th {
		border-bottom: 1px solid lightgrey;
		height : 50px;
	}
	
	td {
		height : 30px;
	}
	
	table .div-sub {
		display : none;
	}
	
	button:hover {
		cursor: pointer;
		font-weight: bold;	
	}
	
	#choosen{
		color: #9ED4C2; 
		border: none; 
		font-weight: bold;
		background: none;
	}
	
	#numBtn{ 
		color : gray;
		border: none;
		background: none;
	}
	
	#toFirstBtn, #toLastBtn, #beforeBtn, #afterBtn{
		border : none;
		background: none;
	}
	
		
</style>
<script src="js/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/menubar.css">
<script src="js/menubar.js"></script>
</head>
<body>
	<div class="app-dashboard shrink-medium">
	
		<!-- 상단바 -->
		<%@ include file="../common/topbar.jsp" %>
		
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
							<li><a href="<%= request.getContextPath() %>/apvList.cl">
								<span class="app-dashboard-sidebar-text"><h3>클래스 관리</h3></span>
							</a></li>
							<li><a href="#">
								<span class="app-dashboard-sidebar-text">클래스 승인</span>
							</a></li>
							<li><a href="#"> 
								<span class="app-dashboard-sidebar-text">클래스 후기 관리</span>
							</a></li>
							<br><br>
							<li><a href="#"> 
								<span class="app-dashboard-sidebar-text"><h3>고객 요청 관리</h3></span>
							</a></li>
							<li><a href="<%= request.getContextPath() %>/list.cs"> 
								<span class="app-dashboard-sidebar-text">1:1 문의</span>
							</a></li>
							<li><a href="<%= request.getContextPath() %>/FAQ.bo"> 
								<span class="app-dashboard-sidebar-text">자주 묻는 질문(FAQ)</h3></span>
							</a></li>
							<br><br>
							<li><a href="<%= request.getContextPath() %>/memberCheck.admin"> 
								<span class="app-dashboard-sidebar-text"><h3>회원 관리</h3></span>
							</a></li>
							<li><a href="#listArea_tutee"> 
								<span class="app-dashboard-sidebar-text">튜티(Tutee)목록</span>
							</a></li>
							<li><a href="#listArea_tutor"> 
								<span class="app-dashboard-sidebar-text">튜터(Tutor)목록</span>
							</a></li>
										
						</ul>
					</div>
				</div>

			<!-- 본문 영역 -->
 			<div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
				<div id="outer">
					<h1> 회원 관리 </h1>
					<h2 id="listArea_tutee"> 1. TUTEE 목록</h2>
						<div class="tableArea">
							<form method="post"> <!-- action="confirmClass.cl" --> 
								<table id="listArea1">
									<tr>
										<th width = 200px> 이메일 </th>
										<th width = 100px> 이름 </th>
										<th width = 100px> 닉네임  </th>
										<th width = 150px> 전화번호  </th>
										<th width = 120px> 비밀번호 </th>
										<th width = 200px> 카카오 </th>
										<th width = 100px> 가입경로 </th>
										<th width = 120px> 가입날짜 </th>
										<th width = 100px> 활동상태 </th>
									</tr>
			 						<% if(tuteeList.isEmpty()) { %>
										<tr>
											<td colspan = "9"> 조회된 리스트가 없습니다. </td>
										</tr>
									<% } else { %>
										<%	for(int i = 0; i < tuteeList.size(); i++){ %>
											<tr> 
												<td>
													<%= tuteeList.get(i).getMemberEmail() %>
													<input type="hidden" id="tuteeEmail" name="tuteeEmail" value="<%= tuteeList.get(i).getMemberEmail() %>">
												</td>
												<td>
													<%= tuteeList.get(i).getMemberName() %>
													<input type="hidden" id="tuteeName" name="tuteeName" value="<%= tuteeList.get(i).getMemberName() %>">
												</td>
												<td>
													<%= tuteeList.get(i).getMemberNickName() %>
													<input type="hidden" id="tuteeNickName" name="tuteeNickName" value="<%= tuteeList.get(i).getMemberNickName() %>">	
												</td>
												<td>
													<%= tuteeList.get(i).getMemberPhone() %>
													<input type="hidden" id="tuteePwd" name="tuteePwd" value="<%= tuteeList.get(i).getMemberPhone() %>">
												</td>
												<td>
													<%= tuteeList.get(i).getMemberPwd() %>
													<input type="hidden" id="tuteePwd" name="tuteePwd" value="<%= tuteeList.get(i).getMemberPwd() %>">
												</td>
												<td>
													<%= tuteeList.get(i).getKakaoNo() %>
													<input type="hidden" id="tuteeKakao" name="tuteeKakao" value="<%= tuteeList.get(i).getKakaoNo() %>">
												</td>
												<td>
													<%= tuteeList.get(i).getMemberEnrollType() %>
													<input type="hidden" id="tuteeEnrollType" name="tuteeEnrollType" value="<%= tuteeList.get(i).getMemberEnrollType() %>">
												</td>
												<td>
													<%= tuteeList.get(i).getMemberEnrollDate() %>
													<input type="hidden" id="tuteeEnrollDate" name="tuteeEnrollDate" value="<%= tuteeList.get(i).getMemberEnrollDate() %>">
												</td>
												<td>
													<%= tuteeList.get(i).getMemberStatus() %>
													<input type="hidden" id="tuteeStatus" name="tuteeStatus" value="<%= tuteeList.get(i).getMemberStatus() %>">
												</td>
											</tr> 
										<%  } %>
									<% } %> 
								</table>
							</form>
 							<div class="pagingArea" align="center">
			
								<!-- 처음으로 -->
								<button id="toFirstBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=1'">&lt;&lt; 첫 페이지로</button>
								
								<!-- 이전페이지로 -->
								<button id="beforeBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=<%= pi.getCurrentPage() -1 %>'">&lt; 이전</button>
								<script>
									if(<%= pi.getCurrentPage() %> <= 1){
										$('#beforeBtn').prop('disabled', true);
									}
								</script>
								
								<!-- 숫자버튼 -->
								<% for (int p = pi.getStartPage(); p <= pi.getEndPage(); p++) { %>
								<% 		if(p == pi.getCurrentPage()) { %>
									<button id="choosen" disabled><%= p %></button> <!-- 현재 페이지는 선택 못하게 -->
								<%      } else { %>
									<button id="numBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=<%= p %>'"><%= p %></button>
								<%		 } %>
								<%	} %>
								
								<!-- 다음페이지로 -->
								<button id="afterBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=<%= pi.getCurrentPage() + 1 %>'">다음 &gt;</button>
									<script>
										if(<%= pi.getCurrentPage() %> >= <%= pi.getMaxPage() %>){
											$('#afterBtn').prop('disabled', true);
										}
									</script>
								
								<!-- 맨 끝으로 -->
								<button id="toLastBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=<%= pi.getMaxPage() %>'">마지막으로  &gt;&gt;</button>
							
							</div>
							
						</div>
						
						
						
						<h2 id="listArea_tutor"> 2. TUTOR 목록</h2>
						<div class="tableArea">
							<form method="post"> <!-- action="confirmClass.cl" --> 
								<table id="listArea2">
									<tr>
										<th width = 200px> 이메일 </th>
										<th width = 100px> 이름 </th>
										<th width = 100px> 닉네임  </th>
										<th width = 150px> 전화번호  </th>
										<th width = 120px> 비밀번호 </th>
										<th width = 200px> 카카오 </th>
										<th width = 100px> 가입경로 </th>
										<th width = 120px> 가입날짜 </th>
										<th width = 100px> 활동상태 </th>
									</tr>
			 						<% if(tutorList.isEmpty()) { %>
										<tr>
											<td colspan = "9"> 조회된 리스트가 없습니다. </td>
										</tr>
									<% } else { %>
										<%	for(int i = 0; i < tutorList.size(); i++){ %>
											<tr> 
												<td>
													<%= tutorList.get(i).getMemberEmail() %>
													<input type="hidden" id="tutorEmail" name="tutorEmail" value="<%= tutorList.get(i).getMemberEmail() %>">
												</td>
												<td>
													<%= tutorList.get(i).getMemberName() %>
													<input type="hidden" id="tutorName" name="tutorName" value="<%= tutorList.get(i).getMemberName() %>">
												</td>
												<td>
													<%= tutorList.get(i).getMemberNickName() %>
													<input type="hidden" id="tutorNickName" name="tutorNickName" value="<%= tutorList.get(i).getMemberNickName() %>">	
												</td>
												<td>
													<%= tutorList.get(i).getMemberPhone() %>
													<input type="hidden" id="tutorPwd" name="tutorPwd" value="<%= tutorList.get(i).getMemberPhone() %>">
												</td>
												<td>
													<%= tutorList.get(i).getMemberPwd() %>
													<input type="hidden" id="tutorPwd" name="tutorPwd" value="<%= tutorList.get(i).getMemberPwd() %>">
												</td>
												<td>
													<%= tutorList.get(i).getKakaoNo() %>
													<input type="hidden" id="tutorKakao" name="tutorKakao" value="<%= tutorList.get(i).getKakaoNo() %>">
												</td>
												<td>
													<%= tutorList.get(i).getMemberEnrollType() %>
													<input type="hidden" id="tutorEnrollType" name="tutorEnrollType" value="<%= tutorList.get(i).getMemberEnrollType() %>">
												</td>
												<td>
													<%= tutorList.get(i).getMemberEnrollDate() %>
													<input type="hidden" id="tutorEnrollDate" name="tutorEnrollDate" value="<%= tutorList.get(i).getMemberEnrollDate() %>">
												</td>
												<td>
													<%= tutorList.get(i).getMemberStatus() %>
													<input type="hidden" id="tutorStatus" name="tutorStatus" value="<%= tutorList.get(i).getMemberStatus() %>">
												</td>
											</tr> 
										<%  } %>
									<% } %> 
								</table>
							</form>
 							<div class="pagingArea" align="center">
			
								<!-- 처음으로 -->
								<button id="toFirstBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=1'">&lt;&lt; 첫 페이지로</button>
								
								<!-- 이전페이지로 -->
								<button id="beforeBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=<%= pi.getCurrentPage() -1 %>'">&lt; 이전</button>
								<script>
									if(<%= pi.getCurrentPage() %> <= 1){
										$('#beforeBtn').prop('disabled', true);
									}
								</script>
								
								<!-- 숫자버튼 -->
								<% for (int p = pi.getStartPage(); p <= pi.getEndPage(); p++) { %>
								<% 		if(p == pi.getCurrentPage()) { %>
									<button id="choosen" disabled><%= p %></button> <!-- 현재 페이지는 선택 못하게 -->
								<%      } else { %>
									<button id="numBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=<%= p %>'"><%= p %></button>
								<%		 } %>
								<%	} %>
								
								<!-- 다음페이지로 -->
								<button id="afterBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=<%= pi.getCurrentPage() + 1 %>'">다음 &gt;</button>
									<script>
										if(<%= pi.getCurrentPage() %> >= <%= pi.getMaxPage() %>){
											$('#afterBtn').prop('disabled', true);
										}
									</script>
								
								<!-- 맨 끝으로 -->
								<button id="toLastBtn" onclick="location.href='<%= request.getContextPath() %>/memberCheck.admin?currentPage=<%= pi.getMaxPage() %>'">마지막으로  &gt;&gt;</button>
							
							</div>
							
						</div>
						
					
					</div>
				</div> 
			</div>
			
			
			
			<script>
				$('#listArea1 td').mouseenter(function(){
					$(this).parent().css({'background':'#9ED4C2', 'font-weight' :'bold', 'color' : 'white'});
				}).mouseout(function(){
					$(this).parent().css({'background':'none', 'font-weight' :'normal', 'color' : 'black'});
				});
				
				$('#listArea2 td').mouseenter(function(){
					$(this).parent().css({'background':'#9ED4C2', 'font-weight' :'bold', 'color' : 'white'});
				}).mouseout(function(){
					$(this).parent().css({'background':'none', 'font-weight' :'normal', 'color' : 'black'});
				});
				
			</script>
				
			
			
			<!-- FOOTER -->
			<footer class="container" style="text-align: center; background: #F5F5F5;">
			
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					&copy; 2021 HOBBYIST, Inc. &middot; <a href="#">Contact</a>
					<!-- &middot; <a href="#">Terms</a> -->
				</p>
			</footer> 
		</div>
</body>
</html>