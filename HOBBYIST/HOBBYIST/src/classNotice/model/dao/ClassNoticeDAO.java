package classNotice.model.dao;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Properties;

import classNotice.model.vo.ClassNotice;

import static common.JDBCTemplate.close;

public class ClassNoticeDAO {

	private Properties prop = null;

	public ClassNoticeDAO() {
		prop = new Properties();

		String fileName = ClassNoticeDAO.class.getResource("/sql/notice-query.properties").getPath();

		try {
			prop.load(new FileReader(fileName));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public ArrayList<ClassNotice> selecClasstList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<ClassNotice> list = null;

		String query = prop.getProperty("selectClassList");

		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);

			list = new ArrayList<ClassNotice>();
			while (rset.next()) {
				list.add(new ClassNotice(rset.getInt("CLASS_BOARD_NO"), rset.getString("CLASS_BOARD_NAME"),
										rset.getString("CLASS_BOARD_CONTENT"), rset.getInt("CLASS_BOARD_VIEWS"),
										rset.getDate("CLASS_BOARD_DATE"), rset.getInt("CLASS_BOARD_STATUS"), rset.getInt("CLASS_NO"),
										rset.getString("CLASS_BOARD_WRITER")));			
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}
		return list;
	}

	public int insertClassNotice(Connection conn, ClassNotice n) {
		PreparedStatement pstmt = null;
		int result = 0;

		String query = prop.getProperty("insertClassNotice");

		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, n.getClassBoardName());
			pstmt.setString(2, n.getClassBoardContent());
			pstmt.setString(3, n.getClassBoardWriter());	
			result = pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}

		return result;
	}

	public int updateClassNoticeCount(Connection conn, int classBoardNo) {
		PreparedStatement pstmt = null;
		int result = 0;

		String query = prop.getProperty("updateClassNoticeCount");
		// updateCount=UPDATE NOTICE SET NOTICE_COUNT = NOTICE_COUNT + 1 WHERE NOTICE_NO
		// = ?

		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, classBoardNo);

			result = pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}

		return result;
	}

	public ClassNotice selectClassNotice(Connection conn, int classBoardNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ClassNotice n = null;

		String query = prop.getProperty("selectClasstNotice");
		
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, classBoardNo);

			rset = pstmt.executeQuery();

			if (rset.next()) {

				n = new ClassNotice(rset.getInt("CLASS_BOARD_NO"), rset.getString("CLASS_BOARD_NAME"),
						rset.getString("CLASS_BOARD_CONTENT"), rset.getInt("CLASS_BOARD_VIEWS"),
						rset.getDate("CLASS_BOARD_DATE"), rset.getInt("CLASS_BOARD_STATUS"), rset.getInt("CLASS_NO"),
						rset.getString("CLASS_BOARD_WRITER"));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		return n;
	}

	public int updateClassNotice(Connection conn, ClassNotice n) {
		PreparedStatement pstmt = null;
		int result = 0;

		String query = prop.getProperty("updateClassNotice");


		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, n.getClassBoardName());
			pstmt.setString(2, n.getClassBoardContent());
			pstmt.setDate(3, n.getClassBoardDate());
			pstmt.setInt(4, n.getClassBoardNo());

			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}

		return result;
	}

	public int deleteClassNotice(Connection conn, int no) {
		PreparedStatement pstmt = null;
		int result = 0;

		String query = prop.getProperty("deleteClassNotice");

		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, no);

			result = pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}

		return result;
	}

	public int getListCount(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		int listCount = 0;

		String query = prop.getProperty("getListCount");
	
		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);

			if (rset.next()) {
				listCount = rset.getInt("COUNT(*)");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}

		return listCount;
	}
	

}
