import React from 'react'
import {Table} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'

export default function Cart() {

const state = useSelector(state => state.reducer)
const dispatch = useDispatch();


    return (
        <div>
            
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th colSpan={2}>수량변경</th>
    </tr>
  </thead>
          <tbody>
            {
              state.map((a, i) => {

              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td><button onClick ={() => { dispatch({ type: '수량증가', payload: a.id}) }} className='btn btn-success'> + </button></td>
                  <td><button onClick ={() => { dispatch({ type: '수량감소', payload: a.id}) }} className='btn btn-danger'> - </button></td>
                  {/* 데이터 수정요청은 props.dispatch  */}
              </tr>
              )
            })   
        }
          </tbody>
        </Table>
        { state.광고닫기 === true
        ? (<div className='my-alert mb-3'>
        <p> 신규상품 20% 세일 중 </p>
        <button onClick={() => { dispatch({type: '광고닫기'})}} className='btn btn-secondary mt-2'> X </button>
        </div>)
        : null
        }
        
        </div>
    )
}


// 옛날 방식
// function state를props화(state) {
//         return{
//             state : state.reducer,
//             // state 안에 모든 것을 state라고 부른다
//             광고닫기 : state.카트reducer
//         }
// }

// export default connect(state를props화)(Cart)