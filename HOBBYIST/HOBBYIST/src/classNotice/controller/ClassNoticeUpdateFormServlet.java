package classNotice.controller;

import java.io.IOException;
import java.sql.Date;
import java.util.GregorianCalendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.model.vo.Member;
import classNotice.model.vo.ClassNotice;

/**
 * Servlet implementation class NoticeUpdateFormServlet
 */
@WebServlet("/classNoticeUpdateForm.no")
public class ClassNoticeUpdateFormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClassNoticeUpdateFormServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int no = Integer.parseInt(request.getParameter("no"));
		String title = request.getParameter("title");
		String nickName = request.getParameter("nickName");
		String content = request.getParameter("content");
		String userEmail = ((Member)request.getSession().getAttribute("loginUser")).getMemberEmail();
		
		String date = request.getParameter("date");
		
		Date noticeDate = null;
		if(date.equals("")) {
			noticeDate = new Date(new GregorianCalendar().getTimeInMillis());
		} else {
			String[] dateSplit = date.split("-");
			int year = Integer.parseInt(dateSplit[0]);
			int month =  Integer.parseInt(dateSplit[1]) - 1;
			int day = Integer.parseInt(dateSplit[2]);
			noticeDate = new Date(new GregorianCalendar(year, month, day).getTimeInMillis());
		}
		
		ClassNotice notice = new ClassNotice(no, title, content, 0, noticeDate, 1, 0, userEmail);
		request.setAttribute("classNotice", notice);
		request.getRequestDispatcher("WEB-INF/views/tutor/noticeUpdateForm.jsp").forward(request, response);

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
