<template>
  <section>
    <!-- 1`title -->
    <div class="flex items-end">
      <h2>在线医生</h2>
      <p 
        class="ml-auto cursor-pointer text-gray-500 hover:(text-gray-900 transform scale-105) active:opacity-70"
        @click="$nuxt.$router.push('/doctor')"
      >
        查看更多>>
      </p>
    </div>
    <!-- 2`clazz -->
    <div class="mt-[30px] flex space-x-[3.75rem]">
      <!-- 按科室 -->
      <div class="w-full">
        <p class="text-gray-600 text-lg">按科室：</p>
        <div class="mt-5 grid grid-cols-6 gap-x-3.5 gap-y-5">
          <button 
            v-for="i in 11" 
            :key="i" 
            class="w-[6.25rem] h-9 shadow rounded-md text-gray-600 text-sm hover:(bg-primary text-white shadow-md shadow-primary/50)"
          >
            xxxxx
          </button>
          <button 
            class="w-[6.25rem] h-9 text-gray-600 text-sm hover:(text-primary transform scale-105) active:opacity-70"
            @click="$nuxt.$router.push('/doctor')"
          >
            查看更多>>
          </button>
        </div>
      </div>
      <!-- 按疾病 -->
      <div class="w-full">
        <p class="text-gray-600 text-lg">按疾病：</p>
        <div class="mt-5 grid grid-cols-6 gap-x-3.5 gap-y-5">
          <button 
            v-for="i in 11" 
            :key="i" 
            class="w-[6.25rem] h-9 shadow rounded-md text-gray-600 text-sm hover:(bg-primary text-white shadow-md shadow-primary/50)"
          >
            xxxxx
          </button>
          <button 
            class="w-[6.25rem] h-9 text-gray-600 text-sm hover:(text-primary transform scale-105) active:opacity-70"
            @click="$nuxt.$router.push('/doctor')"
          >
            查看更多>>
          </button>
        </div>
      </div>
    </div>
    <!-- 3`doctor -->
    <div class="mt-[1.88rem] flex justify-between space-x-7">
      <div v-for="i in 3" :key="i">
        <CardDoctor />
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