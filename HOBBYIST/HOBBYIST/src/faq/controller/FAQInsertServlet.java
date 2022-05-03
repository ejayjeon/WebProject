package faq.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import faq.model.service.FAQService;
import faq.model.vo.FAQ;

/**
 * Servlet implementation class ContactServlet
 */
@WebServlet("/FAQinsert.bo")
public class FAQInsertServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FAQInsertServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
//		int faqNo = Integer.parseInt(request.getParameter("faqNo")); //왜 null...?
//		System.out.println(faqNo);
		String faqTitle = request.getParameter("title");
		String faqReply = request.getParameter("reply");
		String faqCategory = request.getParameter("category");
		
		FAQ faq = new FAQ(0, faqTitle, faqReply, faqCategory);
		
		int result = new FAQService().insertFAQ(faq);
		
		if(result > 0) {
			response.sendRedirect("FAQ.bo");
		} else {
			request.setAttribute("msg", "FAQ 등록 실패");
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
