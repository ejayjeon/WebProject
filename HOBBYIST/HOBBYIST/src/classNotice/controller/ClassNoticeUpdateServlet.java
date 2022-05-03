package classNotice.controller;

import java.io.IOException;
import java.sql.Date;
import java.util.GregorianCalendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import classNotice.model.service.ClassNoticeService;
import classNotice.model.vo.ClassNotice;
import member.model.vo.Member;

/**
 * Servlet implementation class NoticeUpdate
 */
@WebServlet("/classNoticeUpdate.no")
public class ClassNoticeUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClassNoticeUpdateServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int classBoardNo = Integer.parseInt(request.getParameter("no"));
		String classBoardName = request.getParameter("title");
		String nickname = request.getParameter("nickname");
		String classBoardContent = request.getParameter("content");
		// String userId = ((Member)request.getSession().getAttribute("loginUser")).getUserId();
		
		String date = request.getParameter("date");
		System.out.println(date);
		Date noticeDate = null;
		if(date.equals("")) {
			noticeDate = new Date(new GregorianCalendar().getTimeInMillis());
			//System.out.println(noticeDate);
		} else {
			String[] dateSplit = date.split("-");
			int year = Integer.parseInt(dateSplit[0]);
			int month =  Integer.parseInt(dateSplit[1]) - 1;
			int day = Integer.parseInt(dateSplit[2]);
			noticeDate = new Date(new GregorianCalendar(year, month, day).getTimeInMillis());
		}
		
		ClassNotice notice = new ClassNotice(classBoardNo, classBoardName, classBoardContent, 0, noticeDate, 1, 1, null);
		
		int result = new ClassNoticeService().updateClassNotice(notice);
		
		String page = null;
		if (result > 0) {
			request.setAttribute("classnotice", notice);
			page = "WEB-INF/views/tutor/noticeDetail.jsp";
		} else {
			request.setAttribute("msg", "공지사항 수정 실패");
			page = "WEB-INF/views/common/errorPage.jsp";
		}
		request.getRequestDispatcher(page).forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}