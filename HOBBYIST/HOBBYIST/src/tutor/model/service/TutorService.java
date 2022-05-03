package tutor.model.service;

import static common.JDBCTemplate.close;
import static common.JDBCTemplate.commit;
import static common.JDBCTemplate.rollback;
import static common.JDBCTemplate.getConnection;

import java.sql.Connection;
import java.util.ArrayList;

import tutor.model.dao.TutorDAO;
import tutor.model.vo.Files;
import tutor.model.vo.Tutor;

public class TutorService {
	
	private TutorDAO tDAO = new TutorDAO();
	
	public int insertTutor(Tutor t, String memberEmail) {
		Connection conn = getConnection();
		
		int result1 = tDAO.insertTutor(conn, t, memberEmail);
		int result2 = 0;
		
		if(result1>0) {
			result2 = tDAO.updateGrade(conn, memberEmail);
			if(result2 > 0) {
				commit(conn);
			} else {
				rollback(conn);
			}
		} else {
			rollback(conn);
		}
		close(conn);
		
		return result1 + result2;
	}

	
	public Tutor selectTutor(String memberEmail) {
		Connection conn = getConnection();

		Tutor tutor = tDAO.selectTutor(conn, memberEmail);

		close(conn);

		return tutor;
	}

	public int updateTutor(Tutor tt, String memberEmail) {
		Connection conn = getConnection();
		
		int result = tDAO.updateTutor(conn, tt, memberEmail);
		
		if(result>0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);
//		
//		System.out.println("결과:"+result);
		return result;
		
		
	}

}
