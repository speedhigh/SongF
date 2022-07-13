<template>
  <section>
    <!-- 1`title -->
    <h2>更多推荐产品</h2>
    <!-- 2`product -->
    <div class="mt-[30px] grid grid-cols-5 gap-x-10 gap-y-[1.88rem]">
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