<template>
  <section>
    <!-- 1`title -->
    <div class="flex items-end">
      <h2>最新资讯</h2>
      <p 
        class="ml-auto cursor-pointer text-gray-500 hover:(text-gray-900 transition transform scale-105) active:opacity-70"
        @click="$nuxt.$router.push('/info')"
      >
        查看更多>>
      </p>
    </div>
    <!-- 2`list -->
    <div 
      v-for="i in 3" :key="i"
      class="mt-[30px] flex space-x-[30px] cursor-pointer hover:(transition transform scale-105) active:opacity-70"
    >
      <img src="https://api.lorem.space/image/fashion?w=280&h=150" alt="info" width="280" height="150" class="flex-shrink-0 rounded-md">
      <div class="flex-grow w-full">
        <h3 class="line-1 text-[1.38rem]">吃过多热性食材易夏季感冒！中医教您分对感冒对症下药</h3>
        <div class="mt-5 h-6 px-2.5 bg-primary text-white text-xs rounded text-center leading-6 inline-block">诊疗技术</div>
        <div class="mt-[1.38rem] h-12 text-base text-gray-600 line-2 leading-[1.63rem]">
          夏天虽然天气热，但感冒的人也不算少数，从中医观点来看，感冒并非都是因为受寒所引起的，极大可能就是因为夏天暑气、湿气特别多，加上如果这时吃太多热性食物，可能让身体带更多的湿气，就容易导致「夏日感冒」。
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