package tutor.model.vo;

import java.sql.Date;

import member.model.vo.Member;

public class Tutor extends Member {
	private int tutorNo;
	private Date tutorEnrollDate;
	private String tutorReport;
	private String tutorSns;
	private String tutorImgPath;
	private Date tutorImgUpdate;
	private String tutorImgOriginName;
	private String tutorImgChangeName;
	
	public Tutor() {}

	public Tutor(int tutorNo, Date tutorEnrollDate, String tutorReport, String tutorSns,
			String tutorImgPath, Date tutorImgUpdate, String tutorImgOriginName, String tutorImgChangeName) {
		super();
		this.tutorNo = tutorNo;
		this.tutorEnrollDate = tutorEnrollDate;
		this.tutorReport = tutorReport;
		this.tutorSns = tutorSns;
		this.tutorImgPath = tutorImgPath;
		this.tutorImgUpdate = tutorImgUpdate;
		this.tutorImgOriginName = tutorImgOriginName;
		this.tutorImgChangeName = tutorImgChangeName;
	}	
	
	public Tutor(int tutorNo, Date tutorEnrollDate, String tutorReport, String tutorSns,
			String tutorImgPath, Date tutorImgUpdate, String tutorImgOriginName, String tutorImgChangeName, 
			String memberNickName, String memberPhone, int memberStatus) {
		super(memberNickName, memberPhone, memberStatus); // 클래스 상세보기에서 필요한 정보로, 부모클래스의 생성자를 호출하여 부모의 필드에 데이터를 저장하여 이용 -> 부모의 getter메소드로 데이터 불러오기 가능(생성자 매개변수에 넣지 않고, 부모의 setter메소드를 이용하여 저장해도 되지만 코드가 길어짐)
		this.tutorNo = tutorNo;
		this.tutorEnrollDate = tutorEnrollDate;
		this.tutorReport = tutorReport;
		this.tutorSns = tutorSns;
		this.tutorImgPath = tutorImgPath;
		this.tutorImgUpdate = tutorImgUpdate;
		this.tutorImgOriginName = tutorImgOriginName;
		this.tutorImgChangeName = tutorImgChangeName;
	}

	public int getTutorNo() {
		return tutorNo;
	}

	public void setTutorNo(int tutorNo) {
		this.tutorNo = tutorNo;
	}

	public Date getTutorEnrollDate() {
		return tutorEnrollDate;
	}

	public void setTutorEnrollDate(Date tutorEnrollDate) {
		this.tutorEnrollDate = tutorEnrollDate;
	}

	public String getTutorReport() {
		return tutorReport;
	}

	public void setTutorReport(String tutorReport) {
		this.tutorReport = tutorReport;
	}

	public String getTutorSns() {
		return tutorSns;
	}

	public void setTutorSns(String tutorSns) {
		this.tutorSns = tutorSns;
	}

	public String getTutorImgPath() {
		return tutorImgPath;
	}

	public void setTutorImgPath(String tutorImgPath) {
		this.tutorImgPath = tutorImgPath;
	}

	public Date getTutorImgUpdate() {
		return tutorImgUpdate;
	}

	public void setTutorImgUpdate(Date tutorImgUpdate) {
		this.tutorImgUpdate = tutorImgUpdate;
	}

	public String getTutorImgOriginName() {
		return tutorImgOriginName;
	}

	public void setTutorImgOriginName(String tutorImgOriginName) {
		this.tutorImgOriginName = tutorImgOriginName;
	}

	public String getTutorImgChangeName() {
		return tutorImgChangeName;
	}

	public void setTutorImgChangeName(String tutorImgChangeName) {
		this.tutorImgChangeName = tutorImgChangeName;
	}

	@Override
	public String toString() {
		return "Tutor [tutorNo=" + tutorNo + ", tutorEnrollDate=" + tutorEnrollDate + ", tutorReport=" + tutorReport + ", tutorSns=" + tutorSns + ", tutorImgPath="
				+ tutorImgPath + ", tutorImgUpdate=" + tutorImgUpdate + ", tutorImgOriginName=" + tutorImgOriginName
				+ ", tutorImgChangeName=" + tutorImgChangeName + "]";
	}
	
}