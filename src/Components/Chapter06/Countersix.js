import React,{useState, useEffect} from 'react'

function Countersix() {

    const [x,setX ]  = useState(0)
    const [y,setY] = useState(0)

const mousePos = (e) =>{
    setX(e.clientX);
    setY(e.clientY)
}

    useEffect(() => {
        console.log("USE EFFECT CALLED");
        window.addEventListener("mouseover",mousePos)
    },[])

    return (
        <div>
            <hr/>
            <h2>Chapter 06</h2>

    <h3>hooks - X {x} y {y}</h3>
        </div>
    )
}

export default Countersix
