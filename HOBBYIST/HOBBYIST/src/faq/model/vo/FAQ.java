package faq.model.vo;

public class FAQ {
	
	private int faqNo;
	private String faqTitle;
	private String faqReply;
	private String faqCategory;
	
	public FAQ() {}


	public FAQ(int faqNo, String faqTitle, String faqReply, String faqCategory) {
		super();
		this.faqNo = faqNo;
		this.faqTitle = faqTitle;
		this.faqReply = faqReply;
		this.faqCategory = faqCategory;
		
	}


	public int getFaqNo() {
		return faqNo;
	}


	public void setFaqNo(int faqNo) {
		this.faqNo = faqNo;
	}
	
	
	public String getFaqTitle() {
		return faqTitle;
	}


	public void setFaqTitle(String faqTitle) {
		this.faqTitle = faqTitle;
	}

	
	public String getFaqCategory() {
		return faqCategory;
	}


	public void setFaqCategory(String faqCategory) {
		this.faqCategory = faqCategory;
	}


	public String getFaqReply() {
		return faqReply;
	}


	public void setFaqReply(String faqReply) {
		this.faqReply = faqReply;
	}


	@Override
	public String toString() {
		return "FAQ [faqNo=" + faqNo + ", faqTitle=" + faqTitle + ", faqReply=" + faqReply + ", faqCategory="
				+ faqCategory + "]";
	}
	

}