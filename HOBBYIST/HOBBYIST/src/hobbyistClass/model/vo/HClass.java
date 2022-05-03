package hobbyistClass.model.vo;

import java.sql.Date;

public class HClass {
	private int classNo;
	private String className;
	private Date classEnrollDate;
	private Date classEndDate;
	private Date classApvDate;
	private String classApvYn;
	private String classStatus;
	private double classTime;
	private int classTuteeMin;
	private int classTuteeMax;
	private String classContent;
	private int classFee;
	private int tutorNo;
	private Date classStartDate;
	private String categoryName;
	
	public HClass() {}

	public HClass(int classNo, String className, Date classEnrollDate, Date classEndDate, Date classApvDate,
            String classApvYn, String classStatus, double classTime, int classTuteeMin, int classTuteeMax,
            String classContent, int classFee, int tutorNo, Date classStartDate, String categoryName) {
        super();
        this.classNo = classNo;
        this.className = className;
        this.classEnrollDate = classEnrollDate;
        this.classEndDate = classEndDate;
        this.classApvDate = classApvDate;
        this.classApvYn = classApvYn;
        this.classStatus = classStatus;
        this.classTime = classTime;
        this.classTuteeMin = classTuteeMin;
        this.classTuteeMax = classTuteeMax;
        this.classContent = classContent;
        this.classFee = classFee;
        this.tutorNo = tutorNo;
        this.classStartDate = classStartDate;
        this.categoryName = categoryName;
    }

	public HClass(Date classEnrollDate, int classNo, int tutorNo, String categoryName, String className, 
				String classApvYn, Date classApvDate) {
		super();
		this.classEnrollDate = classEnrollDate;
		this.classNo = classNo;
		this.tutorNo = tutorNo;
		this.categoryName = categoryName;
		this.className = className;
		this.classApvYn = classApvYn;
		this.classApvDate = classApvDate;
		
	}

	public int getClassNo() {
		return classNo;
	}

	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public Date getClassEnrollDate() {
		return classEnrollDate;
	}

	public void setClassEnrollDate(Date classEnrollDate) {
		this.classEnrollDate = classEnrollDate;
	}

	public Date getClassEndDate() {
		return classEndDate;
	}

	public void setClassEndDate(Date classEndDate) {
		this.classEndDate = classEndDate;
	}

	public Date getClassApvDate() {
		return classApvDate;
	}

	public void setClassApvDate(Date classApvDate) {
		this.classApvDate = classApvDate;
	}

	public String getClassApvYn() {
		return classApvYn;
	}

	public void setClassApvYn(String classApvYn) {
		this.classApvYn = classApvYn;
	}

	public String getClassStatus() {
		return classStatus;
	}

	public void setClassStatus(String classStatus) {
		this.classStatus = classStatus;
	}

	public double getClassTime() {
		return classTime;
	}

	public void setClassTime(double classTime) {
		this.classTime = classTime;
	}

	public int getClassTuteeMin() {
		return classTuteeMin;
	}

	public void setClassTuteeMin(int classTuteeMin) {
		this.classTuteeMin = classTuteeMin;
	}

	public int getClassTuteeMax() {
		return classTuteeMax;
	}

	public void setClassTuteeMax(int classTuteeMax) {
		this.classTuteeMax = classTuteeMax;
	}

	public String getClassContent() {
		return classContent;
	}

	public void setClassContent(String classContent) {
		this.classContent = classContent;
	}

	public int getClassFee() {
		return classFee;
	}

	public void setClassFee(int classFee) {
		this.classFee = classFee;
	}

	public int getTutorNo() {
		return tutorNo;
	}

	public void setTutorNo(int tutorNo) {
		this.tutorNo = tutorNo;
	}
	
	public Date getClassStartDate() {
		return classStartDate;
	}

	public void setClassStartDate(Date classStartDate) {
		this.classStartDate = classStartDate;
	}
	
	public String getcategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	@Override
	public String toString() {
		return "Class [classNo=" + classNo + ", className=" + className + ", classEnrollDate=" + classEnrollDate
				+ ", classEndDate=" + classEndDate + ", classApvDate=" + classApvDate + ", classApvYn=" + classApvYn
				+ ", classStatus=" + classStatus + ", classTime=" + classTime + ", classTuteeMin=" + classTuteeMin
				+ ", classTuteeMax=" + classTuteeMax + ", classContent=" + classContent + ", classFee=" + classFee
				+ ", tutorNo=" + tutorNo
				+ ", classStartDate=" + classStartDate +"]";
	}
	
}