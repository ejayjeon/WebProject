<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="tutor.model.vo.Tutor, member.model.vo.Member"%>
<%
// 	Member m = (Member)request.getAttribute("loginUser");	// 상단바 연결했기 때문에 가져올 필요X
	Tutor tt = (Tutor)session.getAttribute("tutor");
	String myReport = tt.getTutorReport();
	String mySns = tt.getTutorSns();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>튜터 정보 페이지</title>
<script src="js/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/menubar.css">
<link rel="stylesheet" type="text/css" href="css/myInfo.css">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
<script src="js/menubar.js"></script>
<style>
/*footer*/
.off-canvas-content{
	position:relative;
	padding-bottom:100px;
}

.contents-wrap{
	width:100%;
   height:100px;
   position:absolute;
   bottom:-73%;
}


#updatePwdBtn {
		background: #778899;
		font-weight: bold;
		cursor: pointer;
		color: white;
		box-shadow: 2px 2px 2px lightgray;
		font-size: large;
	}
#classtitle{
	text-align:center;
	font-size:200%;
	font-weight:bold;
}

/*프로필 박스*/
.box1{
	text-align:center;
/* 	border:1px solid #D5D5D5; */
	width: 650px;
	height: 520px;
	margin: 0 auto;
	padding: 30px;
}


/*sns아이콘*/
.rounded-social-buttons {
  text-align: center;
/*   position:absolute;  */
   left:50%; 
  top:40%;
  margin-left:0px; 

}

.rounded-social-buttons .social-button {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 3.125rem;
  height: 3.125rem;
  border: 0.125rem solid transparent;
  padding: 0;
  text-decoration: none;
  text-align: center;
  color: #fefefe;
  font-size: 1.5625rem;
  font-weight: normal;
  line-height: 2em;
  border-radius: 1.6875rem;
  transition: all 0.5s ease;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
}

.rounded-social-buttons .social-button:hover, .rounded-social-buttons .social-button:focus {
  -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
          transform: rotate(360deg);
}

.rounded-social-buttons .social-button.facebook {
  background: #3b5998;
}

.rounded-social-buttons .social-button.facebook:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.facebook:hover, .rounded-social-buttons .social-button.facebook:focus {
  color: #3b5998;
  background: #fefefe;
  border-color: #3b5998;
}

.rounded-social-buttons .social-button.twitter {
  background: #55acee;
}

.rounded-social-buttons .social-button.twitter:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.twitter:hover, .rounded-social-buttons .social-button.twitter:focus {
  color: #55acee;
  background: #fefefe;
  border-color: #55acee;
}

.rounded-social-buttons .social-button.linkedin {
  background: #007bb5;
}

.rounded-social-buttons .social-button.linkedin:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.linkedin:hover, .rounded-social-buttons .social-button.linkedin:focus {
  color: #007bb5;
  background: #fefefe;
  border-color: #007bb5;
}

.rounded-social-buttons .social-button.youtube {
  background: #bb0000;
}

.rounded-social-buttons .social-button.youtube:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.youtube:hover, .rounded-social-buttons .social-button.youtube:focus {
  color: #bb0000;
  background: #fefefe;
  border-color: #bb0000;
}

.rounded-social-buttons .social-button.instagram {
  background: #125688;
}

.rounded-social-buttons .social-button.instagram:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.instagram:hover, .rounded-social-buttons .social-button.instagram:focus {
  color: #125688;
  background: #fefefe;
  border-color: #125688;
}

.rounded-social-buttons .social-button.pinterest {
  background: #cb2027;
}

.rounded-social-buttons .social-button.pinterest:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.pinterest:hover, .rounded-social-buttons .social-button.pinterest:focus {
  color: #cb2027;
  background: #fefefe;
  border-color: #cb2027;
}

.rounded-social-buttons .social-button.google-plus {
  background: #dd4b39;
}

.rounded-social-buttons .social-button.google-plus:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.google-plus:hover, .rounded-social-buttons .social-button.google-plus:focus {
  color: #dd4b39;
  background: #fefefe;
  border-color: #dd4b39;
}

.rounded-social-buttons .social-button.github {
  background: #000000;
}

.rounded-social-buttons .social-button.github:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.github:hover, .rounded-social-buttons .social-button.github:focus {
  color: #000000;
  background: #fefefe;
  border-color: #000000;
}

.rounded-social-buttons .social-button.tumblr {
  background: #32506d;
}

.rounded-social-buttons .social-button.tumblr:before {
  font-family: "FontAwesome";
  content: "";
}

.rounded-social-buttons .social-button.tumblr:hover, .rounded-social-buttons .social-button.tumblr:focus {
  color: #32506d;
  background: #fefefe;
  border-color: #32506d;
}

label[for="fabk"], [for="twit"], [for="insta"], [for="pinter"], [for="youtu"] {
  position: relative;
  top: -9px;
}


/*왼쪽 박스 */

.card-profile-stats {
  border: 1px solid #cacaca;
  margin: 0 0 1.25rem;
  padding: 1.25rem;
  background: #fefefe;
}

.card-profile-stats .card-profile-stats-intro {
  text-align: center;
}

.card-profile-stats .card-profile-stats-intro .card-profile-stats-intro-pic {
  border-radius: 50%;
  margin: 0 0 1.25rem;
}

.card-profile-stats .card-profile-stats-intro .card-profile-stats-intro-content p:last-child {
  margin: 0;
}

.card-profile-stats .card-profile-stats-container {
  text-align: center;
}

.card-profile-stats .card-profile-stats-container .card-profile-stats-statistic {
  margin: 0 0 1.25rem;
}

.card-profile-stats .card-profile-stats-container .card-profile-stats-statistic p:last-child {
  margin: 0;
}

.card-profile-stats .card-profile-stats-more .card-profile-stats-more-link {
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  color: #0a0a0a;
  padding: 0.5rem;
  cursor: pointer;
}

.card-profile-stats .card-profile-stats-more .card-profile-stats-more-content {
  display: none;
}


@media print, screen and (min-width: 64em) {
  .card-profile-stats .card-profile-stats-intro {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    text-align: left;
  }
  .card-profile-stats .card-profile-stats-intro .card-profile-stats-intro-pic {
    margin: 0 1.25rem 0 0;
    max-width: 250px;
  }
  .card-profile-stats .card-profile-stats-container {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around;
  }
}

/*버튼*/
.button-rounded-hover {
  border: 0;
  border-radius: 5000px;
  padding: 1rem 2rem;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  letter-spacing: 2px;
  transition: all 0.35s ease;
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
   color: #9ED4C2;
   cursor: pointer;

}

.button-rounded-hover:before {
  opacity: 0;
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: inherit;
  background-color: #fefefe;
  transition: all 0.3s;
  -webkit-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
          transform: translateX(-100%);
}

.button-rounded-hover:after {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border: 5px solid #9ED4C2;
  content: '';
  border-radius: inherit;

}

.button-rounded-hover:hover,
.button-rounded-hover:focus {
  background-color: #9ED4C2;
  color: white;
}

.button-rounded-hover:hover:before,
.button-rounded-hover:focus:before {
  -webkit-transform: translateX(0%);
      -ms-transform: translateX(0%);
          transform: translateX(0%);
  opacity: 0.25;
}

#target_img{cursor:pointer;}


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
						<li><a href=""> 
							<span class="app-dashboard-sidebar-text" onclick="deleteMember()">튜티 탈퇴</span>
						</a></li>
						<br>
						
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
							<span class="app-dashboard-sidebar-text"><button id="apply-tutor-btn">튜터 신청하기</button></span>
						</li> <%-- span class="app-dashboard-sidebar-text"가 있어야 사이드바 닫힐때 안 보임  --%>	
					
						<% }  %>
						<br><br><br>
					</ul>
				</div>
			</div>
			

			<!-- 본문 영역 -->
		
			<div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
			<p id="classtitle"> [오전] 아이패드 드로잉 (3개월 과정)</p>
			<form action="<%= request.getContextPath() %>/updateComplete.me" method="post" id="writeForm" encType="multipart/form-data">
<%-- 			<form action="<%= request.getContextPath() %>" encType="multipart/form-data"> --%>
 			<div class="box1"> 
			<div class="card-profile-stats">
		  <div class="card-profile-stats-intro">
<%-- 		    <img src="<%= request.getContextPath() %>/uploadFiles/<%= tt.getTutorImgChangeName() %>" id="target_img" name="target_img" class="card-profile-stats-intro-pic" alt="profile-image"/> --%>
		    <img src="<%= request.getContextPath() %>/uploadFiles/<%= tt.getTutorImgChangeName() %>" id="target_img2" name="target_img2" class="card-profile-stats-intro-pic" alt="profile-image"/>
		    </div> <!-- /.card-profile-stats-intro -->
		    <div class="card-profile-stats-intro-content">
		      <h1>김튜터</h1>
		      <p>START</p> <p>2021.11.16</p>
		    </div> <!-- /.card-profile-stats-intro-content -->
		  <hr />
		
		  <div class="card-profile-stats-container">
		    <div class="card-profile-stats-statistic">
		      <span class="stat">아이패드 그림 기초</span>
		      <p style="font-weight:bold">수강명</p>
		    </div> <!-- /.card-profile-stats-statistic -->
		    <div class="card-profile-stats-statistic">
		      <span class="stat">25</span>
		      <p style="font-weight:bold">수강 인원</p>
		    </div> <!-- /.card-profile-stats-statistic -->
		    <div class="card-profile-stats-statistic">
		      <span class="stat">15</span>
		      <p style="font-weight:bold">후기 수</p>
		    </div> <!-- /.card-profile-stats-statistic -->
		  </div> <!-- /.card-profile-stats-container -->
		
		  <div class="card-profile-stats-more">
		    <p class="card-profile-stats-more-link"><a href="#"><i class="fa fa-angle-down" aria-hidden="true"></i></a></p>
		    <div class="card-profile-stats-more-content">	<!-- 클릭하면 접히는 화살표 -->
		    	<div>
		    	  <label>Phone : <%= loginUser.getMemberPhone() %></label><br><br>
		    	  <label>Email : <%= loginUser.getMemberEmail() %></label><br><br>
		    	  <label>Report : </label>
				  <input type="text" id="myReport" name="myReport" placeholder="자기소개를 입력하세요" required>
			      <br><br>
				 <label>SNS :  </label>
				  <input type="text" id="mySns" name="mySns" placeholder="sns계정을 입력하세요" required>
		      	</div>
		      	<br>
		      	
		      	<!-- 파일 업로드 하는 부분 -->
			<div id="fileArea">
				<input type="file" id="profileImg1" multiple="multiple" name="profileImg1" onchange="LoadImg(this,1)">
				<input type="file" id="profileImg2" multiple="multiple" name="profileImg2" onchange="LoadImg(this,2)">
				
			</div>
			</div>
		      	<!-- use a tag for links to other locations -->
			<input type="submit" class="button button-rounded-hover" value="자기소개 수정 완료"><br>
		    </div> <!-- /.card-profile-stats-more-content -->
		  </div> <!-- /.card-profile-stats-more -->
		</div> <!-- /.card-profile-stats -->
		
			</form>
		<!-- 사이드바, 본문 끝 -->
		
		
		
			<!-- FOOTER -->
			<footer class="container contents-wrap" style="text-align: center; background: #F5F5F5;">
			
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					&copy; 2021 HOBBYIST, Inc. &middot; <a href="<%= request.getContextPath() %>/contact.co">Contact</a>
					<!-- &middot; <a href="#">Terms</a> -->
				</p>
			</footer> 
	</div>

<!-- 왼쪽 박스 클릭 js -->
<script>
	// 화살표 클릭
	$('.card-profile-stats-more-link').click(function(e){
	  e.preventDefault();
	  if ( $(".card-profile-stats-more-content").is(':hidden') ) {
	    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
	  } else {
	    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
	  }
	  $(this).next('.card-profile-stats-more-content').slideToggle();
	});
	
	// 프로필 사진 첨부
	$(function(){
		$('#fileArea').hide();
		
// 		$('#target_img').click(function(){
// 			$('#profileImg1').click();
// 		});
		
		$('#target_img2').click(function(){
			$('#profileImg2').click();
		});
	});
	

	
	// 각각의 영역에 파일을 첨부 했을 경우 미리 보기가 가능하도록 하는 함수
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

</script>


</body>
</html>