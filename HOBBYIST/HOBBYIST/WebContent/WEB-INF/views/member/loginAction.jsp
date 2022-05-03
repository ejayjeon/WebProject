<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="member.model.dao.MemberDAO" %>
<%@ page import="member.model.vo.Member" %>
<%@ page import="member.model.service.MemberService" %>
<%@ page import="java.io.PrintWriter" %>
<% request.setCharacterEncoding("UTF-8"); %>
<jsp:useBean id="member" class="member.model.vo.Member" scope="page"/>
<jsp:setProperty name="member" property="memberEmail"/>
<jsp:setProperty name="member" property="memberPwd"/>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
</head>
<body>
	<%
		MemberDAO mDAO = new MemberDAO();
		int result = new MemberService().login(member.getMemberEmail(), member.getMemberPwd());
		Member loginUser = new MemberService().loginMember(member.getMemberEmail(), member.getMemberPwd());
// 		if(loginUser.getMemberGrade().equ)
// 		Tutor tutor = new MemberService().selectTutor();
		if(result ==1) {
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("location.href='index.jsp'");
			script.println("</script>");
			if(loginUser != null) {
				request.getSession().setAttribute("loginUser", loginUser);
				response.sendRedirect(request.getContextPath());
			}
		} else if(result == 0) {
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('비밀번호가 일치하지 않습니다.')");
			script.println("history.back()");
			script.println("</script>");
		} else if(result == -1) {
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('존재하지 않는 아이디입니다.')");
			script.println("history.back()");
			script.println("</script>");
		} else if(result == -2) {
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('DB 오류가 발생했습니다.')");
			script.println("history.back()");
			script.println("</script>");
		} 
	%>
</body>
</html>