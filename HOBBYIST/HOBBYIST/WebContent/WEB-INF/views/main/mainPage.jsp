<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="member.model.vo.Member, hobbyistClass.model.vo.*, 
    hobbyistClass.model.service.HClassService, java.util.ArrayList, java.text.DecimalFormat, hobbyistClass.model.vo.* "%>
<%
	HClassService hService = new HClassService();
	ArrayList<HClass> classList = hService.selectClassList();
	ArrayList<HClassFile> fileList = null;
	if (classList != null && !classList.isEmpty()) {
		fileList= hService.selectFileList();
	}
	Member loginUser = (Member)request.getSession().getAttribute("loginUser");
	DecimalFormat dc = new DecimalFormat("###,###,###");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>HOBBYIST</title>
	<%@ include file="../common/css.jsp" %>
	<script src="js/jquery-3.6.0.min.js"></script>
</head>
<body>
	<div class="banner_bg_main">
		<div class="container">
			<div class="header_section_top">
				<div class="row">
					<div class="col-sm-12">
						<div class="custom_menu">
							<ul>
								<li><a href="#">MAIN</a></li>
							<% if(loginUser == null) { %>
								<li></li>
								<li><a href="#" onclick="alert('로그인을 먼저 해주세요.');">LIKED-CLASS</a></li>
							<% } else if(loginUser.getMemberGrade().equals("A")){ %>
							<!-- 관리자면 LIKED-CLASS버튼 비활성화 -->
							<% } else { %>
								<li></li>
								<li><a href="<%= request.getContextPath() %>/myClass.te">LIKED-CLASS</a></li>
							<% } %>
								<li></li>
							<% if(loginUser == null) { %>
								<li><a href="<%= request.getContextPath() %>/loginForm.me">LOG-IN</a></li> <!-- 로그인 -->
							<% } else { %>
								<li><a href="<%= request.getContextPath() %>/logout.me">LOG-OUT</a></li> <!-- 로그아웃 -->
							<% } %>
								<li></li>
							<% if(loginUser == null) { %>
								<li><a href="#" onclick="alert('로그인을 먼저 해주세요.');">MY INFO</a></li>
							<% } else { %>
								<li><a href="<%= request.getContextPath() %>/myInfo.me">MY INFO</a></li>
							<% } %>
								<li></li>
								<li><a href="<%= request.getContextPath() %>/FAQ.bo">FAQ</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="logo_section">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="logo">
							<a href="index.jsp"><img src="assets/images/hlogo.png"
								style="width: 120px"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header_section">
			<div class="container">
				<div class="containt_main">
					<div id="mySidenav" class="sidenav">
						<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
						<a href="index.jsp">Coding</a> <a href="login.jsp">Decoration</a>
						<a href="csBoard.jsp">Cooking</a> <a href="jewellery.html">Music</a>
						<a href="jewellery.html">Health</a> <a href="jewellery.html">Writing</a>
						<a href="jewellery.html">Picture</a> <a href="jewellery.html">Drawing</a>
						<a href="jewellery.html">Making Video</a> <a href="jewellery.html">Stock</a>
						<a href="jewellery.html">Tarot</a>
					</div>
					<span class="toggle_icon" onclick="openNav()"><img
						src="assets/images/toggle-icon.png"></span>
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button"
							id="dropdownMenuButton" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">카테고리</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="#">카테고리별</a> <a
								class="dropdown-item" href="#">클래스별</a> <a class="dropdown-item"
								href="#">후기별</a>
						</div>
					</div>
					<div class="main">
					<!-- Another variation with a button -->
					<!-- 검색어 입력 시 넘어가는 form 태그 -->
						<form action = "classSearch.cl" method = "post">
							<div class="input-group">
								<input type="search" class="form-control" name="searchWord" placeholder="검색어를 입력하세요">
								<div class="input-group-append">
									<button class="btn btn-secondary" type="submit" style="background-color: #9ed4c2; border-color: #9ed4c2">
										<i class="fa fa-search"></i>
									</button>
								</div>
							</div>
						</form>
					</div>

				</div>
			</div>
		</div>
		<div class="banner_section layout_padding">
			<div class="container">
				<div id="my_slider" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<div class="row">
								<div class="col-sm-12">
									<h1 class="banner_taital">
										HOBBYIST SPECIALIZES<br>
										IN LIVE CLASSES
									</h1>
									<div class="buynow_bt">
										<a href="#class-content">둘러 보기</a>
									</div>
								</div>
							</div>
						</div>

				<% if (classList != null && !classList.isEmpty()) { %>
					<% 	for (int i = 0; i < classList.size(); i++) { %>
						<% if (i == 3) {
							break;
						 } %>					
						<div class="carousel-item">
							<div class="row">
								<div class="col-sm-12">
									<h1 class="banner_taital">
										<%= classList.get(i).getClassName() %><br><br>
									</h1>
									
									<div class="buynow_bt">
										<a href="<%= request.getContextPath() %>/detail.hcl?cNo=<%= classList.get(i).getClassNo() %>">신청하기</a>
									</div>
									<br>
								</div>
							</div>
						</div>	
				<% 		}  %>
				<% }  %>					
					</div>
					<a class="carousel-control-prev" href="#my_slider" role="button"
						data-slide="prev"> <i class="fa fa-angle-left"></i>
					</a> <a class="carousel-control-next" href="#my_slider" role="button"
						data-slide="next"> <i class="fa fa-angle-right"></i>
					</a>
				</div>
			</div>
		</div>
	</div>



	<!-- 클래스 섹션 1 -->
	
	<div class="fashion_section" id="class-content">
		<div id="main_slider" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="container">
						<br><br><br><br>
						<h1 class="fashion_taital">인기 상승 중인 클래스</h1>
						<div class="fashion_section_2">
							<div class="row">
						<% if (classList == null || classList.isEmpty()) { %>
								<div align="center">
									<h4>클래스 서비스 준비중입니다.</h4>
								</div>
						<% } else { %>
						<% 		for (int i = 0; i < classList.size(); i++) { %>
								<% if (i == 3) {
									break;
								 } %>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text"><%= classList.get(i).getClassName() %></h4>
										<p class="price_text">
											Price <span style="color: #ff0000;"><%= dc.format(classList.get(i).getClassFee()) %></span>
											<!-- 좋아요 버튼 -->
											&nbsp;
											<span class="likeBtnArea">
												<input type="hidden" class="cNo" name="cNo" value="<%= classList.get(i).getClassNo() %>"> 
												<button class="button-like button visually-hidden position-absolute top-0 start-100 translate-middle badge"> 
													<!-- i : 아이콘 태그 -->
													<i class="fa fa-heart"></i>
													<span>Like</span>
												</button>
											</span>
										</p>
										<br>
										<% if (fileList == null || fileList.isEmpty()) { %>
										<div class="thumbnailArea" style="height: 300px; width: 100%;">
											<img style="min-width:100%; height: 100%;" src="images/simone-hutsch-FNs_ylOm21g-unsplash.jpg" class="thumbnail" alt="Thumbnail">
										</div>
										<% } else { %>
										<%		for(HClassFile f : fileList) { %>
										<%			if(classList.get(i).getClassNo() == f.getBoardNo()) { %>
										<div class="thumbnailArea" style="height: 300px; width: 100%;">
											<img style="min-width:100%; height: 100%;" src="<%= request.getContextPath() %>/uploadFiles/<%= f.getChangeName() %>"
												class="thumbnail" alt="Thumbnail">
										</div>
										<%			} %>
										<% 		} %>
										<% } %>
										<br><br>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="<%= request.getContextPath() %>/detail.hcl?cNo=<%= classList.get(i).getClassNo() %>">Buy Now</a> 
											</div>
											<div class="seemore_bt">
												<a href="<%= request.getContextPath() %>/detail.hcl?cNo=<%= classList.get(i).getClassNo() %>">See More</a> 
											</div>
										</div>
									</div>
								</div>
								<% 		}  %>
							<% }  %>

							</div>
						</div>
					</div>
				</div>
				<% if (classList != null && !classList.isEmpty() && classList.size() > 3) { %>
				<div class="carousel-item">
					<div class="container">
						<br><br><br><br>
						<h1 class="fashion_taital">인기 상승 중인 클래스</h1>
						<div class="fashion_section_2">
							<div class="row">
						<% 	for (int i = 3; i < classList.size(); i++) { %>
								<% if (i == 6) {
									break;
								 } %>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text"><%= classList.get(i).getClassName() %></h4>
										<p class="price_text">
											Price <span style="color: #ff0000;"><%= dc.format(classList.get(i).getClassFee()) %></span>
											<!-- 좋아요 버튼 -->
											&nbsp;
											<span class="likeBtnArea">
												<input type="hidden" class="cNo" name="cNo" value="<%= classList.get(i).getClassNo() %>"> 
												<button class="button-like button visually-hidden position-absolute top-0 start-100 translate-middle badge"> 
													<!-- i : 아이콘 태그 -->
													<i class="fa fa-heart"></i>
													<span>Like</span>
												</button>
											</span>
										</p>
										<br>
										<% if (fileList == null || fileList.isEmpty()) { %>
										<div class="thumbnailArea" style="height: 300px; width: 100%;">
											<img style="min-width:100%; height: 100%;" src="images/simone-hutsch-FNs_ylOm21g-unsplash.jpg" class="thumbnail" alt="Thumbnail">
										</div>
										<% } else { %>
										<%		for(HClassFile f : fileList) { %>
										<%			if(classList.get(i).getClassNo() == f.getBoardNo()) { %>
										<div class="thumbnailArea" style="height: 300px; width: 100%;">
											<img style="min-width:100%; height: 100%;"  src="<%= request.getContextPath() %>/uploadFiles/<%= f.getChangeName() %>"
												class="thumbnail" alt="Thumbnail">
										</div>
										<%			} %>
										<% 		} %>
										<% } %>
										<br><br>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="<%= request.getContextPath() %>/detail.hcl?cNo=<%= classList.get(i).getClassNo() %>">Buy Now</a> 
											</div>
											<div class="seemore_bt">

												<a href="<%= request.getContextPath() %>/detail.hcl?cNo=<%= classList.get(i).getClassNo() %>">See More</a> 
											</div>
										</div>
									</div>
								</div>
				<% 			}  %>
				<% }  %>
							</div>
						</div>
					</div>
				</div>
				<% if (classList != null && !classList.isEmpty() && classList.size() > 6) { %>
				<div class="carousel-item">
					<div class="container">
						<br><br><br><br>
						<h1 class="fashion_taital">인기 상승 중인 클래스</h1>
						<div class="fashion_section_2">
							<div class="row">
						<% 	for (int i = 6; i < classList.size(); i++) { %>
								<% if (i == 9) {
									break;
								 } %>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text"><%= classList.get(i).getClassName() %></h4>
										<p class="price_text">
											Price <span style="color: #ff0000;"><%= dc.format(classList.get(i).getClassFee()) %></span>
											<!-- 좋아요 버튼 -->
											&nbsp;
											<span class="likeBtnArea">
												<input type="hidden" class="cNo" name="cNo" value="<%= classList.get(i).getClassNo() %>"> 
												<button class="button-like button visually-hidden position-absolute top-0 start-100 translate-middle badge"> 
													<!-- i : 아이콘 태그 -->
													<i class="fa fa-heart"></i>
													<span>Like</span>
												</button>
											</span>
										</p>
										<br>
										<% if (fileList == null || fileList.isEmpty()) { %>
										<div class="thumbnailArea" style="height: 300px; width: 100%;">
											<img style="min-width:100%; height: 100%;" src="images/simone-hutsch-FNs_ylOm21g-unsplash.jpg" class="thumbnail" alt="Thumbnail">
										</div>
										<% } else { %>
										<%		for(HClassFile f : fileList) { %>
										<%			if(classList.get(i).getClassNo() == f.getBoardNo()) { %>
										<div class="thumbnailArea" style="height: 300px; width: 100%;">
											<img style="min-width:100%; height: 100%;" src="<%= request.getContextPath() %>/uploadFiles/<%= f.getChangeName() %>"
												class="thumbnail" alt="Thumbnail">
										</div>
										<%			} %>
										<% 		} %>
										<% } %>
										<br><br>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="<%= request.getContextPath() %>/detail.hcl?cNo=<%= classList.get(i).getClassNo() %>">Buy Now</a> 
											</div>
											<div class="seemore_bt">

												<a href="<%= request.getContextPath() %>/detail.hcl?cNo=<%= classList.get(i).getClassNo() %>">See More</a> 
											</div>
										</div>
									</div>
								</div>
				<% 			}  %>
				<% }  %>
							</div>
						</div>
					</div>
				</div>							
			</div>
			<a class="carousel-control-prev" href="#main_slider" role="button"
				data-slide="prev"> <i class="fa fa-angle-left"></i>
			</a> <a class="carousel-control-next" href="#main_slider" role="button"
				data-slide="next"> <i class="fa fa-angle-right"></i>
			</a>
		</div>
	</div>
	<!-- 클래스 섹션 1 -->
	<script>
						
		// like-button js, ajax
		$(function() {
			// 화면 로드될때 실행되는 함수, window.onload = function(){}과 같음
			// 로그인이 되어 있고, 클래스리스트가 존재하면 실행
			<% if(loginUser != null && classList != null && !classList.isEmpty()) { %>
				// memberEmail이 일치하는 likeClassList를 select해와서  
				// classNo와 likeClassList의 classNo랑 일치하면  $(this).toggleClass("liked");
				var memberEmail = '<%= loginUser.getMemberEmail() %>';
				var cNo = $('.cNo');
									
				$.ajax({
					url: 'likeList.te',
					data: {memberEmail:memberEmail},
					type: 'POST',
					success: function(data){
						console.log(data);
						for (var i in cNo) {
							var likedCNo = data[i].classNo;
							$('.likeBtnArea').find('input[value=' + likedCNo + ']').next().toggleClass("liked");
														
						}
					},
					error: function(data){
						console.log(data);
					}
				});
			<% } %>
		});
							
		$('.button-like').bind('click', function(event) {
			if ('<%=loginUser%>' == 'null') {
					alert('로그인이 필요한 서비스입니다.');
			} else {
				<%if (loginUser != null) {%>
				$likeBtn = $(this);
				var likeStatus = $(this).attr('class'); // class속성의 값을 저장
				var memberEmail = '<%=loginUser.getMemberEmail()%>';
				var cNo = $(this).prev().val();

				if (likeStatus.includes('liked')) { // includes() : 해당 string이 포함되어 있으면 true, 아니면 false반환
					// 누른 클래스의 class속성에 'liked'라는 문자열이 포함되어 있으면 true -> 좋아요인 상태일때
					// delete ajax
					$.ajax({
						url : 'deletelike.te',
						data : {memberEmail : memberEmail, likedCNo : cNo},
						type : 'POST',
						success : function(data) {
							console.log(data);
							if (data.trim() == '1') {
								$likeBtn.toggleClass("liked");
							}
						},
						error : function(data) {
							console.log(data);
						}
					});
				} else {
					// 좋아요가 아닌 상태일때
					// insert ajax
					$.ajax({
						url : 'insertlike.te',
						data : {memberEmail : memberEmail, cNo : cNo},
						type : 'POST',
						success : function(data) {
							console.log(data);
							if (data.trim() == '1') {
								$likeBtn.toggleClass("liked");
							}
						},
						error : function(data) {
							console.log(data);
						}
					});
				}
			<% } %>
		}
		});

		// 카테고리 선택시 카테고리 별로 보이게 ajax로 select
		// category.click시-> 
		// var category = $(this).attr('name') <- 각 카테고리 name을 카테고리번호로 설정해놓기
		// 이 category를 ajax방식으로 url요청해서 DB의 class_category_no와 같은 걸로 select(where class_category_no = ?)
		// select해 온  list를 클래스 div영역에 넣기 (append 또는 html에 값 넣기)
/* 		$(document).on('click', '.category', function() {

			$.ajax({
				url : 'listByCategory.hcl',
				success : function(data) {
					console.log(data);

					var classList = $('#classList');

				},
				error : function(data) {
					console.log(data);
				}
			});
		}); */
	</script>
	<!-- 클래스 섹션 2 -->
<!-- 	<div class="jewellery_section">
		<div id="jewellery_main_slider" class="carousel slide"
			data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="container">
						<br>
						<h1 class="fashion_taital">카테고리별 : 개발(Programming)</h1>
						<div class="fashion_section_2">
							<div class="row">
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">Java + Spring 2개월 초단기 완성</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 130,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 75%" src="assets/images/java.jpg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">대세는 Python / Django다!</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 150,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 75%" src="assets/images/python.jpg"><img
												style="width: 75%" src="assets/images/python2.jpg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">프론트엔드 속성 3개월 과정</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 200,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 75%" src="assets/images/front.jpeg"><img
												style="width: 75%" src="assets/images/vue.jpg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="container">
						<br>
						<h1 class="fashion_taital">카테고리별 : 데코레이션(Decoration)</h1>
						<div class="fashion_section_2">
							<div class="row">
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">셀프 홈 인테리어</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 80,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 75%" src="assets/images/decoration.jpg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">내 목도리는 내가 뜬다, 예쁜 뜨개질</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 45,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 65%" src="assets/images/knitting.jpg"><img
												style="width: 65%" src="assets/images/knitting2.jpeg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">로맨틱 플로리스트 과정 1개월</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 100,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 75%" src="assets/images/florist.jpg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="container">
						<br>
						<h1 class="fashion_taital">요리 / 베이킹(Cooking / Baking)</h1>
						<div class="fashion_section_2">
							<div class="row">
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">집에서 해먹는 5성급 호텔요리 배우기</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 100,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 75%" src="assets/images/cooking.jpg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">엄마랑 아이랑 함께하는 홈베이킹</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 60,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 75%" src="assets/images/baking2.jpg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-sm-4">
									<div class="box_main">
										<h4 class="shirt_text">No밀가루, No설탕, 베이킹 클래스</h4>
										<p class="price_text">
											Price <span style="color: #ff0000;">₩ 50,000</span>&nbsp;<button class="button button-like visually-hidden position-absolute top-0 start-100 translate-middle badge"><i class="fa fa-heart"></i><span>Like</span>︎</button>
										</p>
										<div class="tshirt_img">
											<img style="width: 75%" src="assets/images/baking.jpg">
										</div>
										<div class="btn_main">
											<div class="buy_bt">
												<a href="#">Buy Now</a>
											</div>
											<div class="seemore_bt">
												<a href="class/classDetail.jsp">See More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#jewellery_main_slider"
				role="button" data-slide="prev"> <i class="fa fa-angle-left"></i>
			</a> <a class="carousel-control-next" href="#jewellery_main_slider"
				role="button" data-slide="next"> <i class="fa fa-angle-right"></i>
			</a>
		</div>
	</div> -->
	<!-- 클래스 섹션 2 -->


	<!-- footer -->
	<div class="footer_section layout_padding">
		<div class="container">
			<div class="footer_logo">
				<a href="index.jsp"><img src="assets/images/hlogo.png"
					style="width: 120px"></a>
			</div>
			<div class="input_bt">
				<input type="text" class="mail_bt" placeholder="Your Email"
					name="Your Email"> <span class="subscribe_bt"
					id="basic-addon2"><a href="#">Subscribe</a></span>
			</div>
			<div class="footer_menu">
				<ul>
					<li><a href="#">Introduction</a></li>
					<li><a href="#">Income</a></li>
					<li><a href="#">Class Application</a></li>
					<li><a href="admin/faq.jsp">FAQ</a></li>
					<li><a href="#">Customer Service</a></li>
				</ul>
			</div>
			<div class="location_main">
				HOBBYIST HOT LINE : <a href="#">+82 2 1234 5678</a>
			</div>
		</div>
	</div>
	<!-- footer section end -->
	<!-- copyright section start -->
	<div class="copyright_section">
		<div class="container">
			<p class="copyright_text">
				© 2021 All Rights Reserved. Design by <a href="index.jsp">HOBBYIST</a>
			</p>
		</div>
	</div>

	<!-- Javascript files-->
	<%@ include file="../common/js.jsp"%>
	<script>
         function openNav() {
           document.getElementById("mySidenav").style.width = "250px";
         }
         
         function closeNav() {
           document.getElementById("mySidenav").style.width = "0";
         }

      </script>
</body>
</html>