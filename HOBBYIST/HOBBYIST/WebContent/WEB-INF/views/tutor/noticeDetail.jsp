<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="classNotice.model.vo.ClassNotice" %>
<%
	ClassNotice classnotice = (ClassNotice)request.getAttribute("classnotice");
	Member member = (Member)request.getAttribute("Member");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	.outer{
		width: 600px; height: 500px; background-color: rgba(255, 255, 255, 0.4); border: 5px solid white;
		margin-left: auto; margin-right: auto; margin-top: 50px;
	}
	.tableArea {width:450px; height:350px; margin-left:auto; margin-right:auto;}
	#updateNoBtn{background: #D1B2FF;}
	#cancelBtn{background: #B2CCFF;}
	#deleteNoBtn{background: #D5D5D5;}
</style>
<script src="js/jquery-3.6.0.min.js"></script>
</head>
<body>
<%-- 	<%@ include file="../common/menubar.jsp" %> --%>
<%@ include file="../common/topbar.jsp" %>
	<div class="outer">
		<br>
		<h2 align="center">공지사항</h2>
 		<div class="tableArea">
			<form action="classNoticeUpdateForm.no" id="detailForm" name="detailForm" method="post">
				<input type="hidden" name="no" value ="<%= classnotice.getClassBoardNo() %>">
				<table>
					<tr>
						<th>제목</th>
						<td colspan="3">
							<%= classnotice.getClassBoardName() %> 
							<input type="hidden" name="title" value="<%= classnotice.getClassBoardName() %>">		
						</td>				
					</tr>
					<tr>
						<th>작성자</th>
						<td>
							<%= classnotice.getClassBoardWriter() %>
							<input type="hidden" name="writer" value="<%= classnotice.getClassBoardWriter() %>"> 
						</td>
						<th>작성일</th>
						<td>
							<%= classnotice.getClassBoardDate() %>
							<input type="hidden" name="date" value="<%= classnotice.getClassBoardDate() %>"> 					
						</td>
					</tr>
					<tr>
						<th>내용</th>
					</tr>
					<tr>
						<td colspan="4">
						<textarea name="content" cols="60" rows="15" style="resize:none;" readonly><%= classnotice.getClassBoardContent() %></textarea>
						<input type="hidden" name="no" value="<%= classnotice.getClassBoardContent() %>"> <!-- 수정시 게시글번호 필요하기 때문에 hidden으로 form 정보 넘김 -->
						</td>
					</tr>
				</table>
			
				<br>
				
				<div align="center">
 				<%-- 로그인하지 않은 경우 고려 -> loginUser != null추가(이 코드 없으면 nullPointerException 뜸) --%>
 				<%-- String 비교는 ==가 아닌 equals로 비교! java코드이기 때문 --%>
				<% if (loginUser != null && (loginUser.getMemberGrade().equals("B")||loginUser.getMemberGrade().equals("A"))) { %> 				
					<input type="submit" id="updateNoBtn" value="수정하기">
					<input type="button" id="deleteNoBtn"onclick="deleteNotice();" value="삭제하기">
				<% } %> <!-- 로그인하지 않았거나, 게시글 작성자와 로그인한 user의 아이디가 같지 않으면  위의 수정하기 버튼 안 보임-->
					<input type="button" onclick="location.href='<%= request.getContextPath() %>/classManagement.tt'" id="cancelBtn" value="뒤로 가기">
				</div>
				</form>
		</div>
	</div>
	<script>
// 		function deleteNotice() {
// 			if (confirm("삭제하시겠습니까?")) {
<%-- 				location.href = '<%= request.getContextPath() %>/classNoticeDelete.no?no=' + "<%=classnotice.getClassBoardNo()%>"; --%>
// 			}
// 		}
		
		function deleteNotice() {
 			if (confirm("정말로 삭제하시겠습니까?")) {
 				$('#detailForm').attr('action', 'classNoticeDelete.no'); /* form태그의 action 속성값을 바꿈 */
				$('#detailForm').submit(); /* form에 대한 submit() -> 제출  */
 			}
 		}

	</script>
</body>
</html>