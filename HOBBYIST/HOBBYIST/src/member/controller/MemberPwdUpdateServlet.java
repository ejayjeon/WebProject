package member.controller;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import member.model.service.MemberService;
import member.model.vo.Member;

/**
 * Servlet implementation class MemberPwdUpdateServlet
 */
@WebServlet("/pwdUpdate.me")
public class MemberPwdUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberPwdUpdateServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		Member loginUser = (Member)session.getAttribute("loginUser");
		String memberEmail = loginUser.getMemberEmail();
		String memberPwd = request.getParameter("memberPwd");
		String newPwd1 = request.getParameter("newPwd1");
		
		HashMap<String, String> map = new HashMap<String, String>(); // 매개변수에 3개 다 담아도 되지만, map에 담아서 넘기기 가능
		map.put("memberEmail", memberEmail);
		map.put("memberPwd", memberPwd);
		map.put("newPwd1", newPwd1);
		
		int result = new MemberService().updatePwd(map);
		
		if (result > 0) {
			loginUser.setMemberPwd(newPwd1);
			session.setAttribute("loginUser", loginUser);
			response.sendRedirect("myInfo.me");
		} else {
			request.setAttribute("msg", "비밀번호 변경 실패");
			request.getRequestDispatcher("WEB-INF/views/common/errorPage.jsp").forward(request, response);
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
