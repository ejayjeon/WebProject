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
import csBoard.model.vo.CSBoardFile;
import csBoard.model.vo.Reply;
import csBoard.model.vo.RequestBoard;
import member.model.vo.Member;

/**
 * Servlet implementation class BoardDetailServlet
 */
@WebServlet("/detail.cs")
public class CSBoardDetailServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CSBoardDetailServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int rNo = Integer.parseInt(request.getParameter("rNo"));
		
		RequestBoard board = new CSBoardService().selectBoard(rNo);
		
		ArrayList<Reply> list = new CSBoardService().selectReplyList(rNo); // 댓글(답변)
		
		ArrayList<CSBoardFile> fList = new CSBoardService().selectFileList(rNo);

		Member loginUser = (Member)request.getSession().getAttribute("loginUser");
		
		response.setContentType("text/html; charset=UTF-8");
		String page = null;
		if(board != null) {
			if (!(board.getReqWriter().equals(loginUser.getMemberEmail()) || loginUser.getMemberGrade().equals("A"))) { // 작성자와 관리자(등급A)만 열람할 수 있게
				PrintWriter script = response.getWriter();
				script.println("<script>");
				script.println("alert('작성자만 열람할 수 있습니다.')");
				script.println("history.back()");
				script.println("</script>");
			} else {
				page = "WEB-INF/views/csboard/csBoardDetail.jsp";
				request.setAttribute("board", board);
				request.setAttribute("list", list);
				request.setAttribute("fList", fList);
			}
		} else {
			page = "WEB-INF/views/common/errorPage.jsp";
			request.setAttribute("msg", "1:1문의글 조회 실패");
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
