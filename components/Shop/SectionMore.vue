<template>
  <section class="space-y-[30px]">
    <div class="flex items-center space-x-3.5">
      <img src="~/assets/images/shop/icon-f.png" alt="更多推荐产品" width="27" height="24">
      <h2>更多推荐产品</h2>
    </div>
    <div class="grid grid-cols-5 gap-x-10 gap-y-[1.88rem]">
      <div v-for="i in 10" :key="i">
        <CardProduct />
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