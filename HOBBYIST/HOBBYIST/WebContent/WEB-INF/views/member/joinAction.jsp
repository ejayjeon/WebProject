<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="member.model.dao.MemberDAO" %>
<%@ page import="member.model.vo.Member" %>
<%@ page import="member.model.service.MemberService" %>
<%@ page import="java.io.PrintWriter" %>
<% request.setCharacterEncoding("UTF-8"); %>
<jsp:useBean id="member" class="member.model.vo.Member" scope="page"/>
<jsp:setProperty name="member" property="memberEmail"/>
<jsp:setProperty name="member" property="memberName"/>
<jsp:setProperty name="member" property="memberNickName"/>
<jsp:setProperty name="member" property="memberPhone"/>
<jsp:setProperty name="member" property="memberPwd"/>
<jsp:setProperty name="member" property="kakaoNo"/>
<jsp:setProperty name="member" property="memberEnrollType"/>
<jsp:setProperty name="member" property="memberEnrollDate"/>
<jsp:setProperty name="member" property="memberStatus"/>
<jsp:setProperty name="member" property="memberGrade"/>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
</head>
<body>
	<%
		if(member.getMemberEmail() == null || member.getMemberName() == null || member.getMemberNickName() == null ||
				member.getMemberPhone() == null || member.getMemberPwd() == null) {
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('입력되지 않은 사항이 있습니다.')");
			script.println("history.back()");
			script.println("</script>");
		} else {
			MemberDAO mDAO = new MemberDAO();
			int result = new MemberService().join(member);
		
			if(result == -1) {
				PrintWriter script = response.getWriter();
				script.println("<script>");
				script.println("alert('가입 이력이 있는 이메일입니다.')");
				script.println("history.back()");
				script.println("</script>");
			} else {
				PrintWriter script = response.getWriter();
				script.println("<script>");
				script.println("location.href='index.jsp'");
				script.println("</script>");
			}
		}
	%>


</body>
</html>