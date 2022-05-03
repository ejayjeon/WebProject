<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="csBoard.model.vo.*, java.util.ArrayList" %>
<%
	ArrayList<RequestBoard> list = (ArrayList<RequestBoard>)request.getAttribute("list");
	PageInfo pi = (PageInfo)request.getAttribute("pi");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="js/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/menubar.css">
<script src="js/menubar.js"></script>
<style type="text/css">
	#listArea{border-top: 2px solid gray; text-align: center; font-size: small; border-bottom: 1px solid lightgray;}
	.tableArea{width:1000px; height:270px; margin-right: auto; margin-left: auto;}
	#writeBtn{background: #B0C4DE; font-weight: bold; color: white; border: none; cursor: pointer; margin-left: 80%; margin-bottom: 15px; width: 100px; height: 40px; box-shadow: 1px 1px 2px lightgray;}
	.pagingArea button{border-radius: 15px; /* background: #9ED4C2; */ background: none; border: 1px solid #9ed4c2;} /* #D5D5D5; */
/* 	.buttonArea{margin-right: 50px; margin-bottom: 50px;}
	.buttonArea button{background: #D1B2FF; border-radius: 5px; color: white; width: 80px; heigth: 25px; text-align: center;} */
	button:hover{cursor: pointer;}
	#numBtn{/* background: #9ED4C2; */ background: none; border: 1px solid #9ed4c2;} /* #B2CCFF */
	#choosen{/* background: lightgray; */ background: none; border: 1px solid lightgray;}

</style>
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
						<li><a href="<%= request.getContextPath() %>/list.cs">
							<span class="app-dashboard-sidebar-text"><h3>1:1문의</h3></span>
						</a></li>
						<li><a href="<%= request.getContextPath() %>/FAQ.bo">
							<span class="app-dashboard-sidebar-text"><h3>FAQ</h3></span>
						</a></li>
						<br><br><br>
					</ul>
				</div>
			</div>

			<!-- 본문 영역 -->
			<div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
				
				<div class="wrapList">
					<br>
					<h2 align="center">1:1문의</h2>
					<% if (loginUser != null) { %>
					<button id="writeBtn" onclick="location.href='<%= request.getContextPath() %>/writeBoardForm.cs'">문의하기</button>
					<% } %>
					
					<div class="tableArea">
						<table id="listArea">
							<thead>
								<tr>	
									<th width="100px">NO.</th>
									<th width="100px">분류</th>
									<th width="350px">제목</th>
									<th width="200px">작성자</th>
									<th width="100px">답변상태</th>
									<th width="150px">작성일</th>
								</tr>
							 </thead>
							 <tbody>
 							<% if (list.isEmpty()) { %>
							<tr>
								<td colspan="6">조회된 글이 없습니다.</td>
							</tr>
							<% } else { %>
							<% 		for(RequestBoard rb: list) { %>
							<tr>	
								<td><%= rb.getReqNo() %></td>
								<td><%= rb.getReqCategory() %></td>
								<td><%= rb.getReqTitle() %></td>
								<td>
								<%
									String originNick = rb.getNickName();
									String newNick = "";
									if (originNick.length() <= 2) {
										newNick = originNick.charAt(0) + "*";
									} else { // 닉네임의 첫 글자와 마지막 글자를 제외하고 마스킹 처리
										for (int i = 0; i < originNick.length(); i++) {
											if (i == 0 || i == originNick.length() - 1) {
												newNick += originNick.charAt(i);
											} else {
												newNick += "*";
											}
										}
									}
								%>
 								<%= newNick %>
								</td>
								<td><%= rb.getReplyStatus() %></td>
								<td><%= rb.getCreateDate() %></td>
								<td hidden="hidden"><%= rb.getReqWriter() %></td>
							</tr>	
							<% 		} %>
							<% } %> 							 
							 </tbody>

						</table>
					</div>
					
					<div class="pagingArea" align="center">
		
						<!-- 맨 처음으로  -->
						<button onclick="location.href='<%= request.getContextPath() %>/list.cs?currentPage=1'">&lt;&lt; 맨 처음</button>
						
						<!-- 이전 페이지로 -->
						<button id="beforeBtn" onclick="location.href='<%= request.getContextPath() %>/list.cs?currentPage=<%= pi.getCurrentPage() - 1 %>'">&lt; 이전</button>
						<script>
							if(<%= pi.getCurrentPage() %> <= 1){
								$('#beforeBtn').prop('disabled', true);
							}
						</script>
						
						<!-- 숫자 버튼 -->
						<% for (int p = pi.getStartPage(); p <= pi.getEndPage(); p++) { %>
						<% 		if(p == pi.getCurrentPage()) { %>
						<button id="choosen" disabled><%= p %></button> <!-- 현재 페이지는 선택 못하게 -->
						<%      } else { %>
						<button id="numBtn" onclick="location.href='<%= request.getContextPath() %>/list.cs?currentPage=<%= p %>'"><%= p %></button>
						<%		 } %>
						<%	} %>
						
						<!-- 다음 페이지로 -->
						<button id="afterBtn" onclick="location.href='<%= request.getContextPath() %>/list.cs?currentPage=<%= pi.getCurrentPage() + 1 %>'">다음 &gt;</button>
						<script>
							if(<%= pi.getCurrentPage() %> >= <%= pi.getMaxPage() %>){
								$('#afterBtn').prop('disabled', true);
							}
						</script>
						
						<!-- 맨 끝으로 -->
						<button onclick="location.href='<%= request.getContextPath() %>/list.cs?currentPage=<%= pi.getMaxPage() %>'">맨 끝 &gt;&gt;</button>
					</div>
							
				</div>	
			</div>
			<script>
				if ('<%= list.isEmpty() %>' == 'false') {
					$('#listArea td').mouseenter(function(){
						$(this).parent().css({'text-decoration':'underline', 'cursor':'pointer'})
					}).mouseout(function(){
						$(this).parent().css('text-decoration', 'none');
					}).click(function(){
						var rNo = $(this).parent().children().eq(0).text();
						var userEmail = $(this).parent().children().eq(6).text();
						
						if ('<%= loginUser %>' == 'null') {
							alert('작성자만 열람할 수 있습니다.');
						} else {
							location.href='<%= request.getContextPath() %>/detail.cs?rNo=' + rNo;
						}
					})
				}
			</script>				
		</div>
		
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