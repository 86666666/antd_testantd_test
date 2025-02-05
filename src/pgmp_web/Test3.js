import { useState } from "react"
import toKenstore from "./Token"

function Test3(){
    //引入 useAppstore  的方法
    const token=toKenstore(state => state.token)
    const clear=toKenstore(state=> state.cleartoken)
    const add=toKenstore(state=> state.addtoken)
    // let globalState=localStorage.getItem('globalState'); //js获取localstorage值的方法
    // console.log(globalState)
    let new2token='flajflajflajflajf'
    return(
        <>
        <h1>
            this is zustand{token}
        </h1>
        <div>
            {/* 自定义添加token的方法 */}
            <button onClick={()=>add(new2token)}>添加token</button>  
            <button onClick={clear}>清除token</button>
        </div>
        
        </>
    )
}

export default  Test3