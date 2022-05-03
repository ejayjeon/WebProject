package classNotice.controller;

import java.io.IOException;
import java.sql.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.model.vo.Member;
import classNotice.model.service.ClassNoticeService;
import classNotice.model.vo.ClassNotice;

@WebServlet("/classNoticeInsert.no")
public class InsertClassNoticeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public InsertClassNoticeServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String classBoardName = request.getParameter("title");
		String classBoardContent = request.getParameter("content"); 
		String classNoticeWriter = ((Member)request.getSession().getAttribute("loginUser")).getMemberNickName();
		
		
		String date = request.getParameter("date"); // date String값으로 넘어오는데 년도-월-일 이렇게 '-'로 구분돼서 넘어옴
		 
		Date classBoardDate = null;
		if(date.equals("")) { 
			classBoardDate = new Date(new GregorianCalendar().getTimeInMillis());
		} else {
			String[] splitDate = date.split("-");
			int year = Integer.parseInt(splitDate[0]);
			int month = Integer.parseInt(splitDate[1]) - 1;
			int day = Integer.parseInt(splitDate[2]);
		
			classBoardDate = new Date(new GregorianCalendar(year, month, day).getTimeInMillis());
		}
		
		ClassNotice n = new ClassNotice(0, classBoardName, classBoardContent, 0, classBoardDate, 1, 0, classNoticeWriter);
		System.out.println(n);
		
		int result = new ClassNoticeService().insertClassNotice(n);

		if (result > 0) {
			response.sendRedirect("classManagement.tt"); 
		} else {
			request.setAttribute("msg", "공지사항 등록 실패");
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
