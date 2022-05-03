<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<!-- <script src="../../../js/jquery-3.6.0.min.js"></script> -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- 마이페이지 - 회원가입 -->

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Landing PAGE Html5 Template">
    <meta name="keywords" content="landing,startup,flat">
    <meta name="author" content="Made By GN DESIGNS">


    <title>회원가입 페이지</title>

    <!-- // PLUGINS (css files) // -->

    <link href="./js/plugins/bootsnav_files/css/animate.css" rel="stylesheet">
    <link href="./js/plugins/bootsnav_files/css/bootsnav.css" rel="stylesheet">
    <link href="./js/plugins/bootsnav_files/css/overwrite.css" rel="stylesheet">
    <link href="./js/plugins/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="./js/plugins/owl-carousel/owl.theme.css" rel="stylesheet">
    <link href="./js/plugins/owl-carousel/owl.transitions.css" rel="stylesheet">
    <link href="./js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/magnific-popup.css" rel="stylesheet">

    <!--// ICONS //-->

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!--// BOOTSTRAP & Main //-->

    <link href="./css/bootstrap.min2.css" rel="stylesheet">
    <link href="./css/main_join.css" rel="stylesheet">
    

</head>

<!-- 추가한 css -->
<style>
.econfirm {border-radius:5px; background:#9ED4C2; color:white; font-size:small;}
.page-header {background:#9ED4C2;}
</style>


<body>
<!-- 상단바 -->
<!-- <div class="row expanded app-dashboard-top-nav-bar"> -->
<!--             <div class="columns medium-2"> -->
<!--                 <a class="app-dashboard-logo" href=#><img src="./vortex-master/assets/img/logo.png" -->
<!--                     width="70px" height="55px"></a> -->
<!--             </div> -->
<!--             <div class="columns sRhow-for-medium"> -->
<!--                 <div class="app-dashboard-search-bar-container"> -->
<!--                 </div> -->
<!--             </div> -->
<!--             <div class="columns shrink app-dashboard-top-bar-actions"> -->
<!--                 <button href="#" class="button hollow">Logout</button> -->
<!--                 로그아웃 버튼 -->
<!--                 <a href="#" height="30" width="30" alt=""><i -->
<!--                     class="fa fa-info-circle"></i></a> -->
<!--             </div> -->
<!-- </div> -->



    <!--======================================== 

           Preloader

    ========================================-->

    <div class="page-preloader">
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>

    <!--======================================== 

           Header

    ========================================-->



    <!--//** Navigation**//-->
<!-- <div class="page-header"> -->
<!-- 	  <img src="./image/img/logo.png" > -->

   

<!--             Collect the nav links, forms, and other content for toggling -->

<!--             <div class="collapse navbar-collapse" id="navbar-menu"> -->
<!--                 <ul class="nav navbar-nav navbar-right"> -->
<!--                        <button type="button" class="btn btn-blue navbar-btn" data-toggle="modal" data-target="#SignIn">가입하기</button> -->
<!--                 </ul> -->

<!--             </div> -->

<!--             /.navbar-collapse -->

<!--         </div> -->

<!--     </nav> -->
<!-- </div> -->


    <!--//** Banner**//-->

    <section id="home">
        <div class="container">
            <div class="row">
            
                <!-- Introduction -->

                <div class="col-md-6 caption">
                    <h1>Welcome To Hobbyist</h1>
                    <h2>
                           하비스트<span class="animated-text"></span><span class="typed-cursor"></span>
                        </h2>

                    <p>맞춤형 원데이 클래스 사이트</p>
					
                    <a href="#" class="btn btn-transparent">Main Page로 이동</a>

                </div>

                <!-- Sign Up -->

                <div class="col-md-5 col-md-offset-1">
                    <form class="signup-form" action="<%=request.getContextPath() %>/join.me" method="post" id="joinForm" name="joinForm">
                    <div class="form-group">
                    		<label id="memberE">EMAIL</label>
                            <input type="email" id="email" class="form-control" name="memberEmail" required="required"><br>
                            <input type="button" id="emailCheck" class="form-control" value="이메일 인증">&nbsp;
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="이름을 입력하세요" name="memberName" required="required">
                        </div>
                         <div class="form-group">
                            <input type="text" class="form-control" placeholder="닉네임을 입력하세요" name="memberNickName" required="required">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="전화번호를 입력하세요" name="memberPhone" required="required">
                  </div>
                        
                            
<!--                             <input type="button" class="econfirm" value="인증 번호 받기" onclick="emailAuthentication()">&nbsp; -->
<!--                            <input type="button" class="econfirm" value="인증 번호 확인" onclick="authCodeCheck()">  -->
<!--                             <br><br> -->
<!--                            <input type="password" class="form-control" placeholder="인증번호를 입력하세요" name="authenticNo" required="required"> -->
                          <br>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="비밀번호를 입력하세요" name="memberPwd" required="required">
                        </div>
                      
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="비밀번호를 확인해주세요" name="memberPwd" required="required">
                        </div>
                      
						<br><br>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-blue btn-block" style="background-color: #9ED4C2;">회원가입</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  
  



    <!--======================================== 

           Footer

    ========================================-->



    <footer>
        <div class="container">
            <div class="row">
                <div class="footer-caption">
                    <img src="./image/img/logo.png" class="img-responsive center-block" alt="logo">
                    <hr>
                    <h5 class="pull-left">Vortex, &copy;2016 All rights reserved</h5>
                    <ul class="liste-unstyled pull-right">
                        <li><a href="#twitter"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#instagram"><i class="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>



    <!--======================================== 

           Modal

    ========================================-->



    <!-- Modal -->

    <div class="modal fade" id="SignIn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title text-center" id="myModalLabel">Sign In</h4>
                </div>
                <div class="modal-body">
                    <form class="signup-form">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="User Name" required="required">
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Password" required="required">
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-blue btn-block">Log In</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <a href="#">Forgot your password /</a>
                    <a href="#">Signup</a>
                </div>
            </div>
        </div>
    </div>
    
    <script>
    	// 이메일 인증
    	$('#emailCheck').on('click', function(){
    		$.ajax({
    			url: 'confirmMail.me',
    			data: {email:$('#email').val()},
    			success: function(data){
    				console.log(data)
    				if(data == null || data == ""){
    				alert("다시 입력해주세요");
    				} else {
    					alert("이메일이 성공적으로 발송되었습니다.");
    				}
    			},
    			error: function(data){
    				console.log(data);
    				alert("인증 메일 발송 실패");
    			}
    		});
    	});

	
    </script>
    
    
    

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <!-- Include all compiled plugins (below), or include individual files as needed -->

    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/plugins/owl-carousel/owl.carousel.min.js"></script>
    <script src="./js/plugins/bootsnav_files/js/bootsnav.js"></script>
    <script src="./js/plugins/typed.js-master/typed.js-master/dist/typed.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script src="./js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/jquery.magnific-popup.js"></script>
    <script src="./js/main_join.js"></script>
</body>
</html>
