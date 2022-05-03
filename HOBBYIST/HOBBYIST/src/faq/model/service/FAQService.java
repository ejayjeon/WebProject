package faq.model.service;

import static common.JDBCTemplate.getConnection;
import static common.JDBCTemplate.*;

import java.sql.Connection;
import java.util.ArrayList;

import faq.model.dao.FAQDAO;
import faq.model.vo.FAQ;

public class FAQService {

	private FAQDAO fDAO = new FAQDAO();
	
	public ArrayList<FAQ> selectList() {
		Connection conn = getConnection();
		
		ArrayList<FAQ> list = fDAO.selectList(conn);
		
		close(conn);
		
		return list;
	}

	public int insertFAQ(FAQ faq) {
		Connection conn = getConnection();
		
		int result = fDAO.insertFAQ(conn,faq);
		
		if(result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}

	public FAQ detailFAQ(int faqNo) {
		Connection conn = getConnection();
		
		FAQ faq = fDAO.detailFAQ(conn, faqNo);
		
		close(conn);
		
		return faq;
	}

	public int updateFAQ(FAQ faq) {
		Connection conn = getConnection();
		
		int result = fDAO.updateFAQ(conn, faq);
		
		if(result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}

	public int deleteFAQ(int no) {
		Connection conn = getConnection();
		
		int result = fDAO.deleteFAQ(conn, no);
		
		if(result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}

}
