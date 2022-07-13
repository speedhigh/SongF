<template>
  <div class="w-full h-[330px] relative">
    <img src="~/assets/images/shop/banner.webp" alt="banner" width="1920" height="330" class="absolute w-full h-[330px]">
    <div class="relative inset-0 w-full h-full text-center text-white py-14">
      <h1 class="text-[2.5rem] font-bold text-shadow-lg shadow-[#D77104]">「在线商城」</h1>
      <h3 class="mt-7 text-shadow-lg shadow-[#D77104]">集药品、体检、医疗器材、老年介护等于一体的商城</h3>
      <div class="mt-7 w-[45rem] h-[3.75rem] mx-auto rounded-md shadow-lg flex items-center bg-[rgba(255,255,255,0.6)]">
        <div class="flex-grow w-full h-full px-6">
          <input 
            type="text" 
            placeholder="搜索药品、体检、器材或其他关键词" 
            class="w-full h-full text-sm bg-transparent text-gray-900 placeholder-gray-600"
          >
        </div>
        <button
          aria-label="Right Align"
          class="flex-shrink-0 ml-auto w-[5.63rem] h-full rounded-md bg-white text-[#EEA53C] hover:opacity-90 active:opacity-100"
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
</template>

<script>
export default {
  data() {
    return {
      hotSearchList: [
        { id: '1', title: '家庭常备药' },
        { id: '2', title: '感冒药' },
        { id: '3', title: '血压仪' },
        { id: '4', title: '女士体检套餐' }
      ]
    }
  }
}
</script>

<style>

</style>