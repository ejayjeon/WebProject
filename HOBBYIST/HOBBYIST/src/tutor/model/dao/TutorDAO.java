package tutor.model.dao;

import static common.JDBCTemplate.close;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Properties;

import member.model.vo.Member;
import tutor.model.vo.Files;
import tutor.model.vo.Tutor;

public class TutorDAO {
	private Properties prop = null;
	
	public TutorDAO() {
			
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
	
	
	// 튜터 정보 넘기기
	public int insertTutor(Connection conn, Tutor t, String memberEmail) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("insertTutor");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, t.getTutorReport());
			pstmt.setString(2, t.getTutorSns());
			pstmt.setString(3, t.getTutorImgPath());
			pstmt.setString(4, memberEmail);
			pstmt.setString(5, t.getTutorImgOriginName());
			pstmt.setString(6, t.getTutorImgChangeName());
			
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}


	public Tutor selectTutor(Connection conn, String memberEmail) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		Tutor t = null;

		String query = prop.getProperty("selectTutor");

		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, memberEmail);

			rset = pstmt.executeQuery();
			t = new Tutor();
			if (rset.next()) {
				t = new Tutor(rset.getInt("TUTOR_NO"),
							  rset.getDate("TUTOR_ENROLL_DATE"),
						      rset.getString("TUTOR_REPORT"), 
							  rset.getString("TUTOR_SNS"), 
							  rset.getString("TUTOR_IMG_PATH"), 
							  rset.getDate("TUTOR_IMG_UPDATE"), 
							  rset.getString("TUTOR_IMG_ORIGIN_NAME"), 
							  rset.getString("TUTOR_IMG_CHANGE_NAME"));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return t;
	}

	// 튜터 신청시 등급 변경
	public int updateGrade(Connection conn, String memberEmail) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("updateGrade");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, memberEmail);
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		return result;
	}

	// 튜터 정보 수정
	public int updateTutor(Connection conn, Tutor tt, String memberEmail) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("updateTutor");
//		UPDATE TUTOR SET TUTOR_REPORT = ? , TUTOR_SNS = ?,
//				TUTOR_IMG_PATH = ?, TUTOR_IMG_ORIGIN_NAME = ?, TUTOR_IMG_CHANGE_NAME = ?  WHERE MEMBER_EMAIL = ?
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, tt.getTutorReport());
			pstmt.setString(2, tt.getTutorSns());
			pstmt.setString(3, tt.getTutorImgPath());
			pstmt.setString(4, tt.getTutorImgOriginName());
			pstmt.setString(5, tt.getTutorImgChangeName());
			pstmt.setString(6, memberEmail);
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		System.out.println("dao결과:"+result);
		return result;
	}

}
