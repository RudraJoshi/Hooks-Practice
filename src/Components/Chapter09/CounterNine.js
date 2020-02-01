import React ,{useReducer} from 'react'


const initialState = 0;

const reducer = (state,action) => {
    if(action.type === 'INC'){
            return state + 1;
    }
    if(action.type === 'DEC'){
        return state - 1;
}
if(action.type === 'RESET'){
    return initialState;
}

return state;

}


function CounterNine() {

    const [count , dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <h2>Chapter Nine [REDUCER PART-2]</h2>
    <h3>Count {count}</h3>
            <div>
                <button onClick={() => dispatch({type:'INC'})}>INCREAMENT</button>
                <button onClick={() => dispatch({type:'DEC'})}>Decrement</button>
                <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
            </div>


            <hr/>
        </div>
    )
}

export default CounterNine
