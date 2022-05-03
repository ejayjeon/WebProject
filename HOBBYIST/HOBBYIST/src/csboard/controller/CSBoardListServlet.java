package csBoard.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import csBoard.model.service.CSBoardService;
import csBoard.model.vo.PageInfo;
import csBoard.model.vo.RequestBoard;

/**
 * Servlet implementation class BoardList
 */
@WebServlet("/list.cs")
public class CSBoardListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CSBoardListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 페이징 처리에 필요한 변수
		int listCount;		// 총 게시글 개수
		int currentPage;	// 현재 페이지
		int pageLimit;		// 한 페이지에서 보일 페이지 수
		int boardLimit;		// 한 페이지에서 보일 게시글 수
		int maxPage;		// 가장 마지막 페이지
		int startPage;		// 페이징이 된 페이지 중 시작 페이지
		int endPage;		// 페이징이 된 페이지 중 마지막 페이지
		
		CSBoardService cService = new CSBoardService(); 

		// 페이징 처리 1단계 : 몇 페이지가 나오는지 계산하기 위한 전체 게시글 개수 조회
		listCount = cService.getListCount();
		
		// 페이징 처리 2단계 : 현재 페이지 설정
		currentPage = 1;
		if (request.getParameter("currentPage") != null) {
			// currentPage가 null이 아니다 -> 파라미터로 currentPage가 들어왔다 -> 페이징 처리가 된 버튼을 눌렀다
			// currentPage가 null이다 -> 처음 페이지에 들어왔다 -> currentPage = 1 (null이 아닐때만 currentPage값 바꿔주면 됨)
			currentPage = Integer.parseInt(request.getParameter("currentPage"));
		}
		
		// 페이징 처리 3단계 : boardLimit와 pageLimit 설정
		pageLimit = 10;
		boardLimit = 10;
		
		// 페이징 처리 4단계 : 각 변수에 알맞은 계산식 작성
		maxPage = (int)Math.ceil((double)listCount / boardLimit); 
		// int값 두 개를 나누면 소수점까지 안 나오기 때문에 double로 형 변환 필요 -> Math.ceil메소드로 올림처리 후 int로 형 변환
		// 만약 0.9면 1로, 4.0이면 4로, 4.3이면 5라는 값이 maxPage에 저장될 것임
		
		// startPage 계산식 -> 수열 개념 적용 필요
		startPage = (currentPage - 1) / pageLimit * pageLimit + 1; 
//		int n = (currentPage - 1) / pageLimit;
		// (currentPage - 1) / pageLimit -> n은 식의 결과에 따라  0, 1, 2, 3, .. (수열) 
//		startPage = pageLimit * n + 1; 
		// pageLimit * n + 1 -> starPage는 n의 결과에 따라 1, 11, 21, 31, ..	

		endPage = startPage + pageLimit - 1;
		if (maxPage < endPage) {
			endPage = maxPage;
		}
		
		// 페이징 처리에 필요한 변수를 보관할 vo(클래스) 만들어 놓음 -> 여기서 객체 생성하여 필드에 저장
		PageInfo pi = new PageInfo(currentPage, listCount, pageLimit, boardLimit, maxPage, startPage, endPage);		
		
		ArrayList<RequestBoard> list =  cService.selectList(pi);
	
		String page = null;
		if (list != null) {
			page = "WEB-INF/views/csboard/csBoardList.jsp";
			request.setAttribute("list", list);
			request.setAttribute("pi", pi);
		} else {
			page = "WEB-INF/views/common/errorPage.jsp";
			request.setAttribute("msg", "1:1문의 게시판 조회 실패");
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
