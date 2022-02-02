import { combineReducers } from "redux";
// 여러 가지 Reducer들을 하나로 묶어줌 : 어떻게 stage가 변하는지 확인한 다음에 변한 마지막 값을 반환해주는 것이 Reducer
import user from './user_reducer';
// import comment from './comment_reducer';

const rootReducer = combineReducers({
 user,
})

export default rootReducer;