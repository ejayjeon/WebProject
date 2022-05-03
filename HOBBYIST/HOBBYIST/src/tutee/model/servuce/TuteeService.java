package tutee.model.servuce;

import static common.JDBCTemplate.close;
import static common.JDBCTemplate.commit;
import static common.JDBCTemplate.rollback;
import static common.JDBCTemplate.getConnection;

import java.sql.Connection;
import java.util.ArrayList;

import hobbyistClass.model.vo.HClass;
import tutee.model.dao.TuteeDAO;
import tutee.model.vo.LikeClass;
import tutee.model.vo.TuteeClass;

public class TuteeService {
	
	private TuteeDAO tDAO = new TuteeDAO();

	public ArrayList<LikeClass> selectLikeClass(String memberEmail) {
		Connection conn = getConnection();
		
		ArrayList<LikeClass> list = tDAO.selectLikeClass(conn, memberEmail);
		
		close(conn);
		
		return list;
	}

	public int deleteLikeClass(String memberEmail, int likedCNo) {
		Connection conn = getConnection();
		
		int result = tDAO.deleteLikeClass(conn, memberEmail, likedCNo);
		
		if (result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}

	public int insertLikeClass(String memberEmail, int cNo) {
		Connection conn = getConnection();
		
		int result = tDAO.insertLikeClass(conn, memberEmail, cNo);
		
		if (result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}

	public int insertTuteeClass(TuteeClass tc) {
		Connection conn = getConnection();
		
		int result = tDAO.insertTuteeClass(conn, tc);
		
		close(conn);
		
		return result;
	}

	public ArrayList<HClass> selectTuteeClassList(int i, String memberEmail) {
		Connection conn = getConnection();
		
		int result = tDAO.updateTuteeClassStatus(conn);
		
		ArrayList<HClass> list = tDAO.selectTuteeClassList(conn, i, memberEmail);
		
		if(result > 0 && list != null) {
			commit(conn);
		} else {
			rollback(conn);
		}
	
		close(conn);		
		
		return list;
	}

	public ArrayList<TuteeClass> selectTCScheduleList(int i, String memberEmail) {
		Connection conn = getConnection();
		
		ArrayList<TuteeClass> list = tDAO.selectTCScheduleList(conn, i, memberEmail);
	
		close(conn);		
		
		return list;
	}
}	