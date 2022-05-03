package csBoard.model.service;

import java.sql.Connection;
import java.util.ArrayList;
import static common.JDBCTemplate.getConnection;
import static common.JDBCTemplate.close;
import static common.JDBCTemplate.commit;
import static common.JDBCTemplate.rollback;

import csBoard.model.dao.CSBoardDAO;
import csBoard.model.vo.CSBoardFile;
import csBoard.model.vo.PageInfo;
import csBoard.model.vo.Reply;
import csBoard.model.vo.RequestBoard;

public class CSBoardService {

	private CSBoardDAO cDAO = new CSBoardDAO();

	public int getListCount() {
		Connection conn = getConnection();
		
		int listCount = cDAO.getListCount(conn);
		
		close(conn);
		
		return listCount;
	}
	
	public ArrayList<RequestBoard> selectList(PageInfo pi) {
		Connection conn = getConnection();
		
		ArrayList<RequestBoard> list = cDAO.selectList(conn, pi);
		
		close(conn);
		
		return list;
	}

	public RequestBoard selectBoard(int rNo) {
		Connection conn = getConnection();
		
		RequestBoard rBoard = cDAO.selectBoard(conn, rNo);
		
		close(conn);
		
		return rBoard;
	}

	public ArrayList<Reply> selectReplyList(int rNo) {
		Connection conn = getConnection();
		
		ArrayList<Reply> list = cDAO.selectReplyList(conn, rNo);
		
		close(conn);
		
		return list;
	}

	public int insertBoard(RequestBoard board, ArrayList<CSBoardFile> fileList) {
		Connection conn = getConnection();
		
		int result1 = cDAO.insertBoard(conn, board);
		int result2 = 0;
		if (!fileList.isEmpty()) { // file 첨부된게 있을 때만 file insert 실행
			result2 = cDAO.insertBoardFile(conn, fileList);
		} 
		
		if (result1 > 0 && result2 >= fileList.size()) { // 게시글 insert됐고, 모든 파일이 insert가 됐으면
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);
		
		return result1 + result2;
	}

	public int updateBoard(RequestBoard board, ArrayList<CSBoardFile> fileList) {
		Connection conn = getConnection();
		
		int result1 = cDAO.updateBoard(conn, board);
		int result2 = 0;
		if (!fileList.isEmpty()) { // file 첨부된게 있을 때만 file insert 실행
			result2 = cDAO.updateBoardFile(conn, fileList, board.getReqNo());
		} 
		
		if (result1 > 0 && result2 >= fileList.size()) {
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);
		
		return result1 + result2;
	}

	public int deleteBoard(int rNo) {
		Connection conn = getConnection();
		
		int result = cDAO.deleteBoard(conn, rNo);

		if (result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);
		
		return result;	
	}

	public ArrayList<Reply> insertReply(Reply r) {
		Connection conn = getConnection();
		
		int result = cDAO.insertReply(conn, r);
		
		ArrayList<Reply> list = null;
		if (result > 0) {
			list = cDAO.selectReplyList(conn, r.getReqNo()); // insert한 결과가 성공이면 댓글리스트 select해옴
			int updateReplyStatus = cDAO.updateReplyStatus(conn, r.getReqNo());
			if (list != null && updateReplyStatus > 0) {  // list가 있으면 커밋 아니면 롤백
				commit(conn);
			} else {
				rollback(conn);
			}
		} else {
			rollback(conn);
		}
		
		return list;
	}

	public ArrayList<Reply> updateReply(Reply r) {
		Connection conn = getConnection();
		
		int result = cDAO.updateReply(conn, r);
		
		ArrayList<Reply> list = null;
		if (result > 0) {
			list = cDAO.selectReplyList(conn, r.getReqNo()); // update한 결과가 성공이면 댓글리스트 select해옴
			if (list != null) {  // list가 있으면 커밋 아니면 롤백
				commit(conn);
			} else {
				rollback(conn);
			}
		} else {
			rollback(conn);
		}
		
		return list;
	}

	public ArrayList<Reply> deleteReply(Reply r) {
		Connection conn = getConnection();
		
		int result = cDAO.deleteReply(conn, r);
		
		ArrayList<Reply> list = null;
		if (result > 0) {
			list = cDAO.selectReplyList(conn, r.getReqNo()); // delete한 결과가 성공이면 댓글리스트 select해옴
			if (list != null) {  // list가 있으면 커밋 아니면 롤백
				commit(conn);
			} else {
				rollback(conn);
			}
		} else {
			rollback(conn);
		}
		
		return list;
	}

	public ArrayList<CSBoardFile> selectFileList(int rNo) {
		Connection conn = getConnection();
		
		ArrayList<CSBoardFile> list = cDAO.selectFileList(conn, rNo);
		
		close(conn);
		
		return list;
	}

	public int deleteFile(int fNo) {
		Connection conn = getConnection();
		
		int result = cDAO.deleteFile(conn, fNo);

		if (result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;	
	}
	

}
