package tutor.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import tutor.model.service.SnsService;
import tutor.model.vo.Sns;

/**
 * Servlet implementation class InsertSnsServlet
 */
@WebServlet("/insertSns.me")
public class InsertSnsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InsertSnsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String facebook = request.getParameter("fbk");
		String twitter = request.getParameter("twit");
		String youtube = request.getParameter("yout");
		String instagram = request.getParameter("insta");
		
		Sns sns = new Sns(facebook, twitter, youtube, instagram);
		int result = new SnsService().insertSns(sns);
		
		if(result > 0) {
			response.sendRedirect("tutorInform.me");
		} else {
			request.setAttribute("msg", "sns등록 실패");
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
