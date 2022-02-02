import React from 'react'

export default function Signup() {
  return (
    <div>
      <form action="/signup/success" method="post">
        이메일 <input type="email" name="email"/><br/><br/>
        비밀번호<input type="password" name="pwd"/><br/><br/>
        비밀번호확인<input type="password" name="pwd2"/><br/><br/>
       이름 <input type="text" name="name"/><br/><br/>
       연락처<input type="text" name="phone"/><br/><br/>
       생일<input type="date" name="birth"/><br/><br/>
       여<input type="radio" value="여" name="gender"/><br/><br/>
       남<input type="radio" value="남" name="gender"/> <br/><br/>
       <button type="submit">전송</button>
    </form>
    </div>
  )
}
