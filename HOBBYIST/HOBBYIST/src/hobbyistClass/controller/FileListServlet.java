package hobbyistClass.controller;

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

/**
 * Servlet implementation class FileListServlet
 */
@WebServlet("/tutorMyPage.tt")
public class FileListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FileListServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		HClassService hService = new HClassService();
		
		// 게시판 리스트 가져오기 진행중인 클래스
		ArrayList<HClass> bList = hService.selectBList();
		System.out.println("bList :" +bList);			
		// 파일 리스트 가져오기
		ArrayList<HClassFile> cfList = hService.selectFileList();
				
		// 승인 전 클래스 AList
		ArrayList<HClass> aList = hService.selectAPVNList();
		System.out.println("AList :" +aList);	
		// 완료된 클래스 CList
		ArrayList<HClass> cList = hService.selectClearList();
		System.out.println("CList :" +cList);	
		String page = null;
		
		if (bList != null && cfList != null) {
			request.setAttribute("bList", bList);
			request.setAttribute("cfList", cfList);
			request.setAttribute("aList", aList);
			request.setAttribute("cList", cList);
			page = "WEB-INF/views/tutor/myPageTutorMyClass.jsp";
		} else {
			request.setAttribute("msg", "내 클래스 조회 실패");
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
