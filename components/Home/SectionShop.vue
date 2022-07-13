<template>
  <div>
    <!-- 1`title -->
    <div class="flex items-end">
      <h2>在线商城</h2>
      <p 
        class="ml-auto cursor-pointer text-gray-500 hover:(text-gray-900 transform scale-105) active:opacity-70"
        @click="$nuxt.$router.push('/shop')"
      >
        查看更多>>
      </p>
    </div>
    <!-- 2menu -->
    <div class="mt-[30px] flex space-x-6">
      <div class="w-full h-[380px] rounded-md shadow-md cursor-pointer hover:(shadow-lg shadow-red-300/40 transition transform scale-105) active:opacity-70">
        <img src="~/assets/images/home/shop-a.webp" alt="药品商城" width="100%" height="380" class="rounded-md">
      </div>
      <div class="w-full h-[380px] rounded-md shadow-md cursor-pointer hover:(shadow-lg shadow-green-300/40 transition transform scale-105) active:opacity-70">
        <img src="~/assets/images/home/shop-b.webp" alt="保健品" width="100%" height="380" class="rounded-md">
      </div>
      <div class="w-full h-[380px] rounded-md shadow-md cursor-pointer hover:(shadow-lg shadow-orange-300/40 transition transform scale-105) active:opacity-70">
        <img src="~/assets/images/home/shop-c.webp" alt="赴日医检" width="100%" height="380" class="rounded-md">
      </div>
      <div class="w-full h-[380px] rounded-md shadow-md cursor-pointer hover:(shadow-lg shadow-blue-300/40 transition transform scale-105) active:opacity-70">
        <img src="~/assets/images/home/shop-d.webp" alt="医用器械" width="100%" height="380" class="rounded-md">
      </div>
    </div>
    <div class="mt-5 flex space-x-6">
      <div 
        v-for="i in 4" :key="i" 
        class="w-full h-[180px] rounded-md shadow-md border border-gray-50 pt-5 px-[1.31rem] pb-[1.31rem]"
      >
        <p class="text-2xl leading-none">国内药品<span class="ml-4 text-base text-gray-500">正品保证，直邮到家</span></p>
        <div class="mt-4 pl-4 flex space-x-12">
          <img 
            src="https://api.lorem.space/image/shoes?w=96&h=96" 
            alt="商品a" 
            width="96" 
            height="96" 
            class="rounded-md cursor-pointer hover:(transition transform scale-105 shadow-md) active:opacity-70"
          >
          <img 
            src="https://api.lorem.space/image/watch?w=96&h=96" 
            alt="商品b" 
            width="96" 
            height="96" 
            class="rounded-md cursor-pointer hover:(transition transform scale-105 shadow-md) active:opacity-70"
          >
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>