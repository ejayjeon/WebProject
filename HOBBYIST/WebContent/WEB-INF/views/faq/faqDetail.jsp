<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.ArrayList, faq.model.vo.FAQ" %>
<% 
	FAQ faq= (FAQ)request.getAttribute("faq");

//	if(list == null){
//	    list = new ArrayList<FAQ>();
// 	PageInfo pi = (PageInfo)request.getAttribute("pi");
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
		border : 1px solid lightgray;
	}
	
	#editFaqBtn {
		background: #9ED4C2;
		border: 1px solid white;
		width : 100px;
		height : 35px;
		font-weight: bold;
		color : white;
	}
	
	#FAQcancel{
		width : 100px;
		height : 35px;
		font-weight: bold;
		border: 1px solid white;
	}
	
	#td_head {
		font-weight: bold;
		width : 150px;
		height: 33px;
		border-bottom: 1px solid lightgrey;
	}	
	
	#td_content {
		width : 500px;
		border-bottom: 1px solid lightgrey;
	}
	
	#td_content_reply, #td_head_reply{
		height : 200px;
	}
	
	#btnArea {
		margin-left: 457px;
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
						<li><a href="<%= request.getContextPath() %>/FAQ.bo">
							<span class="app-dashboard-sidebar-text"><h3>FAQ</h3></span>
						</a></li>
						<li><a href="">
							<span class="app-dashboard-sidebar-text"><h3>1:1문의</h3></span>
						</a></li>
						<br><br><br>
					</ul>
					
					
				</div>
			</div>

			<!-- 본문 영역 -->
			<div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
				<form action="FAQUpdateForm.bo" id="detailForm" name="detailForm" method="post">
					<div id="outer">
						<h1> 자주 묻는 질문(FAQ) </h1>
							<div class="tableArea">
								<table id="listArea">
									<tr>
										<td id="td_head"> No.</td>
										<td id="td_content"> 
											<%= faq.getFaqNo() %> 
											<input type="hidden" id="no" name="no" style="width: 500px; height: 25px;" value="<%= faq.getFaqNo() %>">
										</td>
									</tr>
									<tr>	
										<td id="td_head"> 카테고리 </td>
										<td id="td_content"> 
											<%= faq.getFaqCategory() %> 
											<input type="hidden" id="category" name="category" style="width: 500px; height: 25px;" value="<%= faq.getFaqCategory() %>">
										</td>
									</tr>
									<tr>
										<td id="td_head"> 제목 </td>
										<td id="td_content"> 
											<%= faq.getFaqTitle() %> 
											<input type="hidden" id="title" name="title" style="width: 500px; height: 25px;" value="<%= faq.getFaqTitle() %>">
										</td>
									</tr>
									<tr>
										<td id="td_head_reply"> 답변 </td>
										<td id="td_content_reply">
											<%= faq.getFaqReply() %>
											<input type="hidden" id="reply" name="reply" width="500px" height="300px" value="<%= faq.getFaqReply() %>">
										</td>
									</tr>
								</table>
							</div>
							<br>
							<br>
						</div>
						<div id="btnArea">
							<% if (loginUser != null && loginUser.getMemberEmail().equals("admin@hobbyist.com")) { %> <%-- 로그인을 했으면서, admin인  경우--%>
								<input type="button" id="FAQcancel" value="목록" onclick="location.href='javascript:history.go(-1);'">
								<input type="submit" id="editFaqBtn" value="수정">
							<% } %>
						</div>
					</form>
				</div>
			</div>
		<br>
		<br>
				

			
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