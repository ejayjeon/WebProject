package hobbyistClass.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.Session;

import hobbyistClass.model.service.HClassService;
import hobbyistClass.model.vo.ApvPageInfo;
import hobbyistClass.model.vo.HClass;
import member.model.vo.Member;

/**
 * Servlet implementation class ClassApvServlet
 */
@WebServlet("/apvList.cl")
public class ClassApvListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClassApvListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//페이징 처리
		int listCount;    //총 게시글 개수
		int currentPage;  //현재 페이지
		int pageLimit;    //한 페이지에서 보일 페이지 수
		int listLimit;    //한 페이지에서 보일 게시글 수
		int maxPage;      //마지막 페이지
		int startPage;    //페이징이 된 페이지 중 시작 페이지
		int endPage;      //페이징이 된 페이지 중 마지막 페이지
		
		HClassService hService = new HClassService();
		
		//몇 페이지가 나오는지 계산하기 위한 전체 게시글 개수 확인
		listCount = hService.getListCount();
		
		//현재 페이지 설정
		currentPage = 1;
		if(request.getParameter("currentPage") != null) {
			currentPage = Integer.parseInt(request.getParameter("currentPage"));
		}
//		System.out.println(currentPage);
		// listLimit와 pageLimit 설정
		listLimit = 10;
		pageLimit = 10;
		
		// 각 변수에 맞는 계산식 작성
		maxPage = (int)Math.ceil((double)listCount / listLimit); 
		
		startPage = (currentPage - 1) / pageLimit * pageLimit + 1;
		
		endPage = startPage + pageLimit - 1;
			if (maxPage < endPage) {
				endPage = maxPage;
			}
		
		// 페이징 처리에 필요한 변수들을 보관할 vo클래스 생성(여기서 객체 생성해서 필드에 저장함)
		ApvPageInfo pi = new ApvPageInfo(listCount, currentPage, pageLimit, listLimit, maxPage, startPage, endPage);
			
		ArrayList<HClass> apvList = new HClassService().selectApvList(pi);
		
		//로그인 유저 정보 보내서 INFO에 띄우기 위함
		Member loginUser = (Member) request.getSession().getAttribute("loginUser");
		
		//클래스 중 승인 전 클래스 개수 가져옴(승인/반려도 안된 개수) -> 클래스 승인 페이지에서 숫자로 표현
		ArrayList<HClass> beforeApvClass = hService.beforeApvClass();
		
		String page = null;
		if(apvList != null) {
			request.setAttribute("beforeApvClass", beforeApvClass);
			request.setAttribute("apvList", apvList);
			request.setAttribute("loginUser", loginUser);
			request.setAttribute("pi", pi);
			page = "WEB-INF/views/admin/classApvList.jsp";
		} else {
			request.setAttribute("msg", "클래스 승인 내역 조회 실패");
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
