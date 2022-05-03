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
 * Servlet implementation class ClassDetailServilet
 */
@WebServlet("/detail.hcl")
public class ClassDetailServilet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClassDetailServilet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int cNo = Integer.parseInt(request.getParameter("cNo"));
		
		System.out.println("cNo : " + cNo);
		
		HClassService hService = new HClassService();
		
		HClass c = hService.selectClass(cNo);
		
		ArrayList<HClassFile> fileList = hService.selectDetailFileList(cNo);
		
		String page = null;
		if (c != null && fileList != null) {
			page = "WEB-INF/views/hobbyistClass/classDetail.jsp";
			request.setAttribute("c", c);
			request.setAttribute("fileList", fileList);
		} else {
			request.setAttribute("msg", "클래스 상세보기 실패");
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
