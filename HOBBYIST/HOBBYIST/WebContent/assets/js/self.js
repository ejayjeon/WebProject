
function reservation() {
			location.href = "<%= request.getContextPath() %>/tutorClass.tu";
		}
		
		
		$('#beforeClass').hover(function() {
			$(this).css({
				'cursor' : 'pointer'
			})
		}).click(function() {
			location.href='<%=request.getContextPath()%>/beforeClass.cl';
		})
		
		$('#onClass').hover(function() {
			$(this).css({
				'cursor' : 'pointer'
			})
		}).click(function() {
			location.href='<%=request.getContextPath()%>/onClass.cl';
		})
		
		$('#closeClass').hover(function() {
			$(this).css({
				'cursor' : 'pointer'
			})
		}).click(function() {
			location.href='<%=request.getContextPath()%>/closeClass.cl';
		})
	
				$('#listArea td').mouseenter(function(){
					$(this).parent().css({'background':'#9ED4C2', 'font-weight' :'bold', 'color' : 'white'});
				}).mouseout(function(){
					$(this).parent().css({'background':'none', 'font-weight' :'normal', 'color' : 'black'});
				});
				
				
				$('.APV').on('click', function(){
					if(confirm('클래스를 승인하시겠습니까?')){
						
						//변수는 $.ajax밖에서 선언하기!!! ajax안에서 선언하면 ajax자체가 선택됨
						$btn = $(this);
						console.log($btn);
						console.log($btn.value);
						
						$.ajax({
							url: 'confirmClass.cl',
							data : {classNo:$(this).parent().parent().find('input[name=classNo]').val()},
							success : function(data){
								console.log(data);
								
								$btn.parent().parent().find('span').text('Y');															
// 	참고용) 실행안됨					$(this).parent().parent().find('span').text('Y'); 

							},
							error: function(data){
								console.log(data);
							}
						});
					}
				});
			
				
				$('.REJECT').on('click', function(){
												
					if(confirm('클래스를 반려하시겠습니까?')){
	
						$btn = $(this);
	
						$.ajax({
							url: 'rejectClass.cl',
							data : {classNo:$btn.parent().parent().find('input[name=classNo]').val()},
							success : function(data){
								
// 								if($btn.parent().parent().find('input[name=classApnYn]').val() =='N'){
// 									console.log($btn.parent().parent().find('input[name=classApnYn]').val());
									console.log('반려성공');
									console.log(data);
									$btn.parent().parent().find('span').text('C');
								
// 								} else {
// 									alert('이미 승인하거나 반려한 클래스는 다시 반려할 수 없습니다.');
// 								}
							},
							error: function(data){
								console.log('반려실패');
							}
						});
					}		
				});
			
	