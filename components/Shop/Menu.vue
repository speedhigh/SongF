<template>
  <div class="mt-10 w-[1400px] mx-auto flex space-x-6">
    <div 
      class="w-full h-[200px] rounded-md shadow-md cursor-pointer hover:(shadow-lg shadow-red-300/40 transition transform scale-105) active:opacity-70"
      @click="$nuxt.$router.push('/shop/list?type=medicine')"
    >
      <img src="~/assets/images/shop/shop-a.webp" alt="药品商城" width="100%" height="380" class="rounded-md">
    </div>
    <div 
      class="w-full h-[200px] rounded-md shadow-md cursor-pointer hover:(shadow-lg shadow-green-300/40 transition transform scale-105) active:opacity-70"
      @click="$nuxt.$router.push('/shop/list?type=health')"
    >
      <img src="~/assets/images/shop/shop-b.webp" alt="保健品" width="100%" height="380" class="rounded-md">
    </div>
    <div 
      class="w-full h-[200px] rounded-md shadow-md cursor-pointer hover:(shadow-lg shadow-orange-300/40 transition transform scale-105) active:opacity-70"
      @click="$nuxt.$router.push('/shop/list?type=PE')"
    >
      <img src="~/assets/images/shop/shop-c.webp" alt="赴日医检" width="100%" height="380" class="rounded-md">
    </div>
    <div 
      class="w-full h-[200px] rounded-md shadow-md cursor-pointer hover:(shadow-lg shadow-blue-300/40 transition transform scale-105) active:opacity-70"
      @click="$nuxt.$router.push('/shop/list?type=devices')"
    >
      <img src="~/assets/images/shop/shop-d.webp" alt="医用器械" width="100%" height="380" class="rounded-md">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>