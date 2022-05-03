package csBoard.model.dao;

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
import static common.JDBCTemplate.close;

import csBoard.model.vo.CSBoardFile;
import csBoard.model.vo.PageInfo;
import csBoard.model.vo.Reply;
import csBoard.model.vo.RequestBoard;
import member.model.dao.MemberDAO;

public class CSBoardDAO {

	private Properties prop = null;
	
	public CSBoardDAO() {
		
		prop = new Properties();
		
		String fileName = MemberDAO.class.getResource("/sql/csboard-query.properties").getPath();
		
		try {
			prop.load(new FileReader(fileName));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} 
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
	
	public ArrayList<RequestBoard> selectList(Connection conn, PageInfo pi) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<RequestBoard> list = null;
		
		String query = prop.getProperty("selectList");
		
		int startRow = (pi.getCurrentPage() - 1) * pi.getBoardLimit() + 1;
		int endRow = startRow + pi.getBoardLimit() - 1;
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, startRow);
			pstmt.setInt(2, endRow);
			rset = pstmt.executeQuery();
			
			list = new ArrayList<RequestBoard>();
			while(rset.next()) {
				RequestBoard rb = new RequestBoard(rset.getInt("REQ_NO"),
												   rset.getString("REQ_CATEGORY"),
												   rset.getString("REQ_TITLE"),
												   rset.getString("REQ_CONTENT"),
												   rset.getString("MEMBER_EMAIL"),
												   rset.getString("MEMBER_NICKNAME"),
												   rset.getDate("REQ_CREATE_DATE"),
												   rset.getDate("REQ_MODIFY_DATE"),
												   rset.getInt("REQ_STATUS"),
												   rset.getString("REQ_REPLY_STATUS"),
												   rset.getString("REQ_CONTACT_EMAIL"));
				list.add(rb);
												   
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return list;
	}

	public RequestBoard selectBoard(Connection conn, int rNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		RequestBoard rb = null;
		
		String query = prop.getProperty("selectBoard");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, rNo);
			
			rset = pstmt.executeQuery();
			
			if (rset.next()) {
				rb = new RequestBoard(rset.getInt("REQ_NO"),
									   rset.getString("REQ_CATEGORY"),
									   rset.getString("REQ_TITLE"),
									   rset.getString("REQ_CONTENT"),
									   rset.getString("MEMBER_EMAIL"),
									   rset.getString("MEMBER_NICKNAME"),
									   rset.getDate("REQ_CREATE_DATE"),
									   rset.getDate("REQ_MODIFY_DATE"),
									   rset.getInt("REQ_STATUS"),
									   rset.getString("REQ_REPLY_STATUS"),
									   rset.getString("REQ_CONTACT_EMAIL"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return rb;
	}

	public int insertBoard(Connection conn, RequestBoard board) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("insertBoard");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, board.getReqCategory());
			pstmt.setString(2, board.getReqTitle());
			pstmt.setString(3, board.getReqContent());
			pstmt.setString(4, board.getContactEmail());
			pstmt.setString(5, board.getReqWriter());
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public int updateBoard(Connection conn, RequestBoard board) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("updateBoard");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, board.getReqCategory());
			pstmt.setString(2, board.getReqTitle());
			pstmt.setString(3, board.getReqContent());
			pstmt.setString(4, board.getContactEmail());
			pstmt.setInt(5, board.getReqNo());
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public int deleteBoard(Connection conn, int rNo) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("deleteBoard");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, rNo);
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public ArrayList<Reply> selectReplyList(Connection conn, int rNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<Reply> list = null;
		
		String query = prop.getProperty("selectReplyList");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, rNo);
			
			rset = pstmt.executeQuery();
			
			list = new ArrayList<Reply>();
			while(rset.next()) {
				list.add(new Reply(rset.getInt("REPLY_NO"), 
								   rset.getString("REPLY_BOARD_CONTENT"),
								   rset.getDate("REPLY_CREATE_DATE"),
								   rset.getDate("REPLY_MODIFY_DATE"),
								   rset.getInt("REQ_NO")));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return list;
	}

	public int insertReply(Connection conn, Reply r) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("insertReply");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, r.getReplyContent());
			pstmt.setInt(2, r.getReqNo());
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public int updateReplyStatus(Connection conn, int rNo) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("updateReplyStatus");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, rNo);
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public int updateReply(Connection conn, Reply r) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("updateReply");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, r.getReplyContent());
			pstmt.setInt(2, r.getReplyNo());
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public int deleteReply(Connection conn, Reply r) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("deleteReply");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, r.getReplyNo());
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public int insertBoardFile(Connection conn, ArrayList<CSBoardFile> fileList) {
		PreparedStatement pstmt = null;
		int result = 0; 
		
		String query = prop.getProperty("insertBoardFile");
		try {
			pstmt = conn.prepareStatement(query);

			for (int i = 0; i < fileList.size(); i++) {
				pstmt.setString(1, fileList.get(i).getFilePath());
				pstmt.setString(2, fileList.get(i).getOriginName());
				pstmt.setString(3, fileList.get(i).getChangeName());
				pstmt.setLong(4, fileList.get(i).getFileSize());
				
				result += pstmt.executeUpdate();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		return result;	
	}

	public ArrayList<CSBoardFile> selectFileList(Connection conn, int rNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<CSBoardFile> list = null;
		
		String query = prop.getProperty("selectFileList");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, "CS_REQ_BOARD");
			pstmt.setInt(2, rNo);
			rset = pstmt.executeQuery();
			
			list = new ArrayList<CSBoardFile>();
			while(rset.next()) {
				CSBoardFile f = new CSBoardFile();
				f.setFileNo(rset.getInt("FILE_NO"));
				f.setOriginName(rset.getString("ORIGIN_NAME"));
				f.setChangeName(rset.getString("CHANGE_NAME"));
				f.setFilePath(rset.getString("FILE_PATH"));
				f.setUploadDate(rset.getDate("FILE_UPLOAD"));
				list.add(f);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		return list;
	}

	public int deleteFile(Connection conn, int fNo) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("deleteFile");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, fNo);
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public int updateBoardFile(Connection conn, ArrayList<CSBoardFile> fileList, int reqNo) {
		PreparedStatement pstmt = null;
		int result = 0; 
		
		String query = prop.getProperty("updateBoardFile");
		try {
			pstmt = conn.prepareStatement(query);

			for (int i = 0; i < fileList.size(); i++) {
				pstmt.setString(1, fileList.get(i).getFilePath());
				pstmt.setString(2, fileList.get(i).getOriginName());
				pstmt.setString(3, fileList.get(i).getChangeName());
				pstmt.setLong(4, fileList.get(i).getFileSize());
				pstmt.setInt(5, reqNo);
				
				result += pstmt.executeUpdate();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		return result;	
	}
	
}
