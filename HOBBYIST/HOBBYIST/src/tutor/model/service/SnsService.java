package tutor.model.service;

import static common.JDBCTemplate.close;
import static common.JDBCTemplate.commit;
import static common.JDBCTemplate.getConnection;
import static common.JDBCTemplate.rollback;

import java.sql.Connection;

import tutor.model.dao.SnsDAO;
import tutor.model.vo.Sns;

public class SnsService {
	
	private SnsDAO sDAO = new SnsDAO();

	public int insertSns(Sns sns) {
Connection conn = getConnection();
		
		int result = sDAO.insertSns(conn, sns);
		
		if(result>0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}
	

}
