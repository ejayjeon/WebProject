<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="member.model.vo.Member"%>
<%
	Member m = (Member)session.getAttribute("loginUser");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>튜터 신청하기 페이지</title>
<!-- CDN -->
<script src="js/jquery-3.6.0.min.js"></script>

<style>
/*튜터 프로필 사진*/
.tutorPro{width:100px; height:100px;}
#target_img{width:100px; height:100px; cursor:pointer;}

/*튜터 신청 박스*/
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');

body{
	background-position: center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: cover;
	min-height:100vh;
	font-family: 'Noto Sans', sans-serif;
}
.text-center{
	color:#fff;	
	text-transform:uppercase;
    font-size: 35px;
    margin: -40px 0 40px 0;
    display: block;
    text-align: center;
}
.box{
	position:absolute;
	left:50%;
	top:50%;
 	transform: translate(-115%,-50%); 
    background-color: rgba(0, 115, 14, 0.19);
	border-radius: 15px;
	padding:60px 80px;
}
.input-container{
	position:relative;
	margin-bottom:25px;
}
.input-container label{
	position:absolute;
	top:0px;
	left:0px;
	font-size:16px;
	color:#fff;	
    pointer-event:none;
	transition: all 0.5s ease-in-out;
}
.input-container input{ 
  border:0;
  border-bottom:1px solid #555;  
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:16px;
  color:#fff;
}
.input-container input:focus{ 
 border:none;	
 outline:none;
 border-bottom:1px solid #9ED4C2;	
}
.btn{
	color:#fff;
	background-color:#9ED4C2;
	outline: none;
    border: 0;
    color: #fff;
	padding:10px 20px;
	text-transform:uppercase;
	margin-top:50px;
	border-radius:2px;
	cursor:pointer;
	position:relative;
}
/*.btn:after{
	content:"";
	position:absolute;
	background:rgba(0,0,0,0.50);
	top:0;
	right:0;
	width:100%;
	height:100%;
}*/
.input-container input:focus ~ label,
.input-container input:valid ~ label{
	top:-12px;
	font-size:12px;
	
}


.off-canvas-content{
	text-align:center;
	border: 1px solid black;
	
	
}
.box1{
	border: 1px solid black;
	width: 49%;
	height: 700px;
	float:left;
	}
.box2{
	border: 1px solid black;
	width: 49%;
	height: 700px;
	float:left;
	overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
	}
.imgresponsive{
	height:702px;
}

/*sign up 박스*/


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
						<li><a href="<%= request.getContextPath() %>/myClass.te">
							<span class="app-dashboard-sidebar-text"><h3>나의 클래스룸</h3></span>
						</a></li>
						<li><a href="#">
							<span class="app-dashboard-sidebar-text">수강중인 클래스</span>
						</a></li>
						<li><a href="#"> 
							<span class="app-dashboard-sidebar-text">수강완료 클래스</span>
						</a></li>
						<li><a href="#"> 
							<span class="app-dashboard-sidebar-text">찜한 클래스</span>
						</a></li>
						<li><a href="#"> 
							<span class="app-dashboard-sidebar-text">내가 쓴 후기</span>
						</a></li>
						<br>
						<li><a href="<%= request.getContextPath() %>/myInfo.me"> 
							<span class="app-dashboard-sidebar-text"><h3>내 정보</h3></span>
						</a></li>
						<li><a href="<%= request.getContextPath() %>/updateForm.me"> 
							<span class="app-dashboard-sidebar-text">내 정보 수정</span>
						</a></li>
						<li><a href=""> 
							<span class="app-dashboard-sidebar-text">결제정보</span>
						</a></li>
						<li><a href="<%= request.getContextPath() %>/delete.me"> 
							<span class="app-dashboard-sidebar-text">튜티 탈퇴</span>
						</a></li>
						<br><br><br>
						
						<% if(loginUser != null && loginUser.getMemberGrade().equals("B")) { %>  
						<li>
							<span class="app-dashboard-sidebar-text"><h3>튜터</h3></span> 
						</li>
						<li ><a href=""> 
							<span class="app-dashboard-sidebar-text">내 클래스</span>  <%-- 누르고 서블릿 이동하면 tutor정보도 세션에 저장하기? --%>
						</a></li>
						<li style="color: #9ED4C2"><a href="<%= request.getContextPath() %>/tutorInform.me"> 
							<span class="app-dashboard-sidebar-text">튜터 정보</span>
						</a></li>
						<li style="color: #9ED4C2"><a href=""> 
							<span class="app-dashboard-sidebar-text">정산하기</span>
						</a></li>		
						
						<% } else { %>  <%-- 로그인한 유저의 그레이드가 'B'즉 튜터가 아니면 튜터 신청 버튼 활성화 --%>
						<li>
							<a href="<%= request.getContextPath() %>/tuteeEnroll.me">
							<span class="app-dashboard-sidebar-text"><button id="apply-tutor-btn">튜터 신청하기</button></span></a>
						</li> <%-- span class="app-dashboard-sidebar-text"가 있어야 사이드바 닫힐때 안 보임  --%>	
						
						<% }  %>
						<br><br><br>
					</ul>
					
					
				</div>
			</div>

			<!-- 본문 영역 -->
			<div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
				<div class="box1">
				<form action="<%=request.getContextPath()%>/insertTutee.me" method="post" encType="multipart/form-data">
						<div class="box">	<!-- sign in 박스 시작 -->
							<span class="text-center">TUTOR SIGN-IN</span>
							<div class="tutorPro">
							<img id="target_img" name="target_img" class="card-profile-stats-intro-pic" src="./images/empty_profile.png" alt="profile-image" />
							</div><br>
						<div class="input-container">
							<%=m.getMemberNickName() %>
							<input type="hidden" name="myNickName" required value="<%=m.getMemberNickName() %>">
							<label>Nick Name</label>		
						</div>
						<div class="input-container">
							<%=m.getMemberPhone() %>		
							<input type="hidden" name="myPhone" required value="<%=m.getMemberPhone() %>">
							<label>Phone</label>
						</div>
						<div class="input-container">		
							<input type="text" name="mySns" required>
							<label>SNS</label>
						</div>
						<div class="input-container">		
							<input type="text" name="myReport" required/>
							<label>Introduce</label>
						</div>
						
							<button type="submit" class="btn">등록하기</button>
					
					<!-- 파일 업로드 하는 부분 -->
							<div id="fileArea">
								<input type="file" id="profileImg" multiple="multiple" name="profileImg" onchange="LoadImg(this,1)">
							</div>
					</div>	<!-- sign in 박스 끝 -->
				</form>
				</div> <!-- box1 끝 -->
				
				
				<div class="box2">
					<img src="./images/flower.png" alt="" class="imgresponsive">
				</div> <!-- box2 끝 -->
				
				</div>	<!-- box1+box2끝 -->
			
			</div>	
					
		</div>
		
			<!-- FOOTER -->
			<footer class="container" style="text-align: center; background: #F5F5F5;">
			
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					&copy; 2021 HOBBYIST, Inc. &middot; <a href="<%= request.getContextPath() %>/contact.co">Contact</a>
					<!-- &middot; <a href="#">Terms</a> -->
				</p>
			</footer> 

<script>
// 프로필 사진
	$(function(){
			$('#fileArea').hide();
			
			$('#target_img').click(function(){
				$('#profileImg').click();
			});
		});
	
	
	function LoadImg(value, num){
		if(value.files && value.files[0]){
				var reader = new FileReader();
					reader.onload = function(e){								
						if(num==1){
							$("#target_img").attr("src", e.target.result);
						} else if(num==2){
							$("#target_img2").attr("src", e.target.result);
						}
						}
// 					switch(num){
// 					case 1:
// 						$("#target_img").attr("src", e.target.result);
// 						break;
// 					case 2:
// 						$("#target_img2").attr("src", e.target.result);
// 						break;
// 					}
					
						reader.readAsDataURL(value.files[0]);
					}
				}
	
// 	function LoadImg(value, num){
// 			if(value.files && value.files[0]){
// 					var reader = new FileReader();
							
// 						reader.onload = function(e){								
// 							if(num){
// 								$("#target_img").attr("src", e.target.result);
// 							} else{
							
// 							}
// 							}
							
// 							reader.readAsDataURL(value.files[0]);
// 						}
// 					}
	
	
</script>	
	

</body>
</html>