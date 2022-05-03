<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.ArrayList, classNotice.model.vo.ClassNotice, member.model.vo.Member"%>
<% 
	ArrayList<ClassNotice> list = (ArrayList)request.getAttribute("list");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	.outer{
		width: 800px; height: 500px; background: rgba(255, 255, 255, 0.4); border: 5px solid white;
		margin-left: auto; margin-right: auto; margin-top: 50px;
	}
	#listArea{text-align: center;}
	.tableArea{width:650px; height:350px; margin:auto;}
	th{border-bottom: 1px solid grey;}
	#writeNoBtn{background: #B2CCFF;}
</style>
</head>
<body>
	<%@ include file="../common/topbar.jsp" %>
	<div class="outer">
		<br>
		<h2 align="center">공지사항</h2>
		<div class="tableArea">
			<table id="listArea">
			
				<tr>
					<th>글번호</th>
					<th width="300px">글제목</th>
					<th>조회수</th>
					<th width="100px">작성일</th>
				</tr>
				<% if (list.isEmpty()) { %>
				<tr>
					<td colspan="4">존재하는 공지사항이 없습니다.</td>
				</tr>
				<% } else { %>
				<% 		for(int i = 0; i < list.size(); i++) { %>
				<tr>
					<td><%= list.get(i).getClassBoardNo() %></td>
					<td><%= list.get(i).getClassBoardName() %></td>
					<td><%= list.get(i).getClassBoardViews() %></td>
					<td><%= list.get(i).getClassBoardDate() %></td>
				</tr>
				<% 		} %>
				<% } %>
			</table>
		</div>
		
		<div align="right">
			<% if (loginUser != null && (loginUser.getMemberGrade().equals("B")||loginUser.getMemberGrade().equals("A"))) { %> <%-- 로그인을 했으면서,튜터,관리자 아이디인  경우만--%>
			<input type="button" id="writeNoBtn" value="글쓰기" onclick="location.href='writeNoticeForm.no'" >
			<% } %>
		</div>
		
	</div>
	<script>
		$('#listArea td').mouseenter(function(){
			$(this).parent().css({'background':'lightgray', 'cursor':'pointer'});
		}).mouseout(function(){
			$(this).parent().css({'background':'none'});
		}).click(function(){
			var num = $(this).parent().children().eq(0).text(); // 글번호 가져오기
			location.href = '<%= request.getContextPath() %>/datail.no?no=' + num; 
			// url 뒤쪽 쿼리스트링 직접 만들어주기 
			// 글번호 21인 게시글 클릭시 url -> http://localhost:9380/3_JSPServlet/datail.no?no=21 으로 뜸
		});
	</script>	
	
	
	
<%-- 	<script>	
 		listArea = document.getElementById('listArea');
		var nList = new Array();
 		<% if(!list.isEmpty()) { %>
			<% for(int i = 0; i < list.size(); i++){ %>
					nList[i].noticeNo = "<%= list.get(i).getClassBoardNo() %>";
					console.log(nList[0].noticeNo);
				
		<% }} %>
		(function(){
				listArea.
			})();
	</script>--%>
</body>
</html>