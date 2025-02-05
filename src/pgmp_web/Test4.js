import { useState } from "react"
import useAppstore from "./Token"

function Test4(){
    //引入 useAppstore  的方法
    const count=useAppstore(state => state.count)
    return(
        <>
        <h1>
            这是首页
        </h1>

        </>
    )
}


export default  Test4