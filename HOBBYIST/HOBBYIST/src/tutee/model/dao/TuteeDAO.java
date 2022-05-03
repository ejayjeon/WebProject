package tutee.model.dao;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Properties;

import hobbyistClass.model.vo.HClass;

import static common.JDBCTemplate.close;
import tutee.model.vo.LikeClass;
import tutee.model.vo.TuteeClass;
import tutor.model.dao.TutorDAO;

public class TuteeDAO {
	private Properties prop = null;
	
	public TuteeDAO() {
			
			prop = new Properties();
			
			String fileName = TutorDAO.class.getResource("/sql/tutee-query.properties").getPath();
			
			try {
				prop.load(new FileReader(fileName));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	
	
	public ArrayList<LikeClass> selectLikeClass(Connection conn, String memberEmail) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<LikeClass> list = null;
		
		String query = prop.getProperty("selectLikeClass");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, memberEmail);
			
			rset = pstmt.executeQuery();
			
			list = new ArrayList<LikeClass>();
			while(rset.next()) {
				list.add(new LikeClass(rset.getInt("CLASS_NO"),
									   rset.getString("MEMBER_EMAIL"),
									   rset.getDate("CLIP_DATE")));
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return list;
	}


	public int deleteLikeClass(Connection conn, String memberEmail, int likedCNo) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("deleteLikeClass");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, memberEmail);
			pstmt.setInt(2, likedCNo);
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}


	public int insertLikeClass(Connection conn, String memberEmail, int cNo) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("insertLikeClass");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, cNo);
			pstmt.setString(2, memberEmail);
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}


	public int insertTuteeClass(Connection conn, TuteeClass tc) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("insertTuteeClass");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setDate(1, tc.getTueeClassRevDate());
			pstmt.setInt(2, tc.getClassNo());
			pstmt.setString(3, tc.getMemberEmail());
			pstmt.setString(4, tc.getTueeClassRevTime());
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}


	public int updateTuteeClassStatus(Connection conn) {
		CallableStatement cstmt = null; // CallableStatement : 프로시저 호출을 위해 필요
		int result = 0;
		
		String query = prop.getProperty("updateTuteeClassStatus");
		
		try {
			cstmt = conn.prepareCall(query);
			result = cstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(cstmt);
		}
		
		return result;
	}


	public ArrayList<HClass> selectTuteeClassList(Connection conn, int i, String memberEmail) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<HClass> list = null;
		
		String query = null; 
				
		if (i == 0) {
			query = prop.getProperty("selectTClassBeforeList");
		} else {
			query = prop.getProperty("selectTClassAfterList");
		}
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, memberEmail);
			rset = pstmt.executeQuery();
			
			list = new ArrayList<HClass>();
			while(rset.next()) {
				HClass hc = new HClass();
				hc.setClassNo(rset.getInt("CLASS_NO"));
				hc.setClassName(rset.getString("CLASS_NAME"));
				hc.setClassStatus(rset.getString("CLASS_STATUS"));
				
				list.add(hc);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return list;
	}


	public ArrayList<TuteeClass> selectTCScheduleList(Connection conn, int i, String memberEmail) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<TuteeClass> list = null;
		
		String query = null; 
				
		if (i == 0) {
			query = prop.getProperty("selectTcBeforeList");
		} else {
			query = prop.getProperty("selectTcAfterList");
		}
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, memberEmail);
			rset = pstmt.executeQuery();
			
			list = new ArrayList<TuteeClass>();
			while(rset.next()) {
				TuteeClass tc = new TuteeClass();
				if (i == 0) {
					tc.setClassNo(rset.getInt("CLASS_NO"));
					tc.setTueeClassRevDate(rset.getDate("REV_DATE"));
				} else {
					tc.setClassNo(rset.getInt("CLASS_NO"));
					tc.setTuteeClassFinishDate(rset.getDate("FINISH_DATE"));
				}
				
				list.add(tc);
			}			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return list;
	}

}
