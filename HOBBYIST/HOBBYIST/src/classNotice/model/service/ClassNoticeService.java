package classNotice.model.service;

import java.sql.Connection;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;

import classNotice.model.dao.ClassNoticeDAO;
import classNotice.model.vo.ClassNotice;

import static common.JDBCTemplate.getConnection;
import static common.JDBCTemplate.close;
import static common.JDBCTemplate.commit;
import static common.JDBCTemplate.rollback;

public class ClassNoticeService {
	
	private ClassNoticeDAO nDAO = new ClassNoticeDAO();

	public ArrayList<ClassNotice> selectClassList() {
		Connection conn = getConnection();	
		
		ArrayList<ClassNotice> list = nDAO.selecClasstList(conn);
		
		close(conn);
		
		return list;
	}

	public int insertClassNotice(ClassNotice n) {
		Connection conn = getConnection();
		
		int result = nDAO.insertClassNotice(conn, n);
		if (result > 0) {
			
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}

	public ClassNotice selectClassNotice(int classBoardNo) {
		Connection conn = getConnection();
		
		int result = nDAO.updateClassNoticeCount(conn, classBoardNo); // 조회수 먼저 올려주기
		
		ClassNotice classBoard = null;
		if (result > 0) {
			
			classBoard = nDAO.selectClassNotice(conn, classBoardNo);
			if (classBoard != null) {
				commit(conn);
			} else {
				rollback(conn);
			}
		}
		
		
		close(conn);
		
		return classBoard;
	}

	public int updateClassNotice(ClassNotice classBoard) {
		Connection conn = getConnection();
		
		int result = nDAO.updateClassNotice(conn, classBoard);
		if (result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}

	public int deleteClassNotice(int no) {
		Connection conn = getConnection();
		
		int result = nDAO.deleteClassNotice(conn, no);
		if (result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		return result;
	}
	public int getListCount() {
		Connection conn = getConnection();
		
		int listCount = nDAO.getListCount(conn);
		
		close(conn);
		
		return listCount;
	}

}
