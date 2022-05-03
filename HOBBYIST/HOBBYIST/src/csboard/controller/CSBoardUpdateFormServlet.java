package csBoard.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import csBoard.model.service.CSBoardService;
import csBoard.model.vo.CSBoardFile;
import csBoard.model.vo.RequestBoard;

/**
 * Servlet implementation class CSBoardUpdateFormServlet
 */
@WebServlet("/boardUpdateForm.cs")
public class CSBoardUpdateFormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CSBoardUpdateFormServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int rNo = Integer.parseInt(request.getParameter("rNo")); // 글번호 가져오기
		
		RequestBoard board = new CSBoardService().selectBoard(rNo); // 글번호를 이용해  board객체 가져오기
		ArrayList<CSBoardFile> fList = new CSBoardService().selectFileList(rNo);
		
		request.setAttribute("board", board); // board객체를 이번 request 안의 속성으로 저장
		request.setAttribute("fList", fList);
		request.getRequestDispatcher("WEB-INF/views/csboard/csBoardUpdateForm.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
