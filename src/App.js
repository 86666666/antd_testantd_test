function Profile() {   //定义一个组件
  return (
<div>nihao</div>
  );
}

export default function Gallery() {
  return ( //复用三个组件
    <section>
      <h1>Amazing scientists</h1>
      <Profile />   
      <Profile />
      <Profile />
    </section>
  );
}