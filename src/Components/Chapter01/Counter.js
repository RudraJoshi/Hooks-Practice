import React,{useState} from 'react'

import './Counter.css'



function Counter() {


    const [count,ChangeCount] = useState(0);


    return (
        <div>
            <hr/>
            <h2>Chapter 1</h2>
            <h3>Rudra Joshi your Balance <span className="count">$ {count} </span> </h3>
            <br/>
            <button onClick={() => ChangeCount(count + 1)}>Increase</button>
            <button onClick={() => ChangeCount(count - 1)}>Decrease</button>
            <button onClick={() => ChangeCount(count + 5)}>Add 5</button>
            <button onClick={() => ChangeCount(count - 5)}>Sub 5</button>
        </div>
    )
}

export default Counter
