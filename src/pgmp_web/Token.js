import { create } from "zustand"
import {createJSONStorage, persist }  from "zustand/middleware" // zustand 数据持久化的中间件

const toKenstore=create(
    persist(
        (set)=>({
            token:'1', //给token 设置初始值为1
            cleartoken:()=>set(state=>({token:state.token='1'})),  //清除localstorage 中值的方法 设置为1就代表清除
            addtoken:(newToken)=>set(state=>({token:state.token=newToken}))  // 通过传参的方式 自定义设置token
        }),
        {
            name:'globalState',
            storage:createJSONStorage(()=>localStorage)
        }
    )


)  // 通过create 函数去生成全局的store  create 里面接受的是一个函数
//  然后这个函数最后返回一个对象  这个最后返回的对象就是我们需要在全局里面去共享的一些数据和状态

export default  toKenstore