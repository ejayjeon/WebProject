package tutee.controller;

import java.io.File;
import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import com.oreilly.servlet.MultipartRequest;

import common.MyFileRenamePolicy;
import member.model.service.MemberService;
import member.model.vo.Member;
import tutor.model.service.TutorService;
import tutor.model.vo.Tutor;

/**
 * Servlet implementation class InsertTutorServlet
 */
@WebServlet("/insertTutee.me")
public class InsertTutorServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InsertTutorServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 튜터 신청페이지에서 받아온 값 넘기기
		request.setCharacterEncoding("UTF-8");
		
		if(ServletFileUpload.isMultipartContent(request)) {
		
		int maxSize = 1024 * 1024 * 10;
		String root = request.getSession().getServletContext().getRealPath("/");
		String savePath = root + "uploadFiles/";
		System.out.println("r"+root);
		File f = new File(savePath);
		if(!f.exists()) {
			f.mkdirs();
		}
		
		System.out.println("경로:"+savePath);
		
		MultipartRequest multiRequest = new MultipartRequest(request, savePath, maxSize, "UTF-8", new MyFileRenamePolicy());
		
		String saveFiles = null; // 파일의 바뀐 이름 저장
		String originFiles = null;	// 파일의 원래 이름 저장
		
		Enumeration<String> files = multiRequest.getFileNames();
		while(files.hasMoreElements()) {
			String name = files.nextElement();
			System.out.println("name:"+name);
//			System.out.println("files.nextElement():"+files.nextElement());	// 안 지우면 hastmap 에러 뜸
			
			if(multiRequest.getFilesystemName(name)!=null) {	// name=null이면 사진이 없는 것
				saveFiles = multiRequest.getFilesystemName(name);	
				originFiles = multiRequest.getOriginalFileName(name);
				
				System.out.println("name:"+name);
			}
		}
		
		System.out.println("saveFiles:"+saveFiles);
		System.out.println("originFiles:"+originFiles);
		
		String myReport = multiRequest.getParameter("myReport");
		String mySns = multiRequest.getParameter("mySns");
		String memberEmail = ((Member)request.getSession().getAttribute("loginUser")).getMemberEmail();
		
		System.out.println("sns"+mySns);
		System.out.println("report"+myReport);
		
		Tutor t = new Tutor(0, null, myReport, mySns, savePath, null, originFiles, saveFiles);
		int result = new TutorService().insertTutor(t, memberEmail);
		
		System.out.println("결과"+result);
		
		if(result > 1) {
			// 성공시 등급 B로 변경되어야
			Tutor tutor = new TutorService().selectTutor(memberEmail);
			request.getSession().setAttribute("tutor", tutor);
			Member loginUser = new MemberService().selectMember(memberEmail);
			request.getSession().setAttribute("loginUser", loginUser);
			
			request.getRequestDispatcher("WEB-INF/views/tutor/tutorInform.jsp").forward(request, response);
		} else {
			request.setAttribute("msg", "튜터 신청에 실패하였습니다");
			request.getRequestDispatcher("WEB-INF/views/common/errorPage.jsp").forward(request, response);
		}
		
		
	}
		
	}
		
		
//		HttpSession session = request.getSession();
//		Member loginUser = (Member)session.getAttribute("loginUser");
//		
//		String Sns = request.getParameter("tSns");
//		String Report = request.getParameter("tReport");
//		
//		Tutor tutor = new Tutor(0, null, null, Report, Sns, null, null, null, null);
//		int result = new TutorService().insertTutor(tutor);
//		
//		if(result > 0) {
	
//			session.setAttribute(name, value);
//			response.sendRedirect(request.getContextPath());
//		} else {
//			request.setAttribute("msg", "튜터 신청에 실패했습니다.");
//			request.getRequestDispatcher("WEB-INF/views/common/errorPage.jsp").forward(request, response);
//		}
//	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
