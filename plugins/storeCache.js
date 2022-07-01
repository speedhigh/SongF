export default function(ctx){
  //离开页面 刷新前 将store中的数据存到session
  window.addEventListener('beforeunload', () => {
    localStorage.setItem("storeCache",JSON.stringify(ctx.store.state))
  });
  //页面加载完成  将session中的store数据传回vuex
  window.scrollTo(0, 1)
  let storeCache = localStorage.getItem("storeCache")
  if(storeCache){
    ctx.store.replaceState(JSON.parse(storeCache));
  }
}