package hobbyistClass.model.vo;

import java.sql.Date;

public class ClassBoard {
	
	private int classBoardNo;
	private String classBoardName;
	private String classBoardContent;
	private int classBoardViews;
	private Date classBoardDate;
	private int classBOardStatus;
	private int classNo;
	
	public ClassBoard() {}
	
	public ClassBoard(int classBoardNo, String classBoardName, String classBoardContent, int classBoardViews,
			Date classBoardDate, int classBOardStatus, int classNo) {
		super();
		this.classBoardNo = classBoardNo;
		this.classBoardName = classBoardName;
		this.classBoardContent = classBoardContent;
		this.classBoardViews = classBoardViews;
		this.classBoardDate = classBoardDate;
		this.classBOardStatus = classBOardStatus;
		this.classNo = classNo;
		

	}
	public int getClassBoardNo() {
		return classBoardNo;
	}
	public void setClassBoardNo(int classBoardNo) {
		this.classBoardNo = classBoardNo;
	}
	public String getClassBoardName() {
		return classBoardName;
	}
	public void setClassBoardName(String classBoardName) {
		this.classBoardName = classBoardName;
	}
	public String getClassBoardContent() {
		return classBoardContent;
	}
	public void setClassBoardContent(String classBoardContent) {
		this.classBoardContent = classBoardContent;
	}
	public int getClassBoardViews() {
		return classBoardViews;
	}
	public void setClassBoardViews(int classBoardViews) {
		this.classBoardViews = classBoardViews;
	}
	public Date getClassBoardDate() {
		return classBoardDate;
	}
	public void setClassBoardDate(Date classBoardDate) {
		this.classBoardDate = classBoardDate;
	}
	public int getClassBOardStatus() {
		return classBOardStatus;
	}
	public void setClassBOardStatus(int classBOardStatus) {
		this.classBOardStatus = classBOardStatus;
	}
	public int getClassNo() {
		return classNo;
	}
	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}
	@Override
	public String toString() {
		return "ClassBoard [classBoardNo=" + classBoardNo + ", classBoardName=" + classBoardName
				+ ", classBoardContent=" + classBoardContent + ", classBoardViews=" + classBoardViews
				+ ", classBoardDate=" + classBoardDate + ", classBOardStatus=" + classBOardStatus + ", classNo="
				+ classNo + "]";
	}
	
	

}