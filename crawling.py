import sched
import requests
from bs4 import BeautifulSoup
import telegram
from apscheduler.schedulers.blocking import BlockingScheduler
# url 
date = '20220130'
url = 'http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?areacode=01&theatercode=0013&date=${date}'
bot = telegram.Bot(token = '5090488960:AAE6mi74HeY8EVGlewpW1zOi6efFFF4IX_E')

# 반복되는 부분 함수로 선언
def job_function():
    html = requests.get(url)
    soup = BeautifulSoup(html.text, 'html.parser')

    # 영화 제목만 가져오기
    # 요청일 이후의 데이터는? date에 변수를 넣어서
    # 크롤링 메소드 1) find 2) select html 태그 정보 
    title_list = soup.select('div.info-movie')
    for title in title_list:
        print(title.select_one('a > strong').text.strip())


    # 1. IMAX가 오픈했는지
    imax = soup.select_one('span.imax')
    if(imax):
        # 2. IMAX 정보를 받아와서, 그 부모 요소를 타고 올라가 info-movie의 제목 정보를 받아온다 
        imax = imax.find_parent('div', class_='col-times')
        imax_title = imax.select_one('div.info-movie > a > strong').text.strip()
        imax_times = imax.select('div.type-hall > div.info-timetable > ul')
        bot.sendMessage(chat_id=5127069833, text=imax_title + '의 IMAX 예매가 열렸습니다')
        for imax_time in imax_times:
            # if(imax_time.has_attr('span', value_='마감')):
            bot.sendMessage(chat_id=5127069833, text=imax_time.text.strip())
            sched.pause() # 열리게 되면 shed를 멈춤
    # else:
    #     bot.sendMessage(chat_id=5127069833, text=imax + '예매가 열리지 않았습니다')

# APSchedular : 스케줄러를 시작 시켰다가 일정한 조건이 왔을 때 멈출 수 있는 기능 
# blockingSchedular 
sched = BlockingScheduler()
# 함수로 선언되는 반복부분을, interval로, 5초마다 반복하는 의미
sched.add_job(job_function, 'interval', seconds=5)
sched.start()

# 조건 설정: 이제 IMAX가 열리면 스케줄러를 정지시키는 부분을 알아야 함 -> if문