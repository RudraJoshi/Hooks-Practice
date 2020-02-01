import React,{useState, useEffect} from 'react'

function CounterFive() {

    const [count,setCount] = useState(0);


    useEffect(() => {
        document.title = `you Clicked ${count} times`;
    })

    return (
        <div>
            <hr/>
            <h2>Chapter 05</h2>
            <h3>$ {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <hr/>
        </div>
    )
}

export default CounterFive
