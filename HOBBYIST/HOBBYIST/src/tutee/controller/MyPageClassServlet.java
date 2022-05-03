package tutee.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import hobbyistClass.model.service.HClassService;
import hobbyistClass.model.vo.HClass;
import hobbyistClass.model.vo.HClassFile;
import member.model.vo.Member;
import tutee.model.servuce.TuteeService;
import tutee.model.vo.TuteeClass;

/**
 * Servlet implementation class MyClassServlet
 */
@WebServlet("/myClass.te") // tutee의 'te' , tutor는 to로 하면 될듯
public class MyPageClassServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MyPageClassServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String memberEmail = ((Member)request.getSession().getAttribute("loginUser")).getMemberEmail();
		TuteeService tService = new TuteeService();
		ArrayList<HClass> tcBeforeList = tService.selectTuteeClassList(0, memberEmail); // 0이면 수강전 클래스, 1이면 수강완료 클래스리스트 불러옴
		ArrayList<HClass> tcAfterList = tService.selectTuteeClassList(1, memberEmail);
		ArrayList<HClassFile> fileList = new HClassService().selectFileList();
		
		// 수강전 클래스면 다가오는 수강일자, 수강완료 클래스면 최근 강의종료일자 보여주기 위해 리스트 가져옴
		ArrayList<TuteeClass> tcScheduleBefore =  tService.selectTCScheduleList(0, memberEmail);
		ArrayList<TuteeClass> tcScheduleAfter =  tService.selectTCScheduleList(1, memberEmail);
		
		String page = null;
		if (tcBeforeList != null && tcAfterList != null && fileList != null) {
			request.setAttribute("tcBeforeList", tcBeforeList);
			request.setAttribute("tcAfterList", tcAfterList);
			request.setAttribute("fileList", fileList);
			request.setAttribute("tcScheduleBefore", tcScheduleBefore);
			request.setAttribute("tcScheduleAfter", tcScheduleAfter);
			page = "WEB-INF/views/tutee/tuteeMyClass.jsp";
			
		} else {
			request.setAttribute("msg", "튜티의 내 클래스 목록 조회 실패");
			page = "WEB-INF/views/common/errorPage.jsp";
		}
		request.getRequestDispatcher(page).forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
