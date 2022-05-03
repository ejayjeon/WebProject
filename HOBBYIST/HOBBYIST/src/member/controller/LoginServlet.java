package member.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import member.model.service.MemberService;
import member.model.vo.Member;
import tutor.model.service.TutorService;
import tutor.model.vo.Tutor; 
import tutor.model.vo.Tutor;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/login.me")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String memberEmail = request.getParameter("memberEmail");
		String memberPwd = request.getParameter("memberPwd");
	
		int result = new MemberService().login(memberEmail, memberPwd);
		Member loginUser = new MemberService().loginMember(memberEmail, memberPwd);
				
		response.setContentType("text/html; charset=UTF-8");
		if(result ==1) {
//			PrintWriter script = response.getWriter();
//			script.println("<script>");
//			script.println("location.href='index.jsp'");
//			script.println("</script>");

			if(loginUser != null) {
				if (loginUser.getMemberGrade().equals("B")) {
					Tutor tutor = new TutorService().selectTutor(loginUser.getMemberEmail());
					if (tutor != null) { // 로그인시 loginUser가 tutor라면 tutor정보도 세션에 저장 (tutor는 member의 연장선)
						request.getSession().setAttribute("tutor", tutor);
					}
				}
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
	
//		if(loginUser != null) {
//			request.getSession().setAttribute("loginUser", loginUser);
//			response.sendRedirect(request.getContextPath());
//		} else {
//			request.setAttribute("msg", "로그인에 실패했습니다. 아이디와 비밀번호를 정확히 입력해주세요.");
////			request.getRequestDispatcher("WEB-INF/views/member/loginAction.jsp").forward(request, response);
//			request.getRequestDispatcher("WEB-INF/views/common/errorPage.jsp").forward(request, response);
//		}
	}
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
