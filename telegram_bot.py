import telegram

bot = telegram.Bot(token = '5090488960:AAE6mi74HeY8EVGlewpW1zOi6efFFF4IX_E')
# for i in bot.getUpdates():
#     print(i.message)

# 메세지를 보낸다
bot.sendMessage(chat_id=5127069833, text='삐야~~~ 메롱')