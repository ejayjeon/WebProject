package hobbyistClass.controller;

import java.io.File;
import java.io.IOException;
import java.sql.Date;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.GregorianCalendar;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.plaf.multi.MultiOptionPaneUI;

import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import com.oreilly.servlet.MultipartRequest;


import common.MyFileRenamePolicy;
import hobbyistClass.model.service.HClassService;
import hobbyistClass.model.vo.HClass;
import hobbyistClass.model.vo.HClassFile;
import hobbyistClass.model.vo.HClassSchedule;
import member.model.vo.Member;
import tutor.model.vo.Tutor;


@WebServlet("/classopen.th")
public class ThumbnailInsertServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ThumbnailInsertServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		// form태그의 속성으로 encType="multipart/form-data" 설정하면 위와 같이 String으로 가져왔을때 인지하지 못함 -> MultipartRequest클래스 객체 생성하여 받아줘야 함
		
		// enctype(인코딩타입)이 multipart/form-date로 전송되었는지 확인 
		if (ServletFileUpload.isMultipartContent(request)) {
			
			// 파일 업로드 처리를 위한 변수 설정
			int maxSize = 1024*1024*10; // 10Mbyte
			String root = request.getSession().getServletContext().getRealPath("/"); 
			String savePath = root + "uploadFiles/";
			
			File f = new File(savePath); // 직접 폴더 생성하지 않고 File객체를 통해 생성
			if (!f.exists()) { // 폴더(경로)가 존재하지 않는다면
				f.mkdirs(); // 디렉토리 생성
			}

			MultipartRequest multiRequest = new MultipartRequest(request, savePath, maxSize, "UTF-8", new MyFileRenamePolicy()); // 매개변수 있는 생성자로만 생성 가능
			//매개변수 -> request, saveDirectory : 어디에 저장할 건지,  maxPostSize : 최대 크기, encoding : 인코딩타입, policy : 파일 이름 바꾸는 규약    
			
			ArrayList<String> saveFiles = new ArrayList<String>();		// 파일의 바뀐 이름을 저장할 ArrayList
			ArrayList<String> originFiles = new ArrayList<String>();	// 파일의 원래 이름을 저장할 ArryaList
			ArrayList<String> fileTableName = new ArrayList<String>();
			
			// multiRequest.getFileNames() : request.getParameter()처럼 form에서 넘어온  file정보 가져옴, 전송 순서의 역순으로 가져옴 thumbnailImg4, ..3, ..2, ..1
			Enumeration<String> filess = multiRequest.getFileNames(); // multiRequest.getFileNames()의 반환값 -> Enumeration : iterator와 기능이 같음 
			while(filess.hasMoreElements()) {
				
				String name = filess.nextElement(); // files.nextElement() 출력하면 thumbnailImg4, ..3, ..2, ..1 나옴
				
				if (multiRequest.getFilesystemName(name) != null) { // rename이 된 파일명(바뀐 파일명)을 가져옴, 사진이 들어가있지 않을때 null일 수도 있음, 사진 들어가있는 것만 가져오기 (!= null)
					saveFiles.add(multiRequest.getFilesystemName(name));
					originFiles.add(multiRequest.getOriginalFileName(name));
				}
			}
			
			String title = multiRequest.getParameter("title");
			String content = multiRequest.getParameter("content");
			String writer = ((Member)request.getSession().getAttribute("loginUser")).getMemberEmail();
			String categoryname = multiRequest.getParameter("category");
			int min = Integer.parseInt(multiRequest.getParameter("minpeople"));
			int max = Integer.parseInt(multiRequest.getParameter("maxpeople"));
			int fee = Integer.parseInt(multiRequest.getParameter("fee"));
			
			DecimalFormat form = new DecimalFormat("#.#");
			double time = Double.parseDouble(multiRequest.getParameter("classtime"));
			
			System.out.println("값 :"+multiRequest.getParameter("classtime"));
			System.out.println("time"+time);
			System.out.println("content"+content);
			System.out.println("categoryname"+categoryname);
			System.out.println("fee"+fee);
			
			String date1 = multiRequest.getParameter("startdate"); // date String값으로 넘어오는데 년도-월-일 이렇게 '-'로 구분돼서 넘어옴
			String date2 = multiRequest.getParameter("enddate");
				
			System.out.println("date1 : "+ date1);
			System.out.println("date2 : "+ date2);
			Date fromdate = null;
			Date toDate = null; 
			
			if(date1.equals("")) { // 관리자가 date를 입력하지 않았을 경우 -> 오늘날짜로 넣음
				fromdate = new Date(new GregorianCalendar().getTimeInMillis());
			} else {
				String[] splitDate = date1.split("-");
				int year = Integer.parseInt(splitDate[0]);
				int month = Integer.parseInt(splitDate[1]) - 1;
				int day = Integer.parseInt(splitDate[2]);
			
				fromdate = new Date(new GregorianCalendar(year, month, day).getTimeInMillis());
			}
			if(date2.equals("")) { // 관리자가 date를 입력하지 않았을 경우 -> 오늘날짜로 넣음
				toDate = new Date(new GregorianCalendar().getTimeInMillis());
			} else {
				String[] splitDate2 = date2.split("-");
				int year = Integer.parseInt(splitDate2[0]);
				int month = Integer.parseInt(splitDate2[1]) - 1;
				int day = Integer.parseInt(splitDate2[2]);
			
				toDate = new Date(new GregorianCalendar(year, month, day).getTimeInMillis());
			}
			
			int tutorNo = ((Tutor)request.getSession().getAttribute("tutor")).getTutorNo();
			
			HClass h = new HClass(0, title, null, toDate, null, "N", "A", time, min, max, content, fee, tutorNo, fromdate,  categoryname);
			
			ArrayList<HClassFile> fileList = new ArrayList<HClassFile>();
			for(int i = originFiles.size() - 1; i >= 0; i--) { // 역순으로 파일 저장되어 있기 때문에 거기서 또 역순으로 저장하기
				HClassFile fi = new HClassFile();
				
				fi.setFilePath(savePath);
				fi.setOriginName(originFiles.get(i));
				fi.setChangeName(saveFiles.get(i));				
				if (i == originFiles.size() - 1) { // 맨 끝에 저장된 사진이라면(맨 처음 입력받았던 썸네일 사진이라면)
					fi.setFileThumbYn("Y"); // fileLevel이 0 이면 썸네일로 약속
				} else {
					fi.setFileThumbYn("N");
				}
				
				fileList.add(fi);
			}
			
			// 스케줄 등록 추가
			String schedule = multiRequest.getParameter("schedule");
			
			String[] split1 = schedule.split(" / ");
			
			ArrayList<HClassSchedule> scheduleList = new ArrayList<HClassSchedule>();
			for (String s : split1) {
				
				String[] split2 = s.split("-");
				int day = 0;
				switch (split2[0]) {
					case "일" : day = 0; break;
					case "월" : day = 1; break;
					case "화" : day = 2; break;
					case "수" : day = 3; break;
					case "목" : day = 4; break;
					case "금" : day = 5; break;
					case "토" : day = 6; break;
				}
				HClassSchedule cs = new HClassSchedule(0, day, split2[1], 0);
				scheduleList.add(cs);
			}
			
			
			int result = new HClassService().insertThumbnail(h, fileList, scheduleList); // 스케줄리스트도 보냄
		
			if (result >= 1+fileList.size()+scheduleList.size()) { // 게시판
				response.sendRedirect("tutorMyPage.tt");
			} else {
				request.setAttribute("msg", "클래스 신청 저장 실패");
				request.getRequestDispatcher("WEB-INF/views/common/errorPage.jsp").forward(request, response);
			
				for (int i =0; i < saveFiles.size(); i++) {
					File fail = new File(savePath + saveFiles.get(i));
					fail.delete(); // 만약 게시판이나 사진들 중 하나라도 insert가 안된게 있다면 저장된 파일들 다 삭제
				}
			}
		}
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
		doGet(request, response);
	}

}