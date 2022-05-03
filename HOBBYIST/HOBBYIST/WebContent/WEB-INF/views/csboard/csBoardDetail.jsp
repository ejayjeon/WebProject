<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="csBoard.model.vo.*, java.util.ArrayList" %>
<%
	RequestBoard rb = (RequestBoard)request.getAttribute("board");
	ArrayList<Reply> list = (ArrayList<Reply>)request.getAttribute("list");
	ArrayList<CSBoardFile> fList = (ArrayList<CSBoardFile>)request.getAttribute("fList");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="js/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/menubar.css">
<!-- <script src="js/menubar.js"></script> -->
<style type="text/css">
	.wrapBaord{
		width:800px; min-height:500px;
		margin-left:auto; margin-right:auto; margin-bottom:50px;
	}
	.contentArea{margin-right: auto; margin-left: auto; align: center; border-collapse: collapse; font-size: small;}
	#boardArea{border-top: 2px solid gray; text-align: left; font-size: small; border-collapse: collapse; font-size: small; min-width: 750px; min-height: 350px;}
	th{font-size: medium;}
	.btn{background: #B0C4DE; font-weight: bold; color: white; border: none; cursor: pointer; width: 100px; height: 40px; box-shadow: 1px 1px 2px lightgray;}
	#deleteBtn{background: #BC8F8F;}
	#listBtn{background: lightgray;}
	
	button:hover{cursor: pointer;}
	table{align: center;}
	
 	.tableArea {width: 450px; height:350px; margin-left:auto; margin-right:auto; align: center;}
	.modifyReply, .deleteReply{float: right; margin-left: 10px;}
	.deleteReply{background: #BC8F8F;}
	#replyList textarea, .replyWriterArea textarea{resize: none;  width: 810px; height: 100px;}
	.gap{height: 30px;}
	a:link{color: black;}
	a:visited{color: black;}
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
							<span aria-hidden="true"><a href="#">
								<i class="large fa fa-angle-double-left"><img
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
						<li><a href="#">
							<span class="app-dashboard-sidebar-text"><h3>FAQ</h3></span>
						</a></li>
						<li><a href="<%= request.getContextPath() %>/list.cs">
							<span class="app-dashboard-sidebar-text"><h3>1:1문의</h3></span>
						</a></li>
						<br><br><br>
					</ul>
				</div>
			</div>

			<!-- 본문 영역 -->
			<div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
				
				<div class="wrapBaord">
					<br>
					<h2 align="center">1:1문의</h2>
					<h3 align="left">문의 내용</h3>
					<div class="contentArea">
						<form action="<%= request.getContextPath() %>/boardUpdateForm.cs" id="detailForm" method="post">
							<table id="boardArea">
								<thead>
									<tr>
										<th height="20px">제목</th>
										<td colspan="9" height="30px;">
											<%= rb.getReqTitle() %>
											<%-- <input type="hidden" name="title" value="<%= rb.getReqTitle() %>"> --%>
										</td>
									</tr>
									<tr>
									</tr>
									<tr>
										<th height="50px">분야</th>
										<td>
											<%= rb.getReqCategory() %>
											<%-- <input type="hidden" name="category" value="<%= rb.getReqCategory() %>"> --%>
										</td>
										<th>작성자</th>
										<td>
											<%= rb.getNickName() %>
										<%-- 	<input type="hidden" name="nickName" value="<%= rb.getNickName() %>"> --%>
										</td>
										<th>이메일</th>
										<td>
											<%= rb.getContactEmail() %>
										<%-- 	<input type="hidden" name="email" value="<%= rb.getReqWriter() %>"> --%>
										</td>
										<th>작성일</th>
										<td>
											<%= rb.getCreateDate() %>
											<%-- <input type="hidden" name="createDate" value="<%= rb.getCreateDate() %>"> --%>
										</td>
										<th>수정일</th>
										<td>
											<%= rb.getModifyDate() %>
											<%-- <input type="hidden" name="modifyDate" value="<%= rb.getModifyDate() %>"> --%>
										</td>
									</tr>
									<tr>
										<th>첨부파일</th>		
									<% if (fList.isEmpty()) { %>
										<td>첨부파일이 없습니다.</td>
									</tr>						
									<% } else { %>
									<% 		for (int i = 0; i < fList.size(); i++) { %> 
									<tr>
										<td colspan="10">
											<a class="uploadFile" id="uploadFile<%= i %>" href="<%= request.getContextPath() %>/uploadFiles/<%= fList.get(i).getChangeName() %>"><%= fList.get(i).getOriginName() %></a>
										</td>
									</tr>
									<% 	   } %>
									<% } %>
								</thead>
								<tbody>
									<tr>
										<th colspan="10" height="30px">내용</th>
									</tr>
									<tr>
										<td colspan="10" style="min-height: 250px;">
											<textarea name="content" cols="110" rows="15" style="resize:none;" readonly><%= rb.getReqContent() %></textarea>
										</td>
									</tr>
								</tbody>

							</table>
							
							<input type="hidden" name="rNo" value="<%= rb.getReqNo() %>">
							
							<div align="center">
							<% if (loginUser != null  && rb.getReqWriter().equals(loginUser.getMemberEmail())) { %>
								<input type="submit" id="updateBtn" value="수정하기" class="btn">
								<input type="button" onclick="deleteBoard();" id="deleteBtn" class="btn" value="삭제">
							<% } %>
								<input type="button" onclick="location.href='<%= request.getContextPath() %>/list.cs'" class="btn" id="listBtn" value="목록으로">
							</div>
						</form>
						<script>
							function deleteBoard() {
								if (confirm("정말 삭제하시겠습니까?"))	{
									$('#detailForm').attr('action', 'deleteBoard.cs');
									$('#detailForm').submit();
								}
							}
						</script>
					</div>		
					<br><br>
					<div class="replyArea">
						<div id="replySelectArea">
							<h3>답변 내역</h3>
							<table id="replyList">
							<% if(list.isEmpty()){ %>
								<tr>
									<td colspan="3">답변이 없습니다.</td>
								</tr>
							<% } else { %>
								
									<% for(int i = 0; i < list.size(); i++) { %>
									<tr>
										<td colspan="3">
											<textarea readonly><%= list.get(i).getReplyContent() %></textarea>
										</td>
									</tr>
									<tr>
										<td><%= list.get(i).getModifyDate() %></td>
										<% if (loginUser.getMemberGrade().equals("A")) { %>	
										<td>
											<button class="btn deleteReply">답변 삭제</button> 
											<button class="btn modifyReply">답변 수정</button>
											<input type="hidden" name="repNo" value="<%= list.get(i).getReplyNo() %>">
										</td>
										<% } %>
									</tr>
									<tr class="gap">
									</tr>
								<% } %>
							<% } %>
							</table>
						</div>
						<% if (loginUser.getMemberGrade().equals("A")) { %>	
						<div class="replyWriterArea">
							<table>						
								<tr>
									<td colspan="2"><h3>답변 작성</h3></td>
								</tr>									
								<tr>
									<td class="tdContent">
										<textarea id="replyContent" style="resize: none;"></textarea>
									</td>
								</tr>
								<tr>
									<td><button class="btn" id="addReply" style="float: right">답변 등록</button></td>
								</tr>								
							</table>
						</div>
						<% } %>
					</div>	
				</div>			
			</div>			
		</div>
		<script>
		
			$(document).on('click', '.modifyReply', function(){
				$content =  $(this).parent().parent().prev().children().children();
				$content.attr("readonly", false); // 답변 수정 버튼 클릭시 readonly속성 해제
				$(this).text('수정 완료'); // 버튼 text 답변 수정을 수정 완료로 바꾸기
				
				
				$(this).click(function(){ // 내용 변경 후 수정 완료 버튼 누르면 update 실행
					var rNo = '<%= rb.getReqNo() %>';
					var modifyDate = $(this).parent().parent().children().eq(0).text();
					var repNo =  $(this).parent().children().eq(2).val(); 
					var content = $content.val();
					if (content.trim() != '') {
						$.ajax({
							url: 'updateReply.cs',
							data: {repNo:repNo, content:content, rNo:rNo},
							type: 'POST',
							success: function(data){
								console.log(data);
								
								var replyList = document.getElementById('replyList');
								replyList.innerHTML = ''; // 비워주고 시작

								var html = "";
								for (var i in data) {
								
									html += "<tr><td  colspan='3'><textarea readonly>" + data[i].replyContent + "</textarea></td>" 
											+ "<tr><td>" + data[i].modifyDate + "</td>"
											+ "<td><button class='btn deleteReply'>답변 삭제</button>"
											+ "<button class='btn modifyReply'>답변 수정</button>"
											+ "<input type='hidden' name='repNo' value='" + data[i].replyNo + "'></td></tr>"
											+ "<tr class='gap'></tr>"; 
									replyList.innerHTML = html; // replyList 새로 배치
								}
								
								$('#replyContent').val('');
							},
							error: function(data){
								console.log(data);
							}
						});
					} else {
						alert('내용을 입력하세요.');
					}
				});

			});
			
			
			$(document).on('click', '.deleteReply', function(){ // $(document) -> 현재  문서에서 동적으로 추가된 객체가 있다면 새롭게 생성된 요소 읽음
				var replyListCount = document.getElementsByClassName('deleteReply');
				if (replyListCount.length > 1) {
					var repNo =  $(this).parent().children().eq(2).val();
					var rNo = '<%= rb.getReqNo() %>';
					
					if(confirm("정말 삭제하시겠습니까?")){
						$.ajax({
							url: 'deleteReply.cs',
							data: {repNo:repNo, rNo:rNo},
							type: 'POST',
							success: function(data){
								console.log(data);
								
								var replyList = document.getElementById('replyList');
								replyList.innerHTML = ''; // 비워주고 시작

								var html = "";
								for (var i in data) {
									html += "<tr><td  colspan='3'><textarea readonly>" + data[i].replyContent + "</textarea></td>" 
											+ "<tr><td>" + data[i].modifyDate + "</td>"
											+ "<td><button class='btn deleteReply'>답변 삭제</button>"
											+ "<button class='btn modifyReply'>답변 수정</button>"
											+ "<input type='hidden' name='repNo' value='" + data[i].replyNo + "'></td></tr>"
											+ "<tr class='gap'></tr>"; 
									replyList.innerHTML = html;
								}
								
								$('#replyContent').val('');
							},
							error: function(data){
								console.log(data);
							}
							
						});
					}
				} else {
					alert('수정만 가능합니다.'); // 답변이 1개 이하면 수정만 가능하게 함
				}
				
			});
			
			
			$('#addReply').on('click', function(){
				var content = $('#replyContent').val();
				var rNo = '<%= rb.getReqNo() %>';
				
				if (content.trim() != '') {
					$.ajax({
						url: 'insertReply.cs',
						data: {content:content, rNo:rNo},
						type: 'POST',
						success: function(data){
							console.log(data);
							
							var replyList = document.getElementById('replyList');
							replyList.innerHTML = ''; // 비워주고 시작

							var html = "";
							for (var i in data) {
							
								html += "<tr><td  colspan='3'><textarea readonly>" + data[i].replyContent + "</textarea></td>" 
										+ "<tr><td>" + data[i].modifyDate + "</td>"
										+ "<td><button class='btn deleteReply'>답변 삭제</button>"
										+ "<button class='btn modifyReply'>답변 수정</button>"
										+ "<input type='hidden' name='repNo' value='" + data[i].replyNo + "'></td></tr>"
										+ "<tr class='gap'></tr>"; 
								replyList.innerHTML = html;
							}
							
							$('#replyContent').val('');
						},
						error: function(data){
							console.log(data);
						}
					});
				} else {
					alert('내용을 입력하세요.');
				}
				
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