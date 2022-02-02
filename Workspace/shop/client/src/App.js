/* eslint-disable */
import React, {useState, useContext} from 'react'
import data from './components/data'
import './App.css';
import { Link, Route, Switch, useParams } from 'react-router-dom'
// Route : 매칭이 되기만 하면 전부 보여줌
// Switch : 하나가 켜지면 하나가 꺼짐
import Main from './components/main'
import NavBar from './components/Page/NavBar'
import Detail from './components/Page/Detail'
import axios from 'axios';
import Cart from './components/cart'

export let 재고context = React.createContext();
// 범위를 생성해주줌. 같은 변수값을 공유할 범위 생성
// props 전송 안하고 전송하기 위해



export default function App() {
  let [shoes,shoes변경]= useState(data);
  let [loding, setLoading] = useState(false);
  let [재고, 재고변경] = useState([10, 11, 12]);
  // 중요한 데이터는 App.js 에 보관 -> 많아지면 Redux 이용하여 별도로 보관
  let { id } = useParams();

  return (
  <div className='App'>
    <재고context.Provider value={재고}>
      {/* .Provider로 값의 공유를 원하는 범위를 감싸주면 됨 */}
  <NavBar/>
    
  <Switch>
  {/* 메인페이지 라우터 */}
  <Route exact path="/">
    <Main shoes={shoes}/>
  </Route>

  {/* 디테일페이지 라우터 */}
  <Route exact path="/detail/:id"> 
  {/* :id -> url의 파라미터, 아무문자나 받겠다는 URL 작명 */}
    <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
  </Route>
  <Route exact path="/cart">
    <Cart/>
  </Route>
  </Switch>
  {/* <button onClick={() => {누른제목변경(1)}}>버튼 2</button> */}


  <button onClick={() => {

    // 로딩중 UI 띄워주는 코드
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((요청) => { 
      // 요청이 성공했을 때 실행할 코드
      // 로딩중 UI 없애는 코드
      console.log(요청.data)
      /*
        Ajax를 이용해 받아온 상품데이터로 상품 3개를 하단에 추가하기
        1. button을 누르면 useState가 변경된다?
       */
      shoes변경([...shoes, ...요청.data]); // spread 대괄호를 벗겨줘 (shoes: [{},{},{}], 요청: [{},{},{}]) 같은 데이터형. 
      // 2. 그걸 shoes 라는 state에 추가하는 것
     })
    .catch((실패) => {
      // 요청이 실패했을 때 실행할 코드 
      // 로딩중 UI 없애는 코드
      console.log(실패)
      })
    // 새로고침 없이 데이터를 가져온다.
  }} className='btn btn-primary'>더보기</button>


{/* 

1. React.createCotext() 생성
2. context.Provider로 범위 감싸기
3. useContext(공유할 state)로 공유된 값 사용하기
4. 다른 파일에 있는 state를 전달하고 싶으면?
<Router>
  <재고context.Provider value={재고}>
    <Datail shose={shoes}/>
  </재고context.Provider value={재고}>
</Router>
이렇게 감싸주면 된다. 

다른 파일에서 let 재고 = useContext(재고context);

*/}


</재고context.Provider>
  
</div>
	);
}
