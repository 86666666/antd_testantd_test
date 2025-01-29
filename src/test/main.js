//1 获取事件源
let botn=document.getElementById('btn')
let newimg=document.getElementsByTagName('img')[0]
//绑定事件 js点击点击事件
botn.onclick=function(){
    //点击触发函数
    if(botn.innerHTML=='隐藏'){
          newimg.style.display='none'; //这段代码的作用是通过 JavaScript 修改指定元素的 CSS display 属性，将其设置为 'none'。这将导致该元素在页面上不可见，并且不会占据任何布局空间
          botn.innerHTML='显示'
    }else{
          newimg.style.display='block' //block：将元素展示出来 元素作为块级元素显示（独占一行）
          botn.innerHTML='隐藏'
    }
}