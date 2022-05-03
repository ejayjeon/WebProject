package hobbyistClass.model.service;

import static common.JDBCTemplate.getConnection;
import static common.JDBCTemplate.*;

import java.sql.Connection;
import java.util.ArrayList;

import hobbyistClass.model.dao.HClassDAO;
import hobbyistClass.model.vo.ApvPageInfo;
import hobbyistClass.model.vo.HClass;
import hobbyistClass.model.vo.HClassFile;
import hobbyistClass.model.vo.HClassSchedule;
import tutor.model.vo.Tutor;

public class HClassService {

	private HClassDAO hDAO = new HClassDAO();
	
	public int getListCount() {
		Connection conn = getConnection();
		
		int listCount = hDAO.getListCount(conn);
		
		close(conn);
		
		return listCount;
	}
	
	public ArrayList<HClass> selectApvList(ApvPageInfo pi){
		Connection conn = getConnection();
		
		ArrayList<HClass> list = hDAO.selectApvList(conn, pi);
		
		close(conn);
		
		return list;
	}

	public ArrayList<HClass> selectApvList(int classNo) {
		Connection conn = getConnection();
		
		ArrayList<HClass> apvList = hDAO.selectApvList(conn, classNo);
		
		close(conn);
		
		return apvList;
	}
	
	public ArrayList<HClass> selectList() {
		Connection conn = getConnection();

		ArrayList<HClass> list = hDAO.selectList(conn);

		close(conn);

		return list;
	}

	public int confirmClass(int classNo) {
		Connection conn = getConnection();
		
		int result = hDAO.confirmClass(conn, classNo);
		
		if(result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);

		return result;
	}
	
	public int rejectClass(int classNo) {
		Connection conn = getConnection();
		
		int result = hDAO.rejectClass(conn, classNo);
		
		if(result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);
		
		return result;

	}

	public ArrayList<HClass> searchClass(String searchWord) {
		Connection conn = getConnection();
		
		ArrayList<HClass> searchList = hDAO.searchClass(conn, searchWord);
		
		close(conn);
		
		return searchList;
	}


	public ArrayList<HClass> beforeApvClass() {
		Connection conn = getConnection();
		
		ArrayList<HClass> beforeApvClass = hDAO.beforeApvClass(conn);
		
		close(conn);
		
		return beforeApvClass;
	}


	public int insertThumbnail(HClass h, ArrayList<HClassFile> fileList, ArrayList<HClassSchedule> scheduleList) {
		Connection conn = getConnection();

		int result1 = hDAO.insertClass(conn, h);
		int result2 = hDAO.insertFile(conn, fileList);
		int result3 = hDAO.insertClassSchdule(conn, scheduleList); // 클래스스케줄 테이블에 insert
		
		if (result1 > 0 && result2 >= fileList.size() && result3 >= scheduleList.size()) {			
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);

		return result1 + result2 + result3;
	}

	public int updateHClass(int bId, int cateId, String title, String content) {
		Connection conn = getConnection();

		int result = hDAO.updateHClass(conn, bId, cateId, title, content);
		if(result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);

		return result;
	}
	
	public ArrayList<HClass> selectClassList() {
		Connection conn = getConnection();
		
		int result = hDAO.updateClassStatus(conn); // list 가져오기 전 class_status를 강의 시작일자와 종료일자에 맞게 변경
		
		ArrayList<HClass> list = hDAO.selectClassList(conn);
	
		if(result > 0 && list != null) {

			commit(conn);
		} else {
			rollback(conn);
		}
	
		close(conn);
		
		return list;
	}
	
	// 클래스 리스트 조회할때 필요한 Thumbnail 리스트
	public ArrayList<HClassFile> selectFileList() { 
		Connection conn = getConnection();
		
		ArrayList<HClassFile> list = hDAO.selectFileList(conn);
	
		close(conn);
		
		return list;
	}

	public HClass selectClass(int cNo) {
		Connection conn = getConnection();
		
		HClass c = hDAO.selectClass(conn, cNo);
		
		close(conn);
		
		return c;
	}

	public ArrayList<HClassFile> selectDetailFileList(int cNo) {
		Connection conn = getConnection();
		
		ArrayList<HClassFile> list = hDAO.selectDetailFileList(conn, cNo);
	
		close(conn);
		
		return list;

	}

	public Tutor selectClassTutor(int tutorNo) {
		Connection conn = getConnection();
		
		Tutor tutor = hDAO.selectClassTutor(conn, tutorNo);
		
		close(conn);
		
		return tutor;
	}

	public ArrayList<HClassSchedule> selectScheduleList(int cNo) {
		Connection conn = getConnection();
		
		ArrayList<HClassSchedule> list = hDAO.selectScheduleList(conn, cNo);
		
		close(conn);
		
		return list;
	}

	public ArrayList selectTList(int i) { 
		Connection conn = getConnection();

		ArrayList list  = null;
			list = hDAO.selecBList(conn);
	
		System.out.println("list "+list);
		close(conn); 

		return list;
	}

	public ArrayList<HClass> selectAPVNList() {
		Connection conn = getConnection();

		ArrayList<HClass> list = hDAO.selectAPVNList(conn);

		close(conn);

		return list;
	}
	
	public ArrayList<HClass> selectClearList() {
		Connection conn = getConnection();

		ArrayList<HClass> list = hDAO.selectClearList(conn);

		close(conn);

		return list;
	}

	public ArrayList<HClass> selectBList() {
		Connection conn = getConnection();

		ArrayList<HClass> list = hDAO.selectBList(conn);

		close(conn);

		return list;
	}

	public HClass selectClassOpen(int bId) {
		Connection conn = getConnection();
		
		HClass c = hDAO.selectClassOpen(conn, bId);
		
		close(conn);
		
		return c;
	}
	
	
	public ArrayList<HClassFile> selectOpenClassFileList(int bId) {
		Connection conn = getConnection();
		ArrayList<HClassFile> list = hDAO.selectOpenClassFileList(bId, conn);
		close(conn);
		return list;
	}

	public int deleteOpenClass(int bId) {
		Connection conn = getConnection();
		
		int result = hDAO.deleteOpenClass(conn, bId);
		if(result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);
		
		return result;
	}
}