package tutor.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import com.oreilly.servlet.MultipartRequest;

import common.MyFileRenamePolicy;
import tutor.model.service.TutorService;
import tutor.model.vo.Files;
import tutor.model.vo.Tutor;

/**
 * Servlet implementation class TutorProfileServlet
 */
@WebServlet("/insert.th")
public class TutorProfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TutorProfileServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		request.setCharacterEncoding("UTF-8");
//		
//	if(ServletFileUpload.isMultipartContent(request)) {
//		
//		int maxSize = 120 * 120 * 20;
//		String root = request.getSession().getServletContext().getRealPath("/");
//		String savePath = root + "uploadFiles/";
//		
//		File f = new File(savePath);
//		if(!f.exists()) {
//			f.mkdirs();
//		}
//		
//		System.out.println(savePath);
//		
//		MultipartRequest multiRequest = new MultipartRequest(request, savePath, maxSize, "UTF-8", new MyFileRenamePolicy());
//		
//		ArrayList<String> saveFiles = new ArrayList<String>();
//		ArrayList<String> originFiles = new ArrayList<String>();
//		
//		Enumeration<String> files = multiRequest.getFileNames();
//		while(files.hasMoreElements()) {
//			String name = files.nextElement();
//			System.out.println(files.nextElement());
//			
//			if(multiRequest.getFilesystemName(name)!=null) {
//				saveFiles.add(multiRequest.getFilesystemName(name));
//				originFiles.add(multiRequest.getOriginalFileName(name));
//			}
//		}
//		
//		System.out.println(saveFiles);
//		System.out.println(originFiles);
//		
//		String content = multiRequest.getParameter("content");
//		
//		ArrayList<Files> fileList = new ArrayList<Files>();
//		for(int i=originFiles.size()-1; i>=0; i--) {
//			Files f1 = new Files();
//			f1.setFilePath(savePath);
//			f1.setOriginName(originFiles.get(i));
//			f1.setChangeName(saveFiles.get(i));
//			
//			if(i == originFiles.size() - 1) {
//				f1.setFileLevel(0);
//			} else {
//				f1.setFileLevel(1);
//			}
//			
//			fileList.add(f1);
//		}
//		
//		int result = new TutorService().insertProfile(fileList);
//	
//		if(result >= 1+fileList.size()) {
//			response.sendRedirect("tutorInform.me");
//		} else {
//			request.setAttribute("msg", "사진 등록 실패");
//			request.getRequestDispatcher("WEB-INF/views/common/errorPage.jsp").forward(request, response);
//		}
//	
//	}
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
