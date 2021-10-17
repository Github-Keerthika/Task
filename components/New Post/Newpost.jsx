import axios from 'axios';
import React,{useState} from 'react';
import Header from '../Header/Header';
import "./newPost.css";

export default function Newpost() {
    const [userId, title,bodysetuserId]=useState(0);

    const userIdChange=(event)=
        setuserId(event.value);
    }
    const titleChange=(event)=>{
        settitle(event.value);
    }
    const bodyChange=(event)=>{
        setbody(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    Data post();
        setuserId(0);
        settitle("");
        setbody("");
        
    }
    
    //Post Data
    const postData=async()=>{
        try{
            const {data:post} = await axios.post("https://jsonplaceholder.typicode.com/posts",{
                userId,
                title,
            });
        }
        catch(err){
            console.log("error",err)
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={(event)=>handleSubmit(event)}>

                <div className="box-row">

                    <div className="row">
                        <label  className="col-sm-2  col-form-label">User Id</label>

                        <div className="row ">
                            <input type="text" className="form-control" value={userId} onChange={(event)=>userIdChange(event)}/>
                        </div>

                    </div>

                    <div className="row">
                        <label  className=" col-form-label">Title</label>

                        <div className="col ">
                            <input type="text" className="form-control" value={title} onChange={(event)=>titleChange(event)}/>
                        </div>

                    </div>

                    <div className="row">
                        <label  className="col-form-label">Body</label>

                        <div className="col ">
                            <textarea className="form-control" value={body} onChange={(event)=>bodyChange(event)}/>
                        </div>
                        
                    </div>

                    <div className="text-center">
                        <input type="submit" className="btn btn-success"/> 
                    </div>

                </div>

            </form>
        </div>
    )
}