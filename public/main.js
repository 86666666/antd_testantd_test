



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
}

// 每隔一段时间生成一个新的气泡
setInterval(createBubble, 500);

// 监听窗口大小变化，确保气泡在窗口内生成
window.addEventListener('resize', () => {
  // 移除所有现有的气泡
  bubbleContainer.innerHTML = '';
});

//前端判断登录状态函数
function denglu(){
    let username=document.getElementById('username').value; //获取username 提交后的值
    let password=document.getElementById('password').value; //获取password 提交后的值
    console.log(username,password);
    if(username=='admin' && password==2567){
        console.log('你输入的密码是对的，页面会跳转');
        window.location.href = 'index.js';  // 正确：直接赋值给 href 属性
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



