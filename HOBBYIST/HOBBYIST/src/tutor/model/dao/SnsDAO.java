package tutor.model.dao;

import static common.JDBCTemplate.close;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

import tutor.model.vo.Sns;

public class SnsDAO {
	private Connection conn = null;
	private Properties prop = null;
	
	public SnsDAO() {
			
			prop = new Properties();
			
			String fileName = TutorDAO.class.getResource("/sql/tutor-query.properties").getPath();
			
			try {
				prop.load(new FileReader(fileName));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	public int insertSns(Connection conn, Sns sns) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("insertSns");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, sns.getFacebook());
			pstmt.setString(2, sns.getTwitter());
			pstmt.setString(3, sns.getYoutube());
			pstmt.setString(4, sns.getInstagram());
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}
	
	

}
