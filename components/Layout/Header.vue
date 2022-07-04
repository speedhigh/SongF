<template>
  <header class="fixed top-0 inset-x-0 w-full h-[3.75rem] bg-white shadow-md flex items-center px-[3.75rem] text-sm z-50">
    <nuxt-link to="/" class="mr-24 cursor-pointer w-28 h-10">
      <img src="~/assets/logo.png" alt="logo" width="112" height="40">
    </nuxt-link>
    <!-- left header-nav -->
    <!-- 首页 -->
    <nuxt-link 
      to="/"
      class="header-nav"
      :class="{ 'text-primary' : $nuxt.$route.path === '/' }"
    >
      首页
    </nuxt-link>
    <!-- 活动专区 -->
    <div class="header-nav">活动专区</div>
    <!-- 在线医生 -->
    <div class="header-nav">在线医生</div>
    <!-- 在线商城 -->
    <div class="header-nav">在线商城</div>
    <!-- 最新资讯 -->
    <div class="header-nav">最新资讯</div>
    <!-- 签证办理 -->
    <div class="header-nav">签证办理</div>
    <!-- 身元保证 -->
    <div class="header-nav">身元保证</div>
    <!-- right header-nav -->
    <!-- 关注我们 -->
    <div class="ml-auto header-nav">关注我们</div>
    <!-- 联系我们 -->
    <div class="header-nav">联系我们</div>
    <!-- 下载发票 -->
    <div class="header-nav">下载发票</div>
    <!-- 登录、注册 -->
    <div class="ml-2 flex items-center space-x-2.5">
      <button 
        class="w-[3.75rem] h-[1.88rem] bg-primary text-white rounded-md hover:opacity-80 active:opacity-100" 
        @click="$nuxt.$router.push('/login')"
      >
        登录
      </button>
      <button 
        class="w-[3.75rem] h-[1.88rem] text-primary border border-primary rounded-md hover:opacity-80 active:opacity-100"
        @click="$nuxt.$router.push('/login')"
      >
        注册
      </button>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.header-nav {
  @apply cursor-pointer hover:text-primary py-3 px-2 mr-3.5
}
</style>