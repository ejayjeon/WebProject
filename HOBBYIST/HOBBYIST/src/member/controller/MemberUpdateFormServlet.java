package member.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.model.service.MemberService;
import member.model.vo.Member;

/**
 * Servlet implementation class MemberUpdateFormServlet
 */
@WebServlet("/updateForm.me")
public class MemberUpdateFormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberUpdateFormServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		request.setCharacterEncoding("UTF-8");
//		String profile = request.getParameter("profile");
//		String email = request.getParameter("email");
//		String name = request.getParameter("name");
//		String nickName = request.getParameter("nickName");
//		String phone = request.getParameter("phone");
//		
//		Member myInfo = new Member();
//		myInfo.setProfile(profile);
//		myInfo.setUserEmail(email);
//		myInfo.setUserName(name);
//		myInfo.setNickName(nickName);
//		myInfo.setPhone(phone);
//		
//		request.setAttribute("myInfo", myInfo);
		// 내 정보 조회에 있던 member정보 가져오기, 위처럼 가져오지 않아도 session에 저장되어 있는 것을 활용해도 됨
		
		request.getRequestDispatcher("WEB-INF/views/member/memberUpdateForm.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
