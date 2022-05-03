<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.ArrayList, faq.model.vo.FAQ" %>
<% 
	ArrayList<FAQ> list = (ArrayList<FAQ>)request.getAttribute("list");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>자주 묻는 질문(FAQ)</title>
<style>
	#outer {
		width: 1000px;
		height : 400px;
		margin-left: 10px;
	}
	.tableArea {
		width: 900px;
		height : 300px;
		margin-left: 0;
 	}
	#listArea {
		text-align: center;
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
		height : 35px;
	}
	
	td {
		height : 30px;
	}
	
	table .div-sub {
		display : none;
	}
	
	#btnArea {
		margin-left: 800px;
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
				<div id="outer">
					<h1> 자주 묻는 질문(FAQ) </h1>
						<div class="tableArea">
							<table id="listArea">
								<tr>
									<th width = 100px> No.</th>
									<th width = 200px> 카테고리 </th>
									<th width = 900px> 제목 </th>
								</tr>
		 						<% if(list.isEmpty()) { %>
									<tr>
										<td colspan = "3"> 조회된 리스트가 없습니다. </td>
									</tr>
								<% } else { %>
									<%	for(int i = 0; i < list.size(); i++){ %>
										<tr>
											<td><%= list.get(i).getFaqNo() %></td>
											<td><%= list.get(i).getFaqCategory() %></td>
											<td><%= list.get(i).getFaqTitle() %></td>
										</tr>
									<%  } %>
								<% } %>
							</table>
						</div>
						<br>
					<div id="btnArea">
						<% if (loginUser != null && loginUser.getMemberEmail().equals("admin@hobbyist.com")) { %> <%-- 로그인을 했으면서, admin인  경우--%>
						<input type="button" id="writeFaqBtn" value="FAQ등록" onclick="location.href='FAQWriteForm.bo'" >
						<% } %>
					</div>
				</div>
			</div>
		</div>
		<script>
			$('#listArea td').mouseenter(function(){
				$(this).parent().css({'background':'#9ED4C2', 'cursor':'pointer', 'font-weight' :'bold', 'color' : 'white'});
			}).mouseout(function(){
				$(this).parent().css({'background':'none', 'font-weight' :'normal', 'color' : 'black'});
			}).click(function(e){
				var num = $(this).parent().children().eq(0).text(); // 글번호 가져오기( no가 변수)
				location.href = '<%= request.getContextPath() %>/FAQdatail.bo?no=' + num;
			});
		</script>
				
			<!-- FOOTER -->
			<footer class="container" style="text-align: center; background: #F5F5F5;">
			
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					&copy; 2021 HOBBYIST, Inc. &middot; <a href="<%= request.getContextPath() %>/faq.bo">Contact</a>
					<!-- &middot; <a href="#">Terms</a> -->
				</p>
			</footer> 
	</div>
</body>
</html>