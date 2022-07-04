<template>
  <div class="relative pb-[60px]">
    <!-- banner -->
    <div class="w-full h-[420px]">
      <img src="~/assets/images/home/banner.webp" alt="banner" width="1920" height="420" class="w-full h-[420px]">
    </div>
    <!-- search -->
    <div class="relative -mt-[30px]">
      <div class="w-[45rem] h-[3.75rem] mx-auto rounded-md bg-white shadow-lg flex items-center">
        <div class="flex-grow w-full px-6">
          <input type="text" placeholder="搜索医生、药品、医疗器材、体检套餐、资讯等" class="w-full text-sm">
        </div>
        <button
          aria-label="Right Align" 
          class="flex-shrink-0 ml-auto w-[5.63rem] h-full rounded-md bg-primary text-white hover:opacity-80 active:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
    <!-- kingkong -->
    <HomeKingkong />

    <!-- main -->
    <main class="mt-[59px] w-[1400px] mx-auto space-y-[60px]">
      <!-- section-在线医生 -->
      <HomeSectionDoctor />
      <!-- section-在线商城 -->
      <HomeSectionShop />
      <!-- section-最新资讯 -->
      <HomeSectionInfo />
      <!-- section-更多推荐产品 -->
      <HomeSectionMore />
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>
