<template>
  <div>
    <!-- banner -->
    <div class="w-full h-[330px] relative">
      <img src="~/assets/images/active/banner.webp" alt="banner" width="1920" height="330" class="absolute w-full h-[330px]">
      <div class="relative inset-0 w-full h-full text-center text-white py-14">
        <h1 class="text-[2.5rem] font-bold text-shadow-lg shadow-[#A00D23]">「活动专区」</h1>
        <h3 class="mt-7 text-shadow-lg shadow-[#A00D23]">携手多家企业联合推出优惠活动</h3>
        <div class="mt-7 w-[45rem] h-[3.75rem] mx-auto rounded-md shadow-lg flex items-center bg-[rgba(255,255,255,0.6)]">
          <div class="flex-grow w-full h-full px-6">
            <input 
              type="text" 
              placeholder="搜索医生、药品、医疗器材、体检套餐、资讯等" 
              class="w-full h-full text-sm bg-transparent text-gray-900 placeholder-gray-600"
            >
          </div>
          <button
            aria-label="Right Align" 
            class="flex-shrink-0 ml-auto w-[5.63rem] h-full rounded-md bg-white text-[#E8324F] hover:opacity-90 active:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <div class="mt-5 w-[45rem] mx-auto flex items-center">
          <p>热门搜索：</p>
          <p v-for="item in hotSearchList" :key="item.id" class="ml-2 cursor-pointer hover:underline">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" />
    <!-- content -->
    <div class="w-[1400px] mx-auto py-10 grid grid-cols-3 gap-x-7 gap-y-[1.88rem]">
      <div 
        v-for="i in 5" :key="i" 
        class="w-full h-[300px] rounded-md relative shadow-lg cursor-pointer hover:(transition transform scale-105 shadow-xl)"
      >
        <img src="https://api.lorem.space/image/house?w=448&h=300" alt="img" width="100%" height="300" class="rounded-md">
        <div class="absolute bottom-0 inset-x-0 w-full bg-[rgba(255,255,255,0.9)] h-[60px] rounded-b-md flex items-center px-5 space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
          <p class="text-2xl">老年大学专区</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: [
        { title: '首页', path: '/' },
        { title: '活动专区', path: '' },
      ],
      hotSearchList: [
        { id: '1', title: '光大银行活动' },
        { id: '2', title: '老年大学专区' },
        { id: '3', title: '中青旅' },
      ]
    }
  }
}
</script>