package member.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.model.service.MemberService;
import member.model.vo.Member;

/**
 * Servlet implementation class JoinServlet
 */
@WebServlet("/join.me")
public class JoinServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JoinServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String memberEmail = request.getParameter("memberEmail");
		String memberName = request.getParameter("memberName");
		String memberNickName = request.getParameter("memberNickName");
		String memberPhone = request.getParameter("memberPhone");
		String memberPwd = request.getParameter("memberPwd");
		
		Member member = new Member();
		member.setMemberEmail(memberEmail);
		member.setMemberName(memberName);
		member.setMemberNickName(memberNickName);
		member.setMemberPhone(memberPhone);
		member.setMemberPwd(memberPwd);
		
		response.setContentType("text/html; charset=UTF-8");
		if(memberEmail == null || memberName == null || memberNickName == null ||
				memberPhone == null || memberPwd == null) {
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('입력되지 않은 사항이 있습니다.')");
			script.println("history.back()");
			script.println("</script>");
		} else {
			int result = new MemberService().join(member);
			
			if(result > 0) {
				response.sendRedirect(request.getContextPath());
				;
			} else if(result == -1) {
				PrintWriter script = response.getWriter();
				script.println("<script>");
				script.println("alert('가입 이력이 있는 이메일입니다.')");
				script.println("history.back()");
				script.println("</script>");
			} else {
				PrintWriter script = response.getWriter();
				script.println("<script>");
				script.println("alert('DB 오류.')");
				script.println("history.back()");
				script.println("</script>");
			}
		};
		
//		request.getRequestDispatcher("WEB-INF/views/member/joinAction.jsp").forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
