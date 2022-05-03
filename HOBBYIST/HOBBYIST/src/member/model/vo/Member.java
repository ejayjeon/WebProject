package member.model.vo;

import java.sql.Date;

public class Member {
	private String memberEmail;
	private String memberName;
	private String memberNickName;
	private String memberPhone;
	private String memberPwd;
	private int kakaoNo;
	private String memberEnrollType;
	private Date memberEnrollDate;
	private int memberStatus;
	private String memberGrade;
	
	public Member() {}
	
	public Member(String memberEmail, String memberName, String memberNickName, String memberPhone, String memberPwd,
			int kakaoNo, String memberEnrollType, Date memberEnrollDate, int memberStatus, String memberGrade) {
		super();
		this.memberEmail = memberEmail;
		this.memberName = memberName;
		this.memberNickName = memberNickName;
		this.memberPhone = memberPhone;
		this.memberPwd = memberPwd;
		this.kakaoNo = kakaoNo;
		this.memberEnrollType = memberEnrollType;
		this.memberEnrollDate = memberEnrollDate;
		this.memberStatus = memberStatus;
		this.memberGrade = memberGrade;
	}
	
	
	public Member(String memberEmail, String memberName, String memberNickName, String memberPhone) {
		super();
		this.memberEmail = memberEmail;
		this.memberName = memberName;
		this.memberNickName = memberNickName;
		this.memberPhone = memberPhone;
	}

	public Member(String memberNickName, String memberPhone, int memberStatus) { // Member의 자식인 Tutor에서 부모 클래스인 Member의 생성자 호출
		this.memberNickName = memberNickName;
		this.memberPhone = memberPhone;
		this.memberStatus = memberStatus;
	}

	public String getMemberEmail() {
		return memberEmail;
	}
	public void setMemberEmail(String memberEmail) {
		this.memberEmail = memberEmail;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getMemberNickName() {
		return memberNickName;
	}
	public void setMemberNickName(String memberNickName) {
		this.memberNickName = memberNickName;
	}
	public String getMemberPhone() {
		return memberPhone;
	}
	public void setMemberPhone(String memberPhone) {
		this.memberPhone = memberPhone;
	}
	public String getMemberPwd() {
		return memberPwd;
	}
	public void setMemberPwd(String memberPwd) {
		this.memberPwd = memberPwd;
	}
	public int getKakaoNo() {
		return kakaoNo;
	}
	public void setKakaoNo(int kakaoNo) {
		this.kakaoNo = kakaoNo;
	}
	public String getMemberEnrollType() {
		return memberEnrollType;
	}
	public void setMemberEnrollType(String memberEnrollType) {
		this.memberEnrollType = memberEnrollType;
	}
	public Date getMemberEnrollDate() {
		return memberEnrollDate;
	}
	public void setMemberEnrollDate(Date memberEnrollDate) {
		this.memberEnrollDate = memberEnrollDate;
	}
	public int getMemberStatus() {
		return memberStatus;
	}
	public void setMemberStatus(int memberStatus) {
		this.memberStatus = memberStatus;
	}
	public String getMemberGrade() {
		return memberGrade;
	}
	public void setMemberGrade(String memberGrade) {
		this.memberGrade = memberGrade;
	}

	@Override
	public String toString() {
		return "Member [memberEmail=" + memberEmail + ", memberName=" + memberName + ", memberNickName="
				+ memberNickName + ", memberPhone=" + memberPhone + ", memberPwd=" + memberPwd + ", kakaoNo=" + kakaoNo
				+ ", memberEnrollType=" + memberEnrollType + ", memberEnrollDate=" + memberEnrollDate
				+ ", memberStatus=" + memberStatus + ", memberGrade=" + memberGrade + "]";
	}
	
	

}