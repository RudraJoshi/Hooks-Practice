import React,{useState} from 'react'

function CounterFour() {

    const [name,changeName] = useState({fName:'',sName:''});

    return (
        <div>
            <br/>
            <h2>Chapter 04</h2>
            <div className="main-hero">
                <h3>Welcome {name.fName} {name.sName}</h3>
            </div>
            <div className="input-div">
                <input placeholder="Jhon" onChange={(e) => changeName({...name,fName:e.target.value})}></input>
                <input placeholder="Doe" onChange={(e) => changeName({...name,sName:e.target.value})}></input>
            </div>
            <p>{JSON.stringify(name)    }</p>
        </div>
    )
}

export default CounterFour
