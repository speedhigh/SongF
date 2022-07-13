<template>
  <div>
    <!-- banner -->
    <div class="w-full h-[330px] relative">
      <img src="~/assets/images/visa/banner.webp" alt="banner" width="1920" height="330" class="absolute w-full h-[330px]">
      <div class="relative inset-0 w-full h-full text-center text-white py-14">
        <h1 class="text-[2.5rem] font-bold text-shadow-lg shadow-[#137F96]">「赴日签证」</h1>
        <h3 class="mt-7 text-shadow-lg shadow-[#137F96]">签证不用亲自前往，在家等签收</h3>
        <div class="mt-7 w-[45rem] h-[3.75rem] mx-auto rounded-md shadow-lg flex items-center bg-[rgba(255,255,255,0.6)]">
          <div class="flex-grow w-full h-full px-6">
            <input 
              type="text" 
              placeholder="搜索医生、症状或其他关键词" 
              class="w-full h-full text-sm bg-transparent text-gray-900 placeholder-gray-600"
            >
          </div>
          <button
            aria-label="Right Align" 
            class="flex-shrink-0 ml-auto w-[5.63rem] h-full rounded-md bg-white text-[#2CB7D5] hover:opacity-90 active:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <div class="mt-5 w-[45rem] mx-auto flex items-center">
          <p>热门搜索：</p>
          <p v-for="item in hotSearchList" :key="item.id" class="ml-2 cursor-pointer hover:underline">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" />
    <!-- content -->
    <div class="w-[1400px] mx-auto">
      <!-- 筛选 -->
      <el-collapse v-model="activeNames">
        <el-collapse-item title="按类别" name="1">
          <div class="flex items-center flex-wrap">
            <button 
              v-for="(item, index) in type" 
              :key="index" 
              class="h-6 mr-5 my-1 hover:text-primary" 
              :class="{'bg-orange-100 text-primary px-2 rounded-md': typeActive === index}"
              @click="typeActive = index"
            >
              {{ item }}
            </button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="按时间" name="2">
          <div class="flex items-center flex-wrap">
            <button 
              v-for="(item, index) in date" 
              :key="index" 
              class="h-6 mr-5 mb-1 hover:text-primary" 
              :class="{'bg-orange-100 text-primary px-2 rounded-md': dateActive === index}"
              @click="dateActive = index"
            >
              {{ item }}
            </button>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- 列表 -->
      <div class="py-[30px] grid grid-cols-3 gap-x-7 gap-y-6">
        <div v-for="i in 6" :key="i">
          <div class="w-full h-[302px] rounded-md shadow-md border border-gray-50 pt-7 px-5 pb-5 relative">
            <button class="absolute top-0 right-0 px-5 h-[1.88rem] rounded-tr-md rounded-bl-2xl bg-primary text-center text-white text-lg">
              推荐
            </button>
            <p class="text-xl">短期旅居签证</p>
            <p class="mt-2 text-base">3个月单次</p>
            <div class="mt-4 flex space-x-3.5">
              <div v-for="i in 3" :key="i" class="text-primary bg-orange-100 px-2.5 h-[1.63rem] leading-[1.63rem] text-xs rounded-md">拒签全退</div>
            </div>
            <div class="mt-4 text-base line-2 h-11 leading-6 pr-1">有效期限90天，适合短期居住或旅游，签证期间可入境一次，预计8个工作日办理完成</div>
            <p class="mt-4 text-base">
              <span class="text-gray-500">好评</span> 4.5
              <span class="ml-5 text-gray-500">销量</span> 22
            </p>
            <div class="mt-4 flex items-center">
              <p class="text-[1.75rem] font-bold text-primary">￥156210</p>
              <button 
                class="ml-auto w-[7.5rem] h-9 border border-primary shadow rounded-3xl text-base text-primary hover:(bg-primary text-white shadow-md shadow-primary/50)"
                @click="$nuxt.$router.push('/visa/detail/' + i)"
              >
                查看详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: [
        { title: '首页', path: '/' },
        { title: '签证办理', path: '' },
      ],
      hotSearchList: [
        { id: '1', title: '医疗签证' },
        { id: '2', title: '旅游签证' },
        { id: '3', title: '居住签证' }
      ],
      type:['全部', '医疗居留签证', '个人旅游签证', '商务签证', '探亲访友签证'],
      typeActive: 0,
      date: ['全部', '3个月单次', '3-5年多次'],
      dateActive: 0,
      activeNames: ['1', '2']
    }
  }
}
</script>