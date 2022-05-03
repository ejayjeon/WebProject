<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.ArrayList, faq.model.vo.FAQ" %>
<% 
	ArrayList<FAQ> list = (ArrayList<FAQ>)request.getAttribute("list");

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
	}
	
	#FAQWriteBtn {
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
	
	th {
		border-bottom: 1px solid lightgrey;
		height : 35px;
	}
	
	td {
		height : 25px;
		border-bottom: 1px solid lightgrey;
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
				<div class="sub08_title">
					<div class="title"><h1>자주 묻는 질문(FAQ) 등록</h1></div>
						</div>
						<br>
							<form id="tx_editor_form" name="tx_editor_form" action="<%= request.getContextPath() %>/FAQinsert.bo" method="post">
								<table id="write_frm" cellpadding="0" cellspacing="0">
									<tr>
										<th style="width: 150px; height: 50px">제목</th>
										<td>
											<input type="text" id="title" name="title" style="width: 500px; height: 25px;" value="">
										</td>
									</tr>
									<tr>
										<th style="height: 50px;">카테고리</th>
										<td>
											<select id="category" name="category" style="width: 120px; height: 30px;">
												<option value="계정">계정</option>
												<option value="수강">수강</option>
												<option value="서비스">서비스</option>
												<option value="기타">기타</option>
											</select>
										</td>
									</tr>
									<tr>
										<th>내용</th>
										<td>
											<div class="tx-source-deco">
												<div id="tx_canvas_source_holder" class="tx-holder">
													<textarea id="reply" name="reply" rows="20" cols="70" style= "resize: none"></textarea>
												</div>
											</div>
										</td>
									</tr>
<!-- 									<tr> -->
<!-- 										<td colspan="2" class="ta last"> -->
<!-- 											<div class="board_view_botton" style="width:auto;" align="right"> -->
<!-- 												<input type="button" id="FAQcancel" value="취소"> -->
<!-- 												<input type="button" id="FAQWriteBtn" value="등록"> -->
<!-- 											</div> -->
<!-- 											<br><br> -->
<!-- 										</td> -->
<!-- 									</tr> -->
								</table>
								<br>
									<div id="btnArea" style="width:auto;">
										<input type="button" id="FAQcancel" value="취소" onclick="location.href='javascript:history.go(-1);'">
										<button type="submit" id="FAQWriteBtn">등록</button>
									</div>
								<br>
							</form>
						</div>
					</div>

			
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