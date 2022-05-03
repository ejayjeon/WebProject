package csBoard.controller;

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
import csBoard.model.service.CSBoardService;
import csBoard.model.vo.CSBoardFile;
import csBoard.model.vo.RequestBoard;

/**
 * Servlet implementation class CSBoardUpdateServlet
 */
@WebServlet("/updateBoard.cs")
public class CSBoardUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CSBoardUpdateServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if (ServletFileUpload.isMultipartContent(request)) {
			
			// 파일 업로드 처리를 위한 변수 설정
			int maxSize = 1024*1024*10; // 10Mbyte로 제한
			String root = request.getSession().getServletContext().getRealPath("/"); // 웹 서버 컨테이너 경로 추출 : WebContent
			String savePath = root + "uploadFiles/";
			
			File f = new File(savePath); // 직접 폴더 생성하지 않고 File객체를 통해 생성, java.io.File
			if (!f.exists()) { // 폴더(경로)가 존재하지 않는다면
				f.mkdirs(); // 디렉토리 생성
			}
			
			// MultipartRequest : 파일 형식 가져오려면 필요한 클래스 <- 이 클래스를 쓰려면 jar라이브러리 필요
			// cos.jar 라이브러리 먼저 lib폴더에 복사 후  -> MultipartRequest클래스 import 가능
			MultipartRequest multiRequest = new MultipartRequest(request, savePath, maxSize, "UTF-8", new MyFileRenamePolicy()); // 매개변수 있는 생성자로만 생성 가능
			//매개변수 -> request, saveDirectory : 어디에 저장할 건지,  maxPostSize : 최대 크기, encoding : 인코딩타입, policy : 파일 이름 바꾸는 규약    
			
			ArrayList<String> saveFiles = new ArrayList<String>();		// 파일의 바뀐 이름을 저장할 ArrayList
			ArrayList<String> originFiles = new ArrayList<String>();	// 파일의 원래 이름을 저장할 ArryaList
			ArrayList<Long> fileSizes = new ArrayList<Long>();
			
			// multiRequest.getFileNames() : request.getParameter()처럼 form에서 넘어온  file정보 가져옴, 전송 순서의 역순으로 가져옴 thumbnailImg4, ..3, ..2, ..1
			Enumeration<String> files = multiRequest.getFileNames(); // multiRequest.getFileNames()의 반환값 -> Enumeration : iterator와 기능이 같음 
			while(files.hasMoreElements()) {
				String name = files.nextElement(); // files.nextElement() 출력하면 원래 파일명 출력됨
				System.out.println(name);
				if (multiRequest.getFilesystemName(name) != null) { // rename이 된 파일명(바뀐 파일명)을 가져옴, 파일이 들어가있지 않을때 null일 수도 있음, 파일 들어가있는 것만 가져오기 (!= null)
					saveFiles.add(multiRequest.getFilesystemName(name));
					originFiles.add(multiRequest.getOriginalFileName(name));
					
					long fileSize = multiRequest.getFile(name).length(); // 파일의 fileSize 얻음
					fileSizes.add(fileSize); 
					
				}
			}
			
			// request가 아닌 MultipartRequest의 getParameter메소드 사용
			String title = multiRequest.getParameter("title");
			String category = multiRequest.getParameter("category");
			String content = multiRequest.getParameter("content");
			String contactEmail = multiRequest.getParameter("contactEmail");
			int rNo = Integer.parseInt(multiRequest.getParameter("rNo"));
			
			RequestBoard board = new RequestBoard();
			board.setReqTitle(title);
			board.setReqCategory(category);
			board.setReqContent(content);
			board.setContactEmail(contactEmail);
			board.setReqNo(rNo);
			
			ArrayList<CSBoardFile> fileList = new ArrayList<CSBoardFile>();
			for(int i = 0; i < originFiles.size(); i++) {
				CSBoardFile cf = new CSBoardFile();
				cf.setFilePath(savePath);
				cf.setOriginName(originFiles.get(i));
				cf.setChangeName(saveFiles.get(i));
				cf.setFileSize(fileSizes.get(i));
				
				fileList.add(cf);
			}
			
			int result = new CSBoardService().updateBoard(board, fileList);
			
			if (result >= 1+fileList.size()) {
				response.sendRedirect("detail.cs?rNo=" + rNo);
			} else {
				request.setAttribute("msg", "1:1문의글 수정 실패");
				request.getRequestDispatcher("WEB-INF/views/common/errorPage.jsp").forward(request, response);
				
				for (int i =0; i < saveFiles.size(); i++) {
					File fail = new File(savePath + saveFiles.get(i));
					fail.delete(); // 만약 게시판이나 사진들 중 하나라도 insert가 안된게 있다면 저장된 파일들 다 삭제
				}			
			
			}
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
