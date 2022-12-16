import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기 
// redux-actions createAction을 이용해 액션 생성 함수를 더 짧은 코드로 작성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태, 리듀서 함수 만들기
// redux-actions handleActions를 이용해 각 액션마다 업데이트 함수를 설정하는 형식으로 작성
const initialState =  {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
)

export default counter;