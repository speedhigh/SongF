<template>
  <section class="space-y-[30px]">
    <div class="flex items-center space-x-3.5">
      <img src="~/assets/images/shop/icon-a.png" alt="热销产品" width="20" height="27">
      <h2>热销产品</h2>
    </div>
    <div class="w-full h-[340px] shadow-md rounded-md border border-gray-50 px-7 pt-4 pb-8">
      <el-tabs v-model="active">
        <el-tab-pane 
          v-for="item in hotOptions"
          :key="item.id"
          :label="item.label"
          class="px-5 pt-5"
        >
          <div class="flex space-x-10 cursor-pointer">
            <div v-for="i in 7" :key="i" class="w-[150px] hover:(transition transform scale-105) active:opacity-70">
              <img src="https://api.lorem.space/image/watch?w=150&h=150" alt="热销产品" width="150" height="150" class="rounded-md shadow-md">
              <p class="mt-5 text-center text-lg line-2">武田药品工业 甲亢治疗剂 100锭</p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      hotOptions: [
        { id: '1', label: '药品类' },
        { id: '2', label: '保健品' },
        { id: '3', label: '体检类' },
        { id: '4', label: '医用器械' },
        { id: '5', label: '老年介护' }
      ]
    }
  }
}
</script>

<style>

</style>