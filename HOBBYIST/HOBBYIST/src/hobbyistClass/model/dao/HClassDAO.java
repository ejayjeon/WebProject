package hobbyistClass.model.dao;

import static common.JDBCTemplate.close;

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

import hobbyistClass.model.vo.ApvPageInfo;
import hobbyistClass.model.vo.HClass;
import hobbyistClass.model.vo.HClassFile;
import hobbyistClass.model.vo.HClassSchedule;
import tutor.model.vo.Tutor;

public class HClassDAO {

	private Properties prop = null;
	
	public HClassDAO() {
		
		prop = new Properties();
		String fileName = HClassDAO.class.getResource("/sql/class-query.properties").getPath();
			
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
		
		String query = prop.getProperty("countApvList");
		
		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);
			
			if(rset.next()) {
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
	
	public ArrayList<HClass> selectApvList(Connection conn, ApvPageInfo pi) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<HClass> apvList = null;
		
		String query = prop.getProperty("selectApvList");
		
		int startRow = (pi.getCurrentPage() -1) * pi.getListLimit() + 1;
		int endRow = startRow + pi.getListLimit() - 1;
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, startRow);
			pstmt.setInt(2, endRow);
			rset = pstmt.executeQuery();
			
			apvList = new ArrayList<HClass>();

			while(rset.next()) {
								
				apvList.add(new HClass(rset.getDate("CLASS_ENROLL_DATE"), rset.getInt("CLASS_NO"), rset.getInt("TUTOR_NO"),
									rset.getString("CATEGORY_NAME"), rset.getString("CLASS_NAME"), rset.getString("CLASS_APV_YN"), 
									rset.getDate("CLASS_APV_DATE")));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}

		return apvList;
	}

	public ArrayList<HClass> selectList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<HClass> list = null;

		String query = prop.getProperty("selectList");

		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);

			list = new ArrayList<HClass>();
			while (rset.next()) {
				list.add(new HClass(rset.getInt("CLASS_NO"), rset.getString("CLASS_NAME"),
						rset.getDate("CLASS_ENROLL_DATE"), rset.getDate("CLASS_END_DATE"),
						rset.getDate("CLASS_APV_DATE"), rset.getString("CLASS_APV_YN"), rset.getString("CLASS_STATUS"),
						rset.getDouble("CLASS_TIME"), rset.getInt("CLASS_TUTEE_MIN"), rset.getInt("CLASS_TUTEE_MAX"),
						rset.getString("CLASS_CONTENT"), rset.getInt("CLASS_FEE"), rset.getInt("TUTOR_NO"),
						rset.getDate("CLASS_START_DATE"), rset.getString("CATEGORY_NAME")));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}

		return list;
	}

	public ArrayList<HClass> selectApvList(Connection conn, int classNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<HClass> apvList = null;
		
		String query = prop.getProperty("selectClass");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, classNo);
			
			rset = pstmt.executeQuery();
			
			apvList = new ArrayList<HClass>();
			if(rset.next()) {
				apvList.add(new HClass(rset.getInt("CLASS_NO"), rset.getString("CLASS_NAME"), rset.getDate("CLASS_ENROLL_DATE"),
									rset.getDate("CLASS_END_DATE"), rset.getDate("CLASS_APV_DATE"), rset.getString("CLASS_APV_YN"),
									rset.getString("CLASS_STATUS"), rset.getDouble("CLASS_TIME"), rset.getInt("CLASS_TUTEE_MIN"),
									rset.getInt("CLASS_TUTEE_MAX"), rset.getString("CLASS_CONTENT"), rset.getInt("CLASS_FEE"),
									rset.getInt("TUTOR_NO"), rset.getDate("CLASS_START_DATE"), rset.getString("CATEGORY_NAME")));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return apvList;
	}

	public int confirmClass(Connection conn, int classNo) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("confirmClass");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, classNo);
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		return result;
	}

	public int rejectClass(Connection conn, int classNo) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("rejectClass");
			
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, classNo);
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public ArrayList<HClass> searchClass(Connection conn, String searchWord) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<HClass> searchList = null;
		
		System.out.println("DAO searchWord : " + searchWord); //OK
		String query = prop.getProperty("searchClass");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, "%"+searchWord+"%");
			
			rset = pstmt.executeQuery();
			
			searchList = new ArrayList<HClass>();
			while(rset.next()) {
				searchList.add(new HClass(rset.getInt("CLASS_NO"), rset.getString("CLASS_NAME"), rset.getDate("CLASS_ENROLL_DATE"),
										  rset.getDate("CLASS_END_DATE"), rset.getDate("CLASS_APV_DATE"), rset.getString("CLASS_APV_YN"),
										  rset.getString("CLASS_STATUS"), rset.getDouble("CLASS_TIME"), rset.getInt("CLASS_TUTEE_MIN"),
										  rset.getInt("CLASS_TUTEE_MAX"), rset.getString("CLASS_CONTENT"), rset.getInt("CLASS_FEE"),
										  rset.getInt("TUTOR_NO"), rset.getDate("CLASS_START_DATE"), rset.getString("CATEGORY_NAME")));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return searchList;
	}
	
	public ArrayList<HClass> beforeApvClass(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<HClass> beforeApvClass = null;
		
		String query = prop.getProperty("beforeApvClass");
		
		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);
			
				beforeApvClass = new ArrayList<HClass>();
				while(rset.next()) {
					beforeApvClass.add(new HClass(rset.getInt("CLASS_NO"), rset.getString("CLASS_NAME"),
						rset.getDate("CLASS_ENROLL_DATE"), rset.getDate("CLASS_END_DATE"),
						rset.getDate("CLASS_APV_DATE"), rset.getString("CLASS_APV_YN"), rset.getString("CLASS_STATUS"),
						rset.getDouble("CLASS_TIME"), rset.getInt("CLASS_TUTEE_MIN"), rset.getInt("CLASS_TUTEE_MAX"),
						rset.getString("CLASS_CONTENT"), rset.getInt("CLASS_FEE"), rset.getInt("TUTOR_NO"),
						rset.getDate("CLASS_START_DATE"), rset.getString("CATEGORY_NAME")));
				}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}
		
		return beforeApvClass;
	}


	public int insertClass(Connection conn, HClass hclass) {
		PreparedStatement pstmt = null;
		int result = 0;
	
		String query = prop.getProperty("insertClass");
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, hclass.getClassName());
			pstmt.setDate(2, hclass.getClassEndDate());
			pstmt.setDouble(3, hclass.getClassTime());
			pstmt.setInt(4, hclass.getClassTuteeMin());
			pstmt.setInt(5, hclass.getClassTuteeMax());
			pstmt.setString(6, hclass.getClassContent());
			pstmt.setInt(7, hclass.getClassFee());
			pstmt.setInt(8, hclass.getTutorNo());
			pstmt.setString(9, hclass.getcategoryName());
			pstmt.setDate(10, hclass.getClassStartDate());

			result = pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}

		return result;
	}
	
	public int insertFile(Connection conn, ArrayList<HClassFile> fileList) {
        PreparedStatement pstmt = null;
        int result = 0; 

        String query = prop.getProperty("insertClassFile");

        System.out.println("insertFile query : "+query);
        try {
            pstmt = conn.prepareStatement(query);

            for (int i = 0; i < fileList.size(); i++) {

                pstmt.setString(1, fileList.get(i).getFilePath());
                pstmt.setString(2, fileList.get(i).getOriginName());
                pstmt.setString(3, fileList.get(i).getChangeName());
                pstmt.setString(4, fileList.get(i).getFileThumbYn());

                result += pstmt.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(pstmt);
        }

        return result;
    }

	public int updateHClass(Connection conn, int bId, int cateId, String title, String content) {
		PreparedStatement pstmt = null;
		int result = 0;

		String query = prop.getProperty("updateBoard");

		System.out.println("updateBoard query : " + query);

		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, cateId);
			pstmt.setString(2, title);
			pstmt.setString(3, content);
			pstmt.setInt(4, bId);

			result = pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}

		return result;
	}

	public ArrayList<HClass> selectClassList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<HClass> list = null;
		
		String query = prop.getProperty("selectClassList");
		
		try {
			stmt = conn.createStatement();
			rset  = stmt.executeQuery(query);
			
			list = new ArrayList<HClass>();
			while(rset.next()) {
				HClass c = new HClass(rset.getInt("CLASS_NO"), 
									  rset.getString("CLASS_NAME"),
									  rset.getDate("CLASS_ENROLL_DATE"),
									  rset.getDate("CLASS_END_DATE"),
									  rset.getDate("CLASS_APV_DATE"),
									  rset.getString("CLASS_APV_YN"),
									  rset.getString("CLASS_STATUS"),
									  rset.getDouble("CLASS_TIME"),
									  rset.getInt("CLASS_TUTEE_MIN"),
									  rset.getInt("CLASS_TUTEE_MAX"),
									  rset.getString("CLASS_CONTENT"),
									  rset.getInt("CLASS_FEE"),
									  rset.getInt("TUTOR_NO"),
									  rset.getDate("CLASS_START_DATE"),
									  rset.getString("CATEGORY_NAME"));
				list.add(c);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}
		
		return list;
	}

	public int updateClassStatus(Connection conn) {
		CallableStatement cstmt = null; // CallableStatement : 프로시저 호출을 위해 필요
		int result = 0;
		
		String query = prop.getProperty("updateClassStatus");
		// updateClassStatus={CALL UPDATE_ALL_CLASS}
		
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

	// 클래스 리스트 조회할때 필요한 Thumbnail 리스트
	public ArrayList<HClassFile> selectFileList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<HClassFile> list = null;
		
		String query = prop.getProperty("selectFileList");

		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);
			
			list = new ArrayList<HClassFile>();
			while(rset.next()) {
				HClassFile f = new HClassFile();
				f.setFileNo(rset.getInt("FILE_NO"));
				f.setChangeName(rset.getString("CHANGE_NAME"));
				f.setBoardNo(rset.getInt("BOARD_NO"));
				list.add(f);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}
		
		return list;
	}

	public HClass selectClass(Connection conn, int cNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		HClass c = null;
		
		String query = prop.getProperty("selectClassDetail");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, cNo);
			rset = pstmt.executeQuery();
			
			if (rset.next()) {
				c = new HClass(rset.getInt("CLASS_NO"), 
						  rset.getString("CLASS_NAME"),
						  rset.getDate("CLASS_ENROLL_DATE"),
						  rset.getDate("CLASS_END_DATE"),
						  rset.getDate("CLASS_APV_DATE"),
						  rset.getString("CLASS_APV_YN"),
						  rset.getString("CLASS_STATUS"),
						  rset.getDouble("CLASS_TIME"),
						  rset.getInt("CLASS_TUTEE_MIN"),
						  rset.getInt("CLASS_TUTEE_MAX"),
						  rset.getString("CLASS_CONTENT"),
						  rset.getInt("CLASS_FEE"),
						  rset.getInt("TUTOR_NO"),
						  rset.getDate("CLASS_START_DATE"),
						  rset.getString("CATEGORY_NAME"));
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return c;
	}

	public ArrayList<HClassFile> selectDetailFileList(Connection conn, int cNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<HClassFile> list = null;
		
		String query = prop.getProperty("selectDetailFileList");

		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, cNo);
			rset = pstmt.executeQuery();
			
			list = new ArrayList<HClassFile>();
			while(rset.next()) {
				HClassFile f = new HClassFile();
				f.setFileNo(rset.getInt("FILE_NO"));
				f.setOriginName(rset.getString("ORIGIN_NAME"));
				f.setChangeName(rset.getString("CHANGE_NAME"));
				f.setFilePath(rset.getString("FILE_PATH"));
				f.setUploadDate(rset.getDate("FILE_UPLOAD"));
				f.setFileThumbYn(rset.getString("FILE_THUMB_YN"));
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

	public Tutor selectClassTutor(Connection conn, int tutorNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		Tutor t = null;
		
		String query = prop.getProperty("selectClassTutor");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, tutorNo);
			
			rset = pstmt.executeQuery();
			
			if(rset.next()) {
				t = new Tutor(rset.getInt("TUTOR_NO"), rset.getDate("TUTOR_ENROLL_DATE"), 
							  rset.getString("TUTOR_REPORT"),  rset.getString("TUTOR_SNS"),  rset.getString("TUTOR_IMG_PATH"), 
							  rset.getDate("TUTOR_IMG_UPDATE"), rset.getString("TUTOR_IMG_ORIGIN_NAME"), rset.getString("TUTOR_IMG_CHANGE_NAME"),
							  rset.getString("MEMBER_NICKNAME"), rset.getString("MEMBER_PHONE"), rset.getInt("MEMBER_STATUS"));
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return t;
	}

	public int insertClassSchdule(Connection conn, ArrayList<HClassSchedule> scheduleList) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("insertClassSchedule");
		
		try {
			pstmt = conn.prepareStatement(query);
			
			for (int i = 0; i < scheduleList.size(); i++) {
				pstmt.setInt(1, scheduleList.get(i).getSchduleDay());
				pstmt.setString(2, scheduleList.get(i).getSchduleTime());
				result += pstmt.executeUpdate(); 
			}
		
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}

	public ArrayList<HClassSchedule> selectScheduleList(Connection conn, int cNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<HClassSchedule> list = null;
		
		String query = prop.getProperty("selectScheduleList");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, cNo);
			
			rset = pstmt.executeQuery();
			
			list = new ArrayList<HClassSchedule>();
			while(rset.next()) {
				list.add(new HClassSchedule(rset.getInt("CLASS_SCHEDULE_NO"), 
											rset.getInt("CLASS_SCHEDULE_DAY"), 
											rset.getString("CLASS_SCHEDULE_TIME"),
											rset.getInt("CLASS_NO")));
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		
		return list;
	}
	
	public ArrayList selecBList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<HClass> list = null;

		String query = prop.getProperty("selectCList");

		System.out.println("selectCList query : " + query);

		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);

			list = new ArrayList<HClass>();
			while (rset.next()) {
				HClass h = new HClass(rset.getInt("CLASS_NO"), rset.getString("CLASS_NAME"),
						rset.getDate("CLASS_ENROLL_DATE"), rset.getDate("CLASS_END_DATE"),
						rset.getDate("CLASS_APV_DATE"), rset.getString("CLASS_APV_YN"), rset.getString("CLASS_STATUS"),
						rset.getDouble("CLASS_TIME"), rset.getInt("CLASS_TUTEE_MIN"), rset.getInt("CLASS_TUTEE_MAX"),
						rset.getString("CLASS_CONTENT"), rset.getInt("CLASS_FEE"), rset.getInt("TUTOR_NO"),
						rset.getDate("CLASS_START_DATE"), rset.getString("CATEGORY_NAME"));
				list.add(h);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}

		return list;
	}

	public ArrayList<HClass> selectAPVNList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<HClass> list = null;

		String query = prop.getProperty("selectAList");

		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);

			list = new ArrayList<HClass>();
			while (rset.next()) {
				list.add(new HClass(rset.getInt("CLASS_NO"), rset.getString("CLASS_NAME"),
						rset.getDate("CLASS_ENROLL_DATE"), rset.getDate("CLASS_END_DATE"),
						rset.getDate("CLASS_APV_DATE"), rset.getString("CLASS_APV_YN"), rset.getString("CLASS_STATUS"),
						rset.getDouble("CLASS_TIME"), rset.getInt("CLASS_TUTEE_MIN"), rset.getInt("CLASS_TUTEE_MAX"),
						rset.getString("CLASS_CONTENT"), rset.getInt("CLASS_FEE"), rset.getInt("TUTOR_NO"),
						rset.getDate("CLASS_START_DATE"), rset.getString("CATEGORY_NAME")));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}

		return list;
	}
	public ArrayList<HClass> selectClearList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<HClass> list = null;

		String query = prop.getProperty("selectCList");

		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);

			list = new ArrayList<HClass>();
			while (rset.next()) {
				list.add(new HClass(rset.getInt("CLASS_NO"), rset.getString("CLASS_NAME"),
						rset.getDate("CLASS_ENROLL_DATE"), rset.getDate("CLASS_END_DATE"),
						rset.getDate("CLASS_APV_DATE"), rset.getString("CLASS_APV_YN"), rset.getString("CLASS_STATUS"),
						rset.getDouble("CLASS_TIME"), rset.getInt("CLASS_TUTEE_MIN"), rset.getInt("CLASS_TUTEE_MAX"),
						rset.getString("CLASS_CONTENT"), rset.getInt("CLASS_FEE"), rset.getInt("TUTOR_NO"),
						rset.getDate("CLASS_START_DATE"), rset.getString("CATEGORY_NAME")));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}

		return list;
	}
	
	public ArrayList<HClass> selectBList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<HClass> list = null;

		String query = prop.getProperty("selectBList");

		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);

			list = new ArrayList<HClass>();
			while (rset.next()) {
				list.add(new HClass(rset.getInt("CLASS_NO"), rset.getString("CLASS_NAME"),
						rset.getDate("CLASS_ENROLL_DATE"), rset.getDate("CLASS_END_DATE"),
						rset.getDate("CLASS_APV_DATE"), rset.getString("CLASS_APV_YN"), rset.getString("CLASS_STATUS"),
						rset.getDouble("CLASS_TIME"), rset.getInt("CLASS_TUTEE_MIN"), rset.getInt("CLASS_TUTEE_MAX"),
						rset.getString("CLASS_CONTENT"), rset.getInt("CLASS_FEE"), rset.getInt("TUTOR_NO"),
						rset.getDate("CLASS_START_DATE"), rset.getString("CATEGORY_NAME")));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}

		return list;
	}

	public HClass selectClassOpen(Connection conn, int bId) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		HClass c = null;
		
		String query = prop.getProperty("selectClassOpenFile");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, bId);
			rset = pstmt.executeQuery();
			
			if (rset.next()) {
				c = new HClass(rset.getInt("CLASS_NO"), 
						  rset.getString("CLASS_NAME"),
						  rset.getDate("CLASS_ENROLL_DATE"),
						  rset.getDate("CLASS_END_DATE"),
						  rset.getDate("CLASS_APV_DATE"),
						  rset.getString("CLASS_APV_YN"),
						  rset.getString("CLASS_STATUS"),
						  rset.getDouble("CLASS_TIME"),
						  rset.getInt("CLASS_TUTEE_MIN"),
						  rset.getInt("CLASS_TUTEE_MAX"),
						  rset.getString("CLASS_CONTENT"),
						  rset.getInt("CLASS_FEE"),
						  rset.getInt("TUTOR_NO"),
						  rset.getDate("CLASS_START_DATE"),
						  rset.getString("CATEGORY_NAME"));
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return c;
	}
	
	
	public ArrayList<HClassFile> selectOpenClassFileList(int bId, Connection conn) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<HClassFile> list = null;
		
		String query = prop.getProperty("selectDetailFileList");

		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, bId);
			rset = pstmt.executeQuery();
			
			list = new ArrayList<HClassFile>();
			while(rset.next()) {
				HClassFile f = new HClassFile();
				f.setFileNo(rset.getInt("FILE_NO"));
				f.setOriginName(rset.getString("ORIGIN_NAME"));
				f.setChangeName(rset.getString("CHANGE_NAME"));
				f.setFilePath(rset.getString("FILE_PATH"));
				f.setUploadDate(rset.getDate("FILE_UPLOAD"));
				f.setFileThumbYn(rset.getString("FILE_THUMB_YN"));
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
	
	public int deleteOpenClass(Connection conn, int bId) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("deleteOpenClass");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, bId);
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		
		return result;
	}	

}