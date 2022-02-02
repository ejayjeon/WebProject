import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
// useHistory라는 훅 / useParams 훅
//import styled from 'styled-components'
import './Detail.scss'
import {Nav} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group'
import {useSelector, useDispatch} from 'react-redux'

// 컴포넌트 안에서 작은 컴포넌트를 만든다고 생각하면 된다
// let 박스 = styled.div`
//   padding: 20px;
// `;
// let 제목 = styled.h4`
// font-size : 30px;
// color : ${ props => props.색상 };
// `;
// 내부에서 props 문법을 이용할 수 있음

export default function Detail(props){

// tab UI

let [tab, tab변경] = useState(0);
let [스위치, 스위치변경] = useState(false);



// tab 
  function 재고(){
    return (
      <p>재고 : {props.재고[0]} </p>
    )
  }



  const state = useSelector(state => state.reducer)
  const dispatch = useDispatch();
  // state : reduX에 있는 모든 state
  // return으로 받을 State는 내가 설정하면됨
  // state.카트reducer
  console.log(state);


  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(상품) { 
    return 상품.id == id
  });


  const [alert, setAlert] = useState(true);
  useEffect(() => {
    let Time = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => { clearTimeout(Time) }
    }, [alert]); // 끝에 []를 넣는 이유는 업데이트 될 때마다 useEffect가 실행되는 것을 막기 위해 -> [] 안에는 이것이 변할 때만 이펙트를 주라는 뜻임 -> 일종의 실행조건
// 항상 보이는 UI가 아니라 껐다 켰다 하는 기능이 필요할 때 이렇게 Hook을 사용하여 만든다
// useEffect 안에 return 함수를 추가하면 컴포넌트가 사라질 때 특정 코드를 실행할 수 있다. 
    
    // history는 방문했던 url 기록을 모두 담은 object

    // 파라미터값을 가져다가 저장해서 쓸 수 있다 : 사용자가 입력한 URL 파라미터들
    /* 
    문제가 있음 : 가격 정렬버튼으로 shoes 데이터의 순서가 바뀐다면, 상세페이지도 틀어짐. 
    정렬기능을 실행하면 shoes라는 state가 변경됨
    이것을 방지하기 위해 상품에는 고유의 id가 있다. 그 id를 이용하는 것
    */
   
   // find() : 조건에 맞으면 첫 번째 값을 리턴 한다. 
  //  :id 입력한 값과 상품의 id가 같은 {상품데이터}를 찾아서 데이터바인딩을 하는 과정

    return(
    <div className="container">

        {
          alert === true 
          ? ( <div className='my-alert'>
              <p> 재고가 얼마 남지 않았습니다</p>
              </div> ) 
          : null
          // 아무것도 아닌 경우 null
          // UI는 대부분이 이런 패턴으로 만든다.
        }
          

      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + props.shoes[id] + '.jpg'} width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          
          <h3 className="pt-5">{찾은상품.title}</h3>
          {/* [:id 자리에 있던 숫자] 를 넣으면 상세 페이지가 달라질 것 */}
          <p className="red">{찾은상품.content}</p>
          <p>{props.shoes[id].price}</p>
          <재고 재고={props.재고}/>
          <button onClick={()=>{ props.재고변경([9, 10, 11]
          )}} className='btn btn-secondary m-1'>재고확인</button>


          <button onClick={()=>{

            dispatch({ type: '항목추가', payload: {id: 찾은상품.id, name: 찾은상품.title, quan: 1}})
            history.push('/cart')

          }} className='btn btn-success m-1'>+</button>


          <button onClick={()=>{ history.push('/buying') }} className="btn btn-danger m-1">주문하기</button> 
          {/* push 특정 경로로 이동하기 */}
          <button onClick={()=>{history.goBack()}} className="btn btn-danger m-1">뒤로가기</button> 
        </div>
      </div>

            {/* tab 만들기 
            1. 몇 번째 버튼을 눌렀는지 state로 저장해 둠
            2. state에 따라 UI가 보이게 안보이게 하기
            */}
            <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
            <Nav.Item>
              <Nav.Link eventKey="0" onClick={()=> { 스위치변경(false); tab변경(0)}}>상품소개</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1" onClick={()=> { 스위치변경(false); tab변경(1)}}>상품구조</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" onClick={()=> { 스위치변경(false); tab변경(2)}}>후기</Nav.Link>
            </Nav.Item>
          </Nav>
          <CSSTransition in={스위치} classNames="wow" timeout={500}>
            {/* in = 애니메이션 스위치 : true -- on */}
          <TabContent tab={tab} 스위치변경={스위치변경}/>
          </CSSTransition>
</div>

    )
}
function TabContent(props){

  useEffect(() => {
    props.스위치변경(true);
  })
  // 컴포넌트가 로드될 때 스위치가 true로 바뀌게 하기 위해 useEffect 이용

  if(props.tab === 0) {
    return <div> 0번째 내용입니다</div>
  } else if (props.tab === 1) {
    return <div> 1번째  내용입니다</div>
  } else if (props.tab === 2) {
    return <div> 2번째 내용입니다</div>
  } else if (props.tab === 3) {
    return <div> 3번째 내용입니다</div>
  }

}

// 옛날 방식
// function state를props화(state) {
//   return{
//       state : state.reducer,
//       // state 안에 모든 것을 state라고 부른다
//       광고닫기 : state.카트reducer
//   }
// }

// export default connect(state를props화)(Detail)
