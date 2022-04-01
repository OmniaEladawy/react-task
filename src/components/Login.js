import './Login.css';
import React , {useState} from 'react';

function Login (){
    let [name,setName] = useState("");
    let [password,setPassword] = useState("");
    let [email,setEmail] = useState("");

    let nameChanged = (e)=>{
        let reg = /^[a-zA-Z ]{3,50}$/;
        if(!reg.test(e.target.value)){
            setName("Not valid name");
            e.target.style.borderColor='red';
        }else{
            setName("");
            e.target.style.borderColor='green';
        }
    }

    let passwordChanged = (e)=>{
        if(e.target.value.length < 8){
            setPassword("Not valid password");
            e.target.style.borderColor='red';
        }else{
            setPassword("");
            e.target.style.borderColor='green';
        }  
    }

    let emailChanged = (e)=>{
        if(e.target.value.indexOf("@") > 1 &&
        e.target.value.indexOf(".", e.target.value.indexOf("@")) >=
        e.target.value.indexOf("@") + 1){
            setEmail("");
            e.target.style.borderColor='green';
        }else{
            setEmail("Not valid email");
            e.target.style.borderColor='red';
        }
    }

    return (
        <form id="myForm" name="theForm" method="get" style={{backgroundColor:'#45a0ff' , padding:'90px 0'}}>
            <div className="container">
                <h1> Login </h1>
                <div className='inputRow' style={{height:'42px'}}>
                    <label htmlFor="name"> Name </label>
                    <input
                    required
                    style={{marginLeft:'40px'}}
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e)=>{
                        nameChanged(e);
                    }}
                    /><br />
                    <span id="textSpan"> {name} </span> <br /><br />
                </div>
                <div className='inputRow'>
                    <label htmlFor="email"> Email </label>
                    <input
                    required
                    style={{marginLeft:'45px'}}
                    type="Email"
                    id="email"
                    name="email"
                    onChange={(e)=>{
                        emailChanged(e);
                    }}
                    /><br />
                    <span id="emailSpan"> {email} </span>
                </div>
                <div className='inputRow'>
                    <label htmlFor="password"> Password </label>
                    <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e)=>{
                        passwordChanged(e);
                    }}
                    /><br />
                    <span id="passSpan">
                    {password}
                    </span>
                </div>
                <button type="submit" id="sub" >
                    Login
                </button>
            </div>
        </form>
    )
}

export default Login;