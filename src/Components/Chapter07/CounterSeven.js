import React,{useState,useEffect} from 'react'

import Axios from 'axios'

function CounterSeven() {
    
    const [post,setPost] = useState({})

    const [numberPost,ChanceNumberPost] = useState(1)
    const [idFromBtnClick,setIdBtnClick] = useState(1)
    // const [hande]
        useEffect(() => {
                Axios.get(`https://jsonplaceholder.typicode.com/posts/${numberPost}`)
                    .then((e) =>{
                        console.log(e);
                        // setPost(e.data);
                    })
                    .catch(err => console.error(err))
            },[numberPost])

    return (
        <div>
            <h2>Chapter 07</h2>
                <input onChange={(e) => ChanceNumberPost(e.target.value)} placeholder="Post Number"></input>
                <button >Want</button>
            {/* <ul>
                {
                    post.map((e) =>{
                    return <li key={e.id}>{e.title}</li>
                    })
                }
            </ul> */}
<div>{post.title}</div>
        </div>
    )
}

export default CounterSeven
