package member.model.vo;

public class KakaoEnroll {

	
	private int kakaoNo;
	private String kakakoAccount;
	private String kakaoNickname;
	private String kakaoGender;
	private String kakaoAge;
	
	public KakaoEnroll() {}

	public KakaoEnroll(int kakaoNo, String kakakoAccount, String kakaoNickname, String kakaoGender, String kakaoAge) {
		super();
		this.kakaoNo = kakaoNo;
		this.kakakoAccount = kakakoAccount;
		this.kakaoNickname = kakaoNickname;
		this.kakaoGender = kakaoGender;
		this.kakaoAge = kakaoAge;
	}

	public int getKakaoNo() {
		return kakaoNo;
	}

	public void setKakaoNo(int kakaoNo) {
		this.kakaoNo = kakaoNo;
	}

	public String getKakakoAccount() {
		return kakakoAccount;
	}

	public void setKakakoAccount(String kakakoAccount) {
		this.kakakoAccount = kakakoAccount;
	}

	public String getKakaoNickname() {
		return kakaoNickname;
	}

	public void setKakaoNickname(String kakaoNickname) {
		this.kakaoNickname = kakaoNickname;
	}

	public String getKakaoGender() {
		return kakaoGender;
	}

	public void setKakaoGender(String kakaoGender) {
		this.kakaoGender = kakaoGender;
	}

	public String getKakaoAge() {
		return kakaoAge;
	}

	public void setKakaoAge(String kakaoAge) {
		this.kakaoAge = kakaoAge;
	}

	@Override
	public String toString() {
		return "KakaoEnroll [kakaoNo=" + kakaoNo + ", kakakoAccount=" + kakakoAccount + ", kakaoNickname="
				+ kakaoNickname + ", kakaoGender=" + kakaoGender + ", kakaoAge=" + kakaoAge + "]";
	}
	
	
}