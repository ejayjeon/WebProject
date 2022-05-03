package csBoard.model.vo;

import java.sql.Date;

public class RequestBoard {
	private int reqNo;
	private String reqCategory;
	private String reqTitle;
	private String reqContent;
	private String reqWriter;
	private String nickName;
	private Date createDate;
	private Date modifyDate;
	private int status;
	private String replyStatus;
	private String contactEmail;
	
	public RequestBoard() {}
	
	public RequestBoard(int reqNo, String reqCategory, String reqTitle, String reqContent, String reqWriter,
			String nickName, Date createDate, Date modifyDate, int status, String replyStatus, String contactEmail) {
		super();
		this.reqNo = reqNo;
		this.reqCategory = reqCategory;
		this.reqTitle = reqTitle;
		this.reqContent = reqContent;
		this.reqWriter = reqWriter;
		this.nickName = nickName;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
		this.status = status;
		this.replyStatus = replyStatus;
		this.contactEmail = contactEmail;
	}
	
	public int getReqNo() {
		return reqNo;
	}
	public void setReqNo(int reqNo) {
		this.reqNo = reqNo;
	}
	public String getReqCategory() {
		return reqCategory;
	}
	public void setReqCategory(String reqCategory) {
		this.reqCategory = reqCategory;
	}
	public String getReqTitle() {
		return reqTitle;
	}
	public void setReqTitle(String reqTitle) {
		this.reqTitle = reqTitle;
	}
	public String getReqContent() {
		return reqContent;
	}
	public void setReqContent(String reqContent) {
		this.reqContent = reqContent;
	}
	public String getReqWriter() {
		return reqWriter;
	}
	public void setReqWriter(String reqWriter) {
		this.reqWriter = reqWriter;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public Date getModifyDate() {
		return modifyDate;
	}
	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getReplyStatus() {
		return replyStatus;
	}
	public void setReplyStatus(String replyStatus) {
		this.replyStatus = replyStatus;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}
	
	@Override
	public String toString() {
		return "RequestBoard [reqNo=" + reqNo + ", reqCategory=" + reqCategory + ", reqTitle=" + reqTitle
				+ ", reqContent=" + reqContent + ", reqWriter=" + reqWriter + ", nickName=" + nickName + ", createDate="
				+ createDate + ", modifyDate=" + modifyDate + ", status=" + status + ", replyStatus=" + replyStatus
				+ ", contactEmail=" + contactEmail + "]";
	}
	
}
