package faq.model.dao;

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
import faq.model.vo.FAQ;

public class FAQDAO {
	
	private Properties prop = null;
	
	public FAQDAO() {
		
		prop = new Properties();
		
		String fileName = FAQDAO.class.getResource("/sql/faq-query.properties").getPath();
		
		try {
			prop.load(new FileReader(fileName));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
//
	public ArrayList<FAQ> selectList(Connection conn) {
		Statement stmt = null;
		ResultSet rset = null;
		ArrayList<FAQ> list = null;
		
		String query = prop.getProperty("selectFAQList");
		
		try {
			stmt = conn.createStatement();
			rset = stmt.executeQuery(query);
			
			list = new ArrayList<FAQ>();
			while(rset.next()) {
				
				list.add(new FAQ(rset.getInt("FAQ_NO"),
								rset.getString("FAQ_TITLE"),
								rset.getString("FAQ_REPLY"),
								rset.getString("FAQ_CATEGORY")));
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(stmt);
		}
		
		return list;
	}
	
	public int insertFAQ(Connection conn, FAQ faq) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("insertFAQ");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, faq.getFaqTitle());
			pstmt.setString(2, faq.getFaqReply());
			pstmt.setString(3, faq.getFaqCategory());
			
			result = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		return result;
	}
	
	public FAQ detailFAQ(Connection conn, int faqNo) {
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		FAQ faq = null;
		
		String query = prop.getProperty("detailFAQ");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, faqNo);
			
			rset = pstmt.executeQuery();
			
			if(rset.next()) {
				faq = new FAQ(rset.getInt("FAQ_NO"),
							rset.getString("FAQ_TITLE"),
							rset.getString("FAQ_REPLY"),
							rset.getString("FAQ_CATEGORY"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rset);
			close(pstmt);
		}
		
		return faq;
	}
	
	public int updateFAQ(Connection conn, FAQ faq) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("updateFAQ");
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, faq.getFaqTitle());
			pstmt.setString(2, faq.getFaqReply());
			pstmt.setString(3, faq.getFaqCategory());
			pstmt.setInt(4, faq.getFaqNo());
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}
	
	public int deleteFAQ(Connection conn, int no) {
		PreparedStatement pstmt = null;
		int result = 0;
		
		String query = prop.getProperty("deleteFAQ");
		System.out.println(conn);
		System.out.println(no);
		System.out.println(query);
		
		try {
			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, no);
			
			result = pstmt.executeUpdate();
			
			System.out.println(pstmt);
			System.out.println(result);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return result;
	}
	
	
	
	

}
