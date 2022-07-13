<template>
  <section class="space-y-[30px]">
    <div class="flex items-center space-x-3.5">
      <img src="~/assets/images/shop/icon-d.png" alt="赴日医检" width="23" height="25">
      <h2>赴日医检</h2>
    </div>
    <div class="grid grid-cols-4 h-[380px] gap-x-6">
      <div class="w-full h-full rounded-md cursor-pointer hover:opacity-80">
        <img src="https://api.lorem.space/image/furniture?w=332&h=380" alt="药品" width="100%" height="380" class="rounded-md">
      </div>
      <div 
        v-for="i in 3" 
        :key="i" 
        class="w-full h-[380px] rounded-md shadow-md border border-gray-50 pl-5"
      >
        <div class="pt-6 pb-4 border-b-2 border-dotted">
          <p class="text-lg">福自健康</p>
          <h3 class="mt-2 text-2xl">甲状腺体检套餐</h3>
        </div>
        <div class="pt-6 pb-8">
          <ul class="space-y-2">
            <li class="text-base text-gray-500">· 三天两晚大阪之行</li>
            <li class="text-base text-gray-500">· 价格优惠，推荐套餐</li>
            <li class="text-base text-gray-500">· 多位专家亲自坐诊</li>
            <li class="text-base text-gray-500">· 沿途风景领略</li>
            <li class="text-base text-gray-500">· 专属翻译随身陪同</li>
          </ul>
        </div>
        <div class="mt-auto flex items-end pr-5">
          <p class="text-[2.13rem] text-primary"><span class="text-[1.63rem]">￥</span>16888</p>
          <button class="w-[7.5rem] h-10 bg-primary rounded-md text-base text-white ml-auto hover:(transition transform scale-105) active:opacity-70 active:opacity-70">立即抢购</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>