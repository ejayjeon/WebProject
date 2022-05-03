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
 * Servlet implementation class ThumbnailDetailServlet
 */
@WebServlet("/classOpenDetail.tt")
public class ThumbnailDetailServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ThumbnailDetailServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		int bId = Integer.parseInt(request.getParameter("bId"));
		
		System.out.println("bId : "+ bId);
		
		HClassService hService = new HClassService();
		
		HClass hc = hService.selectClassOpen(bId);
		
		ArrayList<HClassFile> fileList = hService.selectOpenClassFileList(bId);
		
		String page = null;
		if (hc != null && fileList != null) {
			page = "WEB-INF/views/tutor/ClassOpenDetail.jsp";
			request.setAttribute("hc", hc);
			request.setAttribute("fileList", fileList);
		} else {
			request.setAttribute("msg", "클래스 상세보기 실패");
			page = "WEB-INF/views/common/errorPage.jsp";
		}
		request.getRequestDispatcher(page).forward(request, response);
	
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
