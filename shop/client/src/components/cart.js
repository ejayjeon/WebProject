import React from 'react'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'

function Cart(props) {
    return (
        <div>
            
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>방법</th>
    </tr>
  </thead>
          <tbody>
            {
              props.state.map((a, i) => {

              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td><button onClick ={() => { props.dispatch({ type: '수량증가'}) }}> + </button></td>
                  <td><button onClick ={() => { props.dispatch({ type: '수량감소'}) }}> - </button></td>
                  {/* 데이터 수정요청은 props.dispatch  */}
              </tr>
              )
            })   
        }
          </tbody>
        </Table>
        </div>
    )
}

function state를props화(state) {
        return{
            state : state
            // state 안에 모든 것을 state라고 부른다
        }
}

export default connect(state를props화)(Cart)