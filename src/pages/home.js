import React from "react";
import './styles.css';  // 引入CSS样式文件
import { Navigate, useNavigate } from 'react-router-dom'; // 导入路由跳转组件
import SplashCursor from '../pgmp_web/SplashCursor'




// 获取当前页面的屏幕宽度
const  page_width=window.innerWidth
function Responsive_computing(i){
  // 响应式计算css百分比函数
  // i 是 百分比
  // 该函数的作用是通过 window.innerWidth 动态获取当前页面的宽度 并动态计算css  宽度和高度的百分比是多少像素
  // screen variable=3.94     电脑屏幕 宽度一般是 1536 手机屏幕宽度一般是389  两者差值是3.94倍
  const screen_variable=3 
  let result  
  if(page_width<=450){
    result=i*0.01*screen_variable *page_width
  }else{
    result=i*0.01 *page_width
  }
  return result
}


// 获取当前页面的屏幕高度
const  page_height= window.outerHeight;
// alert(page_height)


// 定义生成气泡的函数
function createBubble() {
    // 获取气泡容器
    const bubbleContainer = document.getElementById('bubble-container');
    // 创建一个新的气泡元素
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // 随机生成气泡的颜色、大小、初始位置和速度
    const randomColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
    const randomSize = Math.random() * 50 + 20 + 'px'; // 气泡大小在20px到70px之间
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomSpeed = Math.random() * 5 + 1; // 气泡动画速度在1s到6s之间

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

    // 设置气泡的不规则运动（正弦波 + 缓动随机运动）
    let startTime = Date.now();
    let targetX = (Math.random() - 0.5) * 200; // 随机目标位置X
    let targetY = (Math.random() - 0.5) * 200; // 随机目标位置Y
    const amplitude = 50; // 波浪幅度
    const frequency = 2; // 波浪频率
    const speed = 0.1; // 缓动速度

    function animateBubble() {
        const time = (Date.now() - startTime) / 1000; // 获取经过的时间（秒）
        const waveY = amplitude * Math.sin(frequency * time); // Y轴正弦波运动

        // 计算当前气泡位置
        const currentX = parseFloat(bubble.style.transform.split('(')[1]) || 0;
        const currentY = parseFloat(bubble.style.transform.split(',')[1]) || 0;

        // 缓动移动到目标位置
        const newX = currentX + (targetX - currentX) * speed;
        const newY = currentY + (targetY - currentY) * speed + waveY;

        // 应用变换
        bubble.style.transform = `translate(${newX}px, ${newY}px)`;

        // 如果接近目标位置，设置新的随机目标
        if (Math.abs(newX - targetX) < 1 && Math.abs(newY - targetY) < 1) {
            targetX = (Math.random() - 0.5) * 200;
            targetY = (Math.random() - 0.5) * 200;
        }

        // 循环动画
        requestAnimationFrame(animateBubble);
    }

    animateBubble();

    // 设置气泡的消失时间
    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

function Htmlpage() {
    // 每隔一段时间生成一个新的气泡
    // React.useEffect(() => {
    //     const interval = setInterval(createBubble, 1000);
    //     return () => clearInterval(interval); // 组件卸载时清除定时器
    // }, []);
    const navigate = useNavigate();  //路由跳转 到添加课程页面
    function Click(){
      navigate('/1')
    }
    // 前端判断登录状态函数
    function Denglu() {
        let username = document.getElementById('username').value; // 获取username提交后的值
        let password = document.getElementById('password').value; // 获取password提交后的值
        console.log(username, password);
        if (username === 'admin' && password === '2567') {
            console.log('你输入的密码是对的，页面会跳转');
            // window.location.href = '1';  // 第一种跳转方式通过 js的原生方法跳转
            Click()  //第二种跳转方式 通过  react 的 navigate路由跳转组件来跳转
        } else {
            alert('用户名或密码错误'); 
        }
    }

    return (
        <>
            {/* <SplashCursor /> */}
            <div className="login-container">      
                <h2>玄 学 调 参</h2>
                <input type="text" id="username" placeholder="用户名" />
                <input type="password" id="password" placeholder="密码" />
                <button id="login-btn" onClick={Denglu}>登录</button>
            </div>
            {/* 动态气泡容器 */}
            <div id="bubble-container"></div>
        </>
    );
}

export default Htmlpage;