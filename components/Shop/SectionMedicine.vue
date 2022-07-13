<template>
  <section class="space-y-[30px]">
    <div class="flex items-center space-x-3.5">
      <img src="~/assets/images/shop/icon-b.png" alt="药品商城" width="22" height="27">
      <h2>药品商城</h2>
    </div>
    <div class="grid grid-cols-4 grid-rows-2 h-[380px] gap-x-6 gap-y-5">
      <div class="row-span-2 w-full h-full rounded-md cursor-pointer hover:opacity-80">
        <img src="https://api.lorem.space/image/furniture?w=332&h=380" alt="药品" width="100%" height="380" class="rounded-md">
      </div>
      <div v-for="i in 6" :key="i" class="w-full h-full rounded-md shadow-md border border-gray-50 px-5 py-4">
        <h3 class="text-2xl">国内药品专区</h3>
        <div class="mt-4 px-4 flex space-x-[50px]">
          <img src="https://api.lorem.space/image/furniture?w=96&h=96" alt="药品1" width="96" height="96" class="rounded shadow-md cursor-pointer hover:(transition transform scale-105) active:opacity-70">
          <img src="https://api.lorem.space/image/furniture?w=96&h=96" alt="药品2" width="96" height="96" class="rounded shadow-md cursor-pointer hover:(transition transform scale-105) active:opacity-70">
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