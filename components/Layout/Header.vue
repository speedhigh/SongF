<template>
  <header class="fixed top-0 inset-x-0 w-full h-[3.75rem] bg-white shadow-md flex items-center px-[3.75rem] text-sm z-50">
    <nuxt-link to="/" class="mr-24 cursor-pointer w-28 h-10">
      <img src="~/assets/logo.png" alt="logo" width="112" height="40">
    </nuxt-link>
    <!-- left header-nav -->
    <nuxt-link 
      :to="item.path"
      v-for="item in navList"
      :key="item.id"
      class="header-nav"
      :class="{ 'text-primary' : $nuxt.$route.path === item.path }"
    >
      {{ item.title }}
    </nuxt-link>

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
        @click="$nuxt.$router.push('/login/regisiter')"
      >
        注册
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { id: '1', title: '首页', path: '/' },
        { id: '2', title: '活动专区', path: '/active' },
        { id: '3', title: '在线医生', path: '/doctor' },
        { id: '4', title: '在线商城', path: '/shop' },
        { id: '5', title: '最新资讯', path: '/info' },
        { id: '6', title: '签证办理', path: '/visa' },
        { id: '7', title: '身元保证', path: '/guarantee' },
      ]
    }
  }
}
</script>

<style>
.header-nav {
  @apply cursor-pointer hover:text-primary py-3 px-2 mr-3.5
}
</style>