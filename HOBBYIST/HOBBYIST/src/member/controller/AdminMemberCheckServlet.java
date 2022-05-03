package member.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import hobbyistClass.model.service.HClassService;
import hobbyistClass.model.vo.ApvPageInfo;
import hobbyistClass.model.vo.HClass;
import member.model.service.MemberService;
import member.model.vo.Member;
import member.model.vo.MemberInfo;

/**
 * Servlet implementation class AdminMemberCheckServlet
 */
@WebServlet("/memberCheck.admin")
public class AdminMemberCheckServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdminMemberCheckServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		//페이징 처리
		int memberCount;    //총 멤버(튜티)수
		int currentPage;  //현재 페이지
		int pageLimit;    //한 페이지에서 보일 페이지 수
		int memberLimit;    //한 페이지에서 보일 멤버(튜티)수
		int maxPage;      //마지막 페이지
		int startPage;    //페이징이 된 페이지 중 시작 페이지
		int endPage;      //페이징이 된 페이지 중 마지막 페이지
				
		MemberService mService = new MemberService();
				
		//몇 페이지가 나오는지 계산하기 위한 전체 게시글 개수 확인
		memberCount = mService.getMemberCount();
				
		//현재 페이지 설정
		currentPage = 1;
		if(request.getParameter("currentPage") != null) {
			currentPage = Integer.parseInt(request.getParameter("currentPage"));
		}

		memberLimit = 10;
		pageLimit = 10;
	
		// 각 변수에 맞는 계산식 작성
		maxPage = (int)Math.ceil((double)memberCount / memberLimit); 
				
		startPage = (currentPage - 1) / pageLimit * pageLimit + 1;
				
		endPage = startPage + pageLimit - 1;
			if (maxPage < endPage) {
				endPage = maxPage;
			}
				
		// 페이징 처리에 필요한 변수들을 보관할 vo클래스 생성(여기서 객체 생성해서 필드에 저장)
		MemberInfo pi = new MemberInfo(memberCount, currentPage, pageLimit, memberLimit, maxPage, startPage, endPage);
		
		ArrayList<Member> tuteeList = new MemberService().selectTuteeList(pi);
		ArrayList<Member> tutorList = new MemberService().selectTutorList(pi);
		
		String page = null;
		if(tuteeList != null) {
			request.setAttribute("tuteeList", tuteeList);
			request.setAttribute("tutorList", tutorList);
			request.setAttribute("pi", pi);
			page = "WEB-INF/views/admin/MemberCheckList.jsp";
		} else {
			request.setAttribute("msg", "튜티 목록 조회 실패");
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
