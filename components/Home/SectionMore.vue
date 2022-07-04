<template>
  <section>
    <!-- 1`title -->
    <h2>更多推荐产品</h2>
    <!-- 2`product -->
    <div class="mt-[30px] grid grid-cols-5 gap-x-10 gap-y-[1.88rem]">
      <div
        v-for="i in 10" :key="i"
        class="w-full h-[370px] rounded-md shadow-md border border-gray-50 cursor-pointer hover:opacity-80"
      >
        <img src="https://api.lorem.space/image/furniture?w=248&h=248" alt="product" width="248" height="248" class="rounded-t-md">
        <div class="py-4 px-5">
          <p class="text-lg line-2 leading-6 h-11">Nichiban老头温感消炎镇痛膏药（156枚）</p>
          <p class="mt-4 text-primary font-bold text-xl">￥<span class="ml-2 text-[1.75rem]">36.80</span></p>
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