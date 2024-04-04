import {React, useState} from "react"


export default function Login () {

const userNameHandler = (e)=>{
console.log(e.target.value)
}

return(
    <div>
        Login to play Keno
        <form>
            UserName<input name="username" value={"replace value"} type="text" onChange={userNameHandler}/>
            Password<input/>
        </form>
    </div>
)

}

