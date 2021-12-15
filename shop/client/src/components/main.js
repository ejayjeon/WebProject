import { Button } from 'react-bootstrap';
//import axios from 'axios'; // Ajax 요청

export default function Main(props) {
    //const [shose,shose변경]= useState(data);

    function Jumbotron () {
        return(
          <div className='jumbotron'>
          <h1> 20% Seasons Off </h1>
          <Button variant="primary" size="lg">
          Search
          </Button>
          </div>
        )
      }
    function Card(props, shoes){
    return (
        <div className='col-md-4'>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} alt="" width="100%"/>
            <h3>{ props.shoes.title}</h3>
            {/* Array에서 무언가를 뽑아줄 때는 . 찍고 그 child를 뽑는다 
            - 위에서 shose[0]데이터를 shose라는 이름으로 props로 전송했기 때문에, 여기서는 props.shose.title 이렇게 줄여쓰면 된다.
            1. 같은 컴포넌트라고 항상 같은 내용만 보여줄 수 있는 건 아니다.
            2. props를 이용해 각각 다른 내용을 전송해주면 된다
            */}
            <h5>{ props.shoes.content }</h5>
            <h6>{ props.shoes.price }</h6>
            {/* Card Component에서 shoes로 props.shoes[i]값을 받아왔기 때문에, 그 shoes를 받아오고, Main으로부터 props를 또 받아와서 파라미터를 두 개로 한다*/}
        </div>
    )
    }

    return(
        <>
<Jumbotron className="background">
  </Jumbotron>
  <div className='container'>
    <div className='row'>
      {
        props.shoes && props.shoes.map((슈즈 ,i) => {
          // React는 렌더링이 화면에 커밋된 후에야 모든 효과를 실행한다.
          // React는 첫 턴에 데이터가 들어오지 않아도 렌더링이 실행되며, 그 데이터는 당연히 없으니 undefined로 정의되어 오류가 나는 것이다.
          // JS에서는 true && expression = expression이 실행되고, false && expression은 항상 false로 실행된다. 
          // 따라서 조건이 참이면 && 바로 뒤의 요소가 출력에 나타난다. 
          // 거짓이면 React는 무시하고 건너뛰는 것이다.
          return(
            <Card shoes={props.shoes[i]} i={i} key={i}/>
          )
        })
      }
      {/* 카드섹션 */}
  
    {/* props 사용법
    1. 자식 컴포넌트에 작명 = {state} 
    2. component param에 props를 받아옴
    3. map()으로 반복문으로 만듦
    4. map의 파라미터 중 첫 번째는 data가 가지고 있는 Array 데이터 하나하나를 의미한다. 이름은 무엇으로 해도 상관없다.
    5. map 파라미터 중 두 번째는 반복문을 돌리면서 1씩 증가하는 정수다
    6. mpa()함수는 자바스크립트의 함수로, 파라미터로 전달된 함수를 사용해 배열 각 요소를 원하는 규칙에 따라 변환한 다음 새로운 배열을 생성한다.
    7. 리액트에서 key는 렌더링 시 컴포넌트 배열에 어떤 변화가 일어났는지 빠르게 알아내기 위해 사용한다.
    8. 게시판의 게시물을 렌더링하는 예시가 있으면 게시물 번호를 key 값으로 설정해야 한다.  */}
  </div>
  </div>
    </>
    )
}