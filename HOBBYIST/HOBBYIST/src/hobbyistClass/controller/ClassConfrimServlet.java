package hobbyistClass.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import hobbyistClass.model.service.HClassService;
import hobbyistClass.model.vo.HClass;


/**
 * Servlet implementation class ClassApvServlet
 */
@WebServlet("/confirmClass.cl")
public class ClassConfrimServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClassConfrimServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int classNo = Integer.parseInt(request.getParameter("classNo"));
		System.out.println(classNo);
//		ArrayList<HClass> apvList = new HClassService().confirmClass(classNo);
		int result = new HClassService().confirmClass(classNo);
		
		response.setContentType("application/json; charset=UTF-8");
//		Gson gson = new Gson();
//		gson.toJson(apvList, response.getWriter());
		PrintWriter out = response.getWriter(); 
		out.println(result);
		out.flush();
		out.close();

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
