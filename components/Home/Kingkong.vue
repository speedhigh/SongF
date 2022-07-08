<template>
  <div class="mt-[3.75rem] w-[1400px] h-[8.75rem] mx-auto flex items-center">
    <!-- 金刚区kk -->
    <div class="grid grid-cols-5 gap-x-[1.88rem] gap-y-5">
      <div
        v-for="item in kingkongList"
        :key="item.id"
        class="w-[11.5rem] h-[3.75rem] flex items-center justify-center space-x-2.5 cursor-pointer hover:(transition transform scale-105)"
        @click="$nuxt.$router.push(item.path)"
      >
        <img :src="item.img" :alt="item.title" width="48" height="48"  class="w-12 h-12 flex-shrink-0">
        <div class="space-y-1">
          <h3>{{ item.title }}</h3>
          <p class="text-gray-500">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <!-- 活动专区banner -->
    <div class="ml-auto w-80 h-full flex-shrink-0 rounded-md cursor-pointer hover:opacity-90">
      <img src="~/assets/images/home/banner-active.webp" alt="banner" width="320" height="140" class="w-80 h-full">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kingkongList: [
        { id: '1', title: '在线医生', text: '知名专家在线就诊', img: require('/assets/images/home/kk-doctor.png'), path: '/doctor' },
        { id: '2', title: '药品商城', text: '正品保障直邮到家', img: require('~/assets/images/home/kk-shop.png'), path: '/shop' },
        { id: '3', title: '保健品', text: '滋养身体关爱健康', img: require('~/assets/images/home/kk-health.png'), path: '/shop' },
        { id: '4', title: '赴日体检', text: '根据症状推荐套餐', img: require('~/assets/images/home/kk-pe.png'), path: '/shop' },
        { id: '5', title: '医疗器械', text: '多种款式助力健康', img: require('~/assets/images/home/kk-instrument.png'), path: '/shop' },
        { id: '6', title: '老年介护', text: '满足老年日常需求', img: require('~/assets/images/home/kk-agedcare.png'), path: '/shop' },
        { id: '7', title: '签证办理', text: '绿色通道办理更快', img: require('~/assets/images/home/kk-visa.png'), path: '/visa' },
        { id: '8', title: '身元保证', text: '日本身元保证资质', img: require('~/assets/images/home/kk-guarantee.png'), path: '/guarantee' },
        { id: '9', title: '最新资讯', text: '解读全球最新资讯', img: require('~/assets/images/home/kk-info.png'), path: '/info' },
      ]
    }
  }
}
</script>

<style>

</style>