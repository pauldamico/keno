import {React, useState, useContext} from "react"
import { AuthContext } from "../context/authProvider"


export default function Login () {
    const [userInfo, setUserInfo] = useState({username:"", password:"", token:""})
const {loginDataHandler} = useContext(AuthContext)
const userChangeHandler = (e)=>{
    const {name, value} = e.target
    setUserInfo(prev=>({...prev,[name]:value}))
}

const loginSubmitHandler = (e)=>{
    e.preventDefault()
loginDataHandler(userInfo.username, userInfo.password, userInfo.token)
setUserInfo({username:"", password:"", token:""})
}

return(
    <div>
        Log in to play Keno
        <form onSubmit={loginSubmitHandler}>
            Username<input name="username" value={userInfo.username} type="text" onChange={userChangeHandler}/>
            Password<input name="password" value={userInfo.password} type="text" onChange={userChangeHandler}/>
            <button>Login</button>
        </form>
    </div>
)

}

