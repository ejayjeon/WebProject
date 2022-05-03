<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="member.model.vo.Member" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="js/jquery-3.6.0.min.js"></script>
</head>
<body>

	<%@ include file="../common/topbar.jsp" %>
	 
	<div class="app-dashboard shrink-medium">
		
		<!-- 바디 영역(사이드바, 본문) -->
		<div class="app-dashboard-body off-canvas-wrapper">
		
			
		
		<!-- 본문 내용 / 푸터 하단에 붙이기 위해 이 div의 클래스명 필요함 --> 
		<div class="app-dashboard-body-content off-canvas-content"
				data-off-canvas-content>
			<p>여기에 본문을 작성하시면 됩니다!</p>
			
			여기에 본문
			
			
			
		</div>
		
		</div>
		<!-- FOOTER -->
		<footer class="container" style="text-align: center; background: #F5F5F5;">
			
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					&copy; 2021 HOBBYIST, Inc. &middot; <a href="<%= request.getContextPath() %>/contact.co">Contact</a>
					&middot; <a href="#">Terms</a>
				</p>
		</footer> 
	</div>
	
</body>
</html>>