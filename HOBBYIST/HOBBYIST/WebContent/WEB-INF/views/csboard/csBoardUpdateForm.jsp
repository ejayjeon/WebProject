<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="csBoard.model.vo.*, java.util.ArrayList" %>
<%
	RequestBoard rb = (RequestBoard)request.getAttribute("board");
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
	#boardArea{border-top: 2px solid gray; text-align: left; font-size: small; border-collapse: collapse; font-size: small; min-width: 800px; min-height: 350px;}
	th{font-size: medium;}
	.btn{font-weight: bold; color: white; border: none; cursor: pointer; width: 100px; height: 40px; box-shadow: 1px 1px 2px lightgray;}
	#writeBtn{background: #B0C4DE;}
	#listBtn{background: lightgray;}
	button:hover{cursor: pointer;}
	table{align: center;}

	a:link{color: black;}
	a:visited{color: black;}
	
	/* 파일 업로드 관련 css */
	.filebox input[type="file"] {
	  position: absolute;
	  width: 1px;
	  height: 1px;
	  padding: 0;
	  margin: -1px;
	  overflow: hidden;
	  clip:rect(0,0,0,0);
	  border: 0;
	}

	.filebox label {
	  display: inline-block;
	  padding: .5em .75em;
	  color: #999;
	  font-size: inherit;
	  line-height: normal;
	  vertical-align: middle;
	  cursor: pointer;
	  border: 1px solid #ebebeb;
	  border-bottom-color: #e2e2e2;
	  border-radius: .25em;		  
	  color: #fff;
	  background-color: #337ab7;
	  border-color: #2e6da4;
	}

	/* named upload */
	.filebox .upload-name {
	  display: inline-block;
	  padding: .5em .75em;
	  font-size: inherit;
	  font-family: inherit;
	  line-height: normal;
	  vertical-align: middle;
	  background-color: #f5f5f5;
	  border: 1px solid #ebebeb;
	  border-bottom-color: #e2e2e2;
	  border-radius: .25em;
	  -webkit-appearance: none; /* 네이티브 외형 감추기 */
	  -moz-appearance: none;
	  appearance: none;
	}
	
	.cancelBtn:hover{cursor: pointer;}
	.deleteFile:hover{cursor: pointer;}

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
						<form action="<%= request.getContextPath() %>/updateBoard.cs" id="detailForm" method="post" encType="multipart/form-data" onsubmit="return validate();">
							<table id="boardArea">
								<thead>
									<tr>
										<th height="20px">제목</th>
										<td colspan="9" height="30px;">
											<input type="text" id="title" name="title" value="<%= rb.getReqTitle() %>" required style="width: 98%;">
										</td>
									</tr>
									<tr>
										<th height="50px">분야</th>
										<td>
											<select name="category">
												<option class="cate" value="계정">계정</option>
												<option class="cate" value="수강">수강</option>
												<option class="cate" value="서비스">서비스</option>
												<option class="cate" value="기타">기타</option>
											</select>
										</td>
 										<th>작성자</th>
										<td>
											<%= rb.getNickName() %>
										</td>
										<th>이메일*</th>
										<td>
											<input type="email" name="contactEmail" value="<%= rb.getContactEmail() %>" required>
										</td>
										<th>작성일</th>
										<td>
											<%= rb.getCreateDate() %>
										</td>
										<th>수정일</th>
										<td>
											<%= rb.getModifyDate() %>
										</td>
									</tr>
									<tr>
										<th>첨부파일</th>		
									<% if (fList.isEmpty()) { %>
										<td>첨부파일이 없습니다.</td>
									</tr>
									<tr>
										<td colspan="10" class="filebox">
											<div class="filebox bs3-primary preview-image">
								             	 <input class="upload-name" value="파일 선택" disabled="disabled" style="width: 200px;" onchange="checkFile(this)">
												<label for="input_file1">파일 선택</label>
												<input type="file" class="upload-hidden" id="input_file1" name="file1" accept=".jpg,.jpeg,.gif,.png,.bmp,.tif,.txt,.xls,.xlsx,.pdf,.xdf,.ppt,.pptx,.docx,.doc,.hwp,.hwpx" style="display: none;">
												<i class="cancelBtn">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
													  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
													  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
													</svg>
												</i>
											</div>
										</td>		
									</tr>
									<tr>
										<td colspan="10" class="filebox">
											<div class="filebox bs3-primary preview-image">
								             	 <input class="upload-name" value="파일 선택" disabled="disabled" style="width: 200px;" onchange="checkFile(this)">
												<label for="input_file2">파일 선택</label>
												<input type="file" class="upload-hidden" id="input_file2" name="file2" accept=".jpg,.jpeg,.gif,.png,.bmp,.tif,.txt,.xls,.xlsx,.pdf,.xdf,.ppt,.pptx,.docx,.doc,.hwp,.hwpx" style="display: none;">
												<i class="cancelBtn">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
													  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
													  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
													</svg>
												</i>
											</div>
										</td>		
									</tr>																
									<% } else { %>
									<% 		for (int i = 0; i < fList.size(); i++) { %> 
									<tr>
										<td colspan="3" class="filebox">
											<div class="filebox bs3-primary preview-image">
								             	<input class="upload-name" value="파일 선택" disabled="disabled" style="width: 200px;" onchange="checkFile(this)">
												<label for="input_file<%= i %>">파일 선택</label>
												<input type="file" disabled class="upload-hidden" id="input_file<%= i %>" name="file<%= i %>" accept=".jpg,.jpeg,.gif,.png,.bmp,.tif,.txt,.xls,.xlsx,.pdf,.xdf,.ppt,.pptx,.docx,.doc,.hwp,.hwpx" style="display: none;">
												<i class="cancelBtn">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
													  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
													  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
													</svg>
												</i>
											</div>
										</td>	
										<td colspan="7">
											<a class="uploadFile" id="uploadFile<%= i %>" href="<%= request.getContextPath() %>/uploadFiles/<%= fList.get(i).getChangeName() %>"><%= fList.get(i).getOriginName() %></a>
											<i class="deleteFile">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
													 <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
													 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
												</svg>
											</i>
											<input type="hidden" name="fNo" value="<%= fList.get(i).getFileNo() %>">
										</td>
									</tr>
									<% 			if (fList.size() == 1) { %>
									<tr>
										<td colspan="3" class="filebox">
											<div class="filebox bs3-primary preview-image">
										        <input class="upload-name" value="파일 선택" disabled="disabled" style="width: 200px;" onchange="checkFile(this)">
											 	<label for="input_file1">파일 선택</label>
												<input type="file" class="upload-hidden" id="input_file1" name="file1" accept=".jpg,.jpeg,.gif,.png,.bmp,.tif,.txt,.xls,.xlsx,.pdf,.xdf,.ppt,.pptx,.docx,.doc,.hwp,.hwpx" style="display: none;">
												<i class="cancelBtn">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
														<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
														 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
													</svg>
												</i>
											</div>
										</td>	
									</tr>
									<% 			} %>
									<% 	   } %>
									<% } %>																
								</thead>
								<tbody>
									<tr>
										<th colspan="10" height="30px">내용</th>
									</tr>
									<tr>
										<td colspan="10" style="min-height: 250px;">
											<textarea id="content" name="content" cols="120" rows="15" style="resize:none;" required><%= rb.getReqContent() %></textarea>
										</td>
									</tr>
								</tbody>
	
							</table>
							
							<input type="hidden" name="rNo" value="<%= rb.getReqNo() %>"> <%-- 게시글 update위해 글번호 type=hidden인 input태그의 value로 두기--%>
							
							<div align="center">
								<input type="submit" class="btn" id="writeBtn" value="작성완료">
								<input type="button" onclick="location.href='<%= request.getContextPath() %>/list.cs'" class="btn" id="listBtn" value="목록으로">
							</div>
						</form>
						<script>
							// DB의 카테고리로 선택되어 있게 함
							window.onload = function() {
								var inputCate = document.getElementsByClassName('cate');
								var category = '<%= rb.getReqCategory() %>';
								
								for (var i in inputCate) {
									if (inputCate[i].value == category) {
										inputCate[i].selected = 'selected';
									}
								}
							}
							
							function validate(){
								if ($('#title').val().trim() == '') {
									alert('제목을 입력해주세요.');
									return false;
								} else if ($('#content').val().trim() == '') {
									alert('내용을 입력해주세요.');
									return false;
								} else {
									return true;
								}
							}
						
							$(".upload-hidden").off().on("change", function() { // off().on() : 동일 객체에 중복 이벤트 적용 막기 위함
								if (this.files && this.files[0]) {
									 // 선택한 파일명 보기
							    	var filename = '';
							        if(window.FileReader){
							           filename = $(this)[0].files[0].name + ' '; // 파일명 추출
							        } else {
							            // Old IE 파일명 추출
							            var filename = $(this).val().split('/').pop().split('\\').pop();
							        };
							        $(this).siblings('.upload-name').val(filename);
									
									// 파일 용량 제한
									var maxSize =  1024 * 1024 * 10;
							 		var fileSize = this.files[0].size; // 파일의 용량 정보
							 			if(fileSize > maxSize){
											// 용량 초과시 경고후 해당 파일의 용량도 보여줌
											alert('10MB 이하 파일만 등록할 수 있습니다.\n\n' + this.files[0].name + '의 용량 : ' + (Math.round(fileSize / 1024 / 1024*100) / 100) + 'MB');
											$(this).val('');
											$(this).siblings('.upload-name').val('파일 선택');
										} 
									} 
								
							});
							
							$(".cancelBtn").off().on("click", function() {
								$(this).parent().find('.upload-hidden').val('').siblings('.upload-name').val('파일 선택');
							});
					
						</script>
						
						<script>
							// 기존의 저장된 파일 삭제 버튼 누를시 삭제되고, 새로운 파일 올릴 수 있도록 파일선택 버튼 활성화
							$(".deleteFile").off().on("click", function() {
								if (confirm("삭제하신 파일은 복구할 수 없습니다. 정말 삭제하시겠습니까?")) {
									var fNo = $(this).parent().find('input[type=hidden]').val();
									$fileArea = $(this).parent();
									$inputArea = $(this).parent().parent().find('input[type=file]');
									
									$.ajax({
										url: 'deleteFile.cs',
										data: {fNo:fNo},
										type: 'POST',
										success: function(data){
											console.log(data);
											if (data.trim() == '1') {
												console.log(data);
												$inputArea.attr("disabled", false);
												$fileArea.remove();
											}
										},
										error: function(data){
											console.log(data);
										}
									});									
								}
							});
						</script>
						
					</div>
							
				</div>	
			</div>		
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