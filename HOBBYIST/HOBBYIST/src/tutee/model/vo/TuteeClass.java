package tutee.model.vo;

import java.sql.Date;

import hobbyistClass.model.vo.HClass;

public class TuteeClass {
	
	private int tuteeClassNo;
	private Date tueeClassRevDate;
	private String tueeClassRevTime;
	private String tuteeClassStatus;
	private Date tuteeClassEnrollDate;
	private Date tuteeClassFinishDate;
	private int classNo;
	private String memberEmail;
	
	public TuteeClass() {}

	public TuteeClass(int tuteeClassNo, Date tueeClassRevDate, String tueeClassRevTime, String tuteeClassStatus,
			Date tuteeClassEnrollDate, Date tuteeClassFinishDate, int classNo, String memberEmail) {
		super();
		this.tuteeClassNo = tuteeClassNo;
		this.tueeClassRevDate = tueeClassRevDate;
		this.tueeClassRevTime = tueeClassRevTime;
		this.tuteeClassStatus = tuteeClassStatus;
		this.tuteeClassEnrollDate = tuteeClassEnrollDate;
		this.tuteeClassFinishDate = tuteeClassFinishDate;
		this.classNo = classNo;
		this.memberEmail = memberEmail;
	}

	public int getTuteeClassNo() {
		return tuteeClassNo;
	}

	public void setTuteeClassNo(int tuteeClassNo) {
		this.tuteeClassNo = tuteeClassNo;
	}

	public Date getTueeClassRevDate() {
		return tueeClassRevDate;
	}

	public void setTueeClassRevDate(Date tueeClassRevDate) {
		this.tueeClassRevDate = tueeClassRevDate;
	}

	public String getTueeClassRevTime() {
		return tueeClassRevTime;
	}

	public void setTueeClassRevTime(String tueeClassRevTime) {
		this.tueeClassRevTime = tueeClassRevTime;
	}

	public String getTuteeClassStatus() {
		return tuteeClassStatus;
	}

	public void setTuteeClassStatus(String tuteeClassStatus) {
		this.tuteeClassStatus = tuteeClassStatus;
	}

	public Date getTuteeClassEnrollDate() {
		return tuteeClassEnrollDate;
	}

	public void setTuteeClassEnrollDate(Date tuteeClassEnrollDate) {
		this.tuteeClassEnrollDate = tuteeClassEnrollDate;
	}

	public Date getTuteeClassFinishDate() {
		return tuteeClassFinishDate;
	}

	public void setTuteeClassFinishDate(Date tuteeClassFinishDate) {
		this.tuteeClassFinishDate = tuteeClassFinishDate;
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

	@Override
	public String toString() {
		return "TuteeClass [tuteeClassNo=" + tuteeClassNo + ", tueeClassRevDate=" + tueeClassRevDate
				+ ", tueeClassRevTime=" + tueeClassRevTime + ", tuteeClassStatus=" + tuteeClassStatus
				+ ", tuteeClassEnrollDate=" + tuteeClassEnrollDate + ", tuteeClassFinishDate=" + tuteeClassFinishDate
				+ ", classNo=" + classNo + ", memberEmail=" + memberEmail + "]";
	}


}