package member.model.vo;

public class MemberInfo {
	private int memberCount;    //총 멤버(튜티)수
	private int currentPage;  //현재 페이지
	private int pageLimit;    //한 페이지에서 보일 페이지 수
	private int memberLimit;    //한 페이지에서 보일 멤버(튜티)수
	private int maxPage;      //마지막 페이지
	private int startPage;    //페이징이 된 페이지 중 시작 페이지
	private int endPage;
	
	public MemberInfo(int memberCount, int currentPage, int pageLimit, int memberLimit, int maxPage, int startPage,
			int endPage) {
		super();
		this.memberCount = memberCount;
		this.currentPage = currentPage;
		this.pageLimit = pageLimit;
		this.memberLimit = memberLimit;
		this.maxPage = maxPage;
		this.startPage = startPage;
		this.endPage = endPage;
	}      //페이징이 된 페이지 중 마지막 페이지

	public int getMemberCount() {
		return memberCount;
	}

	public void setMemberCount(int memberCount) {
		this.memberCount = memberCount;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getPageLimit() {
		return pageLimit;
	}

	public void setPageLimit(int pageLimit) {
		this.pageLimit = pageLimit;
	}

	public int getMemberLimit() {
		return memberLimit;
	}

	public void setMemberLimit(int memberLimit) {
		this.memberLimit = memberLimit;
	}

	public int getMaxPage() {
		return maxPage;
	}

	public void setMaxPage(int maxPage) {
		this.maxPage = maxPage;
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	@Override
	public String toString() {
		return "MemberInfo [memberCount=" + memberCount + ", currentPage=" + currentPage + ", pageLimit=" + pageLimit
				+ ", memberLimit=" + memberLimit + ", maxPage=" + maxPage + ", startPage=" + startPage + ", endPage="
				+ endPage + "]";
	}
	
	
}
