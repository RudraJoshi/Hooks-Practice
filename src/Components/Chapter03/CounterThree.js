import React,{useState} from 'react'


function CounterThree() {
    const initialBalance = null ;
    const [name,changeName] = useState('');  
    const [balance,ChangeBalance] = useState(0);
        


    const loopBtn = (e) =>{
            e.preventDefault();
            for(let i = 0;i <= 5;i++){
                ChangeBalance(balance + i)
            }
        }




    return (
        <div className="counter-three-main">
            <hr/>
            <h2>Chapter 03</h2>
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
                <button onClick={loopBtn}>Loop To 5 Btn</button>
                <button className="reset" onClick={() => ChangeBalance(initialBalance)}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree
