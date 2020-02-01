import React,{useReducer} from 'react'
import { Simulate } from 'react-dom/test-utils';


const intialstate = {
    firstcounter : 0,
};

const reducer = (state,action) => {
    if(action.type === 'INC'){
        return state + 1
    }

    if(action.type === 'DEC'){
        return state - 1
    }

    if(action.type === 'RESET'){
        return intialstate
    }

return state;
}


function CounterTen() {


    const [count ,dispatch] = useReducer(reducer,intialstate)

    return (

        <div>
            <h2>Chapter 10 [Reducer Advance]</h2>
    <h3>Count - {count.firstcounter}</h3>
            <div >
                <button onClick={() => dispatch({type:'INC'})}>Inc</button>
                <button onClick={() => dispatch({type:'DEC'})}>DEC</button>
                <button onClick={() => dispatch({type:'RESET'})}>RESET</button>
            </div>

            <hr/>
        </div>
    )
}

export default CounterTen
