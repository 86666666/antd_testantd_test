import React from "react";
import './styles.css';  //js中映入css样式文件的方式 中不能使用 <body href="styles.css"> 方式引入css方式 文件 
import { Navigate,useNavigate } from 'react-router-dom'; //导入路由跳转组件


//前端判断登录状态函数
function Denglu(){
    let username=document.getElementById('username').value; //获取username 提交后的值
    let password=document.getElementById('password').value; //获取password 提交后的值
    console.log(username,password);
    if(username=='admin' && password==2567){
        console.log('你输入的密码是对的，页面会跳转');
              // 跳转到 /dashboard 页面
        window.location.href = '1';  // 登录后如何跳转
        // fetch('http://121.37.152.111:8000/cbv/login',{
        //     method:'post',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body:{username:username,password:password}
        //     // body:JSON.stringify({username:username,assword:password})

        // }).then(Response =>{
        //     console.log(Response)
        // })
        // alert('你输入的密码是对的，页面会跳转');
    }else(
        alert('用户名或密码错误')
    )
};

// 定义生成气泡的函数
function createBubble() {
    // 获取气泡容器
    const bubbleContainer = document.getElementById('bubble-container');
    // 创建一个新的气泡元素
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
  
    // 随机生成气泡的颜色、大小、位置和速度
    const randomColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
    const randomSize = Math.random() * 100 + 20 + 'px';
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomSpeed = Math.random() * 5 + 1;
  
    // 设置气泡的样式
    bubble.style.width = randomSize;
    bubble.style.height = randomSize;
    bubble.style.backgroundColor = randomColor;
    bubble.style.left = randomX + 'px';
    bubble.style.top = randomY + 'px';
    bubble.style.animationDuration = `${randomSpeed}s`;
  
    // 将气泡添加到容器中
    bubbleContainer.appendChild(bubble);
  
    // 当气泡动画结束后移除它
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  
    // 设置气泡的不规则运动
    setTimeout(() => {
      const randomXOffset = (Math.random() - 0.5) * 200;
      const randomYOffset = (Math.random() - 0.5) * 200;
      bubble.style.transform = `translate(${randomXOffset}px, ${randomYOffset}px)`;
    }, 1000);
  
    // 设置气泡的消失时间
    setTimeout(() => {
      bubble.remove();
    }, 10000);
    // 监听窗口大小变化，确保气泡在窗口内生成
    window.addEventListener('resize', () => {
        // 移除所有现有的气泡
        bubbleContainer.innerHTML = '';
        });
}

function Htmlpage(){
        // 每隔一段时间生成一个新的气泡
        setInterval(createBubble, 1000);
    return(
        <>
        {/* <h1>P G M P 管理平台</h1> */}
        <div  className="login-container">
            <h2>P G M P 管理平台</h2>
            <input type="text" id="username" placeholder="用户名" />
            <input type="password" id="password" placeholder="密码" />
            <button id="login-btn" onClick={Denglu}>登录</button>
        </div>
        {/* <!-- 动态气泡容器 --> */}
        <div id="bubble-container"></div>
        </>
    )
}

export default Htmlpage;