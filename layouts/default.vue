<template>
  <div 
    class="w-full bg-white min-h-screen relative pt-[3.75rem] text-gray-900 cursor-default"
    :class="$nuxt.$route.path === '/login' ? 'pb-44' : 'pb-[27.75rem]'"
  >

    <!-- HEADER -->
    <header>
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
        <button class="btn-login" @click="$nuxt.$router.push('/login')">登录</button>
        <button class="btn-register">注册</button>
      </div>
    </header>

    <!-- CONTENT -->
    <Nuxt />

    <!-- FOOTER -->
    <footer :class="$nuxt.$route.path === '/login' ? 'h-44' : 'h-[27.75rem]'">
      <!-- menu -->
      <div
        v-if="$nuxt.$route.path !== '/login'"
        class="py-9 w-[75rem] h-[14.75rem] mx-auto border-b border-gray-300 flex space-x-[3.75rem]"
      >
        <div class="flex-shrink-0 w-[214px] space-y-6">
          <img src="~/assets/logo.png" alt="logo" width="158" height="56">
          <p class="leading-[1.38rem] text-gray-500">光大健康在线是国内规模较大、行业较为领先的健康管理集团，是集体检、咨询、资讯、购药等功能于一体的公司</p>
        </div>
        <div class="flex-grow w-full flex justify-between">
          <!-- 活动专区 -->
          <div 
            v-for="(item, index) in footerMenu" 
            :key="index"
          >
            <h3>{{ item.title }}</h3>
            <div class="mt-4 space-y-0.5 text-gray-500">
              <p 
                v-for="(nav, i) in item.list" 
                :key="i" 
                class="py-1 cursor-pointer hover:(text-gray-900 font-bold)"
              >
                {{ nav.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 四大保证 -->
      <div 
        class="w-[75rem] h-[6.5rem] mx-auto flex items-center justify-between"
        :class="{'mt-[1.81rem]': $nuxt.$route.path !== '/login'}"
      >
        <!-- 官方直营 -->
        <div class="flex items-center space-x-7">
          <div class="w-10 h-10 bg-gray-700 text-xl font-bold text-white text-center leading-10 rounded-full">官</div>
          <div class="space-y-1.5 w-48">
            <p class="tracking-wider font-bold">官方直营</p>
            <p class="text-gray-500">一百余家直营体检中心上预约、专注健康体检17年</p>
          </div>
        </div>
        <!-- 团队优势 -->
        <div class="flex items-center space-x-7">
          <div class="w-10 h-10 bg-gray-700 text-white text-center leading-9 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div class="space-y-1.5 w-48">
            <p class="tracking-wider font-bold">团队优势</p>
            <p class="text-gray-500">拥有成熟的技术开发和专业的团队客服坐席为您服务</p>
          </div>
        </div>
        <!-- 专业保证 -->
        <div class="flex items-center space-x-7">
          <div class="w-10 h-10 bg-gray-700 text-white text-center leading-9 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
          </div>
          <div class="space-y-1.5 w-48">
            <p class="tracking-wider font-bold">专业保证</p>
            <p class="text-gray-500">拥有三家医院返聘医师、国际先进设备、高质量的服务</p>
          </div>
        </div>
        <!-- 售后服务 -->
        <div class="flex items-center space-x-7">
          <div class="w-10 h-10 bg-gray-700 text-xl font-bold text-white text-center leading-10 rounded-full">退</div>
          <div class="space-y-1.5 w-48">
            <p class="tracking-wider font-bold">售后服务</p>
            <p class="text-gray-500">未消费订单及时退、过期退、体检保障和隐私保障</p>
          </div>
        </div>
      </div>
      <!-- 底部信息 -->
      <div class="h-[74px] text-gray-500 flex items-center justify-center whitespace-pre">
        <p>Copyright  2020 余益惠版权所有    余益惠（威海）信息咨询有限公司    鲁ICP备20024805号-1</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerMenu: [
        {
          title: '活动专区', 
          list: [
            { title: '光大银行活动专区', href: '/' },
            { title: '中青旅活动专区', href: '/' },
            { title: '老年大学专区', href: '/' },
          ]
        },
        {
          title: '在线医生', 
          list: [
            { title: '国内健康咨询', href: '/' },
            { title: '日本健康咨询', href: '/' }
          ]
        },
        {
          title: '在线商城', 
          list: [
            { title: '药品商城', href: '/' },
            { title: '赴日体检', href: '/' },
            { title: '医疗器械', href: '/' },
            { title: '老年介护', href: '/' },
          ]
        },
        {
          title: '最新资讯', 
          list: [
            { title: '诊疗技术', href: '/' },
            { title: '药品信息', href: '/' },
            { title: '医疗器械', href: '/' }
          ]
        },
        {
          title: '签证办理', 
          list: [
            { title: '签证办理', href: '/' }
          ]
        },
        {
          title: '身元保证', 
          list: [
            { title: '身元保证', href: '/' }
          ]
        },
      ]
    }
  }
}
</script>

<style>
header {
  @apply fixed top-0 inset-x-0 w-full h-[3.75rem] bg-white z-[1000] shadow-md flex items-center px-[3.75rem] text-sm
}
.header-nav {
  @apply cursor-pointer hover:text-primary py-3 px-2 mr-3.5
}
.btn-login {
  @apply w-[3.75rem] h-[1.88rem] bg-primary text-white rounded-md hover:opacity-80 active:opacity-100
}
.btn-register {
  @apply w-[3.75rem] h-[1.88rem] text-primary border border-primary rounded-md hover:opacity-80 active:opacity-100
}
footer {
  @apply absolute bottom-0 inset-x-0 w-full bg-gray-100
}

/* 全局样式 */
input, button, select, textarea { outline: none !important }
textarea { resize: none !important }
h2 { @apply text-[1.75rem] font-bold }
h3 { @apply text-base }
p { @apply text-sm }
.line-1 { @apply break-words line-clamp-1 }
.line-2 { @apply break-words line-clamp-2 }
</style>