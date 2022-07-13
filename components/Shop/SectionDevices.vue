<template>
  <section class="space-y-[30px]">
    <div class="flex items-center space-x-3.5">
      <img src="~/assets/images/shop/icon-e.png" alt="医疗器材" width="20" height="27">
      <h2>医疗器材</h2>
    </div>
    <div class="grid grid-cols-4 h-[380px] gap-x-6">
      <div class="w-full h-full rounded-md cursor-pointer hover:opacity-80">
        <img src="https://api.lorem.space/image/furniture?w=332&h=380" alt="药品" width="100%" height="380" class="rounded-md">
      </div>
      <div class="col-span-3 w-full h-full rounded-md shadow-md border border-gray-50">
        <el-carousel 
          trigger="click" 
          height="380px" 
          :interval="5000"
          class="rounded-md"
        >
          <el-carousel-item 
            v-for="(item, index) in healthList" 
            :key="index"
          >
            <div class="p-6 flex justify-center space-x-6">
              <div v-for="card in item" :key="card.id" class="shadow-md rounded-md cursor-pointer hover:(transition transform scale-105 shadow-xl) active:opacity-70">
                <img :src="card.img" :alt="card.title" width="230" height="230" class="rounded-t-md">
                <div class="h-[4.5rem] px-3.5 pt-3 pb-3.5">
                  <p class="line-1">{{ card.title }}</p>
                  <p class="mt-1 text-primary font-bold text-xl">￥<span class="ml-1.5">150.00</span></p>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      healthList: [
        [
          { id: '1', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '2', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '3', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '4', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
        ],
        [
          { id: '5', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '6', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '7', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '8', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
        ],
        [
          { id: '9', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '10', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '11', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
          { id: '12', title: '提升肝功能健康食品', img: 'https://api.lorem.space/image/furniture?w=230&h=230' },
        ],
      ]
    }
  }
}
</script>

<style>

</style>