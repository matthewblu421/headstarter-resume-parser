import React, { useState } from 'react';
import  Axios  from 'axios';

function PostForm() {
    const url = "";
    const [data, setData] = useState({
        name: "",
        date: "",
        iduser: ""
    })

function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}

function submit(e){
    e.preventDefault();
    Axios.post(url,{
        name: data.name,
        date: data.date,
        iduser: data.iduser
    })
    .then(res=>{
        console.log(res.data)
    })
}

    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type="text"></input>
                <input onChange={(e)=>handle(e)} id="date" value={data.date}  placeholder='date' type="date"></input>
                <input onChange={(e)=>handle(e)} id="iduser" value={data.iduser}  placeholder='iduser' type="number"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default PostForm;