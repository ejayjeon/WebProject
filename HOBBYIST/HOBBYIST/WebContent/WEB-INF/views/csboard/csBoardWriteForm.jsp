<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="csBoard.model.vo.*, java.util.ArrayList" %>
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
	
	/* 개인정보 수집 이용 동의 table 관련 css */
	.table_myroom{border-top:solid #99bddd 1px;border-bottom:solid #99bddd 1px;} .table_myroom th{color:#1770b4;padding:8px 0 7px 0;background-color:#f7f7f7;font-size:11px;border-left:solid #dadada 1px;} .table_myroom th.first{border-left:none;} .table_myroom th.line{border-top:solid #dadada 1px;} .table_myroom tr.bgG th,.table_myroom tr.bgG td  {background:#f7f7f7;} .table_myroom td{color:#666;padding:5px 0;font-size:11px;border-left:solid #dadada 1px;border-top:solid #dadada 1px;text-align:center;} .table_myroom td.first{border-left:none;} .table_myroom td.left{text-align:left;padding-left:10px;} .table_myroom td a{font-size:11px;} .table_myroom td a:hover, .table_myroom td a:active{font-size:11px;color:#666;text-decoration:underline;} .table_myroom td.none_data{padding:20px 0 20px 0;color:#1770b5;text-align:center;font-weight:bold;} .table_myroom th { text-align:center;}
	
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
								<i class="large fa fa-angle-double-left"><img src="images/three-dots-vertical.svg"></i></a></span> 
						</button>
					</div>
					<!-- open button -->
					<div class="app-dashboard-open-sidebar">
						<button id="open-sidebar" data-app-dashboard-toggle-shrink
							class="app-dashboard-open-sidebar-button show-for-medium"
							aria-label="open menu" type="button">
							<span aria-hidden="true"><a href="#"><i class="large fa fa-angle-double-right"><img src="images/three-dots-vertical.svg"></i></a></span> 
						</button>
					</div>
				</div>
				
				<!-- 사이드바 -->
				<div class="app-dashboard-sidebar-inner">
					<ul class="menu vertical">
						<li><a href="">
							<span class="app-dashboard-sidebar-text"><h3>1:1문의</h3></span>
						</a></li>
						<li><a href="#">
							<span class="app-dashboard-sidebar-text"><h3>FAQ</h3></span>
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
						<form action="<%= request.getContextPath() %>/insert.cs" id="detailForm" method="post" encType="multipart/form-data" onsubmit="return fileCheck(this.form.file)">
							<table id="boardArea">
								<thead>
									<tr>
										<th height="20px">제목</th>
										<td colspan="8" height="30px;">
											<input type="text" name="title" required style="width: 98%;">
										</td>
									</tr>
									<tr>
										<td colspan="9" class="filebox">
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
										<td colspan="9" class="filebox">
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
									<tr>
										<th height="50px">분야</th>
										<td colspan="3" width="230px">
											<select name="category">
												<option value="계정">계정</option>
												<option value="수강">수강</option>
												<option value="서비스">서비스</option>
												<option value="기타">기타</option>
											</select>
										</td>
										<th>작성자</th>
										<td width="200px">
											<%= loginUser.getMemberNickName() %>
											<input type="hidden" name="nickName" value="<%= loginUser.getMemberNickName() %>">
										</td>
										<th>이메일*</th>
										<td colspan="2" width="250px">
											<input type="email" name="contactEmail" required style="width: 250px;">
										</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th colspan="9" height="30px">내용</th>
									</tr>
									<tr>
										<td colspan="9" style="min-height: 250px;">
											<textarea name="content" cols="120" rows="15" style="resize:none;" required></textarea>
										</td>
									</tr>
								</tbody>
								
							</table>
											
							<div id="privacy-term" class="signup-group">
							<h4 class="rgb">개인정보 수집 및 이용에 대한 안내</h4>
								<div class="text-box style">
			
									<div class="term_list_area margin_top10">
										<div class="term_box02" tabindex="0">
											<p>원활한 고객상담을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
											<table class="table_myroom margin_top5" style="width: 100%; cellpadding: 0;">
												<colgroup>
												<col width="*" />
												<col width="20%" />
												<col width="30%" /> </colgroup>
												<tbody>
												<tr>
												<th scope="col">수집목적</th>
												<th scope="col">수집 항목</th>
												<th scope="col">보유 및 이용기간</th>
												</tr>
												<tr>
												<td>1:1 고객 문의/불편사항 처리</td>
												<td>이메일</td>
												<td>수집목적 달성후 즉시 폐기</td>
												</tr>
												</tbody>
											</table>
											<p>* 1:1문의 이용시 개인정보 수집ㆍ이용에 대한 동의를 하지 않을 권리가 있으며, 동의 거부시에는 1:1문의를 이용할 수 없습니다.</p>
										</div>
									</div>
								</div>
							</div> 
							<div class="author-agree-wrap row">
								<label><input type="checkbox" name="agreewith" value="1" required class="required">위의 이메일 정보 수집 및 이용에 대해 동의 함<strong>(필수)</strong></label>
							</div>
							
							<input type="hidden" name="writer" value="<%= loginUser.getMemberEmail() %>">
							
							<br><br clear="all">
							<div align="center">
								<input type="submit" class="btn" id="writeBtn" value="작성완료">
								<input type="button" onclick="location.href='<%= request.getContextPath() %>/list.cs'" class="btn" id="listBtn" value="목록으로">
							</div>
						</form>
					</div>
							
				</div>	
			</div>		
		</div>
		<script>
			$(".upload-hidden").off().on("change", function() {
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
			<!-- FOOTER -->
		<section>
			<footer class="container" style="text-align: center; background: #F5F5F5;">
			
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					&copy; 2021 HOBBYIST, Inc. &middot; <a href="#">Contact</a>
					<!-- &middot; <a href="#">Terms</a> -->
				</p>
			</footer> 
		</section>
	</div>
</body>
</html>