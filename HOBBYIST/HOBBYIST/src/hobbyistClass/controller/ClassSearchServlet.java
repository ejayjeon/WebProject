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
 * Servlet implementation class ClassSearchServlet
 */
@WebServlet("/classSearch.cl")
public class ClassSearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClassSearchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String searchWord = request.getParameter("searchWord").trim();

		HClassService hService = new HClassService();
		
		ArrayList<HClass> searchList = hService.searchClass(searchWord); //검색한 단어가 포함된 클래스 검색 리스트
		ArrayList<HClassFile> list = hService.selectFileList(); //클래스 썸네일을 가져오기 위함
		
		if(searchList != null && list != null) {
			request.setAttribute("searchWord", searchWord);
			request.setAttribute("searchList", searchList);
			request.setAttribute("list", list);
					System.out.println("searchWord : " + searchWord);
					System.out.println("searchList : " + searchList);
					System.out.println("list : " + list);
			request.getRequestDispatcher("WEB-INF/views/hobbyistClass/classSearch.jsp").forward(request, response);
		} else {
			request.setAttribute("msg", "클래스 검색에 실패했습니다");
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
