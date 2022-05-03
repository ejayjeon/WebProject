package hobbyistClass.model.vo;

import java.sql.Date;

public class LikeClasses {
	
	private int classNo;
	private String memberEmail;
	private Date clipDate;
	
	public LikeClasses() {}

	public LikeClasses(int classNo, String memberEmail, Date clipDate) {
		super();
		this.classNo = classNo;
		this.memberEmail = memberEmail;
		this.clipDate = clipDate;
	}

	public int getClassNo() {
		return classNo;
	}

	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}

	public String getMemberEmail() {
		return memberEmail;
	}

	public void setMemberEmail(String memberEmail) {
		this.memberEmail = memberEmail;
	}

	public Date getClipDate() {
		return clipDate;
	}

	public void setClipDate(Date clipDate) {
		this.clipDate = clipDate;
	}

	@Override
	public String toString() {
		return "LikeClasses [classNo=" + classNo + ", memberEmail=" + memberEmail + ", clipDate=" + clipDate + "]";
	}
	
	

}