import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

// 콜백함수에는? 내가 원하는 state의 초기값
// Redux는 데이터 수정 방법을 미리 지정한다. state 데이터 관리 기능
let 초기값 = [{id: 0, name: '멋진신발', quan: 2}, {id: 1, name: '예쁜신발', quan: 5}] 
function reducer(state = 초기값, 액션){
  if(액션.type === '수량증가'){
    // 이 데이터가 증가했으면 좋겠어 : 수량증가라는 데이터 수량증가방법
    let copy = [...state];
    copy[0].quan++; // copy라는 deap copy 본에서 ++ 
    return copy 
    // 수량을 찾아서 수량에 1 더해서, 그 더한 copy 본을 뱉어냄
  } else if(액션.type === '수량감소') {
    let copy2 = [...state];
    copy2[0].quan--;
    return copy2;
  } else {
    return state
  }   
   // reducer 항상 수정된 state를 퉤 뱉는 함수다
   // default parameter 문법(ES6) 
}

let store = createStore(reducer);
// 만들어준 reducer를 store에 넣으면 끝




// HashRouter : Routing을 조굼 더 안전하게 할 수 있다 #가 붙음
// BrowsetRouter : 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
