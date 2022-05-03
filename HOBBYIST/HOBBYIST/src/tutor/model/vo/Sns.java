package tutor.model.vo;

public class Sns {
	private String facebook;
	private String twitter;
	private String youtube;
	private String instagram;
	
	public Sns() {}
	
	
	public Sns(String facebook, String twitter, String youtube, String instagram) {
		super();
		this.facebook = facebook;
		this.twitter = twitter;
		this.youtube = youtube;
		this.instagram = instagram;
	}


	public String getFacebook() {
		return facebook;
	}


	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}


	public String getTwitter() {
		return twitter;
	}


	public void setTwitter(String twitter) {
		this.twitter = twitter;
	}


	public String getYoutube() {
		return youtube;
	}


	public void setYoutube(String youtube) {
		this.youtube = youtube;
	}


	public String getInstagram() {
		return instagram;
	}


	public void setInstagram(String instagram) {
		this.instagram = instagram;
	}


	@Override
	public String toString() {
		return "Sns [facebook=" + facebook + ", twitter=" + twitter + ", youtube=" + youtube + ", instagram="
				+ instagram + "]";
	}
	
	

}
