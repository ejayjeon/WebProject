package member.model.service;

import member.model.dao.MemberDAO;
import member.model.vo.Member;
import member.model.vo.MemberInfo;

import static common.JDBCTemplate.getConnection;
import static common.JDBCTemplate.close;
import static common.JDBCTemplate.commit;
import static common.JDBCTemplate.rollback;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;


public class MemberService{

	private MemberDAO mDAO = new MemberDAO();
	
	public int login(String userEmail, String userPwd) {
		Connection conn = getConnection();
		
		int result = mDAO.login(conn, userEmail, userPwd);
		
		close(conn);
		
		return result;
	}
	
	public Member loginMember(String userEmail, String userPwd) {
		Connection conn = getConnection();
		
		Member loginUser = mDAO.loginMember(conn, userEmail, userPwd);
		
		close(conn);
		
		return loginUser;
	}
	
	public int join(Member member) {
		Connection conn = getConnection();
	
		int checkEmail = mDAO.checkEmail(conn, member);
	
		int result = 0 ;
				
		if (checkEmail > 0) { // db에 데이터 존재 -> 가입 안됨
			return -1;
		} else {
			result = mDAO.join(conn, member);
			if(result > 0) {
				commit(conn);
			} else {
				rollback(conn);
			}
		}
		close(conn);
		
		return result;
	}

	public int updateMember(Member newInfo) {
		Connection conn = getConnection();
		
		int result = mDAO.updateMember(conn, newInfo);
		
		if (result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		close(conn);
		
		return result;
	}


	public int checkNick(String nickName) {
		Connection conn = getConnection();
		
		int result = mDAO.checkNick(conn, nickName);
		
		close(conn);
		
		return result;		
		
	}

	public Member selectMember(String memberEmail) {
		Connection conn = getConnection();
		
		Member m = mDAO.selectMember(conn, memberEmail);
		
		close(conn);
		
		return m;
	}

	public int deleteMember(String memberEmail) {
		Connection conn = getConnection();
		
		int result = mDAO.deleteMember(conn, memberEmail);
		
		if(result > 0) {
			commit(conn);
		} else {
			rollback(conn);
		}
		
		close(conn);
		
		return result;
	}

	public int updatePwd(HashMap<String, String> map) {
		Connection conn = getConnection();
		
		int result = mDAO.updatePwd(conn, map);
		if(result > 0){
			commit(conn);
		} else {
			rollback(conn);
		}
		
		return result;
	}

	public int changeTutee(String memberEmail) {
		Connection conn = getConnection();
		
		int result = mDAO.changeTutee(conn, memberEmail);
		
		if(result > 0){
			commit(conn);
		} else {
			rollback(conn);
		}
		
		return result;
	}
	
	public int getMemberCount() {
		Connection conn = getConnection();
		
		int memberCount = mDAO.getMemberCount(conn);
		
		close(conn);
		
		return memberCount;
	}

	public ArrayList<Member> selectTuteeList(MemberInfo pi) {
		Connection conn = getConnection();
		
		ArrayList<Member> tuteeList = mDAO.selectTuteeList(conn, pi);
		
		close(conn);
		
		return tuteeList;
	}

	public ArrayList<Member> selectTutorList(MemberInfo pi) {
		Connection conn = getConnection();
		
		ArrayList<Member> tutorList = mDAO.selectTutorList(conn, pi);
		
		close(conn);
		
		return tutorList;
	}
	



}