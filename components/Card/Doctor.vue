<template>
  <div class="w-full h-[18.88rem] rounded-md shadow-md border border-gray-50 p-5 relative">
    <div class="absolute top-0 right-0 px-4 h-[1.88rem] rounded-tr-md rounded-bl-2xl bg-primary text-center leading-[1.88rem] text-white text-lg">
      三甲
    </div>
    <div class="flex items-center space-x-5">
      <img src="https://api.lorem.space/image/face?w=66&h=66" alt="avatar" width="66" height="66" class="rounded-full flex-shrink-0">
      <div class="space-y-1">
        <p class="text-xl">尼古拉斯<span class="ml-2.5 text-base">院长</span><span class="ml-2 text-base">骨科</span></p>
        <p class="text-base">藤本养生院</p>
      </div>
    </div>
    <div class="mt-5 flex space-x-3.5">
      <div class="h-[1.63rem] px-2.5 bg-orange-100 text-primary text-xs text-center leading-[1.63rem] rounded-md">患者好评最多</div>
      <div class="h-[1.63rem] px-2.5 bg-orange-100 text-primary text-xs text-center leading-[1.63rem] rounded-md">可开处方</div>
      <div class="h-[1.63rem] px-2.5 bg-orange-100 text-primary text-xs text-center leading-[1.63rem] rounded-md">从业14年</div>
    </div>
    <p class="mt-5 text-base line-2 h-10 leading-[1.15rem]">
      擅长：颈椎病、后凸畸形、颈椎管狭窄、强直性脊柱炎、腰椎管狭窄症、腰椎滑脱症
    </p>
    <p class="mt-4 text-base text-gray-500 leading-none">
      好评<span class="text-gray-600 ml-1 mr-4">5.0</span>
      接诊量<span class="text-gray-600 ml-1">6630</span>
    </p>
    <div class="mt-4 flex space-x-5">
      <button 
        class="w-[7.5rem] h-9 border border-primary rounded-3xl text-base text-primary hover:(bg-primary text-white shadow-md shadow-primary/50)"
      >
        图文咨询
      </button>
      <button 
        class="w-[7.5rem] h-9 border border-primary shadow rounded-3xl text-base text-primary hover:(bg-primary text-white shadow-md shadow-primary/50)"
      >
        视频咨询
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>