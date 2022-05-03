package hobbyistClass.model.vo;

public class HClassSchedule {
	private int scheduleNo;
	private int schduleDay;
	private String schduleTime;
	private int classNo;
	
	public HClassSchedule() {}
	
	public HClassSchedule(int scheduleNo, int schduleDay, String schduleTime, int classNo) {
		super();
		this.scheduleNo = scheduleNo;
		this.schduleDay = schduleDay;
		this.schduleTime = schduleTime;
		this.classNo = classNo;
	}
	
	public int getScheduleNo() {
		return scheduleNo;
	}
	public void setScheduleNo(int scheduleNo) {
		this.scheduleNo = scheduleNo;
	}
	public int getSchduleDay() {
		return schduleDay;
	}
	public void setSchduleDay(int schduleDay) {
		this.schduleDay = schduleDay;
	}
	public String getSchduleTime() {
		return schduleTime;
	}
	public void setSchduleTime(String schduleTime) {
		this.schduleTime = schduleTime;
	}
	public int getClassNo() {
		return classNo;
	}
	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}
	
	@Override
	public String toString() {
		return "HClassSchedule [scheduleNo=" + scheduleNo + ", schduleDay=" + schduleDay + ", schduleTime="
				+ schduleTime + ", classNo=" + classNo + "]";
	}
	
}
