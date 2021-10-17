import React,{useState} from 'react'
import Header from '/Header/Header';
import "/login.css"

const users=[];
var userChecker=false;

export  function Login() {
    const[userName,setuserName]=userName("");

    const handleChange=(event)=>{
        setuserName(event.target.value);
    }

    //Storing users in array
    const loginRegister=()=>{
        if(userName.length){
            if(users.length===1){
                users.push(userName);
                userChecker= false;
            }
            else{
                
                for (var x of users){
                    if(x===userName){
                        userChecker= true;
                    }
                    else if(x==users[users.length-1]){
                        users.push(userName);
                        userChecker= false;
                        
                    }
                }
            }
        }

        //Setting the username and userPresent values in local storage to ensure user is present or not
        window.localStorage.setItem("Login",Checker);
        window.localStorage.setItem("Name",Name);
        setuserName("");
    }
    
    return (
        <div>

            <Header />

            <div className="box ">

                <div className="Container">

                    <div className=" inputBox">
                        <label for="Input1" className="form-loginLabel">Enter Username</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" value={userName} placeholder="eg.john Durai" onChange={(event)=>handleChange(event)} />
                    </div>

                    <div className="d-flex">
                    
                        <button className="loginbtn-primary mx-3 my-3" onClick={()=>loginRegister()}>Login</button>
                        <NavLink to="/"><button className="btn-secondary mx-3 my-3">Home</button></NavLink>

                    </div>

                </div>

            </div>
        </div>
    
    )
}
