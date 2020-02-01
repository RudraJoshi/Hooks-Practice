import React,{useState} from 'react'
import './CounterTwo.css'



function CounterTwo() {

    const initialBalance = 0

    const [name,changeName] = useState('');

    const [balance,ChangeBalance] = useState(0);

    return (
        <div className="counter-two-main">
            <hr/>
            <h2>Chapter 02</h2>
            <br/>
            <h3>Mr.$ {name} your Blance <span className="balance">$ {balance}</span></h3>

        <input onChange={(e) => changeName(e.target.value)} placeholder="Jhon doe"></input>

            <div className="btn-list">
                <button onClick={() => ChangeBalance(balance + 1)}>Inc</button>
                <button onClick={() => ChangeBalance(balance - 1)}>Dec</button>
                <button onClick={() => ChangeBalance(balance + 5)}>Add 5 </button>
                <button onClick={() => ChangeBalance(balance - 5)}>Sub 5 </button>
            </div>
            <div className="imp-btn">
                <button className="reset" onClick={() => ChangeBalance(initialBalance)}>Reset</button>
            </div>
        </div>
    )
}

export default CounterTwo
